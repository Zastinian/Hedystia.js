const MessageManager = require("../../Managers/MessageManager");
const Channel = require("../Channel");
/* It's a class that extends the Channel class, and it adds a few more properties and methods to the
Channel class.
 */
class TextBasedChannels extends Channel {
  /**
   * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
   * rateLimitPerUser, lastPinnedAt, lastPinnedTimestamp, lastMessageId, and nsfw properties of the
   * object to the values of the corresponding keys in the data object, or null if the key doesn't exist.
   * @param [data] - The data that was passed to the constructor.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that instantiated the channel.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.rateLimitPerUser = data.rate_limit_per_user ?? null;
    this.lastPinnedAt = data.last_pin_timestamp ? new Date(data.last_pin_timestamp) : null;
    this.lastPinnedTimestamp = this.lastPinnedAt?.getTime() ?? null;
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
   * @param options - An object containing the message to send.
   * @returns The return value of the send() method.
   */
  async send(options) {
    return await this.messages.send(this.id, options);
  }

  /**
   * It deletes messages in bulk
   * @param messages - The messages to delete.
   * @param reason - The reason for the bulk delete.
   * @returns The return value of the function.
   */
  async bulkDelete(messages, reason) {
    return await this.messages.bulkDelete(this.id, messages, reason);
  }

  /**
   * It edits the channel's nsfw property
   * @param nsfw - Boolean - Whether the channel is nsfw or not.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setNsfw(nsfw, reason) {
    return await this.edit({nsfw, reason});
  }

  /**
   * It edits the ratelimit of the command
   * @param ratelimit - The ratelimit to set.
   * @param reason - The reason for the ratelimit.
   * @returns The return value of the edit function.
   */
  async setRateLimitPerUser(ratelimit, reason) {
    return await this.edit({ratelimit, reason});
  }

  /**
   * It triggers typing in the channel
   * @returns The return value of the function.
   */
  async triggerTyping() {
    return await this.client.channels.triggerTyping(this);
  }
}

module.exports = TextBasedChannels;
