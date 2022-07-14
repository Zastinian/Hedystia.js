const { Opcodes } = require("../Util/Constants");
const BaseAction = require("./BaseAction");
class GuildCreate extends BaseAction {
    constructor(data, client) {
        super(client)
        this._patch(data)
    }

    _patch(data) {
        const packet = data.d;
        if(packet.unavailable) return this.client.emit("guildUnavailable", this.client.guilds._add(packet));
        this.cacheChannels(packet);
        this.cacheGuilds(packet);
        this.cacheMembers(packet);
        this.cacheStickers(packet);
        this.cacheEmojis(packet);
        this.cacheThreads(packet);
        this.cacheEvents(packet);
        this.cachePresences(packet);
        this.cacheStageInstances(packet);
        this.cacheVoices(packet);
        this.cacheRoles(packet);
        this.requestMembers(packet);
        return this.client.emit("guildCreate", this.client.guilds._add(packet));
    }

    requestMembers(guild) {
        const guildId = guild.id
        return this.client.ws.send({
            op: Opcodes.REQUEST_GUILD_MEMBERS,
            d: {
                guild_id: guildId,
                query: "",
                limit: 0
            }
        })
    }
}

module.exports = GuildCreate