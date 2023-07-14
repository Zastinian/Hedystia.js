const GuildIntegration = require("../Structures/GuildIntegration");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for guild integrations.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildIntegrationManager extends Base {
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
   * Adds an integration to the guild.
   * @param {string | Integration} integrations - The integration ID or the integration object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the integration to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the integration.
   * @param {boolean} [options.cache=true] - Whether to cache the integration.
   * @param {boolean} [options.force=false] - Whether to force adding the integration even if it is already cached.
   * @returns {Integration | null} - The added integration or null if integrations is falsy.
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
   * Fetches the integrations for a guild.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache] - Whether to cache the fetched data.
   * @param {boolean} [options.force] - Whether to force the fetch request even if the data is already cached.
   * @param {string | Guild} [guild=this.guildId] - The guild to fetch integrations for. Defaults to the current guild.
   * @returns {Promise<Cache>} - A promise that resolves to a cache object containing the fetched integrations.
   */
  async fetch(options = {}, guild = this.guildId) {
    const {cache, force} = options;
    const guildId = typeof guild === "string" ? guild : guild.id;
    const integration = await this.client.api.get(`${this.client.root}/guilds/${guildId}/integrations`);
    return new this.cache.constructor(integration?.map((o) => [o.id, this._add(o, guildId, {cache, force})]));
  }

  /**
   * Deletes an integration from a guild.
   * @param {Object} options - The options for deleting the integration.
   * @param {string} options.guild - The ID of the guild where the integration is located.
   * @param {string} options.integration - The ID of the integration to delete.
   * @param {string} reason - The reason for deleting the integration.
   * @returns {Promise} A promise that resolves when the integration is deleted and the deleted integration is added to the list of deleted integrations.
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
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = GuildIntegrationManager;
