const MessageComponentInteraction = require("./MessageComponentInteraction");
/**
 * Represents a button interaction, extending the MessageComponentInteraction class.
 * @class
 * @extends MessageComponentInteraction
 * @param {Object} [data] - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance associated with the interaction.
 */
class ButtonInteraction extends MessageComponentInteraction {
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

module.exports = ButtonInteraction;
