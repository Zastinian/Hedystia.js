const { ComponentType } = require("../Util/Constants");
class StringSelect {
  constructor(data = {}) {
    this.type = "STRING_SELECT";
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.options =
      data.options?.map((o) => StringSelect.transformOptions(o)) ?? [];
    this.placeholder = data.placeholder ?? undefined;
    this.minValues = data.min_values ?? data.minValues ?? undefined;
    this.maxValues = data.max_values ?? data.maxValues ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  static transformOptions(options = {}) {
    if (!options.label) throw new RangeError(`Label is required`);
    if (!options.value) throw new RangeError(`Value is required`);
    if (typeof options.default !== "boolean" && options.default)
      throw new RangeError(`Por defecto debe ser booleano`);
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
    if (options.length > 25)
      throw new RangeError(`El menú de selección debe tener sólo 25 opciones`);
    this.options = options?.map((o) => StringSelect.transformOptions(o));
    return this;
  }

  addOptions(options = []) {
    if (this.options?.length > 25)
      throw new RangeError(
        `Seleccionar la opción de Menú superó su longitud de 25`
      );
    if (options.length >= 1) {
      options.map((o) => this.options?.push(StringSelect.transformOptions(o)));
      return this;
    }

    throw new RangeError(`Por favor, añada opciones`);
  }

  validation() {
    if (!this.customId)
      throw new RangeError(`Se requiere una id personalizada`);
    if (this.options?.length < 1)
      throw new RangeError(`Especifique las opciones`);
    if (this.placeholder?.length > 250)
      throw new RangeError(
        `El marcador de posición debe tener una longitud inferior o igual a 150`
      );
    if (this.minValues < 0 && this.minValues > 25 && this.minValues)
      throw new RangeError(
        `Los valores mínimos deben ser inferiores a 25 y/o 0 de longitud`
      );
    if (this.maxValues < 0 && this.maxValues > 25 && this.maxValues)
      throw new RangeError(
        `Los valores máximos deben ser inferiores a 25 y/o 0 de longitud`
      );
    if (typeof this.disabled !== "boolean" && this.disabled)
      throw new TypeError(`Desactivado debe ser booleano`);
    return;
  }

  toJSON() {
    this.validation();
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
