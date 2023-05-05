const BaseAction = require("./BaseAction");
class GuildBanAdd extends BaseAction {
  constructor(data, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    return this.client.emit("guildBanAdd", guild?.bans._add(packet, packet.guild_id));
  }
}

module.exports = GuildBanAdd;
