const ClientUser = require("../Structures/ClientUser");
const User = require("../Structures/User");
const MessagePayload = require("../Util/MessagePayload");
const UserPayload = require("../Util/UserPayload");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a user manager that handles user-related operations.
 * @class
 * @extends Base
 */
class UserManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a user to the collection.
   * @param {User|string} users - The user object or user ID to add.
   * @param {Object} [options] - Additional options for adding the user.
   * @param {boolean} [options.cache=true] - Whether to cache the user object.
   * @param {boolean} [options.force=false] - Whether to force fetching the user even if it is already cached.
   * @returns {User} The added user object.
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
   * Fetches user data from the server.
   * @param {string | User} user - The user ID or user object.
   * @param {Object} [options] - Additional options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched user data.
   * @param {boolean} [options.force=false] - Whether to force a fresh fetch even if the data is already cached.
   * @returns {Promise<User>} A promise that resolves to the fetched user data.
   */
  async fetch(user, options = {}) {
    const userId = typeof user === "string" ? user : user.id;
    const {cache = true, force = false} = options;
    if (this.cache.has(userId) && force) return this.cache.get(userId);
    user = await this.client.api.get(`${this.client.root}/users/${userId}`);
    return this._add(user, {cache, force: true});
  }

  /**
   * Edits the user's profile with the provided options.
   * @param {Object} options - The options to edit the user's profile.
   * @returns {Promise<User>} A promise that resolves with the updated user object.
   */
  async edit(options = {}) {
    const body = await UserPayload.create(options);
    const user = await this.client.api.patch(`${this.client.root}/users/@me`, {
      body,
    });
    return this._add(user);
  }

  /**
   * Creates a direct message channel with the specified user.
   * @param {string | User} user - The user to create the direct message channel with.
   * @throws {RangeError} If no user is provided.
   * @returns {Promise<Channel>} A promise that resolves with the created direct message channel.
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
   * Sends a message to a user through a direct message channel.
   * @param {User} user - The user to send the message to.
   * @param {Object} [options] - Additional options for creating the message payload.
   * @returns {Promise<Message>} A promise that resolves to the sent message.
   */
  async send(user, options = {}) {
    const body = await MessagePayload.create(options);
    const channel = await this.createDM(user);
    return await channel.send(body);
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = UserManager;
