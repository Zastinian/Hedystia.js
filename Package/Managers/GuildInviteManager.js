const Invite = require("../Structures/Invite");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for handling guild invites.
 * @class
 * @extends Base
 * @param {Guild} guild - The guild associated with the invite manager.
 * @param {Client} client - The client instance.
 */
class GuildInviteManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Guild} guild - The guild object associated with the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(guild, client) {
    super(client);

    this.guild = guild;
  }

  /**
   * Adds an invite to the guild's invite cache.
   * @param {string | Invite} invites - The invite code or Invite object to add.
   * @param {Guild} [guild=this.guild] - The guild to add the invite to.
   * @param {Object} [options={cache: true, force: false}] - Additional options for adding the invite.
   * @param {boolean} [options.cache=true] - Whether to cache the invite.
   * @param {boolean} [options.force=false] - Whether to force the retrieval of the invite from the cache.
   * @returns {Invite | null} The added invite or null if no invite is provided.
   */
  _add(invites, guild = this.guild, options = {cache: true, force: false}) {
    if (!invites) return null;
    const inviteCode = typeof invites === "string" ? invites : invites.code;
    let invite;
    if (this.cache.has(inviteCode) && !options.forcr) {
      invite = this.cache.get(inviteCode);
    } else {
      const newInvite = new Invite(
        typeof invites === "string"
          ? {
              code: inviteCode,
              partial: true,
            }
          : invites,
        guild,
        this.client
      );

      if (options.cache) this.cache.set(inviteCode, newInvite);

      invite = newInvite;
    }

    return invite;
  }

  /**
   * Fetches guild invites from the API and returns a new cache constructor with the fetched data.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache] - Whether to use cached data or not.
   * @param {boolean} [options.force] - Whether to force a fresh fetch or not.
   * @returns {Promise<CacheConstructor>} A promise that resolves to a new cache constructor with the fetched data.
   */
  async fetch(options = {}) {
    const {cache, force} = options;
    const invite = await this.client.api.get(`${this.client.root}/guilds/${this.guild.id}/invites`);
    return new this.cache.constructor(invite?.map((o) => [o.code, this._add(o, this.guild.id, {cache, force})]));
  }

  /**
   * Deletes an invitation with the specified code and reason.
   * @param {string | object} invite - The invitation code or object to delete.
   * @param {string} reason - The reason for deleting the invitation.
   * @returns {Promise} A promise that resolves with the deleted invitation.
   * @throws {RangeError} If no invitation code is specified.
   */
  async delete(invite, reason) {
    if (!invite) throw new RangeError(`Please specify an invitation code to delete.`);
    if (/^(http(s)?)/gi.test(invite)) invite = invite.slice(invite.lastIndexOf("/") + 1);
    const code = typeof invite === "string" ? invite : invite?.code;
    invite = await this.client.api.delete(`${this.client.root}/invites/${code}`, {reason});
    return this._add(invite);
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = GuildInviteManager;
