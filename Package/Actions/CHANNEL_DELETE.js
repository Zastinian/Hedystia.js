const BaseAction = require("./BaseAction");
class ChannelDelete extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    if ([10, 11, 12].includes(packet.type)) return;
    const channel = this.client.channels._add(packet, packet.guild_id);
    this.client.emit("channelDelete", channel);
    return this.client.channels.cache.delete(packet.id);
  }
}

module.exports = ChannelDelete;
