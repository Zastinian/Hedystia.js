const Base = require("../Base/base");
const {InviteTargetTypes} = require("../Util/Constants");
const ClientApplication = require("./ClientApplication");
/**
 * It's a class that represents an invite.
 * @class
 * @extends Base
 */
class Invite extends Base {
  /**
   * It's a constructor function that takes in data, guild, and client as parameters.
   * @param data - The data that was received from the API.
   * @param guild - Guild
   * @param client - Discord.Client
   */
  constructor(data = {}, guild, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.code = data.code ?? null;
    this.guild = this.client.guilds._add(data.guild ?? guild, {cache: false});
    this.channel = this.client.channels._add(data.channel ?? data.channel_id, this.guild?.id, {cache: false}) ?? null;
    this.inviter = this.client.users._add(data.inviter, {cache: false, force: true}) ?? null;
    this.targetType = (typeof data.target_type === "number" ? InviteTargetTypes[data.target_type] : data.target_type) ?? null;
    this.targetUser = this.client.users._add(data.target_user) ?? null;
    this.targetApplication = data.target_application ? new ClientApplication(data.target_application, this.client) : null;
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

  /**
   * It fetches the invite from the Discord API
   * @param options - An object containing the following properties:
   * @returns The invite object.
   */
  async fetch(options) {
    return await this.client.fetchInvite(this, options);
  }

  /**
   * It deletes the invite
   * @param reason - The reason for deleting the invite.
   * @returns The return value is the invite object.
   */
  async delete(reason) {
    return await this.guild?.invites.delete(this, reason);
  }
}

module.exports = Invite;
