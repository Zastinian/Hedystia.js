const ApplicationCommandInteraction = require("./ApplicationCommandInteraction");
/**
 * Represents a context menu interaction, extending the base ApplicationCommandInteraction class.
 * @class
 * @extends ApplicationCommandInteraction
 * @param {Object} [data] - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance associated with the interaction.
 * @property {string|null} targetId - The ID of the target of the interaction, if available.
 * @property {Object|null} resolved - The resolved data of the interaction, if available.
 */
class ContextMenuInteraction extends ApplicationCommandInteraction {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);

    this.targetId = data.data?.target_id ?? null;
    this.resolved = data.data?.resolved ?? null;
  }
}

module.exports = ContextMenuInteraction;
