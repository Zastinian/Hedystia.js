const BaseAction = require("./BaseAction");
class GuildDelete extends BaseAction {
    constructor(data = {}, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        if(packet.unavailable) return this.client.emit("guildUnavailable", this.client.guilds._add(packet))
        this.client.emit("guildDelete", this.client.guilds._add(packet))
        return this.client.guilds.cache.delete(packet.id)
    }
}

module.exports = GuildDelete