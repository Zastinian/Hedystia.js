const BaseAction = require("./BaseAction");
class GuildMemberRemove extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    const oldMember = guild?.members._add(packet.user);
    this.client.emit("MiembroRemovido", oldMember);
    return guild?.members.cache.delete(packet.user?.id ?? packet.id);
  }
}

module.exports = GuildMemberRemove;
