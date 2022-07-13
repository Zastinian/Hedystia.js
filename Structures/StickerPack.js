const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
const Sticker = require("./Sticker");
class StickerPack extends Base {
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.stickers = new RaidenCol(
      data.stickers?.map((o) => [o.id, new Sticker(o, o.guild_id, this.client)])
    );
    this.name = data.name ?? null;
    this.skuId = data.sku_id ?? null;
    this.coverStickerId = data.cover_sticker_id ?? null;
    this.description = data.description ?? null;
    this.bannerAssetId = data.banner_asset_id ?? null;
  }

  async fetch() {
    const sticker = await this.client.fetchNitroPacks();
    return sticker?.find((o) => o.id === this.id) ?? null;
  }

  bannerURL(options) {
    if (!this.bannerAssetId) return null;
    return this.client.cdn.StickerPackbanner(
      this.bannerAssetId,
      options.size,
      options.format
    );
  }
}

module.exports = StickerPack;
