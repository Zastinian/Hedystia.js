const {StickerFormatType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * Represents a partial sticker object.
 * @class
 * @extends Base
 */
class PartialSticker extends Base {
  /**
   * Constructs a new instance of the Sticker class.
   * @constructor
   * @param {Object} [data] - The data object containing the sticker information.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.formatType = (typeof data.format_type === "number" ? StickerFormatType[data.format_type] : data.format_type) ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
  }

  /**
   * Fetches a sticker using the client's fetchSticker method.
   * @returns {Promise} A promise that resolves with the fetched sticker.
   */
  async fetch() {
    return await this.client.fetchSticker(this);
  }
}

module.exports = PartialSticker;
