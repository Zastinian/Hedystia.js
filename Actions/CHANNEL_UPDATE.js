const BaseAction = require("./BaseAction");
class ChannelUpdate extends BaseAction {
    constructor(data, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        if([10, 11, 12].includes(packet.type)) return;
        const oldChannel = this.client.channels._add(packet)
        const newChannel = this.client.channels._add(packet, packet.guild_id, { cache: true, force: true })
        return this.client.emit("channelUpdate", oldChannel, newChannel)
    }
}

module.exports = ChannelUpdate