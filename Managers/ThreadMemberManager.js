const ThreadMember = require("../Structures/ThreadMember");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* This class is used to manage the members of a thread */
class ThreadMemberManager extends Base {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
   * @param guildId - The ID of the guild the thread is in.
   * @param threadId - The ID of the thread you want to get.
   * @param client - The client that the thread was created with.
   */
  constructor(guildId, threadId, client) {
    super(client);

    this.guildId = guildId;
    this.threadId = threadId;
  }

  /**
   * It adds a member to the cache
   * @param members - The member(s) to add to the cache. This can be a single member, or an array of
   * members.
   * @param [guildId] - The guild ID of the guild the thread is in.
   * @param [threadId] - The ID of the thread
   * @param [options] - {cache: true, force: false}
   * @returns A new ThreadMember object
   */
  _add(members, guildId = this.guildId, threadId = this.threadId, options = {cache: true, force: false}) {
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

  /**
   * It joins a thread
   * @returns The user object
   */
  async join() {
    await this.client.api.put(`${this.client.root}/channels/${this.threadId}/thread-members/@me`);
    return this._add(this.client.user);
  }

  /**
   * It fetches the members of a thread
   * @param user - The user to fetch. Can be a user object, a user ID, or a user tag.
   * @param options - An object containing the following properties:
   * @returns A new cache constructor
   */
  async fetch(user, options) {
    if (typeof user?.id !== "undefined" || typeof user === "string") return this._fetchId(user, options?.cache, options?.force);
    if (typeof user === "object" && !options) options = user;
    const {cache = true, force = false} = options ?? {};
    const members = await this.client.api.get(`${this.client.root}/channels/${this.threadId}/thread-members`);
    return new this.cache.constructor(members?.map((o) => [o.user_id, this._add(o, this.guildId, this.threadId, {cache, force})]));
  }

  /**
   * It fetches a user's ID from the API and returns it
   * @param user - The user to fetch. Can be a user object, a user ID, or a member object.
   * @param [cache=true] - Whether or not to cache the member.
   * @param [force=true] - If true, it will force the cache to be updated.
   * @returns The member object
   */
  async _fetchId(user, cache = true, force = true) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id ?? user?.userId;
    if (this.cache.has(userId) && force) return this.cache.get(userId);
    const member = await this.client.api.get(`${this.client.root}/channels/${this.threadId}/thread-members/${userId}`);
    return this._add(member, this.guildId, this.threadId, {cache, force});
  }

  /**
   * It adds a user to a thread
   * @param [user] - The user to add to the thread.
   * @returns The user object
   */
  async add(user = this.client.user.id) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id ?? user?.user_id;
    await this.client.api.put(`${this.client.root}/channels/${this.threadId}/thread-members/${userId}`);
    return this._add(user);
  }

  /**
   * It removes a user from the thread
   * @param [user] - The user to remove from the thread.
   * @returns The deleted member
   */
  async remove(user = this.client.user.id) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id ?? user?.user_id;
    const deletedMember = this._add(user);
    await this.client.api.delete(
      `${this.client.root}/channels/${this.threadId}/thread-members${userId === this.client.user.id ? `/@me` : `/${userId}`}`
    );
    return deletedMember;
  }

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }
}

module.exports = ThreadMemberManager;
