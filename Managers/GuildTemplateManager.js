const GuildTemplate = require("../Structures/GuildTemplate");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a manager for guild templates */
class GuildTemplateManager extends Base {
  /**
   * `constructor(guildId, client)` is a function that takes two parameters, `guildId` and `client`, and
   * sets the `guildId` property of the class to the `guildId` parameter, and the `client` property of
   * the class to the `client` parameter
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It adds a template to the cache
   * @param templates - The template code or template object.
   * @param [options] - An object with the following properties:
   * @returns A new GuildTemplate object.
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
   * It fetches all the templates from the API and returns a new cache of them
   * @param [options] - An object containing the following properties:
   * @returns A new instance of the cache constructor.
   */
  async fetch(options = {}) {
    const {cache = true, force = false} = options;
    const templates = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/templates`);
    return new this.cache.constructor(templates?.map((o) => [o.code, this._add(o, {cache, force})]));
  }

  /**
   * `create` creates a new guild template
   * @param [options] - An object containing the following properties:
   * @returns A new GuildTemplate instance.
   */
  async create(options = {}) {
    const body = GuildTemplateManager.transformPayload(options);
    const template = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/templates`, {
      body,
    });
    return this._add(template);
  }

  /**
   * It edits a guild template
   * @param code - The code of the template you want to edit.
   * @param [options] - An object containing the following properties:
   * @returns A new GuildTemplate instance.
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
   * It syncs the template with the Discord API
   * @param code - The code of the template you want to sync.
   * @returns A new instance of the GuildTemplate class.
   */
  async sync(code) {
    if (!code) throw new RangeError(`The code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const template = await this.client.api.put(`${this.client.root}/guilds/${this.guildId}/templates/${code}`);
    return this._add(template);
  }

  /**
   * It deletes a guild template
   * @param code - The code of the template you want to delete.
   * @returns A new instance of the GuildTemplate class.
   */
  async delete(code) {
    if (!code) throw new RangeError(`The code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const template = await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/templates/${code}`);
    return this._add(template, {cache: false});
  }

  /**
   * `return Collection;`
   * @returns The cache property is being returned.
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes an object and returns a new object with only the properties that are defined
   * @param [o] - The object to transform.
   * @returns The transformPayload function is being returned.
   */
  static transformPayload(o = {}) {
    return {
      name: o.name ?? undefined,
      description: o.description ?? undefined,
    };
  }
}

module.exports = GuildTemplateManager;
