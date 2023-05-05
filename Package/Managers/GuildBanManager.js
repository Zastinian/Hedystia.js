const GuildBan = require("../Structures/GuildBan");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages bans in a guild */
class GuildBanManager extends Base {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It adds a ban to the cache
   * @param bans - The ban object or ID of the ban to add to the cache.
   * @param [guildId] - The ID of the guild to fetch the bans from.
   * @param [options] - Object
   * @returns A new instance of the GuildBan class.
   */
  _add(bans, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!bans) return null;
    const banId = typeof bans === "string" ? bans : bans.user?.id ?? bans.id;
    let ban;
    if (this.cache.has(banId) && !options.force) {
      ban = this.cache.get(banId);
    } else {
      const newBan = new GuildBan(
        typeof bans === "string"
          ? {
              partial: true,
              user: banId,
            }
          : bans,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(banId, newBan);

      ban = newBan;
    }

    return ban;
  }

  /**
   * It bans a user from the guild.
   * @param user - The user to ban.
   * @param [options] - Object
   * @returns A new instance of the GuildBanManager class.
   */
  async create(user, options = {}) {
    const {reason} = options;
    const body = GuildBanManager.transformPayloadd(options);
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id;
    await this.client.api.put(`${this.client.root}/guilds/${this.guildId}/bans/${userId}`, {reason, body});
    return this._add({
      user: this.client.users._add(userId),
    });
  }

  /**
   * It removes a ban from a guild
   * @param user - The user to ban. Can be a user object, user ID, or mention.
   * @param reason - The reason for the ban.
   * @returns A ban object
   */
  async remove(user, reason) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id;
    const ban = this._add(userId);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/bans/${userId}`, {reason});
    return ban;
  }

  /**
   * It fetches a list of bans from the API and returns a cache of them
   * @param ban - The ban to fetch. Can be a ban object, a user object, a user ID, or a string.
   * @param options - An object containing the following properties:
   * @returns A new cache constructor
   */
  async fetch(ban, options) {
    if (typeof (ban?.user?.id ?? ban?.id) !== "undefined" || typeof ban === "string") return this._fetchId(ban, options?.cache, options?.force);
    if (typeof ban === "object" && !options) options = ban;
    const {cache, force} = options ?? {};
    let query;
    if (options) {
      query = {
        limit: options.limit ?? 1000,
        before: typeof options.before === "string" ? options.before : options.before?.user?.id ?? options.before?.id,
        after: typeof options.after === "string" ? options.after : options.after?.user?.id ?? options.after?.id,
      };
    }
    ban = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/bans`, {query});
    return new this.cache.constructor(ban?.map((o) => [o.user?.id ?? o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * It fetches a ban from the API and adds it to the cache
   * @param ban - The ban object or id to fetch.
   * @param [cache=true] - Whether or not to cache the ban.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The ban object
   */
  async _fetchId(ban, cache = true, force = false) {
    const banId = typeof ban === "string" ? ban : ban?.user?.id ?? ban?.id;
    if (this.cache.has(banId) && force) return this.cache.get(banId);
    ban = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/bans/${banId}`);
    return this._add(ban, this.guildId, {cache, force: true});
  }

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes an object with a property called days, and if that property is less than 0 or greater
   * than 7, it throws a RangeError. Otherwise, it returns an object with a property called
   * delete_message_days
   * @param [o] - The object that contains the parameters.
   * @returns The payload for the request.
   */
  static transformPayloadd(o = {}) {
    if (o.days < 0 || o.days > 7) throw new RangeError(`The days of deleted messages must be between 0 and 7.`);
    return {
      delete_message_days: o.days ?? undefined,
    };
  }
}

module.exports = GuildBanManager;
