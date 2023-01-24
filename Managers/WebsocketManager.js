const WebsocketError = require("../Errors/WebsocketError");
const {Opcodes} = require("../Util/Constants");
const ActionsManager = require("./ActionsManager");
const WebSocket = require("ws");
/* It's a class that extends the WebSocket class and handles the connection to the Discord API */
class WebsocketManager extends WebSocket {
  /**
   * It defines a property called client on the object that is being created
   * @param client - The client that the WebSocket is for.
   */
  constructor(client) {
    super(client.websocketURL);
    Object.defineProperty(this, "client", {value: client});
  }

  /* It's connecting to the Discord API. */
  async connect() {
    if (this.readyState === this.CLOSED) return this.on("close", (err) => this._handleError(err));
    const gatewayInfo = await this.client.api.get(`${this.client.root}/gateway/bot`);
    if (gatewayInfo.session_start_limit?.total <= 0)
      return this.client.emit(
        "debug",
        `[Websocket]: Login limit exceeded, please wait a few minutes. ${Date.now() + gatewayInfo.session_start_limit?.reset_after}`
      );
    this.send({
      op: Opcodes.Identify,
      d: {
        token: this.client.token,
        intents: this.client.intents.toString(),
        presence: this.client.presence,
        properties: {
          $os: process.platform,
          $browser: "Esmile",
          $device: "Esmile",
        },
      },
    });
    setInterval(() => {
      this.send(
        JSON.stringify({
          op: 1,
          d: this.sequence,
        })
      );
    }, 300000);
    const gatewayMessage = `[Websocket]: Info:\nURL: ${gatewayInfo.url}\nShards: ${gatewayInfo.shards}\nLogin Remaining: ${gatewayInfo.session_start_limit?.remaining}/1000\nReset: ${gatewayInfo.session_start_limit?.reset_after}`;
    this.client.emit("debug", gatewayMessage);
    return this._handleConnect();
  }

  /**
   * _handleConnect() is a function that listens for a message from the client, and when it receives
   * one, it parses the message and sends it to the ActionsManager class.
   */
  _handleConnect() {
    this.on("message", (data) => new ActionsManager(JSON.parse(data), this.client));
  }

  /**
   * It handles errors
   * @param error - The error code
   * @returns The error code.
   */
  async _handleError(error) {
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
        return console.error(error);
    }
  }

  /**
   * If the payload is not null, then it will be stringified and sent to the server.
   * @param payload - The payload to be sent to the server.
   * @returns The return value of the super.send() method.
   */
  send(payload) {
    payload = WebsocketManager.transformPayload(payload);
    if (!payload) return;
    return super.send(JSON.stringify(payload));
  }

  /**
   * If the payload doesn't have an opcode, return null. Otherwise, return an object with the opcode
   * and the data
   * @param payload - The payload that was received from the WebSocket.
   * @returns an object with the key op and d.
   */
  static transformPayload(payload) {
    if (!payload.op) return null;
    return {
      op: typeof payload.op === "string" ? Opcodes[payload.op] : payload.op,
      d: payload.d,
    };
  }

  /**
   * It sends a message to the server with the opcode 9, which is a ping
   */
  ping() {
    this.ping = Date.now();
    this.ws.send(JSON.stringify({op: 9}));
  }
}

module.exports = WebsocketManager;
