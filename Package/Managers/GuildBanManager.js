const GuildBan = require("../Structures/GuildBan");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for handling guild bans.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildBanManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @class
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Adds a ban to the guild's ban cache.
   * @param {string | GuildBan} bans - The ban ID or GuildBan object to add.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the ban to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the ban.
   * @param {boolean} [options.cache=true] - Whether to cache the ban.
   * @param {boolean} [options.force=false] - Whether to force adding the ban even if it already exists in the cache.
   * @returns {GuildBan | null} - The added GuildBan object, or null if the ban is
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
   * Creates a ban for a user in the guild.
   * @param {string | User} user - The user to ban. Can be a user ID or a User object.
   * @param {Object} [options] - Additional options for the ban.
   * @param {string} [options.reason] - The reason for the ban.
   * @returns {Promise<GuildBan>} A promise that resolves with the created GuildBan object.
   * @throws {Error} If the API request fails.
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
   * Removes a user from the ban list in the guild.
   * @param {string | User} user - The user to remove from the ban list. Can be a user ID or a User object.
   * @param {string} reason - The reason for removing the user from the ban list.
   * @returns {Promise<Ban>} A promise that resolves with the ban object of the removed user.
   */
  async remove(user, reason) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id;
    const ban = this._add(userId);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/bans/${userId}`, {reason});
    return ban;
  }

  /**
   * Fetches ban information from the server.
   * @param {string | object} ban - The ban ID or ban object.
   * @param {object} options - Additional options for the fetch.
   * @param {boolean} options.cache - Whether to use cached data.
   * @param {boolean} options.force - Whether to force a fresh fetch.
   * @returns {Promise<object>} - A promise that resolves to the fetched ban information.
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
   * Fetches the ID of a ban from the server.
   * @param {string | object} ban - The ban object or the ID of the ban.
   * @param {boolean} [cache=true] - Whether to cache the fetched ban.
   * @param {boolean} [force=false] - Whether to force fetching the ban even if it is already cached.
   * @returns {Promise<object>} - The fetched ban object.
   */
  async _fetchId(ban, cache = true, force = false) {
    const banId = typeof ban === "string" ? ban : ban?.user?.id ?? ban?.id;
    if (this.cache.has(banId) && force) return this.cache.get(banId);
    ban = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/bans/${banId}`);
    return this._add(ban, this.guildId, {cache, force: true});
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the payload object for deleting messages.
   * @param {Object} o - The payload object.
   * @param {number} o.days - The number of days to delete messages.
   * @throws {RangeError} If the days value is less than 0 or greater than 7.
   * @returns {Object} The transformed payload object.
   */
  static transformPayloadd(o = {}) {
    if (o.days < 0 || o.days > 7) throw new RangeError(`The days of deleted messages must be between 0 and 7.`);
    return {
      delete_message_days: o.days ?? undefined,
    };
  }
}

module.exports = GuildBanManager;
