const GuildScheduledEventUsersManager = require("./GuildScheduledEventUsersManager");
const ScheduledEventManager = require("./ScheduledEventManager");
/* It's a ScheduledEventManager that only returns events for a specific guild */
class GuildScheduledEventManager extends ScheduledEventManager {
  /**
   * It creates a new instance of the GuildScheduledEventUsersManager class.
   * @param guildId - The ID of the guild the event is in
   * @param client - The client that the manager is being created for.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
    this.users = new GuildScheduledEventUsersManager(null, this.guildId, this.client);
  }

  /**
   * It returns the cache, but only the cache that has the same guildId as the current guild
   * @returns The cache is being filtered by the guildId.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildScheduledEventManager;
