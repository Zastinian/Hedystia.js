const StickerManager = require("./StickerManager");
/**
 * Represents a sticker manager for a specific guild.
 * @class
 * @extends StickerManager
 */
class GuildStickerManager extends StickerManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} - An array of objects from the cache that belong to the current guild.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildStickerManager;
