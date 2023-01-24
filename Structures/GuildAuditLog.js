const {RaidenCol} = require("../Util/@Collections/RaidenCol")
const Base = require("../Base/base")
const GuildAuditLogEntry = require("./GuildAuditLogEntry")
const GuildAutoMod = require("./GuildAutoMod")
const Webhook = require("./Webhook")
class GuildAuditLog extends Base {
  constructor(data = {}, guildId, client) {
    super(client)
    this.guildId = guildId
    this.entries = new RaidenCol(
      data.audit_log_entries?.map((o) => [o.id, new GuildAuditLogEntry(o, this.guildId, this.client)])
    )
    this.autoModerationRules = new RaidenCol(
      data.auto_moderation_rules?.map((o) => [o.id, new GuildAutoMod(o, this.guildId, this.client)])
    )
    this.users = new RaidenCol(data.users?.map((o) => [o.id, this.client.users._add(o)]))
    this.guildScheduledEvents = new RaidenCol(
      data.guild_scheduled_events?.map((o) => [o.id, this.guild?.events._add(o)])
    )
    this.integrations = new RaidenCol(data.integrations?.map((o) => [o.id, this.guild?.integrations._add(o)]))
    this.threads = new RaidenCol(data.threads?.map((o) => [o.id, this.client.channels._add(o, this.guildId)]))
    this.webhooks = new RaidenCol(
      data.webhooks?.map((o) => [o.id, new Webhook(o, this.guildId, this.client)])
    )
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null
  }
}

module.exports = GuildAuditLog
