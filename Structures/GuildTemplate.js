const Base = require("../Base/base");
const APIGuild = require("./Misc/APIGuild");
class GuildTemplate extends Base {
  constructor(data = {}, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.code = data.code ?? null;
    this.name = data.name ?? null;
    this.description = data.description ?? null;
    this.usageCount = data.usage_count ?? null;
    this.creatorId = data.creator_id ?? null;
    this.creator = this.client.users._add(data.creator, { cache: false });
    this.createdAt = data.created_at ? new Date(data.created_at) : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.updatedAt = data.updated_at ? new Date(data.updated_at) : null;
    this.updatedTimestamp = this.updatedAt?.getTime() ?? null;
    this.sourceGuildId = data.source_guild_id ?? null;
    this.serializedSourceGuild = data.serialized_source_guild
      ? new APIGuild(data.serialized_source_guild, this.client)
      : null;
    this.dirty = data.is_dirty ?? null;
    this.url = `https://discord.new/${this.code}`;
  }

  async fetch() {
    return await this.client.fetchGuildTemplate(this.code);
  }

  async sync() {
    return await this.guild?.templates.sync(this.code);
  }

  async edit(options = {}) {
    return await this.guild?.templates.edit(this.code, options);
  }

  async delete() {
    return await this.guild?.templates.delete(this.code);
  }

  async setName(name) {
    return await this.edit({ name });
  }

  async setDescription(description) {
    return await this.edit({ description });
  }

  get guild() {
    return this.client.guilds._add(this.sourceGuildId);
  }

  async createGuild(options = {}) {
    return await this.client.generateTemplate(this.code, options);
  }
}

module.exports = GuildTemplate;
