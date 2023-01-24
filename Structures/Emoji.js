const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/* This class is used to represent an emoji */
class Emoji extends Base {
  /**
   * It's a constructor for the Emoji class
   * @param [data] - The data that was passed to the constructor.
   * @param guildId - The ID of the guild this emoji is in.
   * @param client - The client that instantiated the Emoji
   */
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

  /**
   * `fetch` fetches the emoji from the guild
   * @param [options] - An object with the following properties:
   * @returns The emoji object
   */
  async fetch(options = {}) {
    return await this.guild?.emojis.fetch(this, options);
  }

  /**
   * `edit` edits the emoji
   * @param [options] - An object containing the new properties of the emoji.
   * @returns The edited emoji.
   */
  async edit(options = {}) {
    return await this.guild?.emojis.edit(this, options);
  }

  /**
   * `setName` sets the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the change.
   * @returns The name of the channel.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * It sets the roles of a member
   * @param roles - The roles to set.
   * @param reason - The reason for the edit.
   * @returns The roles of the member.
   */
  async setRoles(roles, reason) {
    return await this.edit({roles, reason});
  }

  /**
   * `delete` deletes the emoji
   * @param reason - The reason for the deletion.
   * @returns The emoji object.
   */
  async delete(reason) {
    return await this.guild?.emojis.delete(this, reason);
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  imageURL(options = {}) {
    return this.client.cdn.EmojiURL(this.id, this.animated ? true : false, options.size, options.format, options.quality);
  }

  equals(emoji) {
    if (!(emoji instanceof Emoji)) return false;
    return this.name === emoji.name || this.roles.some((o) => emoji.roles?.includes(typeof o === "string" ? o : o.id));
  }
}

module.exports = Emoji;
