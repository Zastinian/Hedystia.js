const GuildBan = require("../Structures/GuildBan");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class GuildBanManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  _add(bans, guildId = this.guildId, options = { cache: true, force: false }) {
    if (!bans) return null;
    const banId = typeof bans === "string" ? bans : bans.user?.id ?? bans.id;
    let ban;
    if (this.cache.has(banId) && !options.force) {
      ban = this.cache.get(banId);
    } else {
      const newBan = new GuildBan(
        typeof bans === "string"
          ? {
              partial: true,
              user: banId,
            }
          : bans,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(banId, newBan);

      ban = newBan;
    }

    return ban;
  }

  async create(user, options = {}) {
    const { reason } = options;
    const body = GuildBanManager.transformPayloadd(options);
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id;
    await this.client.api.put(
      `${this.client.root}/guilds/${this.guildId}/bans/${userId}`,
      { reason, body }
    );
    return this._add({
      user: this.client.users._add(userId),
    });
  }

  async remove(user, reason) {
    const userId = typeof user === "string" ? user : user?.user?.id ?? user?.id;
    const ban = this._add(userId);
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/bans/${userId}`,
      { reason }
    );
    return ban;
  }

  async fetch(ban, options) {
    if (
      typeof (ban?.user?.id ?? ban?.id) !== "undefined" ||
      typeof ban === "string"
    )
      return this._fetchId(ban, options?.cache, options?.force);
    if (typeof ban === "object" && !options) options = ban;
    const { cache, force } = options ?? {};
    let query;
    if (options) {
      query = {
        limit: options.limit ?? 1000,
        before:
          typeof options.before === "string"
            ? options.before
            : options.before?.user?.id ?? options.before?.id,
        after:
          typeof options.after === "string"
            ? options.after
            : options.after?.user?.id ?? options.after?.id,
      };
    }
    ban = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/bans`,
      { query }
    );
    return new this.cache.constructor(
      ban?.map((o) => [
        o.user?.id ?? o.id,
        this._add(o, this.guildId, { cache, force }),
      ])
    );
  }

  async _fetchId(ban, cache = true, force = false) {
    const banId = typeof ban === "string" ? ban : ban?.user?.id ?? ban?.id;
    if (this.cache.has(banId) && force) return this.cache.get(banId);
    ban = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/bans/${banId}`
    );
    return this._add(ban, this.guildId, { cache, force: true });
  }

  get cache() {
    return Collection;
  }

  static transformPayloadd(o = {}) {
    if (o.days < 0 || o.days > 7)
      throw new RangeError(
        `Los días de los mensajes borrados deben estar entre 0 y 7`
      );
    return {
      delete_message_days: o.days ?? undefined,
    };
  }
}

module.exports = GuildBanManager;
