const {TextInputStyle, ComponentType} = require("../Util/Constants");

/**
 * Represents an Input Text component for a Discord interaction message.
 * @class
 */
class InputText {
  /**
   * Constructs a new InputText component.
   * @constructor
   * @param {Object} [data] - Optional data to set for the component.
   * @param {string} [data.custom_id] - The custom ID of the component.
   * @param {string|number} [data.style] - The style of the component, can be a string or a number.
   * @param {string} [data.label] - The label of the component.
   * @param {number} [data.min_length] - The minimum length of the text input.
   * @param {number} [data.max_length] - The maximum length of the text input.
   * @param {boolean} [data.required] - Whether the component is required or not.
   * @param {string} [data.value] - The value of the text input.
   * @param {string} [data.placeholder] - The placeholder text for the text input.
   */
  constructor(data = {}) {
    let styleData = ButtonStyle["Short"];
    if (typeof data.style === "number") {
      styleData = data.style;
    } else {
      styleData = TextInputStyle[data.style];
    }
    this.type = "Input_Text";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.style = styleData;
    this.label = data.label ?? undefined;
    this.minLength = data.min_length ?? data.minLength ?? undefined;
    this.maxLength = data.max_length ?? data.maxLength ?? undefined;
    this.required = data.required ?? undefined;
    this.value = data.value ?? undefined;
    this.placeholder = data.placeholder ?? undefined;
  }

  /**
   * Sets the custom ID of the component.
   * @param {string} customId - The custom ID to set.
   * @returns {InputText} This component.
   */
  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  /**
   * Sets the label of the component.
   * @param {string} label - The label to set.
   * @returns {InputText} This component.
   */
  setLabel(label) {
    this.label = label;
    return this;
  }

  /**
   * Sets the maximum length of the text input.
   * @param {number} maxLength - The maximum length to set.
   * @returns {InputText} This component.
   */
  setMaxLength(maxLength) {
    this.maxLength = maxLength;
    return this;
  }

  /**
   * Sets the minimum length of the text input.
   * @param {number} minLength - The minimum length to set.
   * @returns {InputText} This component.
   */
  setMinLength(minLength) {
    this.minLength = minLength;
    return this;
  }

  /**
   * Sets whether the component is required or not.
   * @param {boolean} required - Whether the component is required or not.
   * @returns {InputText} This component.
   */
  setRequired(required) {
    this.required = required;
    return this;
  }

  /**
   * Sets the placeholder text for the text input.
   * @param {string} placeholder - The placeholder text to set.
   * @returns {InputText} This component.
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Sets the value of the text input.
   * @param {string} value - The value to set.
   * @returns {InputText} This component.
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * Sets the style of the component.
   * @param {string|number} style - The style to set, can be a string or a number.
   * @returns {InputText} This component.
   */
  setStyle(style) {
    this.style = typeof style === "number" ? TextInputStyle[style] : style;
    return this;
  }

  /**
   * Converts the component to a JSON representation.
   * @returns {Object} The JSON representation of the component.
   */
  toJSON() {
    return {
      type: ComponentType[this.type],
      custom_id: this.customId,
      style: this.style,
      label: this.label,
      min_length: this.minLength,
      max_length: this.maxLength,
      required: this.required,
      value: this.value,
      placeholder: this.placeholder,
    };
  }
}

module.exports = InputText;
