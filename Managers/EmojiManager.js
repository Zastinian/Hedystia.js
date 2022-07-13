const Emoji = require("../Structures/Emoji");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class EmojiManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(
    emojis,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
    if (!emojis) return null;
    const emojiId =
      typeof emojis === "string" ? emojis : emojis.id ?? emojis.name;
    let emoji;
    if (this.cache.has(emojiId) && !options.force) {
      emoji = this.cache.get(emojiId);
    } else {
      const newEmoji = new Emoji(
        typeof emojis === "string"
          ? {
              partial: true,
            }
          : emojis,
        guildId,
        this.client
      );
      if (typeof emojis === "string") {
        if (!/^\d+$/gi.test(emojiId)) {
          newEmoji["name"] = emojiId;
        } else {
          newEmoji["id"] = emojiId;
        }
      }
      if (options.cache) this.cache.set(emojiId, newEmoji);

      emoji = newEmoji;
    }

    return emoji;
  }

  async create(options = {}) {
    const { reason } = options;
    const body = await EmojiManager.transformOptions(options);
    const emoji = await this.client.api.post(
      `${this.client.root}/guilds/${this.guildId}/emojis`,
      { reason, body }
    );
    return this._add(emoji);
  }

  async edit(emoji, options = {}) {
    const { reason } = options;
    const body = await EmojiManager.transformOptions(options);
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    emoji = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`,
      { reason, body }
    );
    return this._add(emoji);
  }

  async delete(emoji, reason) {
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    const deletedEmoji = this._add(emoji);
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`,
      { reason }
    );
    return deletedEmoji;
  }

  async fetch(emoji, options) {
    if (typeof emoji?.id !== "undefined" || typeof emoji === "string")
      return this._fetchId(emoji, options?.cache, options?.force);
    if (typeof emoji === "object" && !options) options = emoji;
    const { cache = true, force = false } = options ?? {};
    emoji = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/emojis`
    );
    return new this.cache.constructor(
      emoji?.map((o) => [o.id, this._add(o, this.guildId, { cache, force })])
    );
  }

  async _fetchId(emoji, cache = true, force = false) {
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    if (this.cache.has(emojiId) && force) return this.cache.get(emojiId);
    emoji = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`
    );
    return this._add(emoji, this.guildId, { cache, force: true });
  }

  static transformRoles(roles = {}) {
    return typeof roles === "string" ? roles : roles?.id ?? undefined;
  }

  static async transformOptions(o) {
    return {
      name: o.name ?? undefined,
      image: o.image ? await Util.generateDataURI(o.image) : undefined,
      roles: o.roles?.map((o) => this.transformRoles(o)),
    };
  }

  get cache() {
    return Collection;
  }
}

module.exports = EmojiManager;
