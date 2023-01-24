const Util = require("./Util")

class UserPayload {
  static async create(payload = {}) {
    return {
      username: payload.username ?? undefined,
      bio: payload.bio ?? undefined,
      avatar: payload.avatar ? await Util.generateDataURI(payload.avatar) : undefined,
      avatar_decorations: payload.avatarDecorations
        ? await Util.generateDataURI(payload.avatarDecorations)
        : undefined,
    }
  }
}

module.exports = UserPayload
