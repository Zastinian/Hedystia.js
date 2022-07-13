const GuildScheduledEventUsersManager = require("./GuildScheduledEventUsersManager");
const ScheduledEventManager = require("./ScheduledEventManager");
class GuildScheduledEventManager extends ScheduledEventManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
    this.users = new GuildScheduledEventUsersManager(
      null,
      this.guildId,
      this.client
    );
  }

  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildScheduledEventManager;
