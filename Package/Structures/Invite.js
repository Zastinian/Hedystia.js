const Base = require("../Base/base");
const {InviteTargetTypes} = require("../Util/Constants");
const ClientApplication = require("./ClientApplication");
/**
 * Represents an invite to a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the invite.
 * @param {Guild} guild - The guild that the invite belongs to.
 * @param {Client} client - The client instance.
 */
class Invite extends Base {
  /**
   * Constructs a new instance of the Invite class.
   * @constructor
   * @param {Object} [data] - The data object containing the invite information.
   * @param {Guild} guild - The guild associated with the invite.
   * @param {Client} client - The client instance.
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
   * Fetches an invite using the provided options.
   * @param {object} options - The options for fetching the invite.
   * @returns {Promise} A promise that resolves to the fetched invite.
   */
  async fetch(options) {
    return await this.client.fetchInvite(this, options);
  }

  /**
   * Deletes the invite associated with the guild.
   * @param {string} reason - The reason for deleting the invite.
   * @returns {Promise<void>} - A promise that resolves when the invite is deleted.
   */
  async delete(reason) {
    return await this.guild?.invites.delete(this, reason);
  }
}

module.exports = Invite;
