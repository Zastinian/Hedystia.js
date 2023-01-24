/* It takes in an object with a bunch of optional properties, and returns an object with the same
properties, but with the optional properties being undefined if they weren't passed in */
class Embed {
  /**
   * It takes in an object with a bunch of optional properties, and returns an object with the same
   * properties, but with the optional properties being undefined if they weren't passed in.
   * </code>
   *
   *
   * A:
   *
   * You can use the <code>Object.assign</code> method to copy the properties from the passed in object
   * to the new object.
   * <code>constructor(options) {
   *   Object.assign(this, options);
   * }
   * </code>
   * @returns The embed object.
   */
  constructor({title, color, author, url, description, image, footer, timestamp, thumbnail, fields}) {
    this.title = title ?? undefined;
    this.color = color ?? undefined;
    this.author = {...author} ?? {};
    this.url = url ?? undefined;
    this.description = description ?? undefined;
    this.image = image ?? undefined;
    this.footer = {...footer} ?? {};
    this.timestamp = timestamp ?? undefined;
    this.thumbnail = thumbnail ?? undefined;
    if (fields) {
      this.fields = [...fields];
    } else {
      this.fields = undefined;
    }
    const embed = {
      title: this.title,
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer: {
        text: this.footer.text ?? undefined,
        icon_url: this.footer.image ?? undefined,
      },
      image: {
        url: this.image,
      },
      thumbnail: {
        url: this.thumbnail,
      },
      fields: this.fields,
      author: {
        name: this.author.name ?? undefined,
        url: this.author.image ?? undefined,
      },
    };
    return embed;
  }
}

module.exports = Embed;
