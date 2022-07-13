const { ComponentType } = require("../Util/Constants");
class RoleSelect {
  constructor(data = {}) {
    this.type = "ROLE_SELECT";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.options = data.options?.map((o) => RoleSelect.transformOptions(o));
    this.placeholder = data.placeholder ?? undefined;
    this.minValues = data.min_values ?? data.minValues ?? undefined;
    this.maxValues = data.max_values ?? data.maxValues ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  static transformOptions(options = {}) {
    return {
      label: options.label ?? undefined,
      value: options.value ?? undefined,
      description: options.description ?? undefined,
      emoji: RoleSelect.transformEmoji(options.emoji) ?? undefined,
      default: options.default ?? undefined,
    };
  }

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

  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  setMinValues(minValue) {
    this.minValues = minValue;
    return this;
  }

  setMaxValues(maxValue) {
    this.maxValues = maxValue;
    return this;
  }

  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  setOptions(options) {
    this.options = options?.map((o) => RoleSelect.transformOptions(o));
    return this;
  }

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
