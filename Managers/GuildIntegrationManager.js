const GuildIntegration = require("../Structures/GuildIntegration");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages integrations for a guild */
class GuildIntegrationManager extends Base {
  /**
   * It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
   * guildId that was passed in, and then sets the client to the client that was passed in.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * _add(integrations, guildId = this.guildId, options = {cache: true, force: false})
   * @param integrations - The integrations object
   * @param [guildId] - The ID of the guild
   * @param [options] - cache = true, force = false
   * @returns The integration object
   */
  _add(integrations, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!integrations) return null;
    const integrationId = typeof integrations === "string" ? integrations : integrations.id;
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

  /**
   * It fetches the integrations for a guild
   * @param [options] - cache = true, force = false
   * @param [guild] - The guild ID or guild object.
   * @returns An array of objects.
   */
  async fetch(options = {}, guild = this.guildId) {
    const {cache, force} = options;
    const guildId = typeof guild === "string" ? guild : guild.id;
    const integration = await this.client.api.get(`${this.client.root}/guilds/${guildId}/integrations`);
    return new this.cache.constructor(integration?.map((o) => [o.id, this._add(o, guildId, {cache, force})]));
  }

  /**
   * It deletes an integration from a guild.
   * @param [options] - {
   * @param reason - The reason for the audit log.
   * @returns The integration object.
   */
  async delete(options = {}, reason) {
    const guildId = typeof options.guild === "string" ? options.guild : options.guild?.id;
    const integrationId = typeof options.integration === "string" ? options.integration : options.integration?.id;
    await this.client.api.delete(`${this.client.root}/guilds/${guildId}/integrations/${integrationId}`, {
      reason,
    });

    return this._add(integrationId);
  }

  /**
   * It returns a collection of all the elements in the document with the given tag name.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }
}

module.exports = GuildIntegrationManager;
