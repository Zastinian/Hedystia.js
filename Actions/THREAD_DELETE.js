const BaseThreadManager = require("../Managers/BaseThreadManager");
const BaseAction = require("./BaseAction");
class ThreadDelete extends BaseAction {
    constructor(data = {}, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const threads = new BaseThreadManager(this.client)
        const thread = threads._add(packet, packet.guild_id)
        this.client.emit("threadDelete", thread)
        this.client.channels.cache.delete(packet.id)
        return threads.cache.delete(packet.id)
    }
}

module.exports = ThreadDelete