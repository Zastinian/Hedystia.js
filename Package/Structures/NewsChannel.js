const BaseGuildChannel = require("./BaseGuildChannel");
/**
 * Represents a news channel in a guild.
 * @class
 * @extends BaseGuildChannel
 */
class NewsChannel extends BaseGuildChannel {
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

  /**
   * Follows the channel using the specified options.
   * @param {Object} options - The options for following the channel.
   * @returns {Promise} A promise that resolves when the channel is successfully followed.
   */
  async follow(options = {}) {
    return await this.client.channels.follow(this, options);
  }

  /**
   * Crossposts a message to another channel.
   * @param {Message} message - The message to crosspost.
   * @returns {Promise<void>} - A promise that resolves when the crossposting is complete.
   */
  async crosspost(message) {
    return await this.messages?.crosspost(this.id, message);
  }
}

module.exports = NewsChannel;
