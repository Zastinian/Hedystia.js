"use strict";

const WebSocket = require("ws");
const Heartbeater = require("./Heartbeater");
const Parser = require("./Parser");
const Endpoints = require("../../Constant/DiscordEndpoints");

class WebSocketManager {
  constructor(client) {
    this.client = client;
  }

  connect() {
    this.connection = new WebSocket(
      Endpoints.gatewayUrl(this.client.options.apiVersion, "json")
    );
    this.connection.on("message", (message) =>
      Parser.message(this.client, message)
    );

    this.connection.on("close", (code) => {
      if (!this.client.options.autoReconnect) return;
      switch (code) {
        case 1001:
          this.forceReconnect();
          break;
        case 4004:
          this.client.emit(
            "debug",
            "[DEBUG] Recibido 4004 [Token inválido], NO intento de reconexión."
          );
          throw new Error("APIError: Token inválido.");
        case 4007:
          this.client.emit(
            "debug",
            "[DEBUG] Recibido 4007 [Secuencia no válida], intento de reconexión..."
          );
          this.forceReconnect();
          break;
        case 4008:
          this.client.emit(
            "debug",
            "[DEBUG] Recibido 4008 [Rate Limit], intentando reconectar..."
          );
          this.forceReconnect();
          break;
        case 4009:
          this.client.emit(
            "debug",
            "[DEBUG] Recibido 4009 [Tiempo de espera de la sesión], intentando reconectar..."
          );
          this.forceReconnect(false);
          break;
        case 4013:
          this.client.emit(
            "debug",
            "[DEBUG] Recibido 4013 [Invalid Intents], NO intento de reconexión."
          );
          throw new Error("APIError: Intents invalidos.");
        case 4014:
          this.client.emit(
            "debug",
            "[DEBUG] Recibido 4013 [Intents desactuvados], NO intento de reconexión."
          );
          throw new Error("APIError: Intents desactivados.");
        default:
          this.forceReconnect(false);
          break;
      }
    });
  }

  forceReconnect(resume = true) {
    Heartbeater.stop(this.client);
    this.connection?.close(resume ? 4000 : 1000);
    this.client.api.sessionId = resume ? this.client.api.sessionId : null;

    this.client.reconnect();
    this.client.api.should_resume = resume;
  }
}

module.exports = WebSocketManager;
