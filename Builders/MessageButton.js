const { ButtonStyle, ComponentType } = require("../Util/Constants");

class MessageButton {
  constructor(data = {}) {
    this.type = "BUTTON";
    this.style =
      (typeof data.style === "number" ? ButtonStyle[data.style] : data.style) ??
      "PRIMARY";
    this.label = data.label ?? undefined;
    this.emoji = data.emoji ?? undefined;
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.url = data.url ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  setLabel(label) {
    this.label = label;
    return this;
  }

  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  setStyle(style) {
    this.style = style;
    return this;
  }

  setURL(url) {
    this.url = url;
    return this;
  }

  setEmoji(emoji) {
    if (typeof emoji === "string") {
      this.emoji = {
        id: emoji ?? undefined,
      };
    } else {
      this.emoji = {
        name: emoji.name ?? undefined,
        id: emoji.id ?? undefined,
        animated: emoji.animated ?? undefined,
      };
    }
    return this;
  }

  validation() {
    if (!ButtonStyle[this.style])
      throw new TypeError(`El estilo del botón no es válido`);
    if (!this.customId && !this.url)
      throw new RangeError(`Se requiere una id personalizada`);
    if (this.customId && this.customId.length > 100)
      throw new RangeError(`El ID personalizado debe ser menor o igual a 100`);
    if (this.label?.length > 80)
      throw new RangeError(`La etiqueta debe ser menor o igual al 80`);
    if (typeof this.disabled !== "boolean" && this.disabled)
      throw new TypeError(`Desactivado debe ser booleano`);
    if (this.url && this.style !== "LINK")
      throw new TypeError(
        `Las URL sólo están disponibles para los botones LINK`
      );
    return;
  }

  toJSON() {
    this.validation();
    return {
      type: ComponentType[this.type],
      label: this.label,
      custom_id: this.customId,
      emoji: this.emoji,
      url: this.url,
      style: ButtonStyle[this.style],
      disabled: this.disabled,
    };
  }
}

module.exports = MessageButton;
