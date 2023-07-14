const MessageManager = require("../Managers/MessageManager");
const VoiceBasedChannels = require("./Interface/VoiceBasedChannels");
/**
 * Represents a voice channel in a guild.
 * @class
 * @extends VoiceBasedChannels
 */
class VoiceChannel extends VoiceBasedChannels {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.rateLimitPerUser = data.rate_limit_per_user ?? null;
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
  async send(options = {}) {
    return await this.messages.send(this, options);
  }

  /**
   * Bulk deletes the specified messages with the given reason.
   * @param {Array<Message>} messages - The messages to be deleted.
   * @param {string} reason - The reason for deleting the messages.
   * @returns {Promise<void>} A promise that resolves when the messages are deleted.
   */
  async bulkDelete(messages, reason) {
    return await this.messages.bulkDelete(this, messages, reason);
  }

  /**
   * Sets the NSFW (Not Safe for Work) flag for the current item.
   * @param {boolean} nsfw - The NSFW flag value to set.
   * @param {string} reason - The reason for setting the NSFW flag.
   * @returns {Promise} - A promise that resolves when the NSFW flag is set.
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
   * Sets the user limit for the current channel and provides a reason for the change.
   * @param {number} userLimit - The new user limit for the channel.
   * @param {string} reason - The reason for changing the user limit.
   * @returns {Promise} - A promise that resolves when the user limit is successfully set.
   */
  async setUserLimit(userLimit, reason) {
    return await this.edit({userLimit, reason});
  }

  /**
   * Sets the video quality mode with the given parameters.
   * @param {string} videoQualityMode - The video quality mode to set.
   * @param {string} reason - The reason for setting the video quality mode.
   * @returns {Promise} - A promise that resolves when the video quality mode is set.
   */
  async setVideoQualityMode(videoQualityMode, reason) {
    return await this.edit({videoQualityMode, reason});
  }

  /**
   * Triggers a typing indicator in the channel where this method is called.
   * @returns {Promise<void>} - A promise that resolves when the typing indicator is triggered.
   */
  async triggerTyping() {
    return await this.client.channels.triggerTyping(this);
  }
}

module.exports = VoiceChannel;
