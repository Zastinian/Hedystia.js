const User = require("../Structures/User");
const EmojiResolver = require("../Util/EmojiResolver");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * A class representing a manager for reaction users.
 * @class
 * @extends Base
 */
class ReactionUserManager extends Base {
  /**
   * Constructs a ReactionCollector instance.
   * @constructor
   * @param {Reaction} reaction - The reaction object.
   * @param {string} channelId - The ID of the channel where the reaction occurred.
   * @param {string} messageId - The ID of the message where the reaction occurred.
   * @param {Emoji} emoji - The emoji that was reacted with.
   * @param {Client} client - The client instance.
   */
  constructor(reaction, channelId, messageId, emoji, client) {
    super(client);
    this.reaction = reaction;
    this.channelId = channelId;
    this.messageId = messageId;
    this.emoji = emoji;
  }

  /**
   * Adds a user to the collection of users.
   * @param {User | string} users - The user object or user ID to add.
   * @param {Object} [options] - Additional options for adding the user.
   * @param {boolean} [options.cache=true] - Whether to cache the user object.
   * @param {boolean} [options.force=false] - Whether to force fetching the user even if it is already cached.
   * @returns {User | null} The added user object or null if no user is provided.
   */
  _add(users, options = {cache: true, force: false}) {
    if (!users) return null;
    const userId = typeof users === "string" ? users : users.user?.id ?? users.id;
    let user;
    if (this.cache.has(userId) && !options.force) {
      user = this.cache.get(userId);
    } else {
      const newUser = new User(
        typeof users === "string"
          ? {
              partial: true,
              id: userId,
            }
          : users,
        this.client
      );

      if (options.cache) this.cache.set(userId, newUser);

      user = newUser;
    }

    return user;
  }

  /**
   * Fetches reaction users for a specific message and emoji.
   * @param {Object} options - The options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched data.
   * @param {boolean} [options.force=false] - Whether to force the fetch request even if the data is already cached.
   * @returns {Promise<Map<string, ReactionUser>>} - A promise that resolves to a map of reaction users, where the keys are user IDs and the values are ReactionUser objects.
   */
  async fetch(options) {
    const {cache = true, force = false} = options ?? {};
    const parseEmoji = EmojiResolver.transformEmoji(this.emoji, this.client);
    const query = ReactionUserManager.transformOptions(options);
    const users = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/messages/${this.messageId}/reactions/${encodeURIComponent(parseEmoji)}`,
      {query}
    );
    return new this.cache.constructor(users?.map((o) => [o.id, this._add(o, {cache, force})]));
  }

  /**
   * Removes a reaction from a message.
   * @param {string | User} [user=this.client.user.id] - The user ID or User object of the user whose reaction should be removed.
   * @throws {RangeError} If no user is found.
   * @returns {Promise<Reaction>} The removed reaction.
   */
  async remove(user = this.client.user.id) {
    if (!user) throw new RangeError(`No user found!`);
    const userId = typeof user === "string" ? user : user.user?.id ?? user.id;
    const parsedEmoji = EmojiResolver.transformEmoji(this.emoji, this.client);
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/messages/${this.messageId}/reactions/${encodeURIComponent(parsedEmoji)}/${
        userId === this.client.user.id ? `@me` : userId
      }`
    );
    this.cache.delete(userId);
    return this.reaction;
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the options object by extracting the "after" and "limit" properties.
   * @param {Object} o - The options object.
   * @returns {Object} - The transformed options object.
   */
  static transformOptions(o = {}) {
    return {
      after: typeof o.after === "string" ? o.after : o.after?.user?.id ?? o.after?.id ?? undefined,
      limit: o.limit ?? 25,
    };
  }
}

module.exports = ReactionUserManager;
