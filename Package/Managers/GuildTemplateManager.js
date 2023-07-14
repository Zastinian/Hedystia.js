const GuildTemplate = require("../Structures/GuildTemplate");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for guild templates.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildTemplateManager extends Base {
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
   * Adds a template to the cache and returns the template object.
   * @param {string | { code: string }} templates - The template code or an object containing the template code.
   * @param {object} [options] - Optional options for the template.
   * @param {boolean} [options.cache=true] - Whether to cache the template or not.
   * @param {boolean} [options.force=false] - Whether to force the template to be retrieved from the cache or not.
   * @returns {GuildTemplate | null} The template object if it exists, otherwise null.
   */
  _add(templates, options = {cache: true, force: false}) {
    if (!templates) return null;
    const templateCode = typeof templates === "string" ? templates : templates.code;
    let template;
    if (this.cache.has(templateCode) && !options.force) {
      template = this.cache.get(templateCode);
    } else {
      const guildTemplate = new GuildTemplate(
        typeof templates === "string"
          ? {
              partial: true,
              code: templateCode,
            }
          : templates,
        this.client
      );

      if (options.cache) this.cache.set(templateCode, guildTemplate);

      template = guildTemplate;
    }

    return template;
  }

  /**
   * Fetches templates from the server.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched templates.
   * @param {boolean} [options.force=false] - Whether to force the fetch request even if the templates are already cached.
   * @returns {Promise<Cache>} - A promise that resolves to a cache object containing the fetched templates.
   */
  async fetch(options = {}) {
    const {cache = true, force = false} = options;
    const templates = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/templates`);
    return new this.cache.constructor(templates?.map((o) => [o.code, this._add(o, {cache, force})]));
  }

  /**
   * Creates a guild template with the given options.
   * @param {Object} options - The options for creating the guild template.
   * @returns {Promise<Object>} A promise that resolves to the created guild template.
   */
  async create(options = {}) {
    const body = GuildTemplateManager.transformPayload(options);
    const template = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/templates`, {
      body,
    });
    return this._add(template);
  }

  /**
   * Edits a guild template with the given code and options.
   * @param {string | GuildTemplate} code - The code or GuildTemplate object of the template to edit.
   * @param {Object} [options] - The options for editing the template.
   * @returns {Promise<GuildTemplate>} A promise that resolves with the edited GuildTemplate object.
   * @throws {RangeError} If the code is not provided.
   */
  async edit(code, options = {}) {
    if (!code) throw new RangeError(`The code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const body = GuildTemplateManager.transformPayload(options);
    const template = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/templates/${code}`, {body});
    return this._add(template);
  }

  /**
   * Synchronizes a guild template with the provided code.
   * @param {string | GuildTemplate} code - The code or GuildTemplate object to sync.
   * @returns {Promise<GuildTemplate>} - A promise that resolves with the synchronized GuildTemplate.
   * @throws {RangeError} - If the code is not provided.
   */
  async sync(code) {
    if (!code) throw new RangeError(`The code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const template = await this.client.api.put(`${this.client.root}/guilds/${this.guildId}/templates/${code}`);
    return this._add(template);
  }

  /**
   * Deletes a guild template.
   * @param {string | GuildTemplate} code - The code or GuildTemplate object of the template to delete.
   * @returns {Promise<GuildTemplate>} A promise that resolves with the deleted template.
   * @throws {RangeError} If the code is not provided.
   */
  async delete(code) {
    if (!code) throw new RangeError(`The code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const template = await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/templates/${code}`);
    return this._add(template, {cache: false});
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the given payload object by extracting the "name" and "description" properties.
   * If these properties are not present in the object, they will be set to undefined in the returned object.
   * @param {Object} o - The payload object to transform.
   * @returns {Object} - The transformed object with "name" and "description" properties.
   */
  static transformPayload(o = {}) {
    return {
      name: o.name ?? undefined,
      description: o.description ?? undefined,
    };
  }
}

module.exports = GuildTemplateManager;
