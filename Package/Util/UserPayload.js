const Util = require("./Util");

/**
 * A class representing a user payload.
 * @class
 */
class UserPayload {
  /**
   * Creates a user object based on the given payload.
   * @param {Object} payload - The payload object containing user information.
   * @param {string} payload.username - The username of the user.
   * @param {string} payload.bio - The bio of the user.
   * @param {string} payload.avatar - The avatar image of the user.
   * @param {string} payload.avatarDecorations - The avatar decorations image of the user.
   * @returns {Object} - The created user object.
   */
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
