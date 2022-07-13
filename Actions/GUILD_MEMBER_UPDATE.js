const BaseAction = require("./BaseAction");
class GuildMemberUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    const oldMember = guild?.members._add(packet, packet.guild_id);
    return this.client.emit(
      "MiembroActualizado",
      oldMember,
      guild?.members._add(packet, packet.guild_id, { cache: true, force: true })
    );
  }
}

module.exports = GuildMemberUpdate;
