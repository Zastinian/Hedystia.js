const ApplicationCommandManager = require("./ApplicationCommandManager");
/**
 * Represents a manager for guild-specific application commands.
 * @class
 * @extends ApplicationCommandManager
 */
class GuildApplicationCommandManager extends ApplicationCommandManager {
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
}

module.exports = GuildApplicationCommandManager;
