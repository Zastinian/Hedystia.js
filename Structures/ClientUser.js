const { Opcodes, WebsocketReadyState } = require("../Util/Constants");
const Activity = require("./Activity");
const User = require("./User");
class ClientUser extends User {
  constructor(data = {}, client) {
    super(data, client);
  }

  async setAvatar(avatar) {
    return await this.client.users.edit({ avatar });
  }

  async setUsername(username) {
    return await this.client.users.edit({ username });
  }

  async setAvatarDecorations(avatarDecorations) {
    return await this.client.users.edit({ avatarDecorations });
  }

  setPresence(presence) {
    if (WebsocketReadyState.CONNECTING === this.client.ws.readyState)
      return this.client.emit(
        "debug",
        `[Websocket]: Failed to set presence. WSCode: ${this.client.ws.readyState}`
      );
    this.client.ws.send({
      op: Opcodes.PRESENCE_UPDATE,
      d: {
        since: Date.now(),
        activities:
          presence.activities?.map((o) => new Activity(o).toJSON()) ?? [],
        status: presence.status ?? "online",
        afk: presence.afk ?? false,
      },
    });
  }

  setStatus(status) {
    return this.setPresence({ status });
  }

  setActivities(activities) {
    return this.setPresence({ activities });
  }
}

module.exports = ClientUser;
