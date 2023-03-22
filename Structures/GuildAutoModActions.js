const {GuildAutoModActionTypes} = require("../Util/Constants");
const Base = require("../Base/base");

/**
 * Represents an action taken by the guild automod system.
 * @class
 * @extends {Base}
 */
class GuildAutoModActions extends Base {
  /**
   * @param {Object} data - The data for the action.
   * @param {import("../Client/Client")} client - The client.
   */
  constructor(data = {}, client) {
    super(client);
    /**
     * The type of action taken by the automod system.
     * @type {?string}
     */
    this.type = (typeof data.type === "number" ? GuildAutoModActionTypes[data.type] : data.type) ?? null;
    /**
     * The metadata for the action, if any.
     * @type {?Object}
     * @property {?string} channelId - The ID of the channel the action was taken in.
     * @property {?number} durationSeconds - The duration of the action, in seconds.
     */
    this.metadata = data.metadata
      ? {
          channelId: data.metadata.channel_id,
          durationSeconds: data.metadata.duration_seconds,
        }
      : null;
  }
}

module.exports = GuildAutoModActions;
