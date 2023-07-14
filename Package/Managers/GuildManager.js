const Guild = require("../Structures/Guild");
const GuildPreview = require("../Structures/GuildPreview");
const {VerificationLevel, DefaultMessageNotifications, ExplicitContentFilter, MfaLevel} = require("../Util/Constants");
const SystemChannelFlags = require("../Util/SystemChannelFlags");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for guild-related operations.
 * @class
 * @extends Base
 */
class GuildManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object.
   * @param {WebSocket} websocket - The WebSocket object.
   */
  constructor(client, websocket) {
    super(client, websocket);
  }

  /**
   * Adds a guild to the cache and returns the guild object.
   * @param {string | Guild} guilds - The guild ID or the guild object to add.
   * @param {object} [options] - Additional options for adding the guild.
   * @param {boolean} [options.cache=true] - Whether to cache the guild object.
   * @param {boolean} [options.force=false] - Whether to force adding the guild even if it already exists in the cache.
   * @returns {Guild | null} The guild object that was added to the cache, or null if the guild is not provided.
   */
  _add(guilds, options = {cache: true, force: false}) {
    if (!guilds) return null;
    const guildId = typeof guilds === "string" ? guilds : guilds.id;
    let guild;
    if (this.cache.has(guildId) && !options.force) {
      guild = this.cache.get(guildId);
    } else {
      const newGuild = new Guild(
        typeof guilds === "string"
          ? {
              id: guildId,
              partial: true,
            }
          : guilds,
        this.client
      );

      if (options.cache) this.cache.set(guildId, newGuild);

      guild = newGuild;
    }

    return guild;
  }

  /**
   * Creates a new guild with the given options.
   * @param {Object} options - The options for creating the guild.
   * @returns {Promise} A promise that resolves with the created guild.
   */
  async create(options = {}) {
    const body = await GuildManager.transformPayload(options);
    const guild = await this.client.api.post(`${this.client.root}/guilds`, {
      body,
    });

    return this._add(guild);
  }

  /**
   * Fetches guild information from the Discord API.
   * @param {string | object} guild - The guild ID or guild object to fetch.
   * @param {object} options - Additional options for the fetch request.
   * @param {boolean} options.cache - Whether to cache the fetched guild information.
   * @param {boolean} options.force - Whether to force fetch the guild information even if it is already cached.
   * @param {string} options.before - The ID of the guild to fetch guilds before.
   * @param {string} options.after - The ID of the guild to fetch guilds after.
   * @param {number} options.limit - The maximum number of guilds to fetch.
   * @returns {Promise<Cache>}
   */
  async fetch(guild, options) {
    if (typeof guild?.id !== "undefined" || typeof guild === "string") return this._fetchId(guild, options);
    if (typeof guild === "object" && !options) options = guild;
    const {cache, force} = options ?? {};
    const query = {
      before: typeof options?.before === "string" ? options.before : options?.before?.id ?? undefined,
      after: typeof options?.after === "string" ? options.after : options?.after?.id ?? undefined,
      limit: options?.limit ?? 200,
    };
    const guilds = await this.client.api.get(`${this.client.root}/users/@me/guilds`, {query});
    return new this.cache.constructor(guilds?.map((o) => [o.id, this._add(o, {cache, force})]));
  }

  /**
   * Fetches the ID of a guild asynchronously.
   * @param {string | Guild} guild - The guild or guild ID to fetch the ID for.
   * @param {Object} [options] - Additional options for the fetch.
   * @param {boolean} [options.cache] - Whether to cache the fetched ID.
   * @param {boolean} [options.force] - Whether to force the fetch even if the ID is already cached.
   * @param {boolean} [options.withCounts] - Whether to include counts in the fetch query.
   * @returns {Promise<string>} - A promise that resolves with the fetched guild ID.
   */
  async _fetchId(guild, options) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const {cache, force} = options ?? {};
    if (this.cache.has(guildId) && !force) return this.cache.get(guildId);
    const query = {
      with_counts: options?.withCounts ?? undefined,
    };

    guild = await this.client.api.get(`${this.client.root}/guilds/${guildId}`, {
      query,
    });

    return this._add(guild, {cache, force: true});
  }

  /**
   * Edits a guild with the given options.
   * @param {string | Guild} guilds - The ID or the Guild object of the guild to edit.
   * @param {Object} [options] - The options to edit the guild with.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<Guild>} A promise that resolves with the edited guild.
   */
  async edit(guilds, options = {}) {
    const guildId = typeof guilds === "string" ? guilds : guilds.id;
    const body = await GuildManager.transformPayload(options);
    const {reason} = options;
    guilds = await this.client.api.patch(`${this.client.root}/guilds/${guildId}`, {reason, body});

    return this._add(guilds);
  }

  /**
   * Deletes a guild from the server.
   * @param {string | Guild} guild - The guild to delete. Can be either a guild ID or a Guild object.
   * @returns {Promise<Guild>} - The deleted guild.
   */
  async delete(guild) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const deletedGuild = this._add(guild);
    await this.client.api.delete(`${this.client.root}/guilds/${guildId}`);
    return deletedGuild;
  }

  /**
   * Fetches the preview information for a guild.
   * @param {string | Guild} guild - The guild ID or guild object.
   * @returns {Promise<GuildPreview>} - A promise that resolves to a GuildPreview object.
   */
  async fetchPreview(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const preview = await this.client.api.get(`${this.client.root}/guilds/${guildId}/preview`);
    return new GuildPreview(preview, this.client);
  }

  /**
   * Modifies the MFA (Multi-Factor Authentication) level for a guild.
   * @param {string | Guild} guild - The guild or guild ID to modify.
   * @param {Object} [options] - Additional options for the modification.
   * @param {string} [options.reason] - The reason for the modification.
   * @param {string | number} [options.mfaLevel] - The new MFA level to set for the guild.
   * @returns {Promise<Guild>} A promise that resolves with the modified guild.
   * @throws {RangeError} If no guild ID is specified.
   */
  async modifyMFALevel(guild, options = {}) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    if (!guildId) throw new RangeError(`Please specify a server`);
    const {reason, mfaLevel} = options;
    const body = {
      level: typeof mfaLevel === "string" ? MfaLevel[mfaLevel] : mfaLevel,
    };
    await this.client.api.post(`${this.client.root}/guilds/${guildId}/mfa`, {
      reason,
      body,
    });
    return this.client.guilds._add(guildId);
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the given payload object into a new format.
   * @param {Object} payload - The payload object to transform.
   * @returns {Object} - The transformed payload object.
   */
  static async transformPayload(payload = {}) {
    return {
      name: payload.name ?? undefined,
      verification_level: typeof payload.verificationLevel === "string" ? VerificationLevel[payload.verificationLevel] : undefined,
      default_message_notifications:
        typeof payload.defaultMessageNotifications === "string" ? DefaultMessageNotifications[payload.defaultMessageNotifications] : undefined,
      explicit_content_filter: typeof payload.explicitContentFilter === "string" ? ExplicitContentFilter[payload.explicitContentFilter] : undefined,
      afk_channel_id: typeof payload.afkChannel === "string" ? payload.afkChannel : payload.afkChannel?.id ?? undefined,
      afk_timeout: payload.afkTimeout ?? undefined,
      icon: payload.icon ? await Util.generateDataURI(payload.icon) : undefined,
      discovery_splash: payload.discoverySplash ? await Util.generateDataURI(payload.discoverySplash) : undefined,
      splash: payload.splash ? await Util.generateDataURI(payload.splash) : undefined,
      banner: payload.banner ? await Util.generateDataURI(payload.banner) : undefined,
      system_channel_id: typeof payload.systemChannel === "string" ? payload.systemChannel : payload.systemChannel?.id ?? undefined,
      system_channel_flags: payload.systemChannelFlags ? parseInt(SystemChannelFlags.resolve(BigInt(payload.systemChannelFlags))) : undefined,
      rules_channel_id: typeof payload.rulesChannel === "string" ? payload.rulesChannel : payload.rulesChannel?.id ?? undefined,
      public_updates_channel_id:
        typeof payload.publicUpdatesChannel === "string" ? payload.publicUpdatesChannel : payload.publicUpdatesChannel?.id ?? undefined,
      preferred_locale: payload.preferredLocale ?? "en-US",
      description: payload.description ?? undefined,
      premium_progress_bar_enabled: payload.premiumProgressBar ?? undefined,
      safety_alerts_channel_id: payload.safetyAlertsChannelId ?? undefined,
      features: payload.features ?? undefined,
      owner_id: typeof payload.owner === "string" ? payload.owner : payload.owner?.user?.id ?? payload.owner?.id ?? undefined,
    };
  }

  /**
   * Transforms the options object by extracting the "before" and "after" properties
   * and setting them to their corresponding IDs if they are strings, or undefined if they
   * are not provided. The "limit" property is set to 200 if it is not provided.
   * @param {Object} o - The options object.
   * @param {string} [o.before] - The "before" property of the options object.
   * @param {string} [o.after] - The "after" property of the options object.
   * @param {number} [o.limit] - The "limit" property of the options object.
   * @returns {Object} - The transformed options object.
   */
  static transformOptions(o = {}) {
    return {
      before: typeof o.before === "string" ? o.before : o.before?.id ?? undefined,
      after: typeof o.after === "string" ? o.after : o.after?.id ?? undefined,
      limit: o.limit ?? 200,
    };
  }
}

module.exports = GuildManager;
