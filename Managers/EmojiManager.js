const Emoji = require("../Structures/Emoji");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages emojis */
class EmojiManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It takes an emoji object, and returns an emoji object
   * @param emojis - The emoji(s) to add to the cache. Can be an emoji object, an emoji ID, or an emoji
   * name.
   * @param [guildId] - The ID of the guild the emoji is in.
   * @param [options] - cache = true, force = false
   * @returns A new Emoji object
   */
  _add(emojis, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!emojis) return null;
    const emojiId = typeof emojis === "string" ? emojis : emojis.id ?? emojis.name;
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

  /**
   * It creates a new emoji
   * @param [options] - An object containing the following properties:
   * @returns A new emoji object
   */
  async create(options = {}) {
    const {reason} = options;
    const body = await EmojiManager.transformOptions(options);
    const emoji = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/emojis`, {
      reason,
      body,
    });
    return this._add(emoji);
  }

  /**
   * It edits an emoji
   * @param emoji - The emoji to edit. Can be an emoji object, or an emoji ID.
   * @param [options] - An object containing the following properties:
   * @returns The emoji object
   */
  async edit(emoji, options = {}) {
    const {reason} = options;
    const body = await EmojiManager.transformOptions(options);
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    emoji = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`, {
      reason,
      body,
    });
    return this._add(emoji);
  }

  /**
   * It deletes an emoji from the guild
   * @param emoji - The emoji to delete. Can be a string or an Emoji object.
   * @param reason - The reason for the deletion.
   * @returns The deleted emoji
   */
  async delete(emoji, reason) {
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    const deletedEmoji = this._add(emoji);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`, {reason});
    return deletedEmoji;
  }

  /**
   * It fetches all the emojis in the guild
   * @param emoji - The emoji to fetch. Can be an emoji object, an emoji ID, or an emoji name.
   * @param options - An object containing the following properties:
   * @returns A new cache constructor
   */
  async fetch(emoji, options) {
    if (typeof emoji?.id !== "undefined" || typeof emoji === "string") return this._fetchId(emoji, options?.cache, options?.force);
    if (typeof emoji === "object" && !options) options = emoji;
    const {cache = true, force = false} = options ?? {};
    emoji = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/emojis`);
    return new this.cache.constructor(emoji?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * It fetches an emoji from the API and adds it to the cache
   * @param emoji - The emoji to fetch. Can be a string or an Emoji object.
   * @param [cache=true] - Whether or not to cache the emoji.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The emoji object
   */
  async _fetchId(emoji, cache = true, force = false) {
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    if (this.cache.has(emojiId) && force) return this.cache.get(emojiId);
    emoji = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`);
    return this._add(emoji, this.guildId, {cache, force: true});
  }

  /**
   * It transforms the roles object into a string.
   * @param [roles] - The roles that the user has.
   * @returns The roles object is being returned.
   */
  static transformRoles(roles = {}) {
    return typeof roles === "string" ? roles : roles?.id ?? undefined;
  }

  /**
   * It takes an object with a name, image, and roles property, and returns an object with the same
   * properties, but with the image property being a data URI
   * @param o - The options object.
   * @returns A new object with the name, image, and roles properties.
   */
  static async transformOptions(o) {
    return {
      name: o.name ?? undefined,
      image: o.image ? await Util.generateDataURI(o.image) : undefined,
      roles: o.roles?.map((o) => this.transformRoles(o)),
    };
  }

  /**
   * `return Collection`
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }
}

module.exports = EmojiManager;
