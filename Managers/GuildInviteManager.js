const Invite = require("../Structures/Invite");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class GuildInviteManager extends Base {
  constructor(guild, client) {
    super(client);

    this.guild = guild;
  }

  _add(invites, guild = this.guild, options = { cache: true, force: false }) {
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

  async fetch(options = {}) {
    const { cache, force } = options;
    const invite = await this.client.api.get(
      `${this.client.root}/guilds/${this.guild.id}/invites`
    );
    return new this.cache.constructor(
      invite?.map((o) => [
        o.code,
        this._add(o, this.guild.id, { cache, force }),
      ])
    );
  }

  async delete(invite, reason) {
    if (!invite)
      throw new RangeError(
        `Por favor, especifique un código de invitación para eliminar`
      );
    if (/^(http(s)?)/gi.test(invite))
      invite = invite.slice(invite.lastIndexOf("/") + 1);
    const code = typeof invite === "string" ? invite : invite?.code;
    invite = await this.client.api.delete(
      `${this.client.root}/invites/${code}`,
      { reason }
    );
    return this._add(invite);
  }

  get cache() {
    return Collection;
  }
}

module.exports = GuildInviteManager;
