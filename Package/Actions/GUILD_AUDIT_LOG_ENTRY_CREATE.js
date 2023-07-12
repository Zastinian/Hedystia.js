const AuditLogEntry = require("../Structures/AuditLogEntry");
const BaseAction = require("./BaseAction");
class GuildAuditLogEntryCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const entry = new AuditLogEntry(packet, this.client);
    return this.client.emit("guildAuditLogEntryCreate", entry);
  }
}

module.exports = GuildAuditLogEntryCreate;
