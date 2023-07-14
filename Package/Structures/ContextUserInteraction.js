const ContextMenuInteraction = require("./ContextMenuInteraction");
/**
 * Represents a user interaction with a context menu.
 * @extends ContextMenuInteraction
 * @constructor
 * @param {Object} [data] - The data associated with the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance that received the interaction.
 */
class ContextUserInteraction extends ContextMenuInteraction {
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

module.exports = ContextUserInteraction;
