const ThreadManager = require("../Managers/ThreadManager");
const FetchedThreads = require("./FetchedThreads");
const TextBasedChannels = require("./Interface/TextBasedChannels");
/* It's a class that extends TextBasedChannels and adds a threads property */
class BaseGuildChannel extends TextBasedChannels {
  /**
   * It creates a new ThreadManager object and assigns it to the threads property
   * @param data - The data from the database.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that the channel belongs to
   */
  constructor(data, guildId, client) {
    super(data, guildId, client);
    this.threads = new ThreadManager(this.id, this.guildId, this.client);
  }

  /**
   * `Fetches the private threads in this channel.`
   * @param [options] - An object with the following properties:
   * @returns A new FetchedThreads object
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
