const GuildIntegration = require("../Structures/GuildIntegration");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class GuildIntegrationManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  _add(
    integrations,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
    if (!integrations) return null;
    const integrationId =
      typeof integrations === "string" ? integrations : integrations.id;
    let integration;
    if (this.cache.has(integrationId) && !options.force) {
      integration = this.cache.get(integrationId);
    } else {
      const newIntegration = new GuildIntegration(
        typeof integrations === "string"
          ? {
              id: integrationId,
              partial: true,
            }
          : integrations,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(integrationId, newIntegration);

      integration = newIntegration;
    }

    return integration;
  }

  async fetch(options = {}, guild = this.guildId) {
    const { cache, force } = options;
    const guildId = typeof guild === "string" ? guild : guild.id;
    const integration = await this.client.api.get(
      `${this.client.root}/guilds/${guildId}/integrations`
    );
    return new this.cache.constructor(
      integration?.map((o) => [o.id, this._add(o, guildId, { cache, force })])
    );
  }

  async delete(options = {}, reason) {
    const guildId =
      typeof options.guild === "string" ? options.guild : options.guild?.id;
    const integrationId =
      typeof options.integration === "string"
        ? options.integration
        : options.integration?.id;
    await this.client.api.delete(
      `${this.client.root}/guilds/${guildId}/integrations/${integrationId}`,
      { reason }
    );

    return this._add(integrationId);
  }

  get cache() {
    return Collection;
  }
}

module.exports = GuildIntegrationManager;
