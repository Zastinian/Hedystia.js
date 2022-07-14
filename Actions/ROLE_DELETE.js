const BaseAction = require("./BaseAction");
class RoleDelete extends BaseAction {
    constructor(data, client) {
        super(client)

        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const oldRole = this.client.roles._add(packet.role_id, packet.guild_id)
        this.client.emit("roleDelete", oldRole)
        return this.client.roles.cache.delete(packet.role_id)
    }
}

module.exports = RoleDelete