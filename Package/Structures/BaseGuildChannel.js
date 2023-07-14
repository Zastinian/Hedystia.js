const ThreadManager = require("../Managers/ThreadManager");
const FetchedThreads = require("./FetchedThreads");
const TextBasedChannels = require("./Interface/TextBasedChannels");
/**
 * Represents a base guild channel that extends the TextBasedChannels class.
 * @class
 * @extends TextBasedChannels
 * @param {Object} data - The data object containing information about the channel.
 * @param {string} guildId - The ID of the guild that the channel belongs to.
 * @param {Client} client - The client instance.
 * @property {ThreadManager} threads - The thread manager for this channel.
 */
class BaseGuildChannel extends TextBasedChannels {
  /**
   * Constructs a new instance of the ThreadChannel class.
   * @constructor
   * @param {data} data - The data object containing information about the thread channel.
   * @param {guildId} guildId - The ID of the guild that the thread channel belongs to.
   * @param {client} client - The client object representing the Discord bot.
   */
  constructor(data, guildId, client) {
    super(data, guildId, client);
    this.threads = new ThreadManager(this.id, this.guildId, this.client);
  }
  /**
   * Fetches private threads for the current channel.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {string} [options.before] - The ID of the thread to fetch threads before.
   * @param {number} [options.limit=25] - The maximum number of threads to fetch.
   * @returns {Promise<FetchedThreads>} - A promise that resolves to a FetchedThreads object containing the fetched threads.
   */
  async fetchPrivateThreads(options = {}) {
    const query = {
      before: typeof options.before === "string" ? options.before : options.before?.id ?? undefined,
      limit: options.limit ?? 25,
    };

    const threads = await this.client.api.get(`${this.client.root}/channels/${this.id}/users/@me/threads/archived/private`, {query});
    return new FetchedThreads(threads, this.guildId, this.client);
  }
}

module.exports = BaseGuildChannel;
