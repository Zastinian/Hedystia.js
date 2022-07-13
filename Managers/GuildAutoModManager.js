const AutoModManager = require("./AutoModManager");
class GuildAutoModManager extends AutoModManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildAutoModManager;
