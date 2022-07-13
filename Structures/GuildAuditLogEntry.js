const { GuildAuditLogEntryActionTypes } = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const GuildAuditLogChanges = require("./GuildAuditLogChanges");
class GuildAuditLogEntry extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.targetId = data.target_id;
    this.changes = data.changes?.map(
      (o) => new GuildAuditLogChanges(o, this.guildId, this.client)
    );
    this.user = this.client.users._add(data.user_id) ?? null;
    this.id = data.id ?? null;
    this.createdAt = this.id ? Snowflake.deconstruct(this.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.actionType =
      (typeof data.action_type === "number"
        ? GuildAuditLogEntryActionTypes[data.action_type]
        : DataTransfer.action_type) ?? null;
    this.options = data.options
      ? {
          channelId: data.options.channel_id ?? null,
          count: data.options.count ?? null,
          deleteMemberDays: data.options.delete_member_days ?? null,
          id: data.options.id ?? null,
          membersRemoved: data.options.members_removed ?? null,
          messageId: data.options.message_id ?? null,
          roleName: data.options.role_name ?? null,
          type: data.options.type ?? null,
        }
      : null;
    this.reason = data.reason ?? null;
  }
}

module.exports = GuildAuditLogEntry;
