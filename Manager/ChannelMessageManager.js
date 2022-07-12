"use strict";

const LimitedMap = require("../Util/LimitedMap");

class ChannelMessageManager {
  constructor(client, limit) {
    this.cache = new LimitedMap(limit);
    this.client = client;
  }
}

module.exports = ChannelMessageManager;
