const VoiceStateManager = require("../Managers/VoiceStateManager");
const BaseAction = require("./BaseAction");
class VoiceStateUpdate extends BaseAction {
    constructor(data = {}, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const manager = new VoiceStateManager(this.client)
        const oldState = manager._add(packet, packet.guild_id)
        const newState = manager._add(packet, packet.guild_id, { cache: true, force: true })
        this.client.emit("voiceStateUpdate", oldState, newState)
        if(packet.channel_id === null) return manager.cache.delete(packet.session_id)
    }
}

module.exports = VoiceStateUpdate