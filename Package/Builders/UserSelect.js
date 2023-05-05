const {ComponentType} = require("../Util/Constants");

/**
 * Represents a user select component in a Discord interaction.
 * @class
 */
class UserSelect {
  /**
   * Creates a new instance of UserSelect.
   * @constructor
   * @param {Object} [data={}] - The data to create the UserSelect instance.
   * @param {string} [data.custom_id] - The custom ID of the user select.
   * @param {Object[]} [data.options] - The options for the user select.
   * @param {string} [data.options.label] - The label for the option.
   * @param {string} [data.options.value] - The value for the option.
   * @param {string} [data.options.description] - The description for the option.
   * @param {(string|Object)} [data.options.emoji] - The emoji for the option.
   * @param {string} [data.options.emoji.name] - The name of the emoji.
   * @param {string} [data.options.emoji.id] - The ID of the emoji.
   * @param {boolean} [data.options.emoji.animated] - Whether the emoji is animated.
   * @param {boolean} [data.options.default] - Whether the option is the default one.
   * @param {string} [data.placeholder] - The placeholder text for the user select.
   * @param {number} [data.min_values] - The minimum number of values that can be selected.
   * @param {number} [data.max_values] - The maximum number of values that can be selected.
   * @param {boolean} [data.disabled] - Whether the user select is disabled.
   */
  constructor(data = {}) {
    this.type = "User_Select";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.options = data.options?.map((o) => UserSelect.transformOptions(o));
    this.placeholder = data.placeholder ?? undefined;
    this.minValues = data.min_values ?? data.minValues ?? undefined;
    this.maxValues = data.max_values ?? data.maxValues ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  /**
   * Transforms an option object for a user select component into a simpler format.
   * @param {Object} [options={}] - The option object to transform.
   * @returns {Object} - The transformed option object.
   */
  static transformOptions(options = {}) {
    return {
      label: options.label ?? undefined,
      value: options.value ?? undefined,
      description: options.description ?? undefined,
      emoji: UserSelect.transformEmoji(options.emoji) ?? undefined,
      default: options.default ?? undefined,
    };
  }

  /**
   * Transforms a Discord emoji object or string into a simpler format.
   * @param {Object|string} emoji - The Discord emoji object or string to transform.
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
   * Sets the custom ID for the user select component.
   * @param {string} customId - The custom ID to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  /**
   * Sets the placeholder text for the user select component.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Sets the minimum number of values that can be selected in the user select component.
   * @param {number} minValue - The minimum number of values to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setMinValues(minValue) {
    this.minValues = minValue;
    return this;
  }

  /**
   * Sets the maximum number of values that can be selected in the user select component.
   * @param {number} maxValue - The maximum number of values to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setMaxValues(maxValue) {
    this.maxValues = maxValue;
    return this;
  }

  /**
   * Sets whether the user select component is disabled.
   * @param {boolean} disabled - Whether the user select component is disabled.
   * @returns {UserSelect} - The updated user select component.
   */
  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Sets the options for the user select component.
   * @param {Array<Object>} options - An array of option objects to set.
   * @returns {UserSelect} - The updated user select component.
   */
  setOptions(options) {
    this.options = options?.map((o) => UserSelect.transformOptions(o));
    return this;
  }

  /**
   * Converts the user select component to a plain object that can be sent in a Discord message.
   * @returns {Object} - The user select component as a plain object.
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

module.exports = UserSelect;
