const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
const Sticker = require("./Sticker");
/**
 * Represents a sticker pack.
 * @class
 * @extends Base
 */
class StickerPack extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
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
   * Fetches the nitro pack with the specified ID from the client's nitro packs.
   * @returns {Promise<Sticker | null>} A promise that resolves to the found nitro pack or null if not found.
   */
  async fetch() {
    const sticker = await this.client.fetchNitroPacks();
    return sticker?.find((o) => o.id === this.id) ?? null;
  }

  /**
   * Retrieves the URL of the banner image for the sticker pack.
   * @param {Object} options - The options for the banner image.
   * @param {string} options.size - The desired size of the banner image.
   * @param {string} options.format - The desired format of the banner image.
   * @returns {string | null} The URL of the banner image, or null if the bannerAssetId is not set.
   */
  bannerURL(options) {
    if (!this.bannerAssetId) return null;
    return this.client.cdn.StickerPackbanner(this.bannerAssetId, options.size, options.format);
  }
}

module.exports = StickerPack;
