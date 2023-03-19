const Sticker = require("../Structures/Sticker");
const StickerPayload = require("../Util/StickerPayload");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages stickers */
class StickerManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a sticker to the cache
   * @param stickers - The sticker object or sticker ID.
   * @param [guildId] - The guild ID to use for the sticker.
   * @param [options] - cache = true, force = false
   * @returns A sticker object
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
   * It fetches all the stickers in a guild
   * @param sticker - The sticker to fetch. Can be a sticker ID, a sticker object, or nothing.
   * @param options - An object containing the following properties:
   * @returns A new cache object with the sticker id and the sticker object
   */
  async fetch(sticker, options) {
    if (typeof sticker?.id !== "undefined" || typeof sticker === "string") return this._fetchId(sticker, options?.cache, options?.force);
    if (typeof sticker === "object" && !options) options = sticker;
    const {cache = true, force = false} = options ?? {};
    sticker = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/stickers`);
    return new this.cache.constructor(sticker?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * It fetches a sticker from the API and adds it to the cache
   * @param sticker - The sticker object or ID.
   * @param [cache=true] - Whether or not to cache the sticker.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The sticker object
   */
  async _fetchId(sticker, cache = true, force = false) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    if (this.cache.has(stickerId) && force) return this.cache.get(stickerId);
    sticker = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`);
    return this._add(sticker, sticker.guild_id, {cache, force: true});
  }

  /**
   * It creates a sticker.
   * @param [options] - An object containing the following properties:
   * @returns A new sticker object
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
   * It edits a sticker.
   * @param sticker - The sticker to edit. Can be a sticker object or a sticker ID.
   * @param [options] - An object containing the following properties:
   * @returns A sticker object
   */
  async edit(sticker, options = {}) {
    const {reason} = options;
    const body = await StickerPayload.create(options);
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    sticker = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`, {reason, body});
    return this._add(sticker);
  }

  /**
   * It deletes a sticker
   * @param sticker - The sticker to delete. Can be a sticker object or a sticker ID.
   * @param reason - The reason for the deletion.
   * @returns The deleted sticker
   */
  async delete(sticker, reason) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    const deletedSticker = this._add(sticker);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`, {reason});
    return deletedSticker;
  }

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }
}

module.exports = StickerManager;
