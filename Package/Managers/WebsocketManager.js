const WebsocketError = require("../Errors/WebsocketError");
const {Opcodes, WebsocketReadyState} = require("../Util/Constants");
const ActionsManager = require("./ActionsManager");
const WebSocket = require("ws");
/**
 * The `WebsocketManager` class is a subclass of the `WebSocket` class that handles the setup and
management of a WebSocket connection for a client.
 * @class
 * @extends Base
 */
class WebsocketManager extends WebSocket {
  /**
   * The constructor function initializes a WebSocket connection and sets up event handlers.
   * @param client - The "client" parameter is an object that represents the client or user of the
   * websocket connection. It is passed to the constructor function to establish the websocket
   * connection and perform various operations on it.
   */
  constructor(client) {
    super(client.websocketURL);
    Object.defineProperty(this, "client", {value: client});
    this.status = null;
    this.interval = null;
    this.handleOpen();
  }

  /**
   * This function connects to a WebSocket server and sends an identification message with the
   * necessary information.
   * @returns The function does not explicitly return anything.
   */
  async connect() {
    if (this.readyState !== WebsocketReadyState.Open) {
      setTimeout(() => this.connect(), this.client.restRestRequestTimeout);
      return;
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
   * The function handles the connection by checking if the websocket is closed, setting up event
   * listeners for incoming messages and closing the connection.
   * @returns In the `handleConnect()` function, if the `readyState` of the websocket is `CLOSED`, then
   * the function returns and does not execute the rest of the code. If the `readyState` is not
   * `CLOSED`, then the function sets up event listeners for the "message" and "close" events and calls
   * the `ActionsManager` constructor with the parsed data from the "
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
   * The function handleClose sets the status to "CLOSED", logs an error message, and then calls the
   * handleError function.
   * @param err - The `err` parameter is an error object that represents any error that occurred during
   * the closing process.
   * @returns The handleError function is being returned.
   */
  handleClose(err) {
    this.status = "CLOSED";
    return this.handleError(err) ?? null;
  }

  /**
   * The function handles the "open" event of a WebSocket connection and logs a message indicating
   * whether the connection is a reconnection or a new connection.
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
   * The function `handleResume()` attempts to resume a connection with a session ID in a WebSocket
   * client.
   * @returns the result of the `connect()` function if there is no session ID found. Otherwise, it
   * does not explicitly return anything.
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
   * The `handleReconnect` function is responsible for reconnecting to a WebSocket connection in case
   * of disconnection.
   * @returns In the `handleReconnect()` function, if there is no resume gateway URL found, the
   * function will return the result of calling the `connect()` function.
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
   * The destroy function sets the status to "CLOSING" and then calls the close function with the given
   * closeCode and "destroy" as arguments.
   * @param closeCode - The closeCode parameter is the code indicating the reason for closing the
   * connection. It could be a numeric value or a string representing the reason.
   * @returns The close function is being returned.
   */
  destroy(closeCode) {
    this.status = "CLOSING";
    return this.close(closeCode, "destroy");
  }

  /**
   * The function `handleError` handles different error codes and throws corresponding `WebsocketError`
   * objects, or emits a debug event and initiates a reconnection if the error code is unknown.
   * @param error - The `error` parameter is an error code that is passed to the `handleError`
   * function. It is used to determine the type of error that occurred and handle it accordingly.
   * @returns In the `handleError` function, when the `error` parameter is equal to 4003, a
   * `WebsocketError` object is created with the message "Not authenticated" and the code 4003.
   * However, instead of throwing the error, it is returned.
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
   * The function sends a transformed payload as a JSON string over a WebSocket connection.
   * @param payload - The payload parameter is the data that you want to send over the websocket
   * connection. It can be any type of data, such as a string, object, or array.
   * @returns The return value of the function is the result of calling
   * `super.send(JSON.stringify(payload))`.
   */
  send(payload) {
    payload = WebsocketManager.transformPayload(payload);
    if (!payload) return;
    return super.send(JSON.stringify(payload));
  }

  /**
   * The function `transformPayload` transforms a payload object by converting the `op` property from a
   * string to its corresponding value in the `Opcodes` object.
   * @param payload - The `payload` parameter is an object that contains information to be transformed.
   * It is expected to have two properties:
   * @returns an object with two properties: "op" and "d". The value of "op" is determined based on the
   * type of the "op" property in the input payload. If it is a string, it is converted to the
   * corresponding value from the Opcodes object. If it is not a string, it is used as is. The value of
   * "d" is simply
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
