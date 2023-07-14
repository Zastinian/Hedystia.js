const {StickerType, StickerFormatType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * Represents a Sticker object, extending the Base class.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the sticker information.
 * @param {string} guildId - The ID of the guild the sticker belongs to.
 * @param {Client} client - The client instance.
 */
class Sticker extends Base {
  /**
   * Constructs a Sticker object.
   * @constructor
   * @param {Object} [data] - The data object containing the sticker information.
   * @param {string} guildId - The ID of the guild the sticker belongs to.
   * @param {Client} client - The Discord client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);

    this.partial = data.partial ?? false;
    this.id = data.id ?? null;
    this.packId = data.pack_id ?? null;
    this.name = data.name ?? null;
    this.description = data.description ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.tags = data.tags ?? null;
    this.type = (typeof data.type === "number" ? StickerType[data.type] : data.type) ?? null;
    this.formatType = (typeof data.format_type === "number" ? StickerFormatType[data.format_type] : data.format_type) ?? null;
    this.available = data.available ?? null;
    this.guildId = guildId ?? null;
    this.user = this.client.users._add(data.user) ?? null;
    this.sortValue = data.sort_value ?? null;
  }

  /**
   * Fetches stickers from the guild using the provided options.
   * @param {Object} options - The options for fetching the stickers.
   * @returns {Promise} - A promise that resolves to the fetched stickers.
   */
  async fetch(options) {
    return await this.guild?.stickers.fetch(this, options);
  }

  /**
   * Edits the sticker with the given options.
   * @param {Object} options - The options to edit the sticker.
   * @returns {Promise} A promise that resolves when the sticker is successfully edited.
   */
  async edit(options) {
    return await this.guild?.stickers.edit(this, options);
  }

  /**
   * Deletes the sticker from the guild.
   * @param {string} reason - The reason for deleting the sticker.
   * @returns {Promise<void>} - A promise that resolves when the sticker is deleted.
   */
  async delete(reason) {
    return await this.guild?.stickers.delete(this, reason);
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
   * Sets the description of an object and updates it with the provided reason.
   * @param {string} description - The new description to set.
   * @param {string} reason - The reason for updating the description.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * Sets the tags of an object and provides a reason for the change.
   * @param {Array} tags - The new tags to set.
   * @param {string} reason - The reason for the change.
   * @returns {Promise} - A promise that resolves when the tags are successfully set.
   */
  async setTags(tags, reason) {
    return await this.edit({tags, reason});
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Fetches the Nitro Pack with the specified packId from the client.
   * @returns {Promise<NitroPack | null>} A promise that resolves to the Nitro Pack object if found, or null if not found.
   */
  async fetchPack() {
    const pack = await this.client.fetchNitroPacks();
    return pack.find((o) => o.id === this.packId) ?? null;
  }

  /**
   * Generates the URL for the sticker image with the specified options.
   * @param {Object} options - The options for generating the URL.
   * @param {string} [options.size] - The desired size of the image.
   * @param {string} [options.format] - The desired format of the image.
   * @returns {string} The URL of the sticker image.
   */
  imageURL(options = {}) {
    return this.client.cdn.StickerImage(this.id, options.size, options.format);
  }

  /**
   * Checks if the given object is equal to this sticker.
   * @param {Sticker} sticker - The object to compare with this sticker.
   * @returns {boolean} - True if the objects are equal, false otherwise.
   */
  equals(sticker) {
    if (!(sticker instanceof Sticker)) return false;
    return this.name === sticker.name || this.description === sticker.description || this.tags === sticker.tags;
  }
}

module.exports = Sticker;
