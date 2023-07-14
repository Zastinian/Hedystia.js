const ApplicationCommandInteraction = require("./ApplicationCommandInteraction");
/**
 * Represents a command interaction within a guild.
 * @class
 * @extends ApplicationCommandInteraction
 * @constructor
 * @param {Object} [data] - The data for the command interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client that received the interaction.
 */
class CommandInteraction extends ApplicationCommandInteraction {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = CommandInteraction;
