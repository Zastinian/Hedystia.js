const WebsocketError = require("../Errors/WebsocketError");
const { Opcodes } = require("../Util/Constants");
const ActionsManager = require("./ActionsManager");
const WebSocket = require("ws");
class WebsocketManager extends WebSocket {
  constructor(client) {
    super(client.websocketURL);
    Object.defineProperty(this, "client", { value: client });
  }

  async connect() {
    if (this.readyState === this.CLOSED)
      return this.on("close", (err) => this._handleError(err));
    const gatewayInfo = await this.client.api.get(
      `${this.client.root}/gateway/bot`
    );
    if (gatewayInfo.session_start_limit?.total <= 0)
      return this.client.emit(
        "debug",
        `[Websocket]: Límite de inicio de sesión superado, por favor espere unos ${
          Date.now() + gatewayInfo.session_start_limit?.reset_after
        }`
      );
    this.send({
      op: Opcodes.IDENTIFY,
      d: {
        token: this.client.token,
        intents: this.client.intents.toString(),
        presence: this.client.presence,
        properties: {
          $os: process.platform,
          $browser: "windows",
          $device: "windows",
        },
      },
    });
    setInterval(() => {
      this.close();
      this.send({
        op: Opcodes.IDENTIFY,
        d: {
          token: this.client.token,
          intents: this.client.intents.toString(),
          presence: this.client.presence,
          properties: {
            $os: process.platform,
            $browser: "windows",
            $device: "windows",
          },
        },
      });
    }, 7200000);
    const gatewayMessage = `[Websocket]: Info:\nURL: ${gatewayInfo.url}\nShards: ${gatewayInfo.shards}\nLogin Remaining: ${gatewayInfo.session_start_limit?.remaining}/1000\nReset: ${gatewayInfo.session_start_limit?.reset_after}`;
    this.client.emit("debug", gatewayMessage);
    return this._handleConnect();
  }

  _handleConnect() {
    this.on(
      "message",
      (data) => new ActionsManager(JSON.parse(data), this.client)
    );
  }

  async _handleError(error) {
    switch (error) {
      case 4000:
        throw new WebsocketError({
          message: "Error desconocido",
          code: 4000,
        });
      case 4001:
        throw new WebsocketError({
          message: "Opcode desconocido",
          code: 4001,
        });
      case 4002:
        throw new WebsocketError({
          message: "Error de decodificación",
          code: 4002,
        });
      case 4003:
        return new WebsocketError({
          message: "No autentificado",
          code: 4003,
        });
      case 4004:
        throw new WebsocketError({
          message: "Fallo de autentificación",
          code: 4004,
        });
      case 4005:
        throw new WebsocketError({
          message: "Ya está autentificado",
          code: 4005,
        });
      case 4006:
        throw new WebsocketError({
          message: "Secuencia inválida",
          code: 4006,
        });
      case 4008:
        throw new WebsocketError({
          message: "Tarifa limitada",
          code: 4008,
        });
      case 4009:
        throw new WebsocketError({
          message: "La sesión ha finalizado",
          code: 4009,
        });
      case 4010:
        throw new WebsocketError({
          message: "Shards invalidos",
          code: 4010,
        });
      case 4011:
        throw new WebsocketError({
          message: "Necesidad de shards",
          code: 4011,
        });
      case 4012:
        throw new WebsocketError({
          message: "Versión de la API no válida",
          code: 4012,
        });
      case 4013:
        throw new WebsocketError({
          message: "Intents invalido(s)",
          code: 4013,
        });
      case 4014:
        throw new WebsocketError({
          message: "Intents no permitido(s)",
          code: 4014,
        });
      default:
        this.client.emit(
          "debug",
          `[Websocket]: Desconectado debido a un error desconocido`
        );
        return console.error(error);
    }
  }

  send(payload) {
    payload = WebsocketManager.transformPayload(payload);
    if (!payload) return;
    return super.send(JSON.stringify(payload));
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
