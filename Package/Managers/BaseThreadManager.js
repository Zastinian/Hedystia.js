const ThreadChannel = require("../Structures/ThreadChannel");
const {ChannelType} = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const FetchedThreads = require("../Structures/FetchedThreads");
const Util = require("../Util/Util");
/**
 * Represents a base thread manager that handles operations related to thread channels.
 * @class
 * @extends Base
 */
class BaseThreadManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a thread to the guild's thread cache.
   * @param {string | ThreadChannelResolvable} threads - The thread or thread ID to add.
   * @param {Snowflake} [guildId=this.guildId] - The ID of the guild where the thread belongs.
   * @param {Object} [options] - Additional options for adding the thread.
   * @param {boolean} [options.cache=true] - Whether to cache the thread.
   * @param {boolean} [options.force=true] - Whether to force adding the thread even if it already exists in the cache.
   * @returns {ThreadChannel | null} The added thread or null if no thread is provided.
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
   * Creates a new thread in the current channel with the given message and options.
   * @param {string | object} message - The message content or message object to start the thread with.
   * @param {object} options - The options for creating the thread.
   * @param {string} [options.reason] - The reason for creating the thread.
   * @param {string} [options.name] - The name of the thread.
   * @param {string | number} [options.type] - The type of the thread. Can be a string or number.
   * @param {boolean} [options.invitable] - Whether the thread is invitable.
   * @param {number} [options.autoArchiveDuration] - The auto archive
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
   * Fetches a thread from the client's channels.
   * @param {string} thread - The ID of the thread to fetch.
   * @param {Object} [options] - Additional options for the fetch request.
   * @returns {Promise} A promise that resolves to the fetched thread.
   */
  async fetch(thread, options = {}) {
    return await this.client.channels.fetch(thread, options);
  }

  /**
   * Fetches the active threads for the current guild.
   * @returns {Promise<FetchedThreads>} - A promise that resolves to a FetchedThreads object containing the active threads.
   */
  async fetchActive() {
    const threads = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/threads/active`);
    return new FetchedThreads(threads, this.guildId, this.client);
  }

  /**
   * Fetches archived threads based on the provided options.
   * @param {Object} [options] - The options for fetching archived threads.
   * @param {Date} [options.before] - The date before which the threads should be fetched.
   * @param {number} [options.limit=25] - The maximum number of threads to fetch.
   * @param {boolean} [options.public=false] - Whether to fetch public or private archived threads.
   * @returns {Promise<FetchedThreads>} - A promise that resolves to a FetchedThreads object containing the fetched threads.
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
   * Fetches forum threads based on the provided query parameters.
   * @param {Object} [query] - The query parameters for fetching forum threads.
   * @param {boolean} [query.archived] - Whether to include archived threads.
   * @param {string} [query.sortBy="last_message_time"] - The field to sort the threads by.
   * @param {string} [query.sortOrder="desc"] - The order in which to sort the threads.
   * @param {number} [query.limit=25] - The maximum number of threads to fetch.
   * @param {number} [query.offset=50] - The offset from which to start fetching threads.
   * @returns {Promise<Object>}
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
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = BaseThreadManager;
