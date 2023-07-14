const {InviteTargetTypes} = require("./Constants");

/**
 * A utility class for creating invite payloads.
 * @class
 */
class InvitePayload {
  /**
   * Creates an invite object with the given payload.
   * @param {Object} payload - The payload object containing the invite properties.
   * @param {number} [payload.maxAge=86400] - The maximum age of the invite in seconds.
   * @param {number | undefined} [payload.maxUses=undefined] - The maximum number of times the invite can be used.
   * @param {boolean | undefined} [payload.temporary=undefined] - Whether the invite is temporary or not.
   * @param {string | undefined} [payload.targetType=undefined] - The type of target for the invite.
   * @param {string | undefined} [payload.targetUser=undefined] - The ID of the target user for the
   */
  static create(payload = {}) {
    return {
      max_age: payload.maxAge ?? 86400,
      max_uses: payload.maxUses ?? undefined,
      temporary: payload.temporary ?? undefined,
      target_type: typeof payload.targetType === "string" ? InviteTargetTypes[payload.targetType] : payload.targetType,
      target_user_id:
        typeof payload.targetUser === "string" ? payload.targetUser : payload.targetUser?.user?.id ?? payload.targetUser?.id ?? undefined,
      target_application_id: typeof payload.targetApplication === "string" ? payload.targetApplication : payload.targetApplication?.id ?? undefined,
    };
  }
}

module.exports = InvitePayload;
