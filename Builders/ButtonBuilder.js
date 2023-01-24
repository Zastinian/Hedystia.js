class Button {
  constructor({emoji, label, url, customid, style, disabled}) {
    this.emoji = {...emoji} ?? undefined;
    this.label = label ?? undefined;
    this.url = url ?? undefined;
    this.customid = customid ?? undefined;
    this.style = style ?? undefined;
    this.disabled = disabled ?? false;
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

export default Button;
