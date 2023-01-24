const EmojiManager = require("./EmojiManager");
/* `GuildEmojiManager` is a subclass of `EmojiManager` that only returns emojis from a specific guild */
class GuildEmojiManager extends EmojiManager {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * `_add` is a function that adds emojis to a guild
   * @param emojis - The emojis to add. This can be a single emoji, or an array of emojis.
   * @param [options] - {cache: true, force: false}
   * @returns The return value of the super._add method.
   */
  _add(emojis, options = {cache: true, force: false}) {
    return super._add(emojis, this.guildId, options);
  }

  /**
   * It returns the cache, but only the cache that has the same guildId as the current guild
   * @returns The cache is being filtered by the guildId.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildEmojiManager;
