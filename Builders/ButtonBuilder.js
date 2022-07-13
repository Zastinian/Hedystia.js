class Button {
  constructor({ emoji, label, url, customid, style, disabled }) {
    this.emoji = { ...emoji };
    this.label = label;
    this.url = url;
    this.customid = customid;
    this.style = style;
    this.disabled = disabled;
    if (!this.label) this.label = "";
    if (!this.customid) this.customid = "";
    if (!this.style) this.style = "";
    if (!this.disabled) this.disabled = false;
    if (!this.emoji) this.emoji = "";
    if (!this.url) this.url = "";
    const button = {
      type: 2,
      custom_id: this.customid,
      style: this.style,
      label: this.label,
      emoji: this.emoji,
      disabled: this.disabled,
      url: this.url,
    };
    return button;
  }
}

module.exports = Button;
