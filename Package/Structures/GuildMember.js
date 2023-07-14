const GuildMemberRoleManager = require("../Managers/GuildMemberRoleManager");
const Permissions = require("../Util/Permissions");
const Base = require("../Base/base");
const GuildMemberFlags = require("../Util/GuildMemberFlags");
const Bitfield = require("../Util/Bitfield");
/**
 * Represents a member of a guild.
 * @class
 * @extends Base
 */
class GuildMember extends Base {
  /**
   * @constructor
   * @param {Object} data - The data for the member.
   * @param {string} guildId - The ID of the guild the member belongs to.
   * @param {Client} client - The client that instantiated this member.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    Object.defineProperties(this, {
      _user: {
        value: data.user,
      },
      _permissions: {
        value: data.permissions,
      },
    });
    this.partial = data.partial ?? false;
    this.banner = data.banner ?? null;
    this.id = data.id ?? data.user?.id ?? null;
    this.nickname = data.nick ?? null;
    this.avatar = data.avatar ?? null;
    this.roles = new GuildMemberRoleManager(
      guildId,
      Object.assign(this, {
        _roles: data.roles ?? [],
      }),
      this.client
    );
    this.joinedAt = data.joined_at ? new Date(data.joined_at) : null;
    this.joinedTimestamp = this.joinedAt?.getTime() ?? null;
    this.premiumSince = data.premium_since ? new Date(data.premium_since) : null;
    this.premiumSinceTImestamp = this.premiumSince?.getTime() ?? null;
    this.deaf = data.deaf ?? null;
    this.mute = data.mute ?? null;
    this.pending = data.pending ?? null;
    this.communicationDisabledUntil = data.communication_disabled_until ? new Date(data.communication_disabled_until) : null;
    this.communicationDisabledUntilTimestamp = this.communicationDisabledUntil?.getTime() ?? null;
    this.guildId = guildId;
    this.flags = new GuildMemberFlags(data.flags ? BigInt(data.flags) : 0n);
  }

  /**
   * Checks if the member's communication is currently disabled.
   * @returns {boolean} - Whether communication is disabled.
   */
  isCommunicationDisabled() {
    if (this.communicationDisabledUntil === null) return false;
    if (this.communicationDisabledUntilTimestamp < Date.now()) return false;
    return true;
  }

  /**
   * Fetches this member from the API.
   * @async
   * @param {Object} options - Optional options for the fetch.
   * @returns {Promise<GuildMember>} - The fetched member.
   */
  async fetch(options) {
    return await this.guild?.members.fetch(this, options);
  }

  /**
   * Kicks this member from the guild.
   * @async
   * @param {string} reason - The reason for the kick.
   * @returns {Promise<GuildMember>} - The kicked member.
   */
  async kick(reason) {
    return await this.guild?.members.kick(this, reason);
  }

  /**
   * Sends a DM to this member.
   * @async
   * @param {Object} options - Options for the DM.
   * @returns {Promise<Message>} - The sent message.
   */
  async send(options = {}) {
    return await this.user.send(options);
  }

  /**
   * Bans this member from the guild.
   * @async
   * @param {Object} options - Options for the ban.
   * @returns {Promise<GuildMember>} - The banned member.
   */
  async ban(options) {
    await this.guild?.bans.create(this, options);
    return this;
  }

  /**
   * Edits this member.
   * @async
   * @param {Object} options - Options for the edit.
   * @returns {Promise<GuildMember>} - The edited member.
   */
  async edit(options) {
    return await this.guild?.members.edit(this, options);
  }

  /**
   * Sets the member's nickname.
   * @async
   * @param {string} nickname - The new nickname.
   * @param {string} reason - The reason for setting the nickname (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  async setNickname(nickname, reason) {
    return await this.edit({nickname, reason});
  }

  /**
   * Sets whether the member is muted.
   * @async
   * @param {boolean} mute - Whether to mute the member.
   * @param {string} reason - The reason for setting the mute (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  async setMute(mute, reason) {
    return await this.edit({mute, reason});
  }

  /**
   * Sets whether the member is deafened.
   * @async
   * @param {boolean} deaf - Whether to deafen the member.
   * @param {string} reason - The reason for setting the deaf (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  async setDeaf(deaf, reason) {
    return await this.edit({deaf, reason});
  }

  /**
   * Moves the member to a different voice channel.
   * @async
   * @param {ChannelResolvable} channel - The new voice channel.
   * @param {string} reason - The reason for moving the member (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  /**
   * Moves the member to a different voice channel.
   * @async
   * @param {ChannelResolvable} channel - The new voice channel.
   * @param {string} reason - The reason for moving the member (optional).
   * @returns {Promise} A promise that resolves with the updated member object.
   */
  async setCommunicationDisabled(timeout, reason) {
    return await this.edit({timeout, reason});
  }

  /**
   * The guild that the member belongs to.
   * @type {Guild|null}
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * The URL to the member's guild banner image.
   * @param {Object} options - Options for the banner URL (optional).
   * @param {boolean} options.dynamic - Whether to use the dynamic version of the banner (default: true).
   * @param {number} options.size - The size of the banner (default: 2048).
   * @param {string} options.format - The format of the banner (default: "webp").
   * @returns {string|null} The URL to the banner image, or null if the member does not have a banner.
   */
  bannerURL(options = {}) {
    if (!this.banner) return this.user?.bannerURL(options);
    return this.client.cdn.GuildMemberBanner(this.banner, options.dynamic, options.size, options.format, this.id, this.guildId);
  }

  /**
   * Returns the URL to the member's display avatar.
   * @param {Object} options - Options for the avatar URL (optional).
   * @param {boolean} options.dynamic - Whether to use the dynamic version of the avatar (default: true).
   * @param {number} options.size - The size of the avatar (default: 2048).
   * @param {string} options.format - The format of the avatar (default: "webp").
   * @returns {string} The URL to the display avatar.
   */
  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.user.displayAvatarURL(options);
    return this.client.cdn.GuildMemberAvatar(this.avatar, options.dynamic, options.size, options.format, this.id, this.guildId);
  }

  /**
   * Gets the permissions for the member in a given channel.
   * @param {ChannelResolvable} channel - The channel to get permissions for.
   * @returns {PermissionOverwrites} The resolved permissions for the member in the channel.
   * @throws {RangeError} Thrown if the channel is not cached.
   */
  permissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (channel) return channel.permissionsFor(this);
    throw new RangeError(`Channel not cached.`);
  }

  /**
   * Gets the voice state for the member.
   * @type {VoiceState|null}
   */
  get voice() {
    return this.guild?.voiceStates.cache.get(this.id);
  }

  /**
   * Gets the presence for the member.
   * @type {Presence|null}
   */
  get presence() {
    return this.guild?.presences.cache.get(this.id);
  }

  /**
   * Gets the resolved permissions for the member.
   * @type {Permissions}
   */
  get permissions() {
    if (this.guild?.ownerId === this.id) return new Permissions(Permissions.All).freeze();
    const permissions = new Permissions(this._permissions ? BigInt(this._permissions) : 0n);
    this.roles.cache.mapVal((o) => permissions.add(o.permissions.bitfield));
    return permissions.freeze();
  }

  /**
   * Checks if the member has a given permission.
   * @param {PermissionResolvable} perm - The permission to check for.
   * @returns {boolean} Whether the member has the permission.
   */
  permissionHas(perm) {
    const permission = Permissions.Flags[perm];
    return new Bitfield(this.permissions).has(permission);
  }

  /**
   * The user object for the member.
   * @type {User|null}
   */
  get user() {
    return this.client.users._add(this._user ?? this.id) ?? null;
  }
}

module.exports = GuildMember;
