const ContextMenuInteraction = require("./ContextMenuInteraction");
/**
 * Represents a context menu interaction for a message in a specific context.
 * @class
 * @extends ContextMenuInteraction
 */
class ContextMessageInteraction extends ContextMenuInteraction {
  /**
   * Constructs a new instance of the class.
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = ContextMessageInteraction;
