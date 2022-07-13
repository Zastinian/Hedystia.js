const User = require("../Structures/User");
const EmojiResolver = require("../Util/EmojiResolver");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class ReactionUserManager extends Base {
  constructor(reaction, channelId, messageId, emoji, client) {
    super(client);
    this.reaction = reaction;
    this.channelId = channelId;
    this.messageId = messageId;
    this.emoji = emoji;
  }

  _add(users, options = { cache: true, force: false }) {
    if (!users) return null;
    const userId =
      typeof users === "string" ? users : users.user?.id ?? users.id;
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

  async fetch(options) {
    const { cache = true, force = false } = options ?? {};
    const parseEmoji = EmojiResolver.transformEmoji(this.emoji, this.client);
    const query = ReactionUserManager.transformOptions(options);
    const users = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/messages/${
        this.messageId
      }/reactions/${encodeURIComponent(parseEmoji)}`,
      { query }
    );
    return new this.cache.constructor(
      users?.map((o) => [o.id, this._add(o, { cache, force })])
    );
  }

  async remove(user = this.client.user.id) {
    if (!user) throw new RangeError(`No se ha encontrado ningún usuario!`);
    const userId = typeof user === "string" ? user : user.user?.id ?? user.id;
    const parsedEmoji = EmojiResolver.transformEmoji(this.emoji, this.client);
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/messages/${
        this.messageId
      }/reactions/${encodeURIComponent(parsedEmoji)}/${
        userId === this.client.user.id ? `@me` : userId
      }`
    );
    this.cache.delete(userId);
    return this.reaction;
  }

  get cache() {
    return Collection;
  }

  static transformOptions(o = {}) {
    return {
      after:
        typeof o.after === "string"
          ? o.after
          : o.after?.user?.id ?? o.after?.id ?? undefined,
      limit: o.limit ?? 25,
    };
  }
}

module.exports = ReactionUserManager;
