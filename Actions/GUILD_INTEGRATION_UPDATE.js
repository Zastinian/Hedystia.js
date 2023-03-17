const BaseAction = require("./BaseAction");
class GuildIntegrationUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds.cache.get(packet.guild_id);
    if (!guild) return;
    const integration = guild.integrations.cache.get(packet.id);
    if (!integration) return;
    guild.integrations.cache.delete(packet.id);
    guild.integrations.cache.set(packet.id, packet);
    this.client.emit("guildIntegrationUpdate", guild, packet);
  }
}

module.exports = GuildIntegrationUpdate;
