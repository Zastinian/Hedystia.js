const BaseAction = require("./BaseAction");
class RoleUpdate extends BaseAction {
  constructor(data, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const oldRole = this.client.roles._add(packet.role, packet.guild_id);
    return this.client.emit(
      "RolActualizado",
      oldRole,
      this.client.roles._add(packet.role, packet.guild_id, {
        cache: true,
        force: true,
      })
    );
  }
}

module.exports = RoleUpdate;
