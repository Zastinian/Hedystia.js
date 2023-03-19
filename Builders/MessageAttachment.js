/**
 * Represents a message attachment.
 * @class
 */
class MessageAttachment {
  /**
   * Constructs a new MessageAttachment object.
   * @param {string} url - The URL of the attachment.
   * @param {Object} data - Additional data for the attachment.
   * @param {string} filename - The name of the file.
   */
  constructor(url, data = {}, filename) {
    this.id = data.id ?? null;
    this.filename = data.filename ?? filename;
    this.description = data.description ?? null;
    this.contentType = data.content_type ?? null;
    this.size = data.size ?? null;
    this.url = url ?? data.url ?? null;
    this.proxyURL = data.proxy_url ?? null;
    this.height = data.height ?? null;
    this.width = data.width ?? null;
    this.ephemeral = data.ephemeral ?? null;
    this.file = null;
    this.spoiler = false;
  }

  /**
   * Sets the file for the attachment.
   * @param {BufferResolvable|Stream} file - The file to attach.
   * @returns {MessageAttachment} This attachment.
   */
  setFile(file) {
    this.file = file;
    return this;
  }

  /**
   * Sets the name of the file.
   * @param {string} filename - The name of the file.
   * @returns {MessageAttachment} This attachment.
   */
  setFilename(filename) {
    this.filename = filename;
    return this;
  }

  /**
   * Sets the description of the attachment.
   * @param {string} description - The description of the attachment.
   * @returns {MessageAttachment} This attachment.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Sets the attachment as a spoiler.
   * @returns {MessageAttachment} This attachment.
   */
  setSpoiler() {
    this.spoiler = true;
    return this;
  }
}

module.exports = MessageAttachment;
