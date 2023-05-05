const {StickerType, StickerFormatType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * It's a class that represents a sticker in a guild
 * @class
 * @extends Base
 */
class Sticker extends Base {
  /**
   * This function is used to create a new instance of the Sticker class, which is used to represent a
   * sticker in a guild.
   * @param [data] - The data that was received from the API.
   * @param guildId - The ID of the guild the sticker is in
   * @param client - Discord.Client
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
   * It fetches the sticker from the server
   * @param options - An object containing the following properties:
   * @returns The sticker object.
   */
  async fetch(options) {
    return await this.guild?.stickers.fetch(this, options);
  }

  /**
   * It edits the sticker
   * @param options - Object
   * @returns The sticker object.
   */
  async edit(options) {
    return await this.guild?.stickers.edit(this, options);
  }

  /**
   * It deletes the sticker
   * @param reason - The reason for the deletion.
   * @returns The return value of the delete method in the StickerManager class.
   */
  async delete(reason) {
    return await this.guild?.stickers.delete(this, reason);
  }

  /**
   * It edits the name of the channel
   * @param name - The new name of the role.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @param reason - The reason for the edit.
   * @returns The description of the channel.
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * It edits the tags of a message
   * @param tags - The new tags of the user.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setTags(tags, reason) {
    return await this.edit({tags, reason});
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It fetches the Nitro Pack from the Discord API and returns it
   * @returns The pack object.
   */
  async fetchPack() {
    const pack = await this.client.fetchNitroPacks();
    return pack.find((o) => o.id === this.packId) ?? null;
  }

  /**
   * It returns the URL of the sticker image
   * @param [options] - Object
   * @returns The URL of the sticker image.
   */
  imageURL(options = {}) {
    return this.client.cdn.StickerImage(this.id, options.size, options.format);
  }

  /**
   * If the object passed in is not an instance of the Sticker class, return false. Otherwise, return
   * true if the name, description, or tags of the object passed in are equal to the name, description,
   * or tags of the object calling the function.
   * @param sticker - The sticker to compare to.
   * @returns a boolean value.
   */
  equals(sticker) {
    if (!(sticker instanceof Sticker)) return false;
    return this.name === sticker.name || this.description === sticker.description || this.tags === sticker.tags;
  }
}

module.exports = Sticker;
