const MessageManager = require("../../Managers/MessageManager");
const Channel = require("../Channel");
/* It's a class that extends the Channel class, and it adds a few more properties and methods to the
Channel class.
 */
class TextBasedChannels extends Channel {
  /**
   * Constructs a new instance of the Channel class.
   * @constructor
   * @param {Object} [data] - The data object containing the channel information.
   * @param {string} guildId - The ID of the guild that the channel belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.rateLimitPerUser = data.rate_limit_per_user ?? null;
    this.lastPinnedAt = data.last_pin_timestamp ? new Date(data.last_pin_timestamp) : null;
    this.lastPinnedTimestamp = this.lastPinnedAt?.getTime() ?? null;
    this.defaultThreadRateLimitPerUser = data.default_thread_rate_limit_per_user ?? null;
    this.lastMessageId = data.last_message_id ?? null;
    this.nsfw = data.nsfw ?? null;
  }

  /**
   * Get the message manager for this channel.
   * @returns {MessageManager} The message manager object for this channel.
   */
  get messages() {
    return new MessageManager(this.guildId, this.id, this.client);
  }

  /**
   * Sends a message using the specified options.
   * @param {object} options - The options for sending the message.
   * @returns {Promise} A promise that resolves when the message is sent.
   */
  async send(options) {
    return await this.messages.send(this.id, options);
  }

  /**
   * Bulk deletes the specified messages from the channel.
   * @param {Array<Message>} messages - The messages to delete.
   * @param {string} reason - The reason for deleting the messages.
   * @returns {Promise<void>} A promise that resolves when the messages are deleted.
   */
  async bulkDelete(messages, reason) {
    return await this.messages.bulkDelete(this.id, messages, reason);
  }

  /**
   * Sets the NSFW (Not Safe for Work) flag for the current item.
   * @param {boolean} nsfw - The NSFW flag value to set.
   * @param {string} reason - The reason for setting the NSFW flag.
   * @returns {Promise} - A promise that resolves when the NSFW flag is successfully set.
   */
  async setNsfw(nsfw, reason) {
    return await this.edit({nsfw, reason});
  }

  /**
   * Sets the rate limit per user for a specific action.
   * @param {number} ratelimit - The new rate limit value to set.
   * @param {string} reason - The reason for setting the rate limit.
   * @returns {Promise} - A promise that resolves when the rate limit is successfully set.
   */
  async setRateLimitPerUser(ratelimit, reason) {
    return await this.edit({ratelimit, reason});
  }

  /**
   * Triggers a typing indicator in the channel where this method is called.
   * @returns {Promise<void>} - A promise that resolves when the typing indicator is triggered.
   */
  async triggerTyping() {
    return await this.client.channels.triggerTyping(this);
  }
}

module.exports = TextBasedChannels;
