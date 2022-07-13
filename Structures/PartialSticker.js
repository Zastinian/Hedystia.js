const { StickerFormatType } = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
class PartialSticker extends Base {
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.formatType =
      (typeof data.format_type === "number"
        ? StickerFormatType[data.format_type]
        : data.format_type) ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
  }

  async fetch() {
    return await this.client.fetchSticker(this);
  }
}

module.exports = PartialSticker;
