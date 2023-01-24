const BaseAction = require("./BaseAction");
class MessageUpdate extends BaseAction {
  constructor(data, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const channel = this.client.channels._add(packet.channel_id, packet.guild_id);
    const oldMessage = channel.messages?._add(packet);
    const newMessage = channel.messages?._add(packet, packet.guild_id, packet.channel_id, {
      cache: true,
      force: true,
    });
    if (!oldMessage?.equals(newMessage) && oldMessage) {
      return this.client.emit("messageUpdate", oldMessage, newMessage);
    }

    return;
  }
}

module.exports = MessageUpdate;
