const Base = require("../Base/base");
const GuildDiscovery = require("../Structures/GuildDiscovery");

class GuildDiscoveryManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  _add(discovery) {
    if (!discovery) return null;
    const discoveryId =
      typeof discovery === "string"
        ? discovery
        : discovery.guild_id ?? this.guildId;
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

  async fetch(guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    if (!guildId) throw new RangeError(`Guild is required!`);
    const discovery = await this.client.api.get(
      `${this.client.root}/guilds/${guildId}/discovery-metadata`
    );
    return this._add(discovery);
  }

  async edit(guild = this.guildId, options = {}) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    if (!guildId) throw new RangeError(`Guild is required`);
    const body = GuildDiscoveryManager.transformPayload(options);
    const discovery = await this.client.api.patch(
      `${this.client.root}/guilds/${guildId}/discovery-metadata`,
      { body }
    );
    return this._add(discovery);
  }

  static transformPayload(payload = {}) {
    return {
      emoji_discoverability_enabled:
        payload.emojiDiscoverabilityEnabled ?? undefined,
      is_published: payload.published ?? payload.is_published ?? undefined,
      about: payload.about ?? undefined,
      reasons_to_join: payload.reasonsToJoin ?? undefined,
      keywords: payload.keywords ?? undefined,
      primary_category_id: payload.primaryCategoryId ?? undefined,
    };
  }
}

module.exports = GuildDiscoveryManager;
