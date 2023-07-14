const Emoji = require("../Structures/Emoji");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for handling emojis in a guild.
 * @class
 * @extends Base
 */
class EmojiManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds an emoji to the cache and returns the emoji object.
   * @param {string | EmojiResolvable} emojis - The emoji or emoji ID to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the emoji belongs.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the emoji.
   * @param {boolean} [options.cache=true] - Whether to cache the emoji object.
   * @param {boolean} [options.force=false] - Whether to force re-fetching the emoji from the API.
   * @returns {Emoji | null} The added emoji object, or null if no emoji is provided.
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
   * Creates a new emoji in the guild.
   * @param {Object} [options] - The options for creating the emoji.
   * @param {string} [options.reason] - The reason for creating the emoji.
   * @returns {Promise<Emoji>} A promise that resolves with the created emoji.
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
   * Edits an emoji in the guild.
   * @param {string | Emoji} emoji - The emoji to edit. Can be either the emoji ID or the Emoji object.
   * @param {Object} [options] - Additional options for editing the emoji.
   * @param {string} [options.reason] - The reason for editing the emoji.
   * @returns {Promise<Emoji>} A promise that resolves with the edited emoji.
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
   * Deletes an emoji from the guild.
   * @param {string | Emoji} emoji - The emoji to delete. Can be either the emoji ID or the Emoji object.
   * @param {string} reason - The reason for deleting the emoji.
   * @returns {Promise<Emoji>} - The deleted emoji.
   * @throws {Error} - If the deletion fails.
   */
  async delete(emoji, reason) {
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    const deletedEmoji = this._add(emoji);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`, {reason});
    return deletedEmoji;
  }

  /**
   * Fetches an emoji from the guild's emoji list.
   * @param {string | object} emoji - The emoji to fetch. Can be either an emoji ID or a string representation of the emoji.
   * @param {object} [options] - Additional options for the fetch operation.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched emoji.
   * @param {boolean} [options.force=false] - Whether to force the fetch operation even if the emoji is already cached.
   * @returns {Promise<EmojiCache>} A promise that resolves to the fetched emoji.
   */
  async fetch(emoji, options) {
    if (typeof emoji?.id !== "undefined" || typeof emoji === "string") return this._fetchId(emoji, options?.cache, options?.force);
    if (typeof emoji === "object" && !options) options = emoji;
    const {cache = true, force = false} = options ?? {};
    emoji = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/emojis`);
    return new this.cache.constructor(emoji?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * Fetches the ID of an emoji from the guild.
   * @param {string | Emoji} emoji - The emoji or the ID of the emoji to fetch.
   * @param {boolean} [cache=true] - Whether to cache the fetched emoji.
   * @param {boolean} [force=false] - Whether to force fetch the emoji even if it is already cached.
   * @returns {Promise<Emoji>} - A promise that resolves to the fetched emoji.
   */
  async _fetchId(emoji, cache = true, force = false) {
    const emojiId = typeof emoji === "string" ? emoji : emoji?.id;
    if (this.cache.has(emojiId) && force) return this.cache.get(emojiId);
    emoji = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/emojis/${emojiId}`);
    return this._add(emoji, this.guildId, {cache, force: true});
  }

  /**
   * Transforms the given roles object into a string or returns the id property of the roles object.
   * @param {Object} roles - The roles object to transform.
   * @returns {string | undefined} - The transformed roles as a string or the id property of the roles object.
   */
  static transformRoles(roles = {}) {
    return typeof roles === "string" ? roles : roles?.id ?? undefined;
  }

  /**
   * Transforms the given options object into a new object with modified properties.
   * @param {Object} o - The options object to transform.
   * @returns {Promise<Object>} - A promise that resolves to the transformed options object.
   */
  static async transformOptions(o) {
    return {
      name: o.name ?? undefined,
      image: o.image ? await Util.generateDataURI(o.image) : undefined,
      roles: o.roles?.map((o) => this.transformRoles(o)),
    };
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = EmojiManager;
