const StageInstanceManager = require("./StageInstanceManager");
/**
 * A class that extends the StageInstanceManager class and manages stage instances for a specific guild.
 * @class
 * @extends StageInstanceManager
 */
class GuildStageInstanceManger extends StageInstanceManager {
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

module.exports = GuildStageInstanceManger;
