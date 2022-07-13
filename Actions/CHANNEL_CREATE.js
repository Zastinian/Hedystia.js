const BaseAction = require("./BaseAction");
class ChannelCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    if ([10, 11, 12].includes(packet.type)) return;
    return this.client.emit(
      "CanalCreado",
      this.client.channels._add(packet, packet.guild_id)
    );
  }
}

module.exports = ChannelCreate;
