const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const BaseAction = require("./BaseAction");
class MessageDeleteBulk extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const channel = this.client.channels._add(packet.channel_id);
    this.client.emit(
      "messageDeleteBulk",
      new RaidenCol(packet.ids?.map((o) => [o, channel.messages._add(o, packet.guild_id, packet.channel_id, {cache: false})]))
    );
    for (let deleted of packet.ids) {
      const cachedMessage = channel.messages.cache.get(deleted);
      if (cachedMessage) channel.messages.cache.delete(deleted);
    }
    return;
  }
}

module.exports = MessageDeleteBulk;
