const {ApplicationCommandTypes} = require("../Util/Constants");
const CommandInteractionOptionResolver = require("./CommandInteractionOptionResolver");
const Interaction = require("./Interaction");
/**
 * Represents an application command interaction.
 * @class
 * @extends Interaction
 * @param {Object} [data] - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance.
 * @property {string|null} commandId - The ID of the command associated with the interaction.
 * @property {string|null} commandName - The name of the command associated with the interaction.
 * @property {string|null} commandType - The type of the command associated with the interaction.
 * @property {CommandInteractionOptionResolver} options - The resolver for the command interaction options.
 */
class ApplicationCommandInteraction extends Interaction {
  /**
   * Constructs a new instance of the CommandInteraction class.
   * @constructor
   * @param {Object} [data] - The data object containing information about the command interaction.
   * @param {string} guildId - The ID of the guild where the command interaction occurred.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.commandId = data.data?.id ?? null;
    this.commandName = data.data?.name ?? null;
    this.commandType = (typeof data.data?.type === "number" ? ApplicationCommandTypes[data.data.type] : data.data.type) ?? null;
    this.options = new CommandInteractionOptionResolver(data.data, this.guildId, this.channelId, this.client);
  }
}

module.exports = ApplicationCommandInteraction;
