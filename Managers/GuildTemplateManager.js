const GuildTemplate = require("../Structures/GuildTemplate");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class GuildTemplateManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  _add(templates, options = { cache: true, force: false }) {
    if (!templates) return null;
    const templateCode =
      typeof templates === "string" ? templates : templates.code;
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

  async fetch(options = {}) {
    const { cache = true, force = false } = options;
    const templates = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/templates`
    );
    return new this.cache.constructor(
      templates?.map((o) => [o.code, this._add(o, { cache, force })])
    );
  }

  async create(options = {}) {
    const body = GuildTemplateManager.transformPayload(options);
    const template = await this.client.api.post(
      `${this.client.root}/guilds/${this.guildId}/templates`,
      { body }
    );
    return this._add(template);
  }

  async edit(code, options = {}) {
    if (!code) throw new RangeError(`El código es necesario!`);
    if (/^(http(s)?)/gi.test(code))
      code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const body = GuildTemplateManager.transformPayload(options);
    const template = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/templates/${code}`,
      { body }
    );
    return this._add(template);
  }

  async sync(code) {
    if (!code) throw new RangeError(`El código es necesario!`);
    if (/^(http(s)?)/gi.test(code))
      code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const template = await this.client.api.put(
      `${this.client.root}/guilds/${this.guildId}/templates/${code}`
    );
    return this._add(template);
  }

  async delete(code) {
    if (!code) throw new RangeError(`El código es necesario!`);
    if (/^(http(s)?)/gi.test(code))
      code = code.slice(code.lastIndexOf("/") + 1);
    if (code instanceof GuildTemplate) code = code.code;
    const template = await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/templates/${code}`
    );
    return this._add(template, { cache: false });
  }

  get cache() {
    return Collection;
  }

  static transformPayload(o = {}) {
    return {
      name: o.name ?? undefined,
      description: o.description ?? undefined,
    };
  }
}

module.exports = GuildTemplateManager;
