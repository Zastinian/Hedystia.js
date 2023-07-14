const GuildScheduledEventUsersManager = require("./GuildScheduledEventUsersManager");
const ScheduledEventManager = require("./ScheduledEventManager");
/**
 * Represents a scheduled event manager for a specific guild.
 * @class
 * @extends ScheduledEventManager
 */
class GuildScheduledEventManager extends ScheduledEventManager {
  /**
   * Constructs a new instance of the GuildScheduledEvent class.
   * @constructor
   * @param {string} guildId - The ID of the guild associated with the scheduled event.
   * @param {Client} client - The Discord client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
    this.users = new GuildScheduledEventUsersManager(null, this.guildId, this.client);
  }

  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} An array of objects from the cache that belong to the current guild.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildScheduledEventManager;
