const Base = require("../Base/base");
const {GuildAuditLogEntryActionTypes} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
/**
 * Represents an entry in the audit log.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the audit log entry.
 * @param {Client} client - The client instance.
 * @property {string|null} targetId - The ID of the target of the audit log entry.
 * @property {Array<Object>} changes - An array of objects representing the changes made in the audit log entry.
 * @property {string|null} userId - The ID of the user who performed the action in the audit log entry.
 * @property {string|null} id - The ID of the audit log entry.
 * @property {string|null} actionType - The type of action performed
 */
class AuditLogEntry extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data=] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, client) {
    super(client);
    this.targetId = data.target_id ?? null;
    this.changes =
      data.changes?.map((o) => {
        return {newValue: o.new_value, oldValue: o.old_value, key: o.key};
      }) ?? [];
    this.userId = data.user_id ?? null;
    this.id = data.id ?? null;
    this.actionType = data.action_type ?? null;
    this.options = data.options
      ? {
          applicationId: data.options.application_id,
          autoModerationRuleName: data.options.auto_moderation_rule_name,
          autoModerationRuleTriggerType: data.options.auto_moderation_rule_trigger_type,
          channelId: data.options.channel_id,
          count: data.options.count,
          deleteMemberDays: data.options.delete_member_days,
          id: data.options.id,
          membersRemoved: data.options.members_removed,
          messageId: data.options.messageId,
          roleName: data.options.role_name,
          type: data.options.type,
        }
      : null;
    this.reason = data.reason ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
  }

  /**
   * Checks if the action type of the guild audit log entry is an update action.
   * @returns {boolean} - True if the action type is an update action, false otherwise.
   */
  isUpdate() {
    return GuildAuditLogEntryActionTypes.includes(this.actionType);
  }

  /**
   * Retrieves the executor of the action.
   * @returns The user object representing the executor, or null if not found.
   */
  get executor() {
    return this.client.users.cache.get(this.userId) ?? null;
  }
}

module.exports = AuditLogEntry;
