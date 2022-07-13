class MessageAttachment {
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

  setFile(file) {
    this.file = file;
    return this;
  }

  setFilename(filename) {
    this.filename = filename;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setSpoiler() {
    this.spoiler = true;
    return this;
  }
}

module.exports = MessageAttachment;
