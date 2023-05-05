const Base = require("../Base/base");
const Activity = require("./Activity");
/**
 * It's a class that represents a user's presence
 * @class
 * @extends Base
 */
class Presence extends Base {
  /**
   * This function is a constructor for the class Presence.
   * @param [data] - The data that was received from the API.
   * @param client - DiscordClient
   */
  constructor(data = {}, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.user = this.client.users._add(data.user);
    this.status = data.status ?? null;
    this.activities = data.activities?.map((o) => new Activity(o, this.client));
    this.clientStatus = data.client_status
      ? {
          desktop: data.client_status.desktop,
          mobile: data.client_status.mobile,
          web: data.client_status.web,
        }
      : null;
  }
}

module.exports = Presence;
