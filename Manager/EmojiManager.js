"use strict";

const LimitedMap = require("../Util/LimitedMap");

class EmojiManager {
  constructor(client, limit) {
    this.cache = new LimitedMap(limit);
    this.client = client;
  }
}

module.exports = EmojiManager;
