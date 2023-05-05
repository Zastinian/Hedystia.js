const BaseAction = require("./BaseAction");
class GuildAuditLogEntryCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds.cache.get(packet.guild_id);
    if (!guild) return;
    return this.client.emit("guildAuditLogEntryCreate", packet);
  }
}

module.exports = GuildAuditLogEntryCreate;
