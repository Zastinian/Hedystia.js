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
    const embed = {
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
}

module.exports = Embed;
