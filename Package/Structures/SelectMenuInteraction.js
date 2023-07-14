const MessageComponentInteraction = require("./MessageComponentInteraction");
/**
 * Represents an interaction with a select menu component.
 * @class
 * @extends MessageComponentInteraction
 */
class SelectMenuInteraction extends MessageComponentInteraction {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object for the instance.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.values = data.data?.values ?? [];
  }
}

module.exports = SelectMenuInteraction;
