const StageInstanceManager = require("./StageInstanceManager");
class GuildStageInstanceManger extends StageInstanceManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildStageInstanceManger;
