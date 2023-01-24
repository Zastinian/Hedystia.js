const {RaidenCol} = require("../../Util/@Collections/RaidenCol");
const {OptionType, ChannelType} = require("../../Util/Constants");
const Base = require("../../Base/base");
/* It's a class that represents a slash command option */
class SlashOption extends Base {
  /**
   * It takes in a JSON object and returns a SlashOption object
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client that instantiated the object.
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
   * It takes an object and returns a new object with the same keys but with the values transformed
   * @param [o] - The object to transform.
   * @returns An object with the properties name and value.
   */
  static transformChoices(o = {}) {
    return {
      name: o.name ?? undefined,
      value: o.value ?? undefined,
    };
  }

  /**
   * It takes a channel object and returns the channel type
   * @param [channel] - The channel to transform.
   * @returns The channel type is being returned.
   */
  static transformChannelTypes(channel = {}) {
    return typeof channel === "number" ? ChannelType[channel] : channel;
  }
}

module.exports = SlashOption;
