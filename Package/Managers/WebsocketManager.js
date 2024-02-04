const WebsocketError = require("../Errors/WebsocketError");
const {Opcodes, WebsocketReadyState} = require("../Util/Constants");
const ActionsManager = require("./ActionsManager");
const WebSocket = require("ws");
/**
 * Represents a WebSocket manager that extends the WebSocket class.
 * @class
 * @extends WebSocket
 * @param {Client} client - The client object.
 */
class WebsocketManager extends WebSocket {
  /**
   * Constructs a new instance of the WebSocketClient class.
   * @constructor
   * @param {WebSocket} client - The WebSocket client to use.
   */
  constructor(client) {
    super(client.websocketURL);
    Object.defineProperty(this, "client", {value: client});
    this.status = null;
    this.interval = null;
    this.isHeartbeatAcked = null;
    this.lastHeartbeatAck = null;
    this.handleOpen();
  }

  /**
   * Establishes a connection to the WebSocket server.
   * If the connection is not open, it will retry after a timeout.
   * Retrieves the URL, shards, and session start limit from the bot gateway API.
   * If the URL or session start limit is not available, or the remaining session start limit is less than 1,
   * it logs an error message and exits the process.
   * Sends an Identify opcode to the server with the client's token, intents, presence, and properties.
   * Logs the WebSocket information.
   * @returns None
   */
  async connect() {
    if (this.readyState !== WebsocketReadyState.Open) {
      this.client.debug(`[Websocket]: Websocket isn't ready. Remaking Websocket connection`);
      return this._handleNewInstance();
    }
    const {url, shards, session_start_limit} = (await this.client.api.get(`${this.client.root}/gateway/bot`)) || {};
    if (!url || (session_start_limit?.remaining ?? 1) < 1) {
      this.client.debug("[Websocket]: Unable to get bot gateway info, or exceeded daily login limit");
      return process.exit();
    }
    const debug = `[Websocket Info]:\nURL: ${url}\nShards: ${shards}\nRemaining: ${session_start_limit?.remaining}/${session_start_limit?.total}`;
    this.send({
      op: Opcodes.Identify,
      d: {
        token: this.client.token,
        intents: this.client.intents.toString(),
        presence: this.client.presence,
        properties: {
          $os: process.platform,
          $browser: "Hedystia",
          $device: "Hedystia",
        },
      },
    });

    this.client.debug(debug);
  }

  /**
   * Handles the connection of the websocket.
   * If the websocket is closed, it logs a debug message and returns.
   * Otherwise, it listens for incoming messages and creates a new instance of ActionsManager
   * to handle the received data.
   * It also listens for the "close" event and calls the handleClose method.
   * @returns None
   */
  handleConnect() {
    if (this.readyState === this.CLOSED) {
      this.client.debug("[Websocket]: Websocket has been closed due to unknown reasons");
      return;
    }
    this.on("message", (data) => new ActionsManager(JSON.parse(data), this.client));
    this.on("close", (data) => this.handleClose(data));
  }

  /**
   * Handles the closing of the resource and returns the result of the error handling.
   * @param {Error} err - The error object to handle.
   * @returns {null} - Returns null if the error handling is successful.
   */
  handleClose(err) {
    this.status = "CLOSED";
    return this.handleError(err) ?? null;
  }

  /**
   * Handles the "open" event of the WebSocket connection.
   * If the connection is successfully opened, it logs a debug message and calls the handleConnect() function.
   * @returns {void}
   */
  handleOpen() {
    this.on("open", () => {
      const msg = this.reconnected
        ? `[Websocket]: Successfully reconnected to Discord Gateway. Now resuming missed events`
        : `[Websocket]: Connected to Discord Gateway`;
      this.client.debug(msg);
      this.handleConnect();
    });
  }

  /**
   * Sets the status to "RECONNECTING".
   * Removes all event listeners.
   * Sets a timeout to close the previous WebSocket connection and create a new one.
   * If the previous connection is not closed, it will be forcefully closed.
   * If the WebSocket is already closed, it will log a message.
   * Creates a new WebSocket connection to the resume gateway URL.
   * Sets the close sequence and marks the WebSocket as reconnected.
   * @returns {void}
   */
  _handleNewInstance() {
    this.status = "RECONNECTING";
    this.removeAllListeners();
    setTimeout(() => {
      this.client.debug(`[Websocket]: Closing the previous WebSocket connection then making a new one`);
      if (this.readyState !== this.CLOSED) {
        this.destroy(4000);
        this.client.debug(`[Websocket]: Successfully closed previous WebSocket connection`);
      }
      if (this.readyState === this.CLOSED) this.client.debug(`[Websocket]: Websocket has been already closed. So this should be easy`);
      this.client.debug(`[Websocket]: Now connecting to resume gateway url: ${this.client.resumeGatewayURL}`);
      this.client.ws = new WebsocketManager(this.client, this.client.resumeGatewayURL);
      this.client.closeSequence = this.client.seq;
      this.client.ws.reconnected = true;
    }, 5_000).unref();
  }

  /**
   * Handles the resumption of a WebSocket connection.
   * If no session ID is found, it will re-identify and establish a new connection.
   * If a session ID is found, it will attempt to resume the connection using the session ID.
   * @returns {void}
   */
  handleResume() {
    if (!this.client.sessionId) {
      this.client.debug(`[Websocket]: No session ID found, cannot resume events. Re-identifying.`);
      return this.connect();
    }

    this.client.debug(`[Websocket]: Attempting to resume connection with session ID: ${this.client.sessionId}`);

    this.send({
      op: Opcodes.Resume,
      d: {
        token: this.client.token,
        session_id: this.client.sessionId,
        seq: this.client.seq,
      },
    });
  }

  /**
   * Handles the reconnection process for the WebSocket connection.
   * If there is no resume gateway URL, it will re-identify and connect again.
   * If the status is not "CLOSED" and reconnect is enabled, it will initiate a reconnect.
   * It will clear the heartbeat interval if it exists.
   * @returns {void}
   */
  handleReconnect() {
    if (!this.client.resumeGatewayURL) {
      this.client.debug(`[Websocket]: Tried to reconnect but there's no resume gateway url found. Re-identifying`);
      return this.connect();
    }
    if (this.status !== "CLOSED" && this.reconnect) {
      this.client.debug(`[Websocket]: Received a request for a Reconnect. Reconnecting`);
      this.client.debug(`[Websocket]: Making a close timeout of 5s for a clean reconnect`);
    }
    if (this.interval && !this.interval?._destroyed) {
      this.client.debug(`[Heartbeat]: Clearing the heartbeat interval`);
      clearInterval(this.interval);
    }
    return this._handleNewInstance();
  }

  /**
   * Destroys the current instance of the object.
   * @param {closeCode} closeCode - The code to use when closing the instance.
   * @returns {Promise} - A promise that resolves when the instance is successfully destroyed.
   */
  destroy(closeCode) {
    this.status = "CLOSING";
    return this.close(closeCode, "destroy");
  }

  /**
   * Handles errors that occur during websocket communication.
   * @param {number} error - The error code.
   * @returns {void}
   * @throws {WebsocketError} - Throws a WebsocketError with the corresponding error message and code.
   */
  async handleError(error) {
    switch (error) {
      case 4000:
        throw new WebsocketError({
          message: "Unknown error",
          code: 4000,
        });
      case 4001:
        throw new WebsocketError({
          message: "Opcode unknown",
          code: 4001,
        });
      case 4002:
        throw new WebsocketError({
          message: "Decoding error",
          code: 4002,
        });
      case 4003:
        return new WebsocketError({
          message: "Not authenticated",
          code: 4003,
        });
      case 4004:
        throw new WebsocketError({
          message: "Authentication failure",
          code: 4004,
        });
      case 4005:
        throw new WebsocketError({
          message: "Already authenticated",
          code: 4005,
        });
      case 4006:
        throw new WebsocketError({
          message: "Invalid sequence",
          code: 4006,
        });
      case 4008:
        throw new WebsocketError({
          message: "Limited rate",
          code: 4008,
        });
      case 4009:
        throw new WebsocketError({
          message: "The session has ended",
          code: 4009,
        });
      case 4010:
        throw new WebsocketError({
          message: "Invalid Shards",
          code: 4010,
        });
      case 4011:
        throw new WebsocketError({
          message: "Need for shards",
          code: 4011,
        });
      case 4012:
        throw new WebsocketError({
          message: "Invalid API version",
          code: 4012,
        });
      case 4013:
        throw new WebsocketError({
          message: "Invalid Intents",
          code: 4013,
        });
      case 4014:
        throw new WebsocketError({
          message: "Intents not allowed",
          code: 4014,
        });
      default:
        this.client.emit("debug", `[Websocket]: Disconnected due to unknown error`);
        this.handleReconnect();
        break;
    }
  }

  /**
   * Sends a payload over the websocket connection.
   * @param {any} payload - The payload to send.
   * @returns {Promise<void>} - A promise that resolves when the payload has been sent.
   */
  send(payload) {
    payload = WebsocketManager.transformPayload(payload);
    if (!payload) return;
    return super.send(JSON.stringify(payload));
  }

  /**
   * Transforms a payload object by converting the "op" property to its corresponding opcode value.
   * @param {object} payload - The payload object to transform.
   * @returns {object | null} - The transformed payload object, or null if the "op" property is missing.
   */
  static transformPayload(payload) {
    if (!payload.op) return null;
    return {
      op: typeof payload.op === "string" ? Opcodes[payload.op] : payload.op,
      d: payload.d,
    };
  }
}

module.exports = WebsocketManager;
