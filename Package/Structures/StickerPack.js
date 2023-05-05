const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
const Sticker = require("./Sticker");
/**
 * It's a class that represents a sticker pack
 * @class
 * @extends Base
 */
class StickerPack extends Base {
  /**
   * It's a constructor function that takes in data and a client, and then sets the data to the class
   * properties.
   * @param [data]
   * @param client - Discord.js Client
   */
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.stickers = new RaidenCol(data.stickers?.map((o) => [o.id, new Sticker(o, o.guild_id, this.client)]));
    this.name = data.name ?? null;
    this.skuId = data.sku_id ?? null;
    this.coverStickerId = data.cover_sticker_id ?? null;
    this.description = data.description ?? null;
    this.bannerAssetId = data.banner_asset_id ?? null;
  }

  /**
   * It fetches the sticker pack from Discord's API and returns it
   * @returns The sticker object.
   */
  async fetch() {
    const sticker = await this.client.fetchNitroPacks();
    return sticker?.find((o) => o.id === this.id) ?? null;
  }

  /**
   * It returns the URL of the banner image of the sticker pack.
   * @param options
   * @returns The URL of the banner image.
   */
  bannerURL(options) {
    if (!this.bannerAssetId) return null;
    return this.client.cdn.StickerPackbanner(this.bannerAssetId, options.size, options.format);
  }
}

module.exports = StickerPack;
