const BaseAction = require("./BaseAction");
const ScheduledEventManager = require("../Managers/ScheduledEventManager");
class GuildScheduledEventAdd extends BaseAction {
    constructor(data = {}, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const events = new ScheduledEventManager(this.client)
        return this.client.emit("guildScheduledEventAdd", events._add(packet, packet.guild_id))
    }
}


module.exports = GuildScheduledEventAdd