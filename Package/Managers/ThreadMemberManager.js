const ThreadMember = require("../Structures/ThreadMember");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Manages the members of a thread in a guild.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild the thread belongs to.
 * @param {string} threadId - The ID of the thread.
 * @param {Client} client - The client instance.
 */
class ThreadMemberManager extends Base {
  /**
   * Constructs a new instance of the ThreadWatcher class.
   * @constructor
   * @param {string} guildId - The ID of the guild where the thread is located.
   * @param {string} threadId - The ID of the thread being watched.
   * @param {Client} client - The Discord client instance.
   */
  constructor(guildId, threadId, client) {
    super(client);

    this.guildId = guildId;
    this.threadId = threadId;
  }

  /**
   * Adds a member to a thread.
   * @param {string | { user_id: string }} members - The member or user ID to add to the thread.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the thread is located.
   * @param {string} [threadId=this.threadId] - The ID of the thread.
   * @param {object} [options={ cache: true, force: false }] - Additional options for adding the member.
   * @param {boolean} [options.cache=true] - Whether to cache the thread member.
   * @param {boolean} [options.force=false] - Whether to force fetching the thread member even if it is already cached.
   *
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
   * Joins the current user to a thread in a channel.
   * @returns {Promise<void>} - A promise that resolves when the user has successfully joined the thread.
   */
  async join() {
    await this.client.api.put(`${this.client.root}/channels/${this.threadId}/thread-members/@me`);
    return this._add(this.client.user);
  }

  /**
   * Fetches data for a user or thread from the server.
   * @param {string | object} user - The user ID or object containing user information.
   * @param {object} [options] - Additional options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched data.
   * @param {boolean} [options.force=false] - Whether to force a fresh fetch from the server.
   * @returns {Promise} A promise that resolves with the fetched data.
   */
  async fetch(user, options) {
    if (typeof user?.id !== "undefined" || typeof user === "string") return this._fetchId(user, options?.cache, options?.force);
    if (typeof user === "object" && !options) options = user;
    const {cache = true, force = false} = options ?? {};
    const members = await this.client.api.get(`${this.client.root}/channels/${this.threadId}/thread-members`);
    return new this.cache.constructor(members?.map((o) => [o.user_id, this._add(o, this.guildId, this.threadId, {cache, force})]));
  }

  /**
   * Fetches the ID of a user asynchronously.
   * @param {string | UserObject} user - The user or user ID to fetch the ID for.
   * @param {boolean} [cache=true] - Whether to cache the fetched ID.
   * @param {boolean} [force=true] - Whether to force the fetch even if the ID is already cached.
   * @returns {Promise<string>} A promise that resolves to the user ID.
   */
  async _fetchId(user, cache = true, force = true) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id ?? user?.userId;
    if (this.cache.has(userId) && force) return this.cache.get(userId);
    const member = await this.client.api.get(`${this.client.root}/channels/${this.threadId}/thread-members/${userId}`);
    return this._add(member, this.guildId, this.threadId, {cache, force});
  }

  /**
   * Adds a user to the thread.
   * @param {string | User} [user=this.client.user.id] - The user to add to the thread. Can be a user ID or a User object.
   * @returns {Promise<void>} - A promise that resolves when the user has been added to the thread.
   */
  async add(user = this.client.user.id) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id ?? user?.user_id;
    await this.client.api.put(`${this.client.root}/channels/${this.threadId}/thread-members/${userId}`);
    return this._add(user);
  }

  /**
   * Removes a user from the thread.
   * @param {string | UserResolvable} [user=this.client.user.id] - The user to remove from the thread. Defaults to the client's user ID.
   * @returns {Promise<GuildMember | null>} - A promise that resolves with the deleted member object, or null if the user was not found.
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
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = ThreadMemberManager;
