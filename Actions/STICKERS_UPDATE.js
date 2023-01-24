const StickerManager = require("../Managers/StickerManager");
const BaseAction = require("./BaseAction");
class StickersUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const stickers = new StickerManager(this.client);
    const deletedStickers = new Map(stickers.cache);
    for (let val of packet.stickers) {
      const cachedSticker = stickers.cache.get(val.id);
      if (cachedSticker) {
        deletedStickers.delete(val.id);
        if (!cachedSticker.equals(val))
          this.client.emit("stickersUpdate", cachedSticker, stickers._add(val, packet.guild_id, {cache: true, force: true}));
      } else {
        if (!stickers.cache.has(val.id)) this.client.emit("stickersCreate", stickers._add(val, packet.guild_id));
      }
    }

    for (let sticker of deletedStickers.values()) {
      this.client.emit("stickersDelete", sticker);
      stickers.cache.delete(sticker.id);
    }
    return;
  }
}

module.exports = StickersUpdate;
