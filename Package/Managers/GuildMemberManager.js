const GuildMember = require("../Structures/GuildMember");
const {Opcodes} = require("../Util/Constants");
const Intents = require("../Util/Intents");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collections = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for guild members.
 * @class
 * @extends Base
 */
class GuildMemberManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Adds a member to the guild.
   * @param {string | GuildMember} members - The member to add. Can be either a string representing the member's ID or a GuildMember object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the member to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the member.
   * @param {boolean} [options.cache=true] - Whether to cache the member object.
   * @param {boolean} [options.force=false] - Whether to force adding the member even if it already exists in the cache.
   * @returns {GuildMember | null} The added member object
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
   * Fetches guild members from the server.
   * @param {string | object} member - The member to fetch. Can be a member ID or a member object.
   * @param {object} options - Additional options for the fetch.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched members.
   * @param {boolean} [options.force=false] - Whether to force fetch the members even if they are already cached.
   * @param {string} [options.query=""] - A query string to filter the members.
   * @param {number} [options.limit=1000] - The maximum number of members to fetch.
   * @param {boolean} [options.presences] - Whether to include
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
   * Retrieves a list of members from the guild.
   * @param {Object} [options] - The options for listing members.
   * @param {number} [options.limit=50] - The maximum number of members to retrieve.
   * @returns {Promise<Cache>} - A promise that resolves to a Cache object containing the retrieved members.
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
   * Searches for members in a guild based on the provided query.
   * @param {Object} options - The search options.
   * @param {string} options.query - The query to search for.
   * @param {number} [options.limit=50] - The maximum number of results to return.
   * @returns {Promise<Cache>} A Promise that resolves to a Cache object containing the search results.
   * @throws {RangeError} If the query is not provided.
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
   * Kicks a member from the guild.
   * @param {string | GuildMember} member - The member to kick. Can be either a string representing the member's ID or a GuildMember object.
   * @param {string} reason - The reason for kicking the member. Optional.
   * @returns {Promise<GuildMember>} - The deleted member object.
   * @throws {RangeError} - If a valid GuildMember is not specified.
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
   * Bans a member from the guild.
   * @param {GuildMember} member - The member to ban.
   * @param {Object} [options] - Additional options for the ban.
   * @returns {Promise<GuildMember>} - The banned member.
   */
  async ban(member, options = {}) {
    member = this._add(member);
    await this.client.guilds._add(this.guildId)?.bans.create(member, options);
    return member;
  }

  /**
   * Unbans a user from the guild.
   * @param {User} user - The user to unban.
   * @param {string} reason - The reason for unbanning the user.
   * @returns {User} - The unbanned user.
   * @throws {Error} - If the user or guild is not found.
   */
  async unban(user, reason) {
    user = this.client.users._add(user);
    await this.client.guilds._add(this.guildId)?.bans.remove(user, reason);
    return user;
  }

  /**
   * Edits a guild member with the specified options.
   * @param {string | GuildMember} member - The member to edit. Can be either a member ID or a GuildMember object.
   * @param {Object} [options] - The options for editing the member.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<GuildMember>} A promise that resolves with the edited GuildMember object.
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
   * Fetches the ID of a member from the guild.
   * @param {string | Object} member - The member object or the ID of the member.
   * @param {Object} [options] - Additional options for the fetch.
   * @param {boolean} [options.force] - Whether to force the fetch even if the member is already cached.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched member.
   * @returns {Promise<Object>} - A promise that resolves to the fetched member object.
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
   * Returns the cache object.
   * @returns The cache object.
   */
  get cache() {
    return Collections;
  }

  /**
   * Transforms a given date into an ISO string format.
   * @param {Date | string | null} date - The date to transform.
   * @returns {string | null} - The transformed date in ISO string format, or null if the input is null.
   */
  static transformTimeout(date) {
    if (date === null) return null;
    if (!date) return;
    if (date instanceof Date) return date.toISOString();
    return new Date(date).toISOString();
  }

  /**
   * Transforms the given options object based on the provided parameters.
   * @param {Object} options - The options object to transform.
   * @param {boolean} [edit=false] - Indicates whether the transformation is for editing purposes.
   * @returns {Object} - The transformed options object.
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
   * Transforms the given payload into a new format.
   * @param {any} payload - The payload to transform.
   * @returns {string | string[] | undefined} - The transformed payload.
   */
  static transformPayload(payload = {}) {
    if (Array.isArray(payload)) return payload.map((o) => (typeof o === "string" ? o : o.user?.id ?? o.id));
    return typeof payload === "string" ? payload : payload.user?.id ?? payload.id ?? undefined;
  }
}

module.exports = GuildMemberManager;
