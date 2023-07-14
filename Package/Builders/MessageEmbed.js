const Util = require("../Util/Util");

/**
 * Represents a message embed.
 * @class
 */
class MessageEmbed {
  /**
   * Constructs a new MessageEmbed object.
   * @param {Object} [data] - The data for the message embed.
   * @param {string} [data.title] - The title of the message embed.
   * @param {string} [data.type="rich"] - The type of the message embed.
   * @param {string} [data.description] - The description of the message embed.
   * @param {string} [data.url] - The URL of the message embed.
   * @param {string} [data.timestamp] - The timestamp of the message embed.
   * @param {string} [data.color] - The color of the message embed.
   * @param {Object} [data.footer] - The footer of the message embed.
   * @param {Object} [data.image] - The image of the message embed.
   * @param {Object} [data.thumbnail] - The thumbnail of the message embed.
   * @param {Object} [data.video] - The video of the message embed.
   * @param {Object} [data.provider] - The provider of the message embed.
   * @param {Object} [data.author] - The author of the message embed.
   * @param {Array<Object>} [data.fields=[]] - The fields of the message embed.
   */
  constructor(data = {}) {
    this.title = data.title ?? undefined;
    this.type = data.type ?? "rich";
    this.description = data.description ?? undefined;
    this.url = data.url ?? undefined;
    this.timestamp = data.timestamp ?? undefined;
    this.color = data.color ? Util.resolveColor(data.color) : undefined;
    this.footer = data.footer
      ? {
          text: data.footer.text,
          iconURL: data.footer.iconURL ?? data.footer.icon_url,
          icon_url: data.footer.iconURL ?? data.footer.icon_url,
          proxyIconURL: data.footer.proxy_icon_url ?? data.footer.proxyIconURL,
        }
      : undefined;
    this.image = data.image
      ? {
          url: data.image.url,
          proxyURL: data.image.proxyURL ?? data.image.proxy_url,
          height: data.image.height,
          width: data.image.width,
        }
      : undefined;
    this.thumbnail = data.thumbnail
      ? {
          url: data.thumbnail.url,
          proxyURL: data.thumbnail.proxyURL ?? data.thumbnail.proxy_url,
          height: data.thumbnail.height,
          width: data.thumbnail.width,
        }
      : undefined;
    this.video = data.video ?? undefined;
    this.provider = data.provider ?? undefined;
    this.author = data.author
      ? {
          name: data.author.name,
          url: data.author.url,
          iconURL: data.author.iconURL ?? data.author.icon_url,
          icon_url: data.author.iconURL ?? data.author.icon_url,
          proxyIconURL: data.author.proxy_icon_url ?? data.author.proxyIconURL,
        }
      : undefined;
    this.fields = data.fields ?? [];
  }

  /**
   * Sets the title of the embed.
   * @param {string} title - The title of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setTitle(title) {
    this.title = title;
    return this;
  }

  /**
   * Sets the description of the embed.
   * @param {string} description - The description of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Sets the URL of the embed.
   * @param {string} url - The URL of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setURL(url) {
    this.url = url;
    return this;
  }

  /**
   * Sets the timestamp of the embed.
   * @param {Date|number|string} timestamp - The timestamp of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setTimestamp(timestamp) {
    this.timestamp = Util.generateISOString(timestamp);
    return this;
  }

  /**
   * Sets the color of the embed.
   * @param {string|number} color - The color of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setColor(color) {
    this.color = Util.resolveColor(color);
    return this;
  }

  /**
   * Sets the footer of the embed.
   * @param {string} footer - The footer of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setFooter(footer) {
    this.footer = footer;
    return this;
  }

  /**
   * Sets the image of the embed.
   * @param {object} image - The image of the embed.
   * @param {string} image.url - The URL of the image.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setImage(image) {
    this.image = image
      ? {
          url: image.url,
        }
      : undefined;
    return this;
  }

  /**
   * Sets the thumbnail of the embed.
   * @param {object} thumbnail - The thumbnail of the embed.
   * @param {string} thumbnail.url - The URL of the thumbnail.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setThumbnail(thumbnail) {
    this.thumbnail = thumbnail
      ? {
          url: thumbnail.url,
        }
      : undefined;
    return this;
  }

  /**
   * Sets the author of the embed.
   * @param {string} author - The author of the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setAuthor(author) {
    this.author = author;
    return this;
  }

  /**
   * Adds multiple fields to the embed.
   * @param {...object|Array<object>} fields - The fields to add to the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  addFields(...fields) {
    if (Array.isArray(fields[0])) {
      fields[0]?.map((val) => this.fields.push(MessageEmbed.transformFields(val)));
    } else {
      fields?.map((val) => this.fields.push(MessageEmbed.transformFields(val)));
    }

    return this;
  }

  /**
   * Adds a single field to the embed.
   * @param {string} name - The name of the field.
   * @param {string} value - The value of the field.
   * @param {boolean} [inline] - Whether the field should be displayed inline.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  addField(nm, vl, il) {
    const fil = {
      name: nm,
      value: vl,
      inline: il ?? undefined,
    };
    this.fields.push(fil);
    return this;
  }

  /**
   * Sets the fields of the embed.
   * @param {...object|Array<object>} fields - The fields to set for the embed.
   * @returns {MessageEmbed} The MessageEmbed instance.
   */
  setFields(...fields) {
    if (Array.isArray(fields[0])) {
      this.fields = fields[0]?.map((val) => MessageEmbed.transformFields(val));
    } else {
      this.fields = fields?.map((val) => MessageEmbed.transformFields(val));
    }

    return this;
  }

  /**
   * Converts the MessageEmbed instance to a plain object.
   * @returns {object} The plain object representation of the MessageEmbed instance.
   */
  toJSON() {
    return {
      type: this.type,
      title: this.title,
      description: this.description,
      author: this.author,
      image: this.image,
      thumbnail: this.thumbnail,
      color: this.color,
      timestamp: this.timestamp,
      url: this.url,
      footer: this.footer,
      fields: this.fields,
    };
  }

  /**
   * Transforms the input fields object to a new object with specific properties.
   * @param {Object} fields - The input object containing fields to be transformed.
   * @param {string} fields.name - The name of the field.
   * @param {any} fields.value - The value of the field.
   * @param {boolean|undefined} [fields.inline] - Whether the field should be displayed inline. If not specified, defaults to undefined.
   * @returns {Object} - A new object with transformed fields.
   */
  static transformFields(fields) {
    return {
      name: fields.name,
      value: fields.value,
      inline: fields.inline ?? undefined,
    };
  }
}

module.exports = MessageEmbed;
