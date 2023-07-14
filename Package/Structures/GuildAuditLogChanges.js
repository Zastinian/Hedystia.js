const Base = require("../Base/base");
/**
 * Represents changes made to a guild audit log.
 * @class
 * @extends Base
 **/
class GuildAuditLogChanges extends Base {
  /**
   * Constructs a new `GuildAuditLogChanges` object.
   * @constructor
   * @param {Object} [data] - The audit log changes data.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   **/
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.new = data.new_value ?? null;
    this.old = data.old_value ?? null;
    this.key = data.key ?? null;
  }
}

module.exports = GuildAuditLogChanges;
