const {ButtonStyle, ComponentType} = require("../Util/Constants");

class MessageButton {
  constructor(data = {}) {
    this.type = "Button";
    this.style = (typeof data.style === "number" ? ButtonStyle[data.style] : data.style) ?? "Primary";
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

  toJSON() {
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
