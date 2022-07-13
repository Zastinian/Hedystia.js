const Sticker = require("../Structures/Sticker");
const StickerPayload = require("../Util/StickerPayload");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class StickerManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(
    stickers,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
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

  async fetch(sticker, options) {
    if (typeof sticker?.id !== "undefined" || typeof sticker === "string")
      return this._fetchId(sticker, options?.cache, options?.force);
    if (typeof sticker === "object" && !options) options = sticker;
    const { cache = true, force = false } = options ?? {};
    sticker = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/stickers`
    );
    return new this.cache.constructor(
      sticker?.map((o) => [o.id, this._add(o, this.guildId, { cache, force })])
    );
  }

  async _fetchId(sticker, cache = true, force = false) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    if (this.cache.has(stickerId) && force) return this.cache.get(stickerId);
    sticker = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`
    );
    return this._add(sticker, sticker.guild_id, { cache, force: true });
  }

  async create(options = {}) {
    const { reason } = options;
    const body = await StickerPayload.create(options);
    const sticker = await this.client.api.post(
      `${this.client.root}/guilds/${this.guildId}/stickers`,
      { reason, body }
    );
    return this._add(sticker);
  }

  async edit(sticker, options = {}) {
    const { reason } = options;
    const body = await StickerPayload.create(options);
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    sticker = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`,
      { reason, body }
    );
    return this._add(sticker);
  }

  async delete(sticker, reason) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    const deletedSticker = this._add(sticker);
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/stickers/${stickerId}`,
      { reason }
    );
    return deletedSticker;
  }

  get cache() {
    return Collection;
  }
}

module.exports = StickerManager;
