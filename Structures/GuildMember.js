const GuildMemberRoleManager = require("../Managers/GuildMemberRoleManager");
const Permissions = require("../Util/Permissions");
const Base = require("../Base/base");
const GuildMemberFlags = require("../Util/GuildMemberFlags");
class GuildMember extends Base {
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

  isCommunicationDisabled() {
    if (this.communicationDisabledUntil === null) return false;
    if (this.communicationDisabledUntilTimestamp < Date.now()) return false;
    return true;
  }

  async fetch(options) {
    return await this.guild?.members.fetch(this, options);
  }

  async kick(reason) {
    return await this.guild?.members.kick(this, reason);
  }

  async send(options = {}) {
    return await this.user.send(options);
  }

  async ban(options) {
    await this.guild?.bans.create(this, options);
    return this;
  }

  async edit(options) {
    return await this.guild?.members.edit(this, options);
  }

  async setNickname(nickname, reason) {
    return await this.edit({nickname, reason});
  }

  async setMute(mute, reason) {
    return await this.edit({mute, reason});
  }

  async setDeaf(deaf, reason) {
    return await this.edit({deaf, reason});
  }

  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  async setCommunicationDisabled(timeout, reason) {
    return await this.edit({timeout, reason});
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  bannerURL(options = {}) {
    if (!this.banner) return this.user?.bannerURL(options);
    return this.client.cdn.GuildMemberBanner(this.banner, options.dynamic, options.size, options.format, this.id, this.guildId);
  }

  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.user.displayAvatarURL(options);
    return this.client.cdn.GuildMemberAvatar(this.avatar, options.dynamic, options.size, options.format, this.id, this.guildId);
  }

  permissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (channel) return channel.permissionsFor(this);
    throw new RangeError(`Channel not cached.`);
  }

  get voice() {
    return this.guild?.voiceStates.cache.get(this.id);
  }

  get presence() {
    return this.guild?.presences.cache.get(this.id);
  }

  get permissions() {
    if (this.guild?.ownerId === this.id) return new Permissions(Permissions.All).freeze();
    const permissions = new Permissions(this._permissions ? BigInt(this._permissions) : 0n);
    this.roles.cache.mapVal((o) => permissions.add(o.permissions.bitfield));
    return permissions.freeze();
  }

  get user() {
    return this.client.users._add(this._user ?? this.id) ?? null;
  }
}

module.exports = GuildMember;
