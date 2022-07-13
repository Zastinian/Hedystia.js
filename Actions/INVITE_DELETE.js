const BaseAction = require("./BaseAction");
class InviteDelete extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    this.client.emit("InvitacionEliminada", guild.invites._add(packet.code));
    return guild.invites.cache.delete(packet.code);
  }
}

module.exports = InviteDelete;
