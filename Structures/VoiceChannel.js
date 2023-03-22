const MessageManager = require("../Managers/MessageManager");
const VoiceBasedChannels = require("./Interface/VoiceBasedChannels");
/* It's a class that extends another class, and it has a constructor that takes in a data object, a
guildId, and a client */
class VoiceChannel extends VoiceBasedChannels {
  /**
   * The above function is a constructor function that takes in data, guildId, and client as parameters
   * and sets the rateLimitPerUser, lastMessageId, and nsfw properties to the data.rate_limit_per_user,
   * data.last_message_id, and data.nsfw properties respectively.
   * @param [data] - The data that was passed to the constructor.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that instantiated the channel.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.rateLimitPerUser = data.rate_limit_per_user ?? null;
    this.lastMessageId = data.last_message_id ?? null;
    this.nsfw = data.nsfw ?? null;
  }

  /**
   * It returns a new MessageManager object, which is a class that manages messages
   * @returns A new instance of the MessageManager class.
   */
  get messages() {
    return new MessageManager(this.guildId, this.id, this.client);
  }

  /**
   * It sends a message to the channel
   * @param [options] - Object
   * @returns The return value is the result of the send() method.
   */
  async send(options = {}) {
    return await this.messages.send(this, options);
  }

  /**
   * It deletes messages in bulk
   * @param messages - The messages to delete.
   * @param reason - The reason for the bulk delete.
   * @returns The return value of the function.
   */
  async bulkDelete(messages, reason) {
    return await this.messages.bulkDelete(this, messages, reason);
  }

  /**
   * It edits the channel's nsfw property
   * @param nsfw - Boolean - Whether the channel is nsfw or not.
   * @param reason - The reason for the edit.
   * @returns The edited channel.
   */
  async setNsfw(nsfw, reason) {
    return await this.edit({nsfw, reason});
  }

  /**
   * It edits the ratelimit of a command
   * @param ratelimit - The ratelimit to set.
   * @param reason - The reason for the ratelimit.
   * @returns The return value of the edit function.
   */
  async setRateLimitPerUser(ratelimit, reason) {
    return await this.edit({ratelimit, reason});
  }

  /**
   * It sets the user limit of a channel
   * @param userLimit - The new user limit of the channel.
   * @param reason - The reason for the edit.
   * @returns The userLimit and reason are being returned.
   */
  async setUserLimit(userLimit, reason) {
    return await this.edit({userLimit, reason});
  }

  /**
   * This function sets the video quality mode to the given value, and returns a promise that resolves
   * to the new value of the video quality mode.
   * @param videoQualityMode - The video quality mode to set.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  async setVideoQualityMode(videoQualityMode, reason) {
    return await this.edit({videoQualityMode, reason});
  }

  /**
   * It triggers typing in the channel
   * @returns The return value of the function.
   */
  async triggerTyping() {
    return await this.client.channels.triggerTyping(this);
  }
}

module.exports = VoiceChannel;
