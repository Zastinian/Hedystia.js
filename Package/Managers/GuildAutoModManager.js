const AutoModManager = require("./AutoModManager");
/* It's a class that extends the `AutoModManager` class, but only returns the cache that matches the
guild ID */
class GuildAutoModManager extends AutoModManager {
  /**
   * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
   * assigns them to the `guildId` and `client` properties of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * `return super.cache.filter((o) => o.guildId === this.guildId)`
   *
   * The `super` keyword is used to access and call functions on an object's parent
   * @returns The cache property is being returned.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildAutoModManager;
