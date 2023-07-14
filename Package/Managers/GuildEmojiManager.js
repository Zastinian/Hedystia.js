const EmojiManager = require("./EmojiManager");
/**
 * Represents a manager for guild emojis.
 * @class
 * @extends EmojiManager
 */
class GuildEmojiManager extends EmojiManager {
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
   * Adds emojis to the guild's emoji collection.
   * @param {Array} emojis - The emojis to add.
   * @param {Object} [options] - Additional options for adding emojis.
   * @param {boolean} [options.cache=true] - Whether to cache the added emojis.
   * @param {boolean} [options.force=false] - Whether to force the addition of emojis.
   * @returns {Promise} A promise that resolves when the emojis are added.
   */
  _add(emojis, options = {cache: true, force: false}) {
    return super._add(emojis, this.guildId, options);
  }

  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} An array of objects from the cache that belong to the current guild.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildEmojiManager;
