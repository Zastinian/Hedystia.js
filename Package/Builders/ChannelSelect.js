const {ComponentType} = require("../Util/Constants");

/**
 * Class representing a Channel Select component for Discord message components.
 * @class
 */
class ChannelSelect {
  /**
   * Creates a new instance of the ChannelSelect class.
   * @constructor
   * @param {Object} data - The data to initialize the channel select component with.
   * @param {string} data.custom_id - The unique identifier for the component.
   * @param {Array} data.options - The options for the select component.
   * @param {Object} data.options.label - The label for the option.
   * @param {Object} data.options.value - The value for the option.
   * @param {Object} data.options.description - The description for the option.
   * @param {Object} data.options.emoji - The emoji for the option.
   * @param {boolean} data.options.default - Whether the option is the default option.
   * @param {string} data.placeholder - The placeholder text for the select component.
   * @param {number} data.min_values - The minimum number of options that can be selected.
   * @param {number} data.max_values - The maximum number of options that can be selected.
   * @param {boolean} data.disabled - Whether the component is disabled.
   */
  constructor(data = {}) {
    this.type = "Channel_Select";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.options = data.options?.map((o) => ChannelSelect.transformOptions(o));
    this.placeholder = data.placeholder ?? undefined;
    this.minValues = data.min_values ?? data.minValues ?? undefined;
    this.maxValues = data.max_values ?? data.maxValues ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  /**
   * Transforms the given options data into a format compatible with the select component.
   * @static
   * @param {Object} options - The options data to transform.
   * @param {string} options.label - The label for the option.
   * @param {string} options.value - The value for the option.
   * @param {string} options.description - The description for the option.
   * @param {string} options.emoji - The emoji for the option.
   * @param {boolean} options.default - Whether the option is the default option.
   * @returns {Object} The transformed options data.
   */
  static transformOptions(options = {}) {
    return {
      label: options.label ?? undefined,
      value: options.value ?? undefined,
      description: options.description ?? undefined,
      emoji: ChannelSelect.transformEmoji(options.emoji) ?? undefined,
      default: options.default ?? undefined,
    };
  }

  /**
   * Transforms the given emoji data into a format compatible with the select component.
   * @static
   * @param {Object|string} emoji - The emoji data to transform.
   * @param {string} emoji.name - The name of the emoji.
   * @param {string} emoji.id - The ID of the emoji.
   * @param {boolean} emoji.animated - Whether the emoji is animated.
   * @returns {Object} The transformed emoji data.
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
   * Sets the custom ID of the select component.
   * @param {string} customId - The custom ID to set.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  /**
   * Sets the placeholder text of the select component.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Set the minimum number of options that can be selected.
   * @param {number} minValue - The minimum number of options that can be selected.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setMinValues(minValue) {
    this.minValues = minValue;
    return this;
  }

  /**
   * Set the maximum number of options that can be selected.
   * @param {number} maxValue - The maximum number of options that can be selected.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setMaxValues(maxValue) {
    this.maxValues = maxValue;
    return this;
  }

  /**
   * Set the maximum number of options that can be selected.
   * @param {number} maxValue - The maximum number of options that can be selected.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Set the options for the select menu.
   * @param {Object[]} options - An array of option objects for the select menu.
   * @returns {ChannelSelect} The ChannelSelect instance.
   */
  setOptions(options) {
    this.options = options?.map((o) => ChannelSelect.transformOptions(o));
    return this;
  }

  /**
   * Convert the ChannelSelect instance to a plain object for sending to Discord API.
   * @returns {Object} The plain object representation of the ChannelSelect.
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

module.exports = ChannelSelect;
