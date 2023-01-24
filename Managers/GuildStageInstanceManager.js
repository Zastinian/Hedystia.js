const StageInstanceManager = require("./StageInstanceManager");
/* It's a StageInstanceManager that only returns instances that belong to a specific guild */
class GuildStageInstanceManger extends StageInstanceManager {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
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

module.exports = GuildStageInstanceManger;
