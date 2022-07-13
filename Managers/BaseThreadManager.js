const ThreadChannel = require("../Structures/ThreadChannel");
const { ChannelType } = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const FetchedThreads = require("../Structures/FetchedThreads");
const Util = require("../Util/Util");
class BaseThreadManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(
    threads,
    guildId = this.guildId,
    options = { cache: true, force: true }
  ) {
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

  async create(message, options) {
    if (typeof message === "object" && !options) options = message;
    const { reason } = options;
    const messageId = typeof message === "string" ? message : message?.id;
    const body = {
      name: options.name ?? undefined,
      type:
        typeof options.type === "string"
          ? ChannelType[options.type]
          : options.type ?? 11,
      invitable: options.invitable ?? undefined,
      auto_archive_duration: options.autoArchiveDuration ?? undefined,
      rate_limit_per_user: options.ratelimit ?? undefined,
    };

    const channel = await this.client.api.post(
      `${this.client.root}/channels/${this.channelId}${
        messageId ? `/messages/${messageId}` : ``
      }/threads`,
      { reason, body }
    );
    return this._add(channel);
  }

  async fetch(thread, options = {}) {
    return await this.client.channels.fetch(thread, options);
  }

  async fetchActive() {
    const threads = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/threads/active`
    );
    return new FetchedThreads(threads, this.guildId, this.client);
  }

  async fetchArchivedThread(options = {}) {
    const query = {
      before: options.before
        ? Util.generateISOString(options.before)
        : undefined,
      limit: options.limit ?? 25,
    };
    const threads = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/threads/archived/${
        options.public ? `public` : `private`
      }`,
      { query }
    );
    return new FetchedThreads(threads, this.guildId, this.client);
  }

  async fetchForumThreads(query = {}) {
    query = {
      archived: query.archived ?? undefined,
      sort_by: query.sortBy ?? "last_message_time",
      sort_order: query.sortOrder ?? "desc",
      limit: query.limit ?? 25,
      offset: query.offset ?? 50,
    };
    const fetchedThreads = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/threads/search`,
      { query }
    );
    return fetchedThreads;
  }

  get cache() {
    return Collection;
  }
}

module.exports = BaseThreadManager;
