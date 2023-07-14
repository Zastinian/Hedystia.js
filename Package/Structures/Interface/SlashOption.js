const {RaidenCol} = require("../../Util/@Collections/RaidenCol");
const {OptionType, ChannelType} = require("../../Util/Constants");
const Base = require("../../Base/base");
/**
 * Represents a slash command option.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the option properties.
 * @param {Client} client - The client object.
 * @property {string} type - The type of the option.
 * @property {string} name - The name of the option.
 * @property {string} description - The description of the option.
 * @property {boolean} required - Whether the option is required or not.
 * @property {Array<Object>} choices - The choices available for the option.
 * @property {Array<string>} channelTypes - The types of channels the option can be used in.
 * @property {number} minValue
 */
class SlashOption extends Base {
  /**
   * Constructs a new instance of the SlashOption class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the SlashOption.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, client) {
    super(client);
    this.type = (typeof data.type === "number" ? OptionType[data.type] : data.type) ?? null;
    this.name = data.name ?? null;
    this.description = data.description ?? null;
    this.required = data.required ?? null;
    this.choices = data.choices?.map((o) => SlashOption.transformChoices(o)) ?? null;
    this.channelTypes = data.channel_types?.map((o) => SlashOption.transformChannelTypes(o))?.filter((item) => item) ?? null;
    this.minValue = data.min_value ?? null;
    this.maxValue = data.max_value ?? null;
    this.minLength = data.min_length ?? null;
    this.maxLength = data.max_length ?? null;
    this.autocomplete = data.autocomplete ?? null;
    this.options = new RaidenCol(data.options?.map((o) => [o.name, new SlashOption(o, this.client)]));
  }

  /**
   * Transforms an object into a new object with the properties "name" and "value".
   * If the original object does not have a "name" or "value" property, the corresponding
   * property in the new object will be set to undefined.
   * @param {Object} o - The original object to transform.
   * @returns {Object} - The transformed object with "name" and "value" properties.
   */
  static transformChoices(o = {}) {
    return {
      name: o.name ?? undefined,
      value: o.value ?? undefined,
    };
  }

  /**
   * Transforms the channel type from a number to its corresponding string representation.
   * @param {number | object} channel - The channel type to transform. If it is a number, it will be converted to its string representation. If it is an object, it will be returned as is.
   * @returns {string | object} - The transformed channel type.
   */
  static transformChannelTypes(channel = {}) {
    return typeof channel === "number" ? ChannelType[channel] : channel;
  }
}

module.exports = SlashOption;
