/* It takes in an object with the properties of emoji, label, url, customid, style, and disabled, and
returns an object with the properties of type, custom_id, style, label, emoji, disabled, and url.
</code> */
class Button {
  /**
   * It takes in an object with the properties of emoji, label, url, customid, style, and disabled, and
   * returns an object with the properties of type, custom_id, style, label, emoji, disabled, and url.
   * @returns The button object.
   */
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

module.exports = Button;
