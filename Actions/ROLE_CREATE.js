const BaseAction = require("./BaseAction");
class RoleCreate extends BaseAction {
  constructor(data, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    return this.client.emit(
      "RolCreado",
      this.client.roles._add(packet.role, packet.guild_id)
    );
  }
}

module.exports = RoleCreate;
