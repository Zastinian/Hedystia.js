const { TextInputStyle, ComponentType } = require("../Util/Constants");

class InputText {
  constructor(data = {}) {
    this.type = "INPUT_TEXT";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.style =
      (typeof data.style === "number"
        ? TextInputStyle[data.style]
        : data.style) ?? "SHORT";
    this.label = data.label ?? undefined;
    this.minLength = data.min_length ?? data.minLength ?? undefined;
    this.maxLength = data.max_length ?? data.maxLength ?? undefined;
    this.required = data.required ?? undefined;
    this.value = data.value ?? undefined;
    this.placeholder = data.placeholder ?? undefined;
  }

  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  setLabel(label) {
    this.label = label;
    return this;
  }

  setMaxLength(maxLength) {
    this.maxLength = maxLength;
    return this;
  }

  setMinLength(minLength) {
    this.minLength = minLength;
    return this;
  }

  setRequired(required) {
    this.required = required;
    return this;
  }

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  setValue(value) {
    this.value = value;
    return this;
  }

  setStyle(style) {
    this.style = typeof style === "number" ? TextInputStyle[style] : style;
    return this;
  }

  toJSON() {
    return {
      type: ComponentType[this.type],
      custom_id: this.customId,
      style: TextInputStyle[this.style],
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
