const Guild = require("../Structures/Guild");
const GuildPreview = require("../Structures/GuildPreview");
const {VerificationLevel, DefaultMessageNotifications, ExplicitContentFilter, MfaLevel} = require("../Util/Constants");
const SystemChannelFlags = require("../Util/SystemChannelFlags");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages guilds */
class GuildManager extends Base {
  /**
   * It's a constructor function that takes in two parameters, client and websocket, and then calls the
   * super function with those two parameters.
   * @param client - The client object
   * @param websocket - The websocket that the client is connected to.
   */
  constructor(client, websocket) {
    super(client, websocket);
  }

  /**
   * It adds a guild to the cache
   * @param guilds - The guild object or ID of the guild to add.
   * @param [options] - {cache: true, force: false}
   * @returns A new instance of the Guild class.
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
   * It creates a new guild
   * @param [options] - {
   * @returns The guild object.
   */
  async create(options = {}) {
    const body = await GuildManager.transformPayload(options);
    const guild = await this.client.api.post(`${this.client.root}/guilds`, {
      body,
    });

    return this._add(guild);
  }

  /**
   * It fetches the guilds of the user
   * @param guild - The guild to fetch.
   * @param options - {
   * @returns A new cache.constructor(guilds?.map((o) => [o.id, this._add(o, {cache, force})]))
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
   * It fetches a guild by ID
   * @param guild - The guild object or ID
   * @param options - {
   * @returns The guild object.
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
   * It edits a guild
   * @param guilds - The guild object
   * @param [options] - {
   * @returns The guilds object.
   */
  async edit(guilds, options = {}) {
    const guildId = typeof guilds === "string" ? guilds : guilds.id;
    const body = await GuildManager.transformPayload(options);
    const {reason} = options;
    guilds = await this.client.api.patch(`${this.client.root}/guilds/${guildId}`, {reason, body});

    return this._add(guilds);
  }

  /**
   * It deletes a guild
   * @param guild - The guild to delete.
   * @returns The deleted guild.
   */
  async delete(guild) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const deletedGuild = this._add(guild);
    await this.client.api.delete(`${this.client.root}/guilds/${guildId}`);
    return deletedGuild;
  }

  /**
   * It fetches the preview of a guild
   * @param guild - The guild to fetch the preview for.
   * @returns A new GuildPreview object.
   */
  async fetchPreview(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const preview = await this.client.api.get(`${this.client.root}/guilds/${guildId}/preview`);
    return new GuildPreview(preview, this.client);
  }

  /**
   * It modifies the MFA level of a guild
   * @param guild - The guild to modify the MFA level of.
   * @param [options] - {
   * @returns The client.guilds._add(guildId)
   */
  async modifyMFALevel(guild, options = {}) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    if (!guildId) throw new RangeError(`Por favor, especifique un servidor`);
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
   * The function returns a collection of objects that are stored in the cache.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes a payload object, and returns a new object with the same keys, but with the values
   * transformed
   * @param [payload] - {
   * @returns The payload is being returned.
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
      features: payload.features ?? undefined,
      owner_id: typeof payload.owner === "string" ? payload.owner : payload.owner?.user?.id ?? payload.owner?.id ?? undefined,
    };
  }

  /**
   * It takes an object with optional properties `before`, `after`, and `limit`, and returns an object
   * with the same properties, but with the `before` and `after` properties converted to strings if
   * they are not already strings.
   * </code>
   * @param [o] - The options object.
   * @returns The return value is an object with the following properties:
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
