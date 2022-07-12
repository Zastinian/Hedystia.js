"use strict";

const LimitedMap = require("../Util/LimitedMap");

class RoleManager {
  constructor(client, limit) {
    this.cache = new LimitedMap(limit);
    this.client = client;
  }
}

module.exports = RoleManager;
