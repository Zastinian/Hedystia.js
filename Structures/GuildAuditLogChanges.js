const Base = require("../Base/base");
class GuildAuditLogChanges extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.new = data.new_value ?? null;
    this.old = data.old_value ?? null;
    this.key = data.key ?? null;
  }
}

module.exports = GuildAuditLogChanges;
