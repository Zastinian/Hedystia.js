"use strict";

const EventEmitter = require("node:events");

const Heartbeater = require("./ws/Heartbeater");

const WebsocketManager = require("./ws/WebsocketManager");
const ActionManager = require("../Action/ActionManager");
const CacheFactory = require("../Util/CacheFactory");
const Intents = require("../Util/Intents");

class Client extends EventEmitter {
  constructor(options = {}) {
    super();
    this.ready = false;
    this.user = null;
    this.api = {};
    this.options = Object.assign(
      {
        autoReconnect: true,
        disabledEvents: [],
        shardId: 0,
        shardCount: 1,
        apiVersion: 9,
        intents: ["GUILDS"],
        large_threshold: 50,
        properties: {
          $os: process.platform,
          $browser: "windows",
          $device: "windows",
        },
        cache: CacheFactory.default(options.cache),
        failIfNotExists: false,
        allowedMentions: {
          parse: ["users", "roles", "everyone"],
          replied_user: true,
          users: [],
          roles: [],
        },
      },
      options
    );
    this._verifyOptions();
    this.options.intents = Intents.parse(this.options.intents);
    this.createManagers();
  }

  createManagers() {
    this.ws = new WebsocketManager(this);
    this.actions = new ActionManager(this);

    CacheFactory.addToClient(this, this.options.cache);
  }
  login(token = process.env.DISCORD_TOKEN) {
    if (!token) throw new Error("No se proporciona ningún token");

    this.ping = -1;
    this.token = token;
    this.emit(
      "debug",
      "[DEBUG] Se ha llamado al método de inicio de sesión. Preparando la conexión a la pasarela de discord."
    );
    this.ws.connect();
  }
  disconnect() {
    this.ws.connection?.close(1000);
    Heartbeater.stop(this);
    this.api = {};
    this.cleanUp();
  }

  cleanUp() {
    this.ping = 1;
    this.ready = false;
    this.user = null;
    this.guilds.cache.clear();
    this.emojis.cache.clear();
    this.users.cache.clear();
    this.channels.cache.clear();
  }

  reconnect() {
    Heartbeater.stop(this);
    this.cleanUp();
    this.emit("reconectando");
    this.api.should_resume = Boolean(this.api.sessionId);
    this.login(this.token);
  }

  _verifyOptions() {
    if (!Array.isArray(this.options.disabledEvents))
      throw new Error("La opción disabledEvents debe ser un array.");

    if (typeof this.options.properties !== "object")
      throw new Error("La opción de propiedades debe ser un objeto.");
    if (typeof this.options.cache !== "object")
      throw new Error("La opción de caché debe ser un objeto.");

    if (typeof this.options.shardId !== "number")
      throw new Error("La opción shardId debe ser un número.");
    if (typeof this.options.apiVersion !== "number")
      throw new Error("La opción apiVersion debe ser un número.");
    if (typeof this.options.shardCount !== "number")
      throw new Error("La opción shardCount debe ser un número.");
    if (typeof this.options.large_threshold !== "number") {
      throw new Error("La opción large_threshold debe ser un número.");
    }

    if (this.options.shardId < 0)
      throw new Error("La opción shardId debe ser un número positivo.");
    if (this.options.shardCount < 1)
      throw new Error("La opción shardCount debe ser un número positivo.");

    if (this.options.large_threshold < 50) {
      throw new Error(
        "La opción large_threshold debe ser un número entre 50 y 250."
      );
    }
    if (this.options.large_threshold > 250) {
      throw new Error(
        "La opción large_threshold debe ser un número entre 50 y 250."
      );
    }
  }
}

module.exports = Client;
