const Sticker = require("../Structures/Sticker");
const StickerPayload = require("../Util/StickerPayload");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a Sticker Manager that handles operations related to stickers in a guild.
 * @class
 * @extends Base
 */
class StickerManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a sticker to the cache and returns the sticker object.
   * @param {string | Sticker} stickers - The sticker object or sticker ID to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the sticker belongs.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the sticker.
   * @param {boolean} [options.cache=true] - Whether to cache the sticker object.
   * @param {boolean} [options.force=false] - Whether to force fetching the sticker even if it is already in the cache.
   * @returns {Sticker | null} The sticker object that was added to the cache
   */
  _add(stickers, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!stickers) return null;
    const stickerId = typeof stickers === "string" ? stickers : stickers.id;
    let sticker;
    if (this.cache.has(stickerId) && !options.force) {
      sticker = this.cache.get(stickerId);
    } else {
      const Stickers = new Sticker(
        typeof stickers === "string"
          ? {
              partial: true,
              id: stickerId,
            }
          : stickers,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(stickerId, Stickers);

      sticker = Stickers;
    }

    return sticker;
  }

  /**
   * Fetches a sticker from the server based on the provided sticker ID or options.
   * @param {string | object} sticker - The sticker ID or options object.
   * @param {object} [options] - The options for fetching the sticker.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched sticker.
   * @param {boolean} [options.force=false] - Whether to force fetch the sticker even if it is already cached.
   * @returns {Promise<Sticker>} - A promise that resolves to the fetched sticker.
   */
  async fetch(sticker, options) {
    if (typeof sticker?.id !== "undefined" || typeof sticker === "string") return this._fetchId(sticker, options?.cache, options?.force);
    if (typeof sticker === "object" && !options) options = sticker;
    const {cache = true, force = false} = options ?? {};
    sticker = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/stickers`);
    return new this.cache.constructor(sticker?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * Fetches the ID of a sticker from the server.
   * @param {string | Sticker} sticker - The sticker or sticker ID to fetch.
   * @param {boolean} [cache=true] - Whether to cache the fetched sticker.
   * @param {boolean} [force=false] - Whether to force fetching the sticker even if it is already cached.
   * @returns {Promise<Sticker>} - A promise that resolves with the fetched sticker.
   */
  async _fetchId(sticker, cache = true, force = false) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    if (this.cache.has(stickerId) && force) return this.cache.get(stickerId);
    sticker = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`);
    return this._add(sticker, sticker.guild_id, {cache, force: true});
  }

  /**
   * Creates a sticker in the guild.
   * @param {Object} [options] - The options for creating the sticker.
   * @param {string} [options.reason] - The reason for creating the sticker.
   * @returns {Promise<Sticker>} A promise that resolves with the created sticker.
   */
  async create(options = {}) {
    const {reason} = options;
    const body = await StickerPayload.create(options);
    const sticker = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/stickers`, {
      reason,
      body,
    });
    return this._add(sticker);
  }

  /**
   * Edits a sticker with the given options.
   * @param {string | Sticker} sticker - The sticker to edit. Can be either a sticker ID or a sticker object.
   * @param {Object} [options] - The options for editing the sticker.
   * @param {string} [options.reason] - The reason for editing the sticker.
   * @returns {Promise<Sticker>} A promise that resolves with the edited sticker.
   */
  async edit(sticker, options = {}) {
    const {reason} = options;
    const body = await StickerPayload.create(options);
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    sticker = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`, {reason, body});
    return this._add(sticker);
  }

  /**
   * Deletes a sticker from the guild.
   * @param {string | Sticker} sticker - The sticker to delete. Can be either a sticker ID or a sticker object.
   * @param {string} reason - The reason for deleting the sticker.
   * @returns {Promise<Sticker>} - The deleted sticker object.
   * @throws {Error} - If the sticker deletion fails.
   */
  async delete(sticker, reason) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    const deletedSticker = this._add(sticker);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`, {reason});
    return deletedSticker;
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = StickerManager;
