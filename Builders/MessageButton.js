const {ButtonStyle, ComponentType} = require("../Util/Constants");

/**
 * A class representing a message button.
 * @class
 */
class MessageButton {
  /**
   * Creates a new message button instance.
   * @constructor
   * @param {Object} [data={}] - The data to initialize the message button with.
   */
  constructor(data = {}) {
    this.type = "Button";
    this.style = (typeof data.style === "number" ? ButtonStyle[data.style] : data.style) ?? "Primary";
    this.label = data.label ?? undefined;
    this.emoji = data.emoji ?? undefined;
    this.customId = data.custom_id ?? data.customId ?? undefined;
    this.url = data.url ?? undefined;
    this.disabled = data.disabled ?? undefined;
  }

  /**
   * Sets the label of the button.
   * @param {string} label - The label to set.
   * @returns {MessageButton} The message button instance.
   */
  setLabel(label) {
    this.label = label;
    return this;
  }

  /**
   * Sets the custom ID of the button.
   * @param {string} customId - The custom ID to set.
   * @returns {MessageButton} The message button instance.
   */
  setCustomId(customId) {
    this.customId = customId;
    return this;
  }

  /**
   * Sets whether the button is disabled.
   * @param {boolean} disabled - Whether the button is disabled.
   * @returns {MessageButton} The message button instance.
   */
  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Sets the style of the button.
   * @param {string} style - The style to set.
   * @returns {MessageButton} The message button instance.
   */
  setStyle(style) {
    this.style = style;
    return this;
  }

  /**
   * Sets the URL of the button.
   * @param {string} url - The URL to set.
   * @returns {MessageButton} The message button instance.
   */
  setURL(url) {
    this.url = url;
    return this;
  }

  /**
   * Sets the emoji of the button.
   * @param {string|Object} emoji - The emoji to set.
   * @returns {MessageButton} The message button instance.
   */
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

  /**
   * Converts the message button instance to a JSON representation.
   * @returns {Object} The JSON representation of the message button.
   */
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
