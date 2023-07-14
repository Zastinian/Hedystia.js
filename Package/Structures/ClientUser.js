const {Opcodes, WebsocketReadyState} = require("../Util/Constants");
const Activity = require("./Activity");
const User = require("./User");
/**
 * Represents a client user, extending the base User class.
 * @class
 * @extends User
 */
class ClientUser extends User {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The initial data for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, client) {
    super(data, client);
  }

  /**
   * Sets the avatar for the user.
   * @param {string} avatar - The URL or file path of the new avatar image.
   * @returns {Promise} A promise that resolves when the avatar is successfully set.
   */
  async setAvatar(avatar) {
    return await this.client.users.edit({avatar});
  }

  /**
   * Asynchronously sets the username for the current user.
   * @param {string} username - The new username to set.
   * @returns {Promise} A promise that resolves when the username is successfully set.
   */
  async setUsername(username) {
    return await this.client.users.edit({username});
  }

  /**
   * Sets the avatar decorations for the user.
   * @param {Object} avatarDecorations - The avatar decorations to set.
   * @returns {Promise} A promise that resolves when the avatar decorations are set.
   */
  async setAvatarDecorations(avatarDecorations) {
    return await this.client.users.edit({avatarDecorations});
  }

  /**
   * Sets the presence of the client.
   * @param {Presence} presence - The presence object containing the desired presence information.
   * @returns {void}
   */
  setPresence(presence) {
    if (WebsocketReadyState.Connecting === this.client.ws.readyState)
      return this.client.emit("debug", `[Websocket]: Failed to set presence. WSCode: ${this.client.ws.readyState}`);
    this.client.ws.send({
      op: Opcodes.Presence_Update,
      d: {
        since: Date.now(),
        activities: presence.activities?.map((o) => new Activity(o).toJSON()) ?? [],
        status: presence.status ?? "online",
        afk: presence.afk ?? false,
      },
    });
  }

  /**
   * Sets the status of the user.
   * @param {string} status - The status to set.
   * @returns {void}
   */
  setStatus(status) {
    return this.setPresence({status});
  }

  /**
   * Sets the activities for the presence of the user.
   * @param {Array} activities - An array of activity objects.
   * @returns {void}
   */
  setActivities(activities) {
    return this.setPresence({activities});
  }
}

module.exports = ClientUser;
