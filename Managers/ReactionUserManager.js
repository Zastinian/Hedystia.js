const User = require("../Structures/User");
const EmojiResolver = require("../Util/EmojiResolver");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages the users that reacted to a message */
class ReactionUserManager extends Base {
  /**
   * It's a constructor for the Reaction class
   * @param reaction - The reaction object
   * @param channelId - The channel ID of the message that was reacted to.
   * @param messageId - The ID of the message that was reacted to
   * @param emoji - The emoji used
   * @param client - The client that instantiated the event
   */
  constructor(reaction, channelId, messageId, emoji, client) {
    super(client);
    this.reaction = reaction;
    this.channelId = channelId;
    this.messageId = messageId;
    this.emoji = emoji;
  }

  /**
   * It adds a user to the cache
   * @param users - The user(s) to add to the cache.
   * @param [options] - An object with the following properties:
   * @returns A new user object
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
   * It fetches the users that reacted to a message with a specific emoji
   * @param options - An object containing the following properties:
   * @returns A new instance of the cache constructor.
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
   * It removes a reaction from a message
   * @param [user] - The user to remove the reaction from.
   * @returns The reaction
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
   * `return Collection`
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes an object with optional `after` and `limit` properties, and returns an object with `after`
   * and `limit` properties, where `after` is a string and `limit` is a number
   * @param [o] - The options object that is passed to the function.
   * @returns The transformed options object.
   */
  static transformOptions(o = {}) {
    return {
      after: typeof o.after === "string" ? o.after : o.after?.user?.id ?? o.after?.id ?? undefined,
      limit: o.limit ?? 25,
    };
  }
}

module.exports = ReactionUserManager;
