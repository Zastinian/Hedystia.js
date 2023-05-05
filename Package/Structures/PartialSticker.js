const {StickerFormatType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * It's a class that represents a partial sticker
 * @class
 * @extends Base
 */
class PartialSticker extends Base {
  /**
   * This function is a constructor for the Sticker class, which is a subclass of the Base class, and it
   * takes in a data object and a client object, and it sets the id, name, formatType, createdAt, and
   * createdTimestamp properties of the Sticker class to the values of the id, name, format_type, id,
   * and createdAt properties of the data object, respectively, and it returns the Sticker class.
   * @param [data] - The data that was passed to the constructor.
   * @param client - The client that instantiated the object.
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
   * It fetches the sticker
   * @returns The sticker object itself.
   */
  async fetch() {
    return await this.client.fetchSticker(this);
  }
}

module.exports = PartialSticker;
