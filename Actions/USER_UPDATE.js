const BaseAction = require("./BaseAction");
class UserUpdate extends BaseAction {
  constructor(data, websocket, client) {
    super(websocket, client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const oldUser = this.client.users._add(packet);
    const newUser = this.client.users._add(packet, {
      cache: true,
      force: true,
    });
    return this.client.emit("UsuarioActualizado", oldUser, newUser);
  }
}

module.exports = UserUpdate;
