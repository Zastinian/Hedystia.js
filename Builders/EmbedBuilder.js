class Embed {
  constructor({
    title,
    color,
    author,
    url,
    description,
    image,
    footer,
    timestamp,
    thumbnail,
    fields,
  }) {
    this.title = title;
    this.color = color;
    this.author = { ...author };
    this.url = url;
    this.description = description;
    this.image = image;
    this.footer = { ...footer };
    this.timestamp = timestamp;
    this.thumbnail = thumbnail;
    this.fields = { ...fields };
    if (!this.title) {
      this.title = "";
    }
    if (!this.color) {
      this.color = 0x000000;
    }
    if (!this.author.name) {
      this.author.name = "";
    }
    if (!this.author.image) {
      this.author.image = "";
    }
    if (!this.url) {
      this.url = "";
    }
    if (!this.description) {
      this.description = "";
    }
    if (!this.image) {
      this.image = "";
    }
    if (!this.footer) {
      this.footer.text = "";
      this.footer.image = "";
    }
    if (!this.footer.text) {
      this.footer.text = "";
    }
    if (!this.footer.image) {
      this.footer.image = "";
    }
    if (this.timestamp) {
      this.timestamp = new Date();
    } else {
      this.timestamp = "";
    }
    if (!this.thumbnail) {
      this.thumbnail = "";
    }
    if (!this.fields) {
      this.fields = "";
    }
    this.validation();
    const embed = {
      type: "rich",
      title: this.title,
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer: {
        text: this.footer.text,
        icon_url: this.footer.image,
      },
      image: {
        url: this.image,
      },
      thumbnail: {
        url: this.thumbnail,
      },
      fields: this.fields,
      author: {
        name: this.author.name,
        iconURL: this.author.image,
      },
    };
    return embed;
  }
  validation() {
    if (!this.title && !this.description)
      throw new RangeError(
        `El embed no debe estar vacío, necesita al menos un título o una descripción`
      );
    if (this.title.length > 256)
      throw new RangeError(
        `El título debe ser inferior o igual a 256 caracteres`
      );
    if (typeof this.title !== "string" && this.title)
      throw new TypeError(`El título debe ser un string`);
    if (typeof this.description !== "string" && this.description)
      throw new TypeError(`La descripción debe ser un string`);
    if (this.description.length > 4096)
      throw new RangeError(
        `La descripción debe ser menor o igual a 4096 caracteres. Received=${this.description.length}`
      );
    return;
  }
}

module.exports = Embed;
