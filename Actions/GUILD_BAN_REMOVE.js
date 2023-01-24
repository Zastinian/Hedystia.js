const BaseAction = require("./BaseAction");

class GuildBanRemove extends BaseAction {
  constructor(data, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    this.client.emit("guildBanRemove", guild?.bans._add(packet.user, packet.guild_id));
    return guild?.bans.cache.delete(packet.user.id);
  }
}

module.exports = GuildBanRemove;
