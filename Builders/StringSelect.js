const {ComponentType} = require("../Util/Constants");

/**
 * Represents a select menu with string options.
 * @class
 */
class StringSelect {
  /**
   * @param {Object} [data={}] - The data for the select menu.
   */
  constructor(data = {}) {
    this.type = "String_Select";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.options = data.options?.map((o) => StringSelect.transformOptions(o)) ?? [];
    this.placeholder = data.placeholder ?? undefined;
    this.minValues = data.min_values ?? data.minValues ?? undefined;
    this.maxValues = data.max_values ?? data.maxValues ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  /**
   * Transforms an option object for a string select component into a simpler format.
   * @param {Object} [options={}] - The option object to transform.
   * @returns {Object} - The transformed option object.
   * @throws {RangeError} - If the option object is missing the label or value properties, or if the default property is not a boolean.
   */
  static transformOptions(options = {}) {
    if (!options.label) throw new RangeError(`Label is required`);
    if (!options.value) throw new RangeError(`Value is required`);
    if (typeof options.default !== "boolean" && options.default) throw new RangeError(`By default it should be Boolean`);
    return {
      label: options.label ?? undefined,
      value: options.value ?? undefined,
      description: options.description ?? undefined,
      emoji: StringSelect.transformEmoji(options.emoji) ?? undefined,
      default: options.default ?? undefined,
    };
  }

  /**
   * Transforms an emoji object for a string select component into a simpler format.
   * @param {Object} emoji - The emoji object to transform.
   * @returns {Object} - The transformed emoji object.
   */
  static transformEmoji(emoji) {
    if (!emoji) return;
    if (typeof emoji === "string")
      return {
        id: emoji ?? undefined,
      };

    return {
      name: emoji.name ?? undefined,
      id: emoji.id ?? undefined,
      animated: emoji.animated ?? undefined,
    };
  }

  /**
   * Sets the custom ID for the select menu.
   * @param {string} customId - The custom ID for the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  /**
   * Sets the placeholder text for the select menu.
   * @param {string} placeholder - The placeholder text for the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Sets the minimum number of values that can be selected in the select menu.
   * @param {number} minValue - The minimum number of values that can be selected.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setMinValues(minValue) {
    this.minValues = minValue;
    return this;
  }

  /**
   * Sets the maximum number of values that can be selected in the select menu.
   * @param {number} maxValue - The maximum number of values that can be selected.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setMaxValues(maxValue) {
    this.maxValues = maxValue;
    return this;
  }

  /**
   * Sets whether the select menu is disabled.
   * @param {boolean} disabled - Whether the select menu is disabled.
   * @returns {StringSelect} - The updated StringSelect instance.
   */
  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Sets the options for the select menu.
   * @param {Object[]} [options=[]] - The options for the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   * @throws {RangeError} - If the options array has more than 25 items.
   */
  setOptions(options = []) {
    if (options.length > 25) throw new RangeError(`The selection menu must have only 25 options`);
    this.options = options?.map((o) => StringSelect.transformOptions(o));
    return this;
  }

  /**
   * Adds options to the select menu.
   * @param {Object[]} [options=[]] - The options to add to the select menu.
   * @returns {StringSelect} - The updated StringSelect instance.
   * @throws {RangeError} - If the options array has more items than can be added to the select menu.
   * @throws {RangeError} - If no options are provided to add to the select menu.
   */
  addOptions(options = []) {
    if (this.options?.length > 25) throw new RangeError(`Selecting the Menu option exceeded your length of 25`);
    if (options.length >= 1) {
      options.map((o) => this.options?.push(StringSelect.transformOptions(o)));
      return this;
    }

    throw new RangeError(`Por favor, añada opciones`);
  }

  /**
   * Returns the JSON representation of the select menu.
   * @returns {Object} - The JSON representation of the select menu.
   */
  toJSON() {
    return {
      type: ComponentType[this.type],
      custom_id: this.customId,
      options: this.options,
      placeholder: this.placeholder,
      min_vales: this.minValues,
      max_values: this.maxValues,
      disabled: this.disabled,
    };
  }
}

module.exports = StringSelect;
