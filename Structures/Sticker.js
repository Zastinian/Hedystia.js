const {StickerType, StickerFormatType} = require("../Util/Constants")
const Snowflake = require("../Util/Snowflake")
const Base = require("../Base/base")
class Sticker extends Base {
  constructor(data = {}, guildId, client) {
    super(client)

    this.partial = data.partial ?? false
    this.id = data.id ?? null
    this.packId = data.pack_id ?? null
    this.name = data.name ?? null
    this.description = data.description ?? null
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null
    this.createdTimestamp = this.createdAt?.getTime() ?? null
    this.tags = data.tags ?? null
    this.type = (typeof data.type === "number" ? StickerType[data.type] : data.type) ?? null
    this.formatType =
      (typeof data.format_type === "number" ? StickerFormatType[data.format_type] : data.format_type) ?? null
    this.available = data.available ?? null
    this.guildId = guildId ?? null
    this.user = this.client.users._add(data.user) ?? null
    this.sortValue = data.sort_value ?? null
  }

  async fetch(options) {
    return await this.guild?.stickers.fetch(this, options)
  }

  async edit(options) {
    return await this.guild?.stickers.edit(this, options)
  }

  async delete(reason) {
    return await this.guild?.stickers.delete(this, reason)
  }

  async setName(name, reason) {
    return await this.edit({name, reason})
  }

  async setDescription(description, reason) {
    return await this.edit({description, reason})
  }

  async setTags(tags, reason) {
    return await this.edit({tags, reason})
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null
  }

  async fetchPack() {
    const pack = await this.client.fetchNitroPacks()
    return pack.find((o) => o.id === this.packId) ?? null
  }

  imageURL(options = {}) {
    return this.client.cdn.StickerImage(this.id, options.size, options.format)
  }

  equals(sticker) {
    if (!(sticker instanceof Sticker)) return false
    return (
      this.name === sticker.name || this.description === sticker.description || this.tags === sticker.tags
    )
  }
}

module.exports = Sticker
