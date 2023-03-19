const GuildMember = require("../Structures/GuildMember");
const {Opcodes} = require("../Util/Constants");
const Intents = require("../Util/Intents");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collections = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages the members of a guild */
class GuildMemberManager extends Base {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It creates a new GuildMember object if the member isn't cached, or returns the cached member if it
   * is
   * @param members - The member(s) to add to the cache. Can be a string, a user object, or a guild
   * member object.
   * @param [guildId] - The ID of the guild the member is in.
   * @param [options] - cache = true, force = false
   * @returns A new GuildMember object
   */
  _add(members, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!members) return null;
    let member;
    const memberId = typeof members === "string" ? members : members.user?.id ?? members.id;
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

  /**
   * It fetches the members of a guild
   * @param member - The member to fetch. Can be a user ID, a user object, or a guild member object.
   * @param options - {
   * @returns A promise that resolves to a new cache.constructor
   */
  async fetch(member, options) {
    if (typeof (member?.user?.id ?? member?.id) !== "undefined" || typeof member === "string") return this._fetchId(member, options);
    if (typeof member === "object" && !options) options = member;
    const {cache = true, force = false, query = "", limit = 1000, presences, users} = options ?? {};
    this.client.ws.send({
      op: Opcodes.Request_Guild_Members,
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
        rej(new Error(`Server members did not arrive on time ${!this.client.intents.has(Intents.Flags.Guild_Members) ? `Lost Member intent` : ""}`));
      }, this.client.restRequestTimeout);
      this.client.on("guildMembersChunk", (chunk) => {
        clearTimeout(timeout);
        return resolve(new this.cache.constructor(chunk.members?.map((o) => [o.user?.id, this._add(o, this.guildId, {cache, force})])));
      });
    });
  }

  /**
   * It gets a list of members from the API and returns a cache of the members
   * @param [options] - An object containing the following properties:
   * @returns A new cache constructor
   */
  async list(options = {limit: 50}) {
    const members = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/members`, {
      query: options,
    });
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

  /**
   * It searches for members in a guild
   * @param [options] - An object containing the following properties:
   * @returns A new cache constructor
   */
  async search(options = {limit: 50}) {
    if (!options.query) throw new RangeError(`Query is required!`);
    const members = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/members/search`, {
      query: options.query,
    });
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

  /**
   * It kicks a member from the guild
   * @param member - The member to kick. Can be a GuildMember object, a User object, or a user ID
   * string.
   * @param reason - The reason for the kick.
   * @returns The deleted member
   */
  async kick(member, reason) {
    const memberId = typeof member === "string" ? member : member?.user?.id ?? member?.id;
    if (!member) throw new RangeError(`Please, specify a valid GuildMember`);
    const deletedMember = this._add(memberId);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/members/${memberId}`, {
      reason: reason ?? undefined,
    });

    return deletedMember;
  }

  /**
   * It bans a member from a guild
   * @param member - The member to ban.
   * @param [options] - An object containing the following properties:
   * @returns The member that was banned.
   */
  async ban(member, options = {}) {
    member = this._add(member);
    await this.client.guilds._add(this.guildId)?.bans.create(member, options);
    return member;
  }

  /**
   * Unban a user from the guild.
   * @param user - The user to unban.
   * @param reason - The reason for the unban.
   * @returns The user that was unbanned.
   */
  async unban(user, reason) {
    user = this.client.users._add(user);
    await this.client.guilds._add(this.guildId)?.bans.remove(user, reason);
    return user;
  }

  /**
   * It edits a guild member
   * @param member - The member to edit.
   * @param [options] - The options to pass to the API.
   * @returns A new member object
   */
  async edit(member, options = {}) {
    const {reason} = options;
    const body = await GuildMemberManager.transformOptions(options, true);
    const memberId = typeof member === "string" ? member : member?.user?.id ?? member?.id;
    member = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/members/${memberId === this.client.user.id ? `@me` : memberId}`,
      {reason, body}
    );

    return this._add(member);
  }

  /**
   * It fetches a member from the API and returns the member object
   * @param member - The member to fetch. Can be a string, a member object, or a user object.
   * @param options - An object with the following properties:
   * @returns The member object
   */
  async _fetchId(member, options) {
    const memberId = typeof member === "string" ? member : member?.user?.id ?? member?.id;
    if (this.cache.has(memberId) && !options?.force) return this.cache.get(memberId);
    const fetchedMember = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/members/${memberId}`);
    return this._add(fetchedMember, this.guildId, {
      cache: options?.cache ?? true,
      force: true,
    });
  }

  /**
   * It returns the value of the variable Collections.
   * @returns The cache object
   */
  get cache() {
    return Collections;
  }

  /**
   * If the date is null, return null. If the date is not null, return the date as an ISO string
   * @param date - The date to be transformed.
   * @returns The date is being returned in ISO format.
   */
  static transformTimeout(date) {
    if (date === null) return null;
    if (!date) return;
    if (date instanceof Date) return date.toISOString();
    return new Date(date).toISOString();
  }

  /**
   * It transforms the options object into a format that the API can understand
   * @param [options] - The options object.
   * @param [edit=false] - Whether or not the user is editing the member.
   * @returns an object with the keys limit, after, and the values of the options.limit, options.after,
   * and options.after?.user?.id, options.after?.id.
   */
  static async transformOptions(options = {}, edit = false) {
    if (edit) {
      if (options.avatar) options.avatar = `data:image/png;base64,${(await Util.getBuffer(options.avatar)).toString("base64")}`;
      return {
        nick: options.nickname ?? options.nick ?? undefined,
        avatar: options.avatar ?? undefined,
        roles: options.roles?.map((o) => (typeof o === "string" ? o : o.id)),
        mute: options.mute ?? undefined,
        deaf: options.deaf ?? undefined,
        channel_id: typeof options.channel === "string" ? options.channel : options.channel?.id ?? (options.channel === null ? null : undefined),
        communication_disabled_until: this.transformTimeout(options.timeout),
      };
    }
    return {
      limit: options.limit ?? 50,
      after: typeof options.after === "string" ? options.after : options.after?.user?.id ?? options.after?.id ?? undefined,
    };
  }

  /**
   * If the payload is an array, map each element to its id, otherwise return the id of the payload
   * @param [payload] - The payload that is being sent to the API.
   * @returns The user id
   */
  static transformPayload(payload = {}) {
    if (Array.isArray(payload)) return payload.map((o) => (typeof o === "string" ? o : o.user?.id ?? o.id));
    return typeof payload === "string" ? payload : payload.user?.id ?? payload.id ?? undefined;
  }
}

module.exports = GuildMemberManager;
