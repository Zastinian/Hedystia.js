const Base = require("../Base/base");
const GuildDiscovery = require("../Structures/GuildDiscovery");

/* It's a manager for guild discovery metadata */
class GuildDiscoveryManager extends Base {
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
   * `_add` is a function that takes a `discovery` parameter and returns a new `GuildDiscovery` object.
   * @param discovery - The discovery object or ID
   * @returns A new GuildDiscovery object
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
   * `fetch` fetches the discovery metadata for a guild
   * @param [guild] - The guild to fetch the discovery metadata for.
   * @returns The discovery metadata for the guild.
   */
  async fetch(guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    if (!guildId) throw new RangeError(`Guild is required!`);
    const discovery = await this.client.api.get(`${this.client.root}/guilds/${guildId}/discovery-metadata`);
    return this._add(discovery);
  }

  /**
   * `edit` edits the discovery metadata of a guild
   * @param [guild] - The guild ID or guild object to edit the discovery metadata for.
   * @param [options] - An object containing the following properties:
   * @returns The discovery object
   */
  async edit(guild = this.guildId, options = {}) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    if (!guildId) throw new RangeError(`Guild is required`);
    const body = GuildDiscoveryManager.transformPayload(options);
    const discovery = await this.client.api.patch(`${this.client.root}/guilds/${guildId}/discovery-metadata`, {body});
    return this._add(discovery);
  }

  /**
   * It takes a payload object and returns a new object with the same keys, but with the values
   * transformed to match the API's expectations
   * @param [payload] - The payload that is sent to the API.
   * @returns The transformed payload.
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
