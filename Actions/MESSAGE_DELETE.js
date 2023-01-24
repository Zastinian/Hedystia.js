const BaseAction = require("./BaseAction");
class MessageDelete extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const channel = this.client.channels._add(packet.channel_id);
    if (!channel) return;
    if (channel.isText()) {
      this.client.emit("messageDelete", channel.messages._add(packet.id, packet.guild_id, packet.channel_id));
      return channel.messages.cache.delete(packet.id);
    }
  }
}

module.exports = MessageDelete;
