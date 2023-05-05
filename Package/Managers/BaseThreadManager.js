const ThreadChannel = require("../Structures/ThreadChannel");
const {ChannelType} = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const FetchedThreads = require("../Structures/FetchedThreads");
const Util = require("../Util/Util");
/* It's a class that manages threads */
class BaseThreadManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a thread to the cache
   * @param threads - The thread object or thread ID.
   * @param [guildId] - The guild ID of the guild the thread is in.
   * @param [options] - cache = true, force = true
   * @returns A thread object
   */
  _add(threads, guildId = this.guildId, options = {cache: true, force: true}) {
    if (!threads) return null;
    const threadId = typeof threads === "string" ? threads : threads.id;
    let thread;
    if (this.cache.has(threadId) && !options.force) {
      thread = this.cache.get(threadId);
    } else {
      const newThread = new ThreadChannel(
        typeof threads === "string"
          ? {
              partial: true,
              id: threadId,
            }
          : threads,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(threadId, newThread);

      thread = newThread;
    }

    return thread;
  }

  /**
   * It creates a thread
   * @param message - The message to create the thread from.
   * @param options - An object containing the following parameters:
   * @returns A new thread is being returned.
   */
  async create(message, options) {
    if (typeof message === "object" && !options) options = message;
    const {reason} = options;
    const messageId = typeof message === "string" ? message : message?.id;
    const body = {
      name: options.name ?? undefined,
      type: typeof options.type === "string" ? ChannelType[options.type] : options.type ?? 11,
      invitable: options.invitable ?? undefined,
      auto_archive_duration: options.autoArchiveDuration ?? undefined,
      rate_limit_per_user: options.ratelimit ?? undefined,
    };

    const channel = await this.client.api.post(`${this.client.root}/channels/${this.channelId}${messageId ? `/messages/${messageId}` : ``}/threads`, {
      reason,
      body,
    });
    return this._add(channel);
  }

  /**
   * It fetches a thread
   * @param thread - The thread ID.
   * @param [options] - An object containing additional options.
   * @returns A channel object.
   */
  async fetch(thread, options = {}) {
    return await this.client.channels.fetch(thread, options);
  }

  /**
   * It fetches all the active threads in a guild
   * @returns An array of threads
   */
  async fetchActive() {
    const threads = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/threads/active`);
    return new FetchedThreads(threads, this.guildId, this.client);
  }

  /**
   * This function fetches archived threads from a channel
   * @param [options] - Object
   * @returns A new FetchedThreads object
   */
  async fetchArchivedThread(options = {}) {
    const query = {
      before: options.before ? Util.generateISOString(options.before) : undefined,
      limit: options.limit ?? 25,
    };
    const threads = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/threads/archived/${options.public ? `public` : `private`}`,
      {query}
    );
    return new FetchedThreads(threads, this.guildId, this.client);
  }

  /**
   * This function fetches forum threads from the specified channel
   * @param [query] - An object containing the following parameters:
   * @returns An array of threads
   */
  async fetchForumThreads(query = {}) {
    query = {
      archived: query.archived ?? undefined,
      sort_by: query.sortBy ?? "last_message_time",
      sort_order: query.sortOrder ?? "desc",
      limit: query.limit ?? 25,
      offset: query.offset ?? 50,
    };
    const fetchedThreads = await this.client.api.get(`${this.client.root}/channels/${this.channelId}/threads/search`, {query});
    return fetchedThreads;
  }

  /**
   * It returns the Collection object.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }
}

module.exports = BaseThreadManager;
