const Util = require("./Util");

/**
 * It takes in a payload object, and returns a new object with the same keys, but with the values of
the keys being the values of the keys in the payload object, or undefined if the key doesn't exist
in the payload object
 * @module UserPayload
 */
class UserPayload {
  static async create(payload = {}) {
    return {
      username: payload.username ?? undefined,
      bio: payload.bio ?? undefined,
      avatar: payload.avatar ? await Util.generateDataURI(payload.avatar) : undefined,
      avatar_decorations: payload.avatarDecorations ? await Util.generateDataURI(payload.avatarDecorations) : undefined,
    };
  }
}

module.exports = UserPayload;
