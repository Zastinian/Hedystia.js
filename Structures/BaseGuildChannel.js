const ThreadManager = require("../Managers/ThreadManager");
const FetchedThreads = require("./FetchedThreads");
const TextBasedChannels = require("./Interface/TextBasedChannels");
class BaseGuildChannel extends TextBasedChannels {
  constructor(data, guildId, client) {
    super(data, guildId, client);
    this.threads = new ThreadManager(this.id, this.guildId, this.client);
  }

  async fetchPrivateThreads(options = {}) {
    const query = {
      before:
        typeof options.before === "string"
          ? options.before
          : options.before?.id ?? undefined,
      limit: options.limit ?? 25,
    };

    const threads = await this.client.api.get(
      `${this.client.root}/channels/${this.id}/users/@me/threads/archived/private`,
      { query }
    );
    return new FetchedThreads(threads, this.guildId, this.client);
  }
}

module.exports = BaseGuildChannel;
