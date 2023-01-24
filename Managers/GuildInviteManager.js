const Invite = require("../Structures/Invite");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages guild invites */
class GuildInviteManager extends Base {
  /**
   * It's a constructor function that takes in a guild and a client, and sets the guild to the guild that
   * was passed in
   * @param guild - The guild object that the event is being emitted for.
   * @param client - The client that the command is being run on.
   */
  constructor(guild, client) {
    super(client);

    this.guild = guild;
  }

  /**
   * It adds an invite to the cache
   * @param invites - The invite code or invite object.
   * @param [guild] - The guild the invite is for.
   * @param [options] - {cache: true, force: false}
   * @returns The invite object
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
   * It fetches all the invites for the guild and returns a new cache of the invites
   * @param [options] - An object containing the following properties:
   * @returns A new instance of the cache constructor.
   */
  async fetch(options = {}) {
    const {cache, force} = options;
    const invite = await this.client.api.get(`${this.client.root}/guilds/${this.guild.id}/invites`);
    return new this.cache.constructor(invite?.map((o) => [o.code, this._add(o, this.guild.id, {cache, force})]));
  }

  /**
   * It deletes an invite
   * @param invite - The invite code or invite object to delete.
   * @param reason - The reason for deleting the invite.
   * @returns The invite object
   */
  async delete(invite, reason) {
    if (!invite) throw new RangeError(`Please specify an invitation code to delete.`);
    if (/^(http(s)?)/gi.test(invite)) invite = invite.slice(invite.lastIndexOf("/") + 1);
    const code = typeof invite === "string" ? invite : invite?.code;
    invite = await this.client.api.delete(`${this.client.root}/invites/${code}`, {reason});
    return this._add(invite);
  }

  /**
   * `cache` is a getter that returns the `Collection` class
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }
}

module.exports = GuildInviteManager;
