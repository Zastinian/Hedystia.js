const { RaidenCol } = require("../../Util/@Collections/RaidenCol");
const { OptionType, ChannelType } = require("../../Util/Constants");
const Base = require("../../Base/base");
class SlashOption extends Base {
  constructor(data = {}, client) {
    super(client);
    this.type =
      (typeof data.type === "number" ? OptionType[data.type] : data.type) ??
      null;
    this.name = data.name ?? null;
    this.description = data.description ?? null;
    this.required = data.required ?? null;
    this.choices =
      data.choices?.map((o) => SlashOption.transformChoices(o)) ?? null;
    this.channelTypes =
      data.channel_types
        ?.map((o) => SlashOption.transformChannelTypes(o))
        ?.filter((item) => item) ?? null;
    this.minValue = data.min_value ?? null;
    this.maxValue = data.max_value ?? null;
    this.minLength = data.min_length ?? null;
    this.maxLength = data.max_length ?? null;
    this.autocomplete = data.autocomplete ?? null;
    this.options = new RaidenCol(
      data.options?.map((o) => [o.name, new SlashOption(o, this.client)])
    );
  }

  static transformChoices(o = {}) {
    return {
      name: o.name ?? undefined,
      value: o.value ?? undefined,
    };
  }

  static transformChannelTypes(channel = {}) {
    return typeof channel === "number" ? ChannelType[channel] : channel;
  }
}

module.exports = SlashOption;
