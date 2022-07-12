"use strict";

const GuildMember = require("../Structure/GuildMember");
const LimitedMap = require("../Util/LimitedMap");
const Requester = require("../Util/Requester");

class GuildMemberManager {
  constructor(client, guild, limit) {
    this.cache = new LimitedMap(limit);
    this.guild = guild;
    this.client = client;
  }

  async fetch(id) {
    if (this.cache.has(id)) return this.cache.get(id);
    const data = await Requester.create(
      this.client,
      `/guilds/${id}/members/${id}`,
      "GET",
      true
    );

    const member = new GuildMember(this.client, data, data.user, this.guild);
    this.cache.set(member.id, member);
    return member;
  }
}

module.exports = GuildMemberManager;
