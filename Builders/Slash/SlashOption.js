const {OptionType, ChannelType} = require("../../Util/Constants");
class SlashOption {
  constructor(data = {}) {
    this.type = (typeof data.type === "number" ? OptionType[data.type] : data.type) ?? "String";
    this.name = data.name ?? undefined;
    this.nameLocalizations = data.name_localizations ?? data.nameLocalizations ?? undefined;
    this.description = data.description ?? undefined;
    this.descriptionLocalizations = data.description_localizations ?? data.descriptionLocalizations ?? undefined;
    this.required = data.required ?? undefined;
    this.choices = data.choices?.map((o) => SlashOption.transformChoices(o));
    this.channelTypes = (data.channel_types ?? data.channelTypes)?.map((o) => SlashOption.transformChannelType(o)) ?? undefined;
    this.minValue = data.min_value ?? data.minValue ?? undefined;
    this.maxValue = data.max_value ?? data.maxValue ?? undefined;
    this.minLength = data.min_length ?? data.minLength ?? undefined;
    this.maxLength = data.max_length ?? data.maxLength ?? undefined;
    this.autocomplete = data.autocomplete ?? undefined;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setRequired(required) {
    this.required = required;
    return this;
  }

  setDescriptionLocalizations(localizations) {
    this.descriptionLocalizations = localizations;
    return this;
  }

  setNameLocalizations(localizations = {}) {
    this.nameLocalizations = localizations;
    return this;
  }

  setChoices(...choices) {
    if (Array.isArray(choices[0])) {
      this.choices = choices[0]?.map((o) => SlashOption.transformChoices(o));
    } else {
      this.choices = choices?.map((o) => SlashOption.transformChoices(o));
    }

    return this;
  }

  setChannelTypes(...channelTypes) {
    if (Array.isArray(channelTypes[0])) {
      this.channelTypes = channelTypes[0]?.map((o) => SlashOption.transformChannelType(o));
    } else {
      this.channelTypes = channelTypes?.map((o) => SlashOption.transformChannelType(o));
    }

    return this;
  }

  setMinValue(minValue) {
    this.minValue = minValue;
    return this;
  }

  setMaxValue(maxValue) {
    this.maxValue = maxValue;
    return this;
  }

  setMinLength(minLength) {
    this.minLength = minLength;
    return this;
  }

  setMaxLength(maxLength) {
    this.maxLength = maxLength;
    return this;
  }

  setAutocomplete(autocomplete) {
    this.autocomplete = autocomplete;
    return this;
  }

  static transformChannelType(channelType) {
    return typeof channelType === "string" ? ChannelType[channelType] : channelType;
  }

  static transformChoices(choices) {
    return {
      name: choices.name ?? undefined,
      value: choices.value ?? undefined,
      name_localizations: choices.nameLocalizations ?? undefined,
    };
  }

  validation() {
    if (!OptionType[this.type]) throw new RangeError(`Option type is invalid`);
    if (!this.name || this.name?.length < 1) throw new RangeError(`Option name must be non empty`);
    if (!this.description || this.description?.length < 1) throw new RangeError(`Option description must be non empty`);
    if (typeof this?.name !== "string" || typeof this?.description !== "string") throw new TypeError(`Option name or description must be string`);
    if (this.name.length > 32) throw new RangeError(`Option name must be less than or equal to 32 in length`);
    if (this.description.length > 100) throw new RangeError(`Option description must be less than or equal to 100 in length`);
    if (typeof this.required !== "boolean" && this.required) throw new TypeError(`Option required must be boolean`);
    if (this.choices?.length > 25) throw new RangeError(`Option choices must be less than or equal to 25 in length`);
    if (typeof this.autocomplete !== "boolean" && this.autocomplete) throw new TypeError(`Option autocomplete must be boolean`);
    return;
  }

  toJSON() {
    this.validation();
    return {
      type: typeof this.type === "string" ? OptionType[this.type] : this.type,
      name: this.name,
      name_localizations: this.nameLocalizations,
      description: this.description,
      description_localizations: this.descriptionLocalizations,
      required: this.required,
      choices: this.choices,
      channel_types: this.channelTypes?.map((o) => SlashOption.transformChannelType(o)),
      min_value: this.minValue,
      max_value: this.maxValue,
      max_length: this.maxLength,
      min_length: this.minLength,
      autocomplete: this.autocomplete,
    };
  }
}

module.exports = SlashOption;
