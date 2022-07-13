const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
class Emoji extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = guildId;
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.roles = data.roles ?? null;
    this.user = this.client.users._add(data.user) ?? null;
    this.requireColons = data.require_colons ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.managed = data.managed ?? null;
    this.animated = data.animated ?? null;
    this.available = data.available ?? null;
  }

  async fetch(options = {}) {
    return await this.guild?.emojis.fetch(this, options);
  }

  async edit(options = {}) {
    return await this.guild?.emojis.edit(this, options);
  }

  async setName(name, reason) {
    return await this.edit({ name, reason });
  }

  async setRoles(roles, reason) {
    return await this.edit({ roles, reason });
  }

  async delete(reason) {
    return await this.guild?.emojis.delete(this, reason);
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  imageURL(options = {}) {
    return this.client.cdn.EmojiURL(
      this.id,
      this.animated ? true : false,
      options.size,
      options.format,
      options.quality
    );
  }

  equals(emoji) {
    if (!(emoji instanceof Emoji)) return false;
    return (
      this.name === emoji.name ||
      this.roles.some((o) =>
        emoji.roles?.includes(typeof o === "string" ? o : o.id)
      )
    );
  }
}

module.exports = Emoji;
