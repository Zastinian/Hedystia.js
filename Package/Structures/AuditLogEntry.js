const Base = require("../Base/base");
const {GuildAuditLogEntryActionTypes} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
/**
 * The `AuditLogEntry` class is a subclass of `Base` that represents an entry in an audit log, with
properties and methods for accessing and manipulating the data. 
 * @class
 * @extends Base
 */
class AuditLogEntry extends Base {
  /**
   * This is a constructor function that initializes properties based on the provided data object.
   * @param [data] - An object containing the data for the constructor. It can have the following
   * properties:
   * @param client - The `client` parameter is an instance of a client object that is used to interact
   * with the Discord API. It is typically passed in when creating an instance of this class.
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
   * The function checks if the action type is included in the GuildAuditLogEntryActionTypes array.
   * @returns a boolean value.
   */
  isUpdate() {
    return GuildAuditLogEntryActionTypes.includes(this.actionType);
  }

  /**
   * The function returns the executor user object based on the provided user ID, or null if the user
   * is not found.
   * @returns the executor, which is the user associated with the provided userId. If the user is found
   * in the cache, it will be returned. Otherwise, it will return null.
   */
  get executor() {
    return this.client.users.cache.get(this.userId) ?? null;
  }
}

module.exports = AuditLogEntry;
