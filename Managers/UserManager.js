const ClientUser = require("../Structures/ClientUser");
const User = require("../Structures/User");
const MessagePayload = require("../Util/MessagePayload");
const UserPayload = require("../Util/UserPayload");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages users */
class UserManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function.
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a user to the cache
   * @param users - The user object or user ID to add to the cache.
   * @param [options] - {cache: true, force: false}
   * @returns A user object.
   */
  _add(users, options = {cache: true, force: false}) {
    if (!users) return;
    const userId = typeof users === "string" ? users : users.user?.id ?? users.id;
    let user;
    if (this.cache.has(userId) && !options.force) {
      user = this.cache.get(userId);
    } else {
      const newUser =
        userId === this.client.user.id
          ? new ClientUser(
              typeof users === "string"
                ? {
                    partial: true,
                    id: userId,
                  }
                : users,
              this.client
            )
          : new User(
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
   * It fetches a user from the API and adds it to the cache
   * @param user - The user object or user ID.
   * @param [options] - {cache = true, force = false}
   * @returns The user object.
   */
  async fetch(user, options = {}) {
    const userId = typeof user === "string" ? user : user.id;
    const {cache = true, force = false} = options;
    if (this.cache.has(userId) && force) return this.cache.get(userId);
    user = await this.client.api.get(`${this.client.root}/users/${userId}`);
    return this._add(user, {cache, force: true});
  }

  /**
   * This function edits the user's profile.
   * @param [options] - The options to pass to the edit function.
   * @returns The user object.
   */
  async edit(options = {}) {
    const body = await UserPayload.create(options);
    const user = await this.client.api.patch(`${this.client.root}/users/@me`, {
      body,
    });
    return this._add(user);
  }

  /**
   * It creates a DM channel with the user you specify
   * @param user - The user to create a DM with.
   * @returns The channel object.
   */
  async createDM(user) {
    if (!user) throw new RangeError(`No user found!`);
    const body = {
      recipient_id: typeof user === "string" ? user : user.user?.id ?? user.id,
    };
    const channel = await this.client.api.post(`${this.client.root}/users/@me/channels`, {body});
    return this.client.channels._add(channel);
  }

  /**
   * It creates a message payload, creates a DM channel, and sends the message payload to the DM
   * channel.
   * @param user - The user to send the message to.
   * @param [options] - {
   * @returns The message that was sent.
   */
  async send(user, options = {}) {
    const body = await MessagePayload.create(options);
    const channel = await this.createDM(user);
    return await channel.send(body);
  }

  /**
   * The function returns a collection of objects that are stored in the cache.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }
}

module.exports = UserManager;
