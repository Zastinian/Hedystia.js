const MessagePayload = require("../Util/MessagePayload");
const Channel = require("./Channel");

/**
 * A class representing a forum channel on Discord.
 * @class
 * @extends Channel
 */
class ForumChannel extends Channel {
  /**
   * @param {Object} [data={}] - The data for the forum channel
   * @param {string} [guildId] - The ID of the guild that the channel belongs to
   * @param {Client} [client] - The client that instantiated the channel
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * Creates a new thread in the forum channel.
   * @async
   * @param {Object} [options={}] - The options for the thread
   * @param {string} [options.name] - The name of the thread
   * @param {number} [options.autoArchiveDuration] - The duration in minutes to automatically archive the thread
   * @param {number} [options.rateLimitPerUser] - The rate limit per user for the thread in seconds
   * @param {string} [options.reason] - The reason for creating the thread
   * @param {Message} [options.message] - The message to use as a basis for the thread
   * @returns {Promise<Object>} The thread data
   */
  async createThread(options = {}) {
    const {reason, message} = options;
    let body = {
      name: options.name ?? undefined,
      auto_archive_duration: options.autoArchiveDuration ?? undefined,
      rate_limit_per_user: options.rateLimitPerUser ?? undefined,
    };
    if (message) {
      body = Object.assign(await new MessagePayload.create(message), body);
      return body;
    } else {
      return body;
    }
  }
}

module.exports = ForumChannel;
