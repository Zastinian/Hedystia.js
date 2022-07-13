const EmojiManager = require("./EmojiManager");
class GuildEmojiManager extends EmojiManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  _add(emojis, options = { cache: true, force: false }) {
    return super._add(emojis, this.guildId, options);
  }

  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildEmojiManager;
