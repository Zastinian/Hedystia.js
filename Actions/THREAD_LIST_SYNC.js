const BaseThreadManager = require("../Managers/BaseThreadManager");
const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const BaseAction = require("./BaseAction");
class ThreadListSync extends BaseAction {
    constructor(data = {}, client) {
        super(client)
        
        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const threads = new BaseThreadManager()
        for(let values of packet.channel_ids) {
            const cachedChannel = this.client.channels.cache.get(values.id)
            if(cachedChannel) {
                if(cachedChannel.isThread()) packet.members?.map(o => [o.user_id, cachedChannel.members?._add(o, packet.guild_id, values.id)])
            }
        }
        return this.client.emit("threadListSync", new RaidenCol(packet.threads?.map(o => [o.id, threads._add(o, packet.guild_id)])))
    }
}

module.exports = ThreadListSync