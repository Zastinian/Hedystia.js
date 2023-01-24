const {InviteTargetTypes} = require("./Constants")

class InvitePayload {
  static create(payload = {}) {
    return {
      max_age: payload.maxAge ?? 86400,
      max_uses: payload.maxUses ?? undefined,
      temporary: payload.temporary ?? undefined,
      target_type:
        typeof payload.targetType === "string" ? InviteTargetTypes[payload.targetType] : payload.targetType,
      target_user_id:
        typeof payload.targetUser === "string"
          ? payload.targetUser
          : payload.targetUser?.user?.id ?? payload.targetUser?.id ?? undefined,
      target_application_id:
        typeof payload.targetApplication === "string"
          ? payload.targetApplication
          : payload.targetApplication?.id ?? undefined,
    }
  }
}

module.exports = InvitePayload
