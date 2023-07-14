const Base = require("../Base/base");
const Activity = require("./Activity");
/**
 * Represents the presence of a user.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing presence information.
 * @param {Client} client - The client instance.
 * @property {boolean} partial - Whether the presence is partial or not.
 * @property {User} user - The user associated with the presence.
 * @property {string|null} status - The status of the user.
 * @property {Activity[]} activities - The activities of the user.
 * @property {Object|null} clientStatus - The client status of the user.
 */
class Presence extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
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
