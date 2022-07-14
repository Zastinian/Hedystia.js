const BaseAction = require("./BaseAction");
class GuildUpdate extends BaseAction {
    constructor(data = {}, client) {
        super(client)
        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        if(packet.unavailable) return;
        const oldGuild = this.client.guilds._add(packet)
        return this.client.emit("guildUpdate", oldGuild, this.client.guilds._add(packet, { cache: true, force: true }))
    }
}

module.exports = GuildUpdate