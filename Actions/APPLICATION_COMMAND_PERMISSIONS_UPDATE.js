const BaseAction = require("./BaseAction");
class ApplicationCommandPermissionsUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    const newPermissions = guild.commands.permissions._add(packet, packet.guild_id, {
      cache: true,
      force: true,
    });
    return this.client.emit("applicationCommandPermissionsUpdate", newPermissions);
  }
}

module.exports = ApplicationCommandPermissionsUpdate;
