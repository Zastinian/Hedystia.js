/**
 * A class representing a Discord button.
 * @class
 */
class Button {
  /**
   * Create a new Button.
   * @constructor
   * @param {Object} options - The options for the button.
   * @param {Object} options.emoji - The emoji displayed on the button (if any).
   * @param {string} options.label - The text displayed on the button.
   * @param {string} options.url - The URL the button leads to (if any).
   * @param {string} options.customid - The custom ID of the button (if any).
   * @param {string} options.style - The visual style of the button (if any).
   * @param {boolean} options.disabled - Whether the button is disabled or not.
   * @returns {Object} - The button object.
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
