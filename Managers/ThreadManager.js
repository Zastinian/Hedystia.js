const BaseThreadManager = require("./BaseThreadManager");
class ThreadManager extends BaseThreadManager {
  constructor(channelId, guildId, client) {
    super(client);
    this.channelId = channelId;
    this.guildId = guildId;
  }

  get cache() {
    return super.cache.filter((o) => o.parentId === this.channelId);
  }
}

module.exports = ThreadManager;
