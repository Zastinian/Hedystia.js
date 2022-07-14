const BaseAction = require("./BaseAction");
class MessageCreate extends BaseAction {
    constructor(data, client) {
        super(client)

        this._patch(data)
    }

    async _patch(data) {
        const packet = data.d
        if(this.client.partials.includes("DM")) await this.cacheDm(packet.channel_id, packet.guild_id)
        const channel = this.client.channels._add(packet.channel_id)
        this.cacheMembers(packet, packet.guild_id, channel);
        const message = channel.messages?._add(packet, packet.guild_id, packet.channel_id, { cache: true, force: true })
        return this.client.emit("messageCreate", message)
    }

    cacheMembers(members = {}, guildId, channel) {
        if(channel.isDM()) return;
        if(members.member) {
            members.member["id"] = members.author?.id
            const manager = this.client.guilds._add(guildId).members
            manager.cache.clear()
            return manager._add(members.member, guildId, { force: true, cache: true })
        }
    }
}

module.exports = MessageCreate