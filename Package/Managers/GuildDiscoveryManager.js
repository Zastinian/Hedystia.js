const Base = require("../Base/base");
const GuildDiscovery = require("../Structures/GuildDiscovery");
/**
 * Represents a manager for guild discovery settings.
 * @class
 * @extends Base
 */
class GuildDiscoveryManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Adds a GuildDiscovery object to the guild's discovery settings.
   * @param {string | GuildDiscovery} discovery - The discovery object or the guild ID.
   * @returns {GuildDiscovery | null} - The added GuildDiscovery object or null if discovery is falsy.
   */
  _add(discovery) {
    if (!discovery) return null;
    const discoveryId = typeof discovery === "string" ? discovery : discovery.guild_id ?? this.guildId;
    return new GuildDiscovery(
      typeof discovery === "string"
        ? {
            partial: true,
          }
        : discovery,
      discoveryId,
      this.client
    );
  }

  /**
   * Fetches the discovery metadata for a guild.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or Guild object to fetch the metadata for.
   * @returns {Promise<DiscoveryMetadata>} - A promise that resolves to the discovery metadata.
   * @throws {RangeError} - If the guild ID is not provided.
   */
  async fetch(guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    if (!guildId) throw new RangeError(`Guild is required!`);
    const discovery = await this.client.api.get(`${this.client.root}/guilds/${guildId}/discovery-metadata`);
    return this._add(discovery);
  }

  /**
   * Edits the discovery metadata for a guild.
   * @param {string | Guild} guild - The guild ID or guild object to edit the discovery metadata for.
   * @param {Object} options - The options to update the discovery metadata.
   * @returns {Promise} A promise that resolves with the updated discovery metadata.
   * @throws {RangeError} If the guild is not provided.
   */
  async edit(guild = this.guildId, options = {}) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    if (!guildId) throw new RangeError(`Guild is required`);
    const body = GuildDiscoveryManager.transformPayload(options);
    const discovery = await this.client.api.patch(`${this.client.root}/guilds/${guildId}/discovery-metadata`, {body});
    return this._add(discovery);
  }

  /**
   * Transforms the given payload object into a new object with specific properties.
   * @param {Object} payload - The payload object to transform.
   * @returns {Object} - The transformed object.
   */
  static transformPayload(payload = {}) {
    return {
      emoji_discoverability_enabled: payload.emojiDiscoverabilityEnabled ?? undefined,
      is_published: payload.published ?? payload.is_published ?? undefined,
      about: payload.about ?? undefined,
      reasons_to_join: payload.reasonsToJoin ?? undefined,
      keywords: payload.keywords ?? undefined,
      primary_category_id: payload.primaryCategoryId ?? undefined,
    };
  }
}

module.exports = GuildDiscoveryManager;
