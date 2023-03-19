const {ComponentType} = require("../Util/Constants");

/**
 * Represents a Discord role select component that allows users to select one or more roles.
 * @class
 */
class RoleSelect {
  /**
   * Create a role select component.
   * @param {Object} [data={}] - The data to set in the component.
   * @param {string} [data.custom_id] - The custom ID of the component.
   * @param {Object[]} [data.options] - The options of the component.
   * @param {string} [data.placeholder] - The placeholder text of the component.
   * @param {number} [data.min_values] - The minimum number of values that can be selected.
   * @param {number} [data.max_values] - The maximum number of values that can be selected.
   * @param {boolean} [data.disabled] - Whether the component is disabled or not.
   */
  constructor(data = {}) {
    this.type = "Role_Select";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.options = data.options?.map((o) => RoleSelect.transformOptions(o));
    this.placeholder = data.placeholder ?? undefined;
    this.minValues = data.min_values ?? data.minValues ?? undefined;
    this.maxValues = data.max_values ?? data.maxValues ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  /**
   * Transforms an option object into a format suitable for the component.
   * @param {Object} options - The option object to transform.
   * @param {string} [options.label] - The text to display on the option.
   * @param {string} [options.value] - The value to be sent to the server when the option is selected.
   * @param {string} [options.description] - The text to display when hovering over the option.
   * @param {(string|Object)} [options.emoji] - The emoji to display next to the option.
   * @param {boolean} [options.default] - Whether the option should be selected by default.
   * @returns {Object} The transformed option object.
   */
  static transformOptions(options = {}) {
    return {
      label: options.label ?? undefined,
      value: options.value ?? undefined,
      description: options.description ?? undefined,
      emoji: RoleSelect.transformEmoji(options.emoji) ?? undefined,
      default: options.default ?? undefined,
    };
  }

  /**
   * Transforms an emoji to the structure expected by Discord's API.
   * @param {Object} emoji - The emoji to transform.
   * @returns {Object} The transformed emoji.
   * @static
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
   * Set the custom ID of the component.
   * @param {string} customId - The custom ID to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  /**
   * Set the placeholder text of the component.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Set the minimum number of values that can be selected.
   * @param {number} minValue - The minimum number of values to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setMinValues(minValue) {
    this.minValues = minValue;
    return this;
  }

  /**
   * Set the maximum number of values that can be selected.
   * @param {number} maxValue - The maximum number of values to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setMaxValues(maxValue) {
    this.maxValues = maxValue;
    return this;
  }

  /**
   * Set whether the component is disabled or not.
   * @param {boolean} disabled - Whether the component is disabled or not.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Set the options of the component.
   * @param {Object[]} options - The options to set.
   * @returns {RoleSelect} The RoleSelect object.
   */
  setOptions(options) {
    this.options = options?.map((o) => RoleSelect.transformOptions(o));
    return this;
  }

  /**
   * Returns the component data in the format expected by Discord's API.
   * @returns {Object} The component data.
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

module.exports = RoleSelect;
