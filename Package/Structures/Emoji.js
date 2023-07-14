const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * Represents an Emoji object.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the emoji information.
 * @param {string} guildId - The ID of the guild that the emoji belongs to.
 * @param {Client} client - The client instance.
 */
class Emoji extends Base {
  /**
   * Constructs a new instance of the GuildEmoji class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the emoji.
   * @param {string} guildId - The ID of the guild that the emoji belongs to.
   * @param {Client} client - The client instance.
   * @returns {GuildEmoji} - The newly created GuildEmoji instance.
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
   * Fetches emojis from the guild.
   * @param {Object} options - Optional parameters for the fetch operation.
   * @returns {Promise} A promise that resolves to the fetched emojis.
   */
  async fetch(options = {}) {
    return await this.guild?.emojis.fetch(this, options);
  }

  /**
   * Edits the current emoji with the provided options.
   * @param {Object} options - The options to update the emoji with.
   * @returns {Promise} A promise that resolves with the updated emoji.
   */
  async edit(options = {}) {
    return await this.guild?.emojis.edit(this, options);
  }

  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the roles for the current object.
   * @param {Array} roles - The roles to set.
   * @param {string} reason - The reason for setting the roles.
   * @returns {Promise} A promise that resolves when the roles are successfully set.
   */
  async setRoles(roles, reason) {
    return await this.edit({roles, reason});
  }

  /**
   * Deletes the emoji from the guild.
   * @param {string} reason - The reason for deleting the emoji.
   * @returns {Promise<void>} - A promise that resolves when the emoji is deleted.
   */
  async delete(reason) {
    return await this.guild?.emojis.delete(this, reason);
  }

  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * Generates the URL for the image of this emoji.
   * @param {Object} options - The options for generating the URL.
   * @param {number} options.size - The desired size of the image.
   * @param {string} options.format - The desired format of the image.
   * @param {number} options.quality - The desired quality of the image.
   * @returns {string} The URL of the image.
   */
  imageURL(options = {}) {
    return this.client.cdn.EmojiURL(this.id, this.animated ? true : false, options.size, options.format, options.quality);
  }

  /**
   * Checks if the given object is equal to this Emoji object.
   * @param {Emoji} emoji - The object to compare with this Emoji.
   * @returns {boolean} True if the objects are equal, false otherwise.
   */
  equals(emoji) {
    if (!(emoji instanceof Emoji)) return false;
    return this.name === emoji.name || this.roles.some((o) => emoji.roles?.includes(typeof o === "string" ? o : o.id));
  }
}

module.exports = Emoji;
