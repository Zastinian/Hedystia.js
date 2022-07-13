const ThreadMember = require("../Structures/ThreadMember");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class ThreadMemberManager extends Base {
  constructor(guildId, threadId, client) {
    super(client);

    this.guildId = guildId;
    this.threadId = threadId;
  }

  _add(
    members,
    guildId = this.guildId,
    threadId = this.threadId,
    options = { cache: true, force: false }
  ) {
    if (!members) return null;
    const memberId = typeof members === "string" ? members : members.user_id;
    if (!memberId) return;
    let threadMember;
    if (this.cache.has(memberId) && !options.force) {
      threadMember = this.cache.get(memberId);
    } else {
      const newMember = new ThreadMember(
        typeof members === "string"
          ? {
              partial: true,
              userId: memberId,
            }
          : members,
        guildId,
        threadId,
        this.client
      );

      if (options.cache) this.cache.set(memberId, newMember);

      threadMember = newMember;
    }

    return threadMember;
  }

  async join() {
    await this.client.api.put(
      `${this.client.root}/channels/${this.threadId}/thread-members/@me`
    );
    return this._add(this.client.user);
  }

  async fetch(user, options) {
    if (typeof user?.id !== "undefined" || typeof user === "string")
      return this._fetchId(user, options?.cache, options?.force);
    if (typeof user === "object" && !options) options = user;
    const { cache = true, force = false } = options ?? {};
    const members = await this.client.api.get(
      `${this.client.root}/channels/${this.threadId}/thread-members`
    );
    return new this.cache.constructor(
      members?.map((o) => [
        o.user_id,
        this._add(o, this.guildId, this.threadId, { cache, force }),
      ])
    );
  }

  async _fetchId(user, cache = true, force = true) {
    const userId =
      typeof user === "string"
        ? user
        : user?.user?.id ?? user?.id ?? user?.userId;
    if (this.cache.has(userId) && force) return this.cache.get(userId);
    const member = await this.client.api.get(
      `${this.client.root}/channels/${this.threadId}/thread-members/${userId}`
    );
    return this._add(member, this.guildId, this.threadId, { cache, force });
  }

  async add(user = this.client.user.id) {
    const userId =
      typeof user === "string"
        ? user
        : user?.user?.id ?? user?.id ?? user?.user_id;
    await this.client.api.put(
      `${this.client.root}/channels/${this.threadId}/thread-members/${userId}`
    );
    return this._add(user);
  }

  async remove(user = this.client.user.id) {
    const userId =
      typeof user === "string"
        ? user
        : user?.user?.id ?? user?.id ?? user?.user_id;
    const deletedMember = this._add(user);
    await this.client.api.delete(
      `${this.client.root}/channels/${this.threadId}/thread-members${
        userId === this.client.user.id ? `/@me` : `/${userId}`
      }`
    );
    return deletedMember;
  }

  get cache() {
    return Collection;
  }
}

module.exports = ThreadMemberManager;
