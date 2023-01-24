const {ComponentType} = require("../Util/Constants");
class StringSelect {
  constructor(data = {}) {
    this.type = "String_Select";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.options = data.options?.map((o) => StringSelect.transformOptions(o)) ?? [];
    this.placeholder = data.placeholder ?? undefined;
    this.minValues = data.min_values ?? data.minValues ?? undefined;
    this.maxValues = data.max_values ?? data.maxValues ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

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

  setOptions(options = []) {
    if (options.length > 25) throw new RangeError(`The selection menu must have only 25 options`);
    this.options = options?.map((o) => StringSelect.transformOptions(o));
    return this;
  }

  addOptions(options = []) {
    if (this.options?.length > 25) throw new RangeError(`Selecting the Menu option exceeded your length of 25`);
    if (options.length >= 1) {
      options.map((o) => this.options?.push(StringSelect.transformOptions(o)));
      return this;
    }

    throw new RangeError(`Por favor, añada opciones`);
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

module.exports = StringSelect;
