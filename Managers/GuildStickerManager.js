const StickerManager = require("./StickerManager");
class GuildStickerManager extends StickerManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildStickerManager;
