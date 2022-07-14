const PresenceManager = require("../Managers/PresenceManager");
const BaseAction = require("./BaseAction");
class PresenceUpdate extends BaseAction {
    constructor(data = {}, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const presence = new PresenceManager(this.client)
        const oldPresence = presence._add(packet)
        const newPresence = presence._add(packet, { cache: true, force: true })
        return this.client.emit("presenceUpdate", oldPresence, newPresence)
    }
}

module.exports = PresenceUpdate