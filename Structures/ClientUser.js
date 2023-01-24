const {Opcodes, WebsocketReadyState} = require("../Util/Constants");
const Activity = require("./Activity");
const User = require("./User");
/* It's a class that extends the User class and adds some methods to it */
class ClientUser extends User {
  /**
   * It's a constructor function that takes in two parameters, data and client, and sets the data
   * parameter to an empty object if it's not passed in, and sets the client parameter to undefined if
   * it's not passed in.
   * @param [data] - The data that was returned from the API.
   * @param client - The client that instantiated the object. Every Discordie object that
   */
  constructor(data = {}, client) {
    super(data, client);
  }

  /**
   * It sets the avatar of the bot
   * @param avatar - The avatar to set.
   * @returns The user object.
   */
  async setAvatar(avatar) {
    return await this.client.users.edit({avatar});
  }

  /**
   * It sets the username of the bot
   * @param username - The new username for the user.
   * @returns The return value is a promise that resolves to the updated user object.
   */
  async setUsername(username) {
    return await this.client.users.edit({username});
  }

  /**
   * It sets the avatar decorations of the user
   * @param avatarDecorations - A string of the avatar decorations.
   * @returns The user object.
   */
  async setAvatarDecorations(avatarDecorations) {
    return await this.client.users.edit({avatarDecorations});
  }

  /**
   * It sets the presence of the bot
   * @param presence - Presence
   * @returns The presence of the user.
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
   * It sets the status of the bot
   * @param status - The status of the user. Can be one of:
   * @returns The return value of the setPresence method.
   */
  setStatus(status) {
    return this.setPresence({status});
  }

  /**
   * It sets the activities of the client
   * @param activities - An array of objects containing information about what the user is currently
   * doing.
   * @returns The return value is the promise that is returned by the setPresence method.
   */
  setActivities(activities) {
    return this.setPresence({activities});
  }
}

module.exports = ClientUser;
