"use strict";

const User = require("../Structure/User");
const LimitedMap = require("../Util/LimitedMap");
const Requester = require("../Util/Requester");

class UserManager {
  constructor(client, limit) {
    this.cache = new LimitedMap(limit);
    this.client = client;
  }

  async fetch(id) {
    if (this.cache.has(id)) return this.cache.get(id);
    const data = await Requester.create(
      this.client,
      `/users/${id}`,
      "GET",
      true
    );
    return new User(this.client, data);
  }
}

module.exports = UserManager;
