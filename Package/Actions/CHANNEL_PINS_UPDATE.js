const BaseAction = require("./BaseAction");

class ChannelPinsUpdate extends BaseAction {
  constructor(client, data) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const oldChannel = this.client.channels.cache.get(packet.channel_id);
    const pinTimestamp = packet.last_pin_timestamp ? new Date(packet.last_pin_timestamp) : null;
    Object.assign(oldChannel, {lastPinnedAt: pinTimestamp, lastPinnedTimestamp: pinTimestamp?.getTime() ?? null});
    return this.client.emit("channelPinsUpdate", oldChannel);
  }
}

module.exports = ChannelPinsUpdate;
