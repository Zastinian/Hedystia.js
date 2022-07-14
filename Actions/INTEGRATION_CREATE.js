const BaseAction = require("./BaseAction");
class IntegrationCreate extends BaseAction {
    constructor(data = {}, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const guild = this.client.guilds._add(packet.guild_id)
        return this.client.emit("integrationCreate", guild.integrations._add(packet))
    }
}

module.exports = IntegrationCreate