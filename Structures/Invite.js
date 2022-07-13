const Base = require("../Base/base");
const { InviteTargetTypes } = require("../Util/Constants");
const ClientApplication = require("./ClientApplication");
class Invite extends Base {
  constructor(data = {}, guild, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.code = data.code ?? null;
    this.guild = this.client.guilds._add(data.guild ?? guild, { cache: false });
    this.channel =
      this.client.channels._add(
        data.channel ?? data.channel_id,
        this.guild?.id,
        { cache: false }
      ) ?? null;
    this.inviter =
      this.client.users._add(data.inviter, { cache: false, force: true }) ??
      null;
    this.targetType =
      (typeof data.target_type === "number"
        ? InviteTargetTypes[data.target_type]
        : data.target_type) ?? null;
    this.targetUser = this.client.users._add(data.target_user) ?? null;
    this.targetApplication = data.target_application
      ? new ClientApplication(data.target_application, this.client)
      : null;
    this.approximatePresenceCount = data.approximate_presence_count ?? null;
    this.approximateMemberCount = data.approximate_member_count ?? null;
    this.expiresAt = data.expires_at ? new Date(data.expires_at) : null;
    this.expiresTimestamp = this.expiresAt?.getTime() ?? null;
    this.uses = data.uses ?? null;
    this.maxUses = data.max_uses ?? null;
    this.maxAge = data.max_age ?? null;
    this.temporary = data.temporary ?? null;
    this.createdAt = data.created_at ? new Date(data.created_at) : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.url = `https://discord.gg/${this.code}`;
  }

  async fetch(options) {
    return await this.client.fetchInvite(this, options);
  }

  async delete(reason) {
    return await this.guild?.invites.delete(this, reason);
  }
}

module.exports = Invite;
