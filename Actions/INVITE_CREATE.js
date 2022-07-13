const BaseAction = require("./BaseAction");
class InviteCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    return this.client.emit(
      "InvitacionCreada",
      guild.invites._add(packet, packet.guild_id)
    );
  }
}

module.exports = InviteCreate;
