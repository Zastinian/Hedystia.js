const ClientUser = require("../Structures/ClientUser");
const User = require("../Structures/User");
const MessagePayload = require("../Util/MessagePayload");
const UserPayload = require("../Util/UserPayload");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class UserManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(users, options = { cache: true, force: false }) {
    if (!users) return;
    const userId =
      typeof users === "string" ? users : users.user?.id ?? users.id;
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

  async fetch(user, options = {}) {
    const userId = typeof user === "string" ? user : user.id;
    const { cache = true, force = false } = options;
    if (this.cache.has(userId) && force) return this.cache.get(userId);
    user = await this.client.api.get(`${this.client.root}/users/${userId}`);
    return this._add(user, { cache, force: true });
  }

  async edit(options = {}) {
    const body = await UserPayload.create(options);
    const user = await this.client.api.patch(`${this.client.root}/users/@me`, {
      body,
    });
    return this._add(user);
  }

  async createDM(user) {
    if (!user) throw new RangeError(`No se ha encontrado ningún usuario!`);
    const body = {
      recipient_id: typeof user === "string" ? user : user.user?.id ?? user.id,
    };
    const channel = await this.client.api.post(
      `${this.client.root}/users/@me/channels`,
      { body }
    );
    return this.client.channels._add(channel);
  }

  async send(user, options = {}) {
    const body = await MessagePayload.create(options);
    const channel = await this.createDM(user);
    return await channel.send(body);
  }

  get cache() {
    return Collection;
  }
}

module.exports = UserManager;
