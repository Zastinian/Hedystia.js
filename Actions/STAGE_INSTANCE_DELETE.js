const StageInstanceManager = require("../Managers/StageInstanceManager");
const BaseAction = require("./BaseAction");
class StageInstanceDelete extends BaseAction {
    constructor(data = {}, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const stageInstance = new StageInstanceManager(this.client)
        this.client.emit("stageInstanceDelete", stageInstance._add(packet, packet.guild_id))
        return stageInstance.cache.delete(packet.id)
    }
}

module.exports = StageInstanceDelete