const GuildMember = require("../Structures/GuildMember");
const { Opcodes, OptionType } = require("../Util/Constants");
const Intents = require("../Util/Intents");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collections = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class GuildMemberManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  _add(
    members,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
    if (!members) return null;
    let member;
    const memberId =
      typeof members === "string" ? members : members.user?.id ?? members.id;
    if (this.cache.has(memberId) && !options.force) {
      member = this.cache.get(memberId);
    } else {
      const newMember = new GuildMember(
        typeof members === "string"
          ? {
              id: memberId,
              partial: true,
            }
          : members,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(memberId, newMember);

      member = newMember;
    }

    return member;
  }

  async fetch(member, options) {
    if (
      typeof (member?.user?.id ?? member?.id) !== "undefined" ||
      typeof member === "string"
    )
      return this._fetchId(member, options);
    if (typeof member === "object" && !options) options = member;
    const {
      cache = true,
      force = false,
      query = "",
      limit = 1000,
      presences,
      users,
    } = options ?? {};
    this.client.ws.send({
      op: Opcodes.REQUEST_GUILD_MEMBERS,
      d: {
        guild_id: this.guildId,
        query,
        limit,
        presences,
        user_ids: GuildMemberManager.transformPayload(users),
      },
    });

    return new Promise((resolve, rej) => {
      const timeout = setTimeout(() => {
        this.client.removeListener("guildMembersChunk", () => {});
        rej(
          new Error(
            `Los miembros del servidor no llegaron a tiempo ${
              !this.client.intents.has(Intents.FLAGS.Miembros)
                ? `Se perdio el Miembros intent`
                : ""
            }`
          )
        );
      }, this.client.restRequestTimeout);
      this.client.on("guildMembersChunk", (chunk) => {
        clearTimeout(timeout);
        return resolve(
          new this.cache.constructor(
            chunk.members?.map((o) => [
              o.user?.id,
              this._add(o, this.guildId, { cache, force }),
            ])
          )
        );
      });
    });
  }

  async list(options = { limit: 50 }) {
    const members = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/members`,
      {
        query: options,
      }
    );
    return new this.cache.constructor(
      members?.map((o) => [
        o.user?.id ?? o.id,
        this._add(o, this.guildId, {
          cache: options?.cache ?? true,
          froce: options?.force ?? false,
        }),
      ])
    );
  }

  async search(options = { limit: 50 }) {
    if (!options.query) throw new RangeError(`Query is required!`);
    const members = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/members/search`,
      {
        query: options.query,
      }
    );
    return new this.cache.constructor(
      members?.map((o) => [
        o.user?.id,
        this._add(o, this.guildId, {
          cache: options.cache ?? true,
          force: options.force ?? false,
        }),
      ])
    );
  }

  async kick(member, reason) {
    const memberId =
      typeof member === "string" ? member : member?.user?.id ?? member?.id;
    if (!member)
      throw new RangeError(`Por favor, especifique un GuildMember válido`);
    const deletedMember = this._add(memberId);
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/members/${memberId}`,
      {
        reason: reason ?? undefined,
      }
    );

    return deletedMember;
  }

  async ban(member, options = {}) {
    member = this._add(member);
    await this.client.guilds._add(this.guildId)?.bans.create(member, options);
    return member;
  }

  async unban(user, reason) {
    user = this.client.users._add(user);
    await this.client.guilds._add(this.guildId)?.bans.remove(user, reason);
    return user;
  }

  async edit(member, options = {}) {
    const { reason } = options;
    const body = await GuildMemberManager.transformOptions(options, true);
    const memberId =
      typeof member === "string" ? member : member?.user?.id ?? member?.id;
    member = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/members/${
        memberId === this.client.user.id ? `@me` : memberId
      }`,
      { reason, body }
    );

    return this._add(member);
  }

  async _fetchId(member, options) {
    const memberId =
      typeof member === "string" ? member : member?.user?.id ?? member?.id;
    if (this.cache.has(memberId) && !options?.force)
      return this.cache.get(memberId);
    const fetchedMember = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/members/${memberId}`
    );
    return this._add(fetchedMember, this.guildId, {
      cache: options?.cache ?? true,
      force: true,
    });
  }

  get cache() {
    return Collections;
  }

  static transformTimeout(date) {
    if (date === null) return null;
    if (!date) return;
    if (date instanceof Date) return date.toISOString();
    return new Date(date).toISOString();
  }

  static async transformOptions(options = {}, edit = false) {
    if (edit) {
      if (options.avatar)
        options.avatar = `data:image/png;base64,${(
          await Util.getBuffer(options.avatar)
        ).toString("base64")}`;
      return {
        nick: options.nickname ?? options.nick ?? undefined,
        avatar: options.avatar ?? undefined,
        roles: options.roles?.map((o) => (typeof o === "string" ? o : o.id)),
        mute: options.mute ?? undefined,
        deaf: options.deaf ?? undefined,
        channel_id:
          typeof options.channel === "string"
            ? options.channel
            : options.channel?.id ??
              (options.channel === null ? null : undefined),
        communication_disabled_until: this.transformTimeout(options.timeout),
      };
    }
    return {
      limit: options.limit ?? 50,
      after:
        typeof options.after === "string"
          ? options.after
          : options.after?.user?.id ?? options.after?.id ?? undefined,
    };
  }

  static transformPayload(payload = {}) {
    if (Array.isArray(payload))
      return payload.map((o) =>
        typeof o === "string" ? o : o.user?.id ?? o.id
      );
    return typeof payload === "string"
      ? payload
      : payload.user?.id ?? payload.id ?? undefined;
  }
}

module.exports = GuildMemberManager;
