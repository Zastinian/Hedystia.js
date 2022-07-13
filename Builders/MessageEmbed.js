const Util = require("../Util/Util");

class MessageEmbed {
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

  setTitle(title) {
    this.title = title;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setURL(url) {
    this.url = url;
    return this;
  }

  setTimestamp(timestamp) {
    this.timestamp = Util.generateISOString(timestamp);
    return this;
  }

  setColor(color) {
    this.color = Util.resolveColor(color);
    return this;
  }

  setFooter(footer) {
    this.footer = footer;
    return this;
  }

  setImage(image) {
    this.image = image
      ? {
          url: image.url,
        }
      : undefined;
    return this;
  }

  setThumbnail(thumbnail) {
    this.thumbnail = thumbnail
      ? {
          url: thumbnail.url,
        }
      : undefined;
    return this;
  }

  setAuthor(author) {
    this.author = author;
    return this;
  }

  addFields(...fields) {
    if (Array.isArray(fields[0])) {
      fields[0]?.map((val) =>
        this.fields.push(MessageEmbed.transformFields(val))
      );
    } else {
      fields?.map((val) => this.fields.push(MessageEmbed.transformFields(val)));
    }

    return this;
  }

  addField(nm, vl, il) {
    const fil = {
      name: nm,
      value: vl,
      inline: il ?? undefined,
    };
    this.fields.push(fil);
    return this;
  }

  setFields(...fields) {
    if (Array.isArray(fields[0])) {
      this.fields = fields[0]?.map((val) => MessageEmbed.transformFields(val));
    } else {
      this.fields = fields?.map((val) => MessageEmbed.transformFields(val));
    }

    return this;
  }

  validation() {
    if (
      !this.title &&
      !this.description &&
      this.fields?.length < 1 &&
      !this.image &&
      !this.thumbnail &&
      !this.footer &&
      !this.author
    )
      throw new RangeError(
        `El embed no debe estar vacío, necesita al menos un título o una descripción`
      );
    if (this.title?.length > 256)
      throw new RangeError(
        `El título debe ser inferior o igual a 256 caracteres`
      );
    if (typeof this.title !== "string" && this.title)
      throw new TypeError(`El título debe ser un string`);
    if (typeof this.description !== "string" && this.description)
      throw new TypeError(`La descripción debe ser un string`);
    if (this.description?.length > 4096)
      throw new RangeError(
        `La descripción debe ser menor o igual a 4096 caracteres. Received=${this.description.length}`
      );
    if (this.footer?.text?.length > 2048)
      throw new RangeError(
        `El texto del pie de página debe ser inferior a 2048`
      );
    if (typeof this.footer?.text !== "string" && this.footer)
      throw new TypeError(`El texto del pie de página debe ser un string`);
    if (this.author?.name?.length > 256)
      throw new RangeError(
        `El nombre del autor debe tener una longitud menor o igual a 256`
      );
    if (typeof this.author?.name !== "string" && this.author)
      throw new TypeError(`El nombre del autor debe ser un string`);
    if (this.fields?.length > 25)
      throw new RangeError(`La longitud de los campos excede su límite de 25`);
    for (const [index, value] of this.fields?.entries()) {
      if (!value.name || typeof value.name !== "string")
        throw new RangeError(
          `Campo[${index}]: el nombre debe ser un string no vacío`
        );
      if (!value.value || typeof value.value !== "string")
        throw new RangeError(
          `Campo[${index}]: el valor debe ser un string no vacío`
        );
      if (value.name?.length > 256)
        throw new RangeError(
          `Campo[${index}]: el nombre debe tener una longitud menor o igual a 256`
        );
      if (value.value?.length > 1024)
        throw new RangeError(
          `Campo[${index}]: el nombre debe tener una longitud menor o igual a 1024`
        );
      if (typeof value.inline !== "boolean" && value.inline)
        throw new TypeError(`Campo[${index}]: inline debe ser booleano`);
    }
    return;
  }

  toJSON() {
    this.validation();
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

  static transformFields(fields) {
    return {
      name: fields.name,
      value: fields.value,
      inline: fields.inline ?? undefined,
    };
  }
}

module.exports = MessageEmbed;
