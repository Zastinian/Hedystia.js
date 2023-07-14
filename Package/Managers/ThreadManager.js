const BaseThreadManager = require("./BaseThreadManager");
/**
 * A class representing a thread manager for a specific channel in a guild.
 * Extends the BaseThreadManager class.
 * @class
 * @extends BaseThreadManager
 */
class ThreadManager extends BaseThreadManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} channelId - The ID of the channel.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(channelId, guildId, client) {
    super(client);
    this.channelId = channelId;
    this.guildId = guildId;
  }

  /**
   * Retrieves the cache items that have a parentId matching the channelId of the current instance.
   * @returns {Array} An array of cache items that have a matching parentId.
   */
  get cache() {
    return super.cache.filter((o) => o.parentId === this.channelId);
  }
}

module.exports = ThreadManager;
