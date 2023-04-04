const {OptionType, ChannelType} = require("../../Util/Constants");

/**
 * Represents an option for a slash command.
 * @class
 */
class SlashOption {
  /**
   * Creates a new instance of the SlashOption class.
   * @param {Object} [data={}] - The data for the option.
   * @param {string|number} [data.type="String"] - The type of the option.
   * @param {string} [data.name] - The name of the option.
   * @param {Object} [data.name_localizations] - The localized names of the option.
   * @param {string} [data.description] - The description of the option.
   * @param {Object} [data.description_localizations] - The localized descriptions of the option.
   * @param {boolean} [data.required] - Whether the option is required or not.
   * @param {Array<Object>} [data.choices] - The choices for the option.
   * @param {Array<string>} [data.channel_types] - The channel types that the option can be used with.
   * @param {number} [data.min_value] - The minimum value for the option.
   * @param {number} [data.max_value] - The maximum value for the option.
   * @param {number} [data.min_length] - The minimum length for the option.
   * @param {number} [data.max_length] - The maximum length for the option.
   * @param {boolean} [data.autocomplete] - Whether the option should be autocompleted or not.
   */
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

  /**
   * Sets the type of the option.
   * @param {string|number} type - The type of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Sets the name of the option.
   * @param {string} name - The name of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Sets the description of the option.
   * @param {string} description - The description of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Sets whether the option is required or not.
   * @param {boolean} required - Whether the option is required or not.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Sets the localized descriptions of the option.
   * @param {Object} localizations - The localized descriptions of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setDescriptionLocalizations(localizations) {
    this.descriptionLocalizations = localizations;
    return this;
  }

  /**
   * Sets the localized names of the option.
   * @param {Object} [localizations={}] - The localized names of the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setNameLocalizations(localizations = {}) {
    this.nameLocalizations = localizations;
    return this;
  }

  /**
   * Sets the choices for the option.
   * @param {...Object|Array<Object>} choices - The choices for the option.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setChoices(...choices) {
    if (Array.isArray(choices[0])) {
      this.choices = choices[0]?.map((o) => SlashOption.transformChoices(o));
    } else {
      this.choices = choices?.map((o) => SlashOption.transformChoices(o));
    }

    return this;
  }

  /**
   * Sets the channel types that the option can be used with.
   * @param {...string|Array<string>} channelTypes - The channel types that the option can be used with.
   * @returns {SlashOption} The updated instance of the SlashOption class.
   */
  setChannelTypes(...channelTypes) {
    if (Array.isArray(channelTypes[0])) {
      this.channelTypes = channelTypes[0]?.map((o) => SlashOption.transformChannelType(o));
    } else {
      this.channelTypes = channelTypes?.map((o) => SlashOption.transformChannelType(o));
    }

    return this;
  }

  /**
   * Sets the minimum value allowed for the option.
   * @param {number} minValue - The minimum value.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMinValue(minValue) {
    this.minValue = minValue;
    return this;
  }

  /**
   * Sets the maximum value allowed for the option.
   * @param {number} maxValue - The maximum value.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMaxValue(maxValue) {
    this.maxValue = maxValue;
    return this;
  }

  /**
   * Sets the minimum length allowed for the option.
   * @param {number} minLength - The minimum length.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMinLength(minLength) {
    this.minLength = minLength;
    return this;
  }

  /**
   * Sets the maximum length allowed for the option.
   * @param {number} maxLength - The maximum length.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setMaxLength(maxLength) {
    this.maxLength = maxLength;
    return this;
  }

  /**
   * Sets whether the option is autocompletable.
   * @param {boolean} autocomplete - Whether the option is autocompletable.
   * @returns {SlashOption} - The current instance of the SlashOption class.
   */
  setAutocomplete(autocomplete) {
    this.autocomplete = autocomplete;
    return this;
  }

  /**
   * Transforms a channel type string to its respective integer value.
   * @param {string} channelType - The channel type string.
   * @returns {number} - The channel type integer value.
   */
  static transformChannelType(channelType) {
    return typeof channelType === "string" ? ChannelType[channelType] : channelType;
  }

  /**
   * Transforms the choices object to a format suitable for the API.
   * @param {Object} choices - The choices object.
   * @param {string} [choices.name] - The name of the choice.
   * @param {string} [choices.value] - The value of the choice.
   * @param {Object.<string, string>} [choices.nameLocalizations] - The localized names of the choice.
   * @returns {Object} - The transformed choices object.
   */
  static transformChoices(choices) {
    return {
      name: choices.name ?? undefined,
      value: choices.value ?? undefined,
      name_localizations: choices.nameLocalizations ?? undefined,
    };
  }

  /**
   * Validates the option data and throws an error if any data is invalid.
   * @throws {RangeError} - If option type is invalid, option name or description is empty, or length is greater than limit.
   * @throws {TypeError} - If option name or description is not a string, or option required or autocomplete is not a boolean.
   */
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

  /**
   * Returns a JSON representation of the SlashOption instance, after performing validation.
   * @returns {Object} JSON object with the following properties:
   * - type: The type of option, either as a string or an OptionType enum value.
   * - name: The name of the option.
   * - name_localizations: An object containing localized names for the option.
   * - description: A description of the option.
   * - description_localizations: An object containing localized descriptions for the option.
   * - required: A boolean indicating whether the option is required.
   * - choices: An array of choice objects for the option, if applicable.
   * - channel_types: An array of channel type objects for the option, if applicable.
   * - min_value: The minimum value for the option, if applicable.
   * - max_value: The maximum value for the option, if applicable.
   * - max_length: The maximum length of the option, if applicable.
   * - min_length: The minimum length of the option, if applicable.
   * - autocomplete: A boolean indicating whether the option supports autocomplete.
   */
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
