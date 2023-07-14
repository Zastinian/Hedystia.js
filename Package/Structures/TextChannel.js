const BaseGuildChannel = require("./BaseGuildChannel");
/**
 * Represents a text channel in a guild.
 * @class
 * @extends BaseGuildChannel
 * @param {Object} [data] - The data for the text channel.
 * @param {string} guildId - The ID of the guild that the text channel belongs to.
 * @param {Client} client - The client instance.
 */
class TextChannel extends BaseGuildChannel {
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

module.exports = TextChannel;
