const WebsocketError = require("../Errors/WebsocketError");
const {Opcodes} = require("../Util/Constants");
const ActionsManager = require("./ActionsManager");
const WebSocket = require("ws");
const {EventEmitter} = require("events");

class WebsocketManager extends EventEmitter {
  constructor(client) {
    super();
    this.client = client;
    this.heartbeatInterval = null;
    this.lastHeartbeatReceivedAt = null;
    this.lastHeartbeatSentAt = null;
  }

  async connect() {
    const gatewayInfo = await this.client.api.get(`${this.client.root}/gateway/bot`);
    if (gatewayInfo.session_start_limit?.total <= 0)
      return this.client.emit(
        "debug",
        `[Websocket]: Login limit exceeded, please wait a few minutes. ${Date.now() + gatewayInfo.session_start_limit?.reset_after}`
      );
    this.ws = new WebSocket(this.client.websocketURL);
    this.ws.on("open", () => {
      this.client.emit("debug", `Shard ${this.client.shardId} connected to Discord`);
      this.sendIdentifyPayload();
    });
    this.ws.on("message", (data) => {
      this.handleWebSocketMessage(data);
    });
    this.ws.on("close", (code, reason) => {
      this._handleError(code);
      this.client.emit("debug", `Shard ${this.client.shardId} disconnected from Discord with code ${code}: ${reason}`);
      this.stopHeartbeat();
      this.connect();
    });
    const gatewayMessage = `[Websocket]: Info:\nURL: ${gatewayInfo.url}\nShards: ${gatewayInfo.shards}\nLogin Remaining: ${gatewayInfo.session_start_limit?.remaining}/1000\nReset: ${gatewayInfo.session_start_limit?.reset_after}`;
    this.client.emit("debug", gatewayMessage);
    this._handleConnect();
  }

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
        break;
    }
  }

  send(payload) {
    payload = WebsocketManager.transformPayload(payload);
    if (!payload) return;
    return this.ws.send(JSON.stringify(payload));
  }

  _handleConnect() {
    this.ws.on("message", (data) => new ActionsManager(JSON.parse(data), this.client));
  }

  sendIdentifyPayload() {
    const payload = {
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
        shard: [this.client.shardId, this.client.maxShards],
      },
    };
    this.ws.send(JSON.stringify(payload));
  }

  handleWebSocketMessage(data) {
    const message = JSON.parse(data);
    switch (message.op) {
      case 0:
        this.emit(message.t, message.d);
        break;
      case 10:
        this.startHeartbeat(message.d.heartbeat_interval);
        break;
      case 1:
        this.lastHeartbeatReceivedAt = Date.now();
        break;
      default:
        break;
    }
  }

  startHeartbeat(interval) {
    this.heartbeatInterval = setInterval(() => {
      const payload = {
        op: Opcodes.Heartbeat,
        d: null,
      };
      this.ws.send(JSON.stringify(payload));
      this.lastHeartbeatSentAt = Date.now();
    }, interval);
  }

  stopHeartbeat() {
    clearInterval(this.heartbeatInterval);
  }

  async ping() {
    if (!this.lastHeartbeatReceivedAt) {
      throw new Error("No ping received yet.");
    }
    const latency = this.lastHeartbeatReceivedAt - this.lastHeartbeatSentAt;
    return latency;
  }

  static transformPayload(payload) {
    if (!payload.op) return null;
    return {
      op: typeof payload.op === "string" ? Opcodes[payload.op] : payload.op,
      d: payload.d,
    };
  }
}

module.exports = WebsocketManager;
