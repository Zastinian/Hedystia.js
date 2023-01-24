const BaseAction = require("./BaseAction");
class GuildMembersChunk extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    this.cacheUsers(packet);
    return this.client.emit("guildMembersChunk", packet);
  }
}

module.exports = GuildMembersChunk;
