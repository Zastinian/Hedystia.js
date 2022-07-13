const { ChannelType } = require("../Util/Constants");
const Base = require("../Base/base");
const PermissionOverwriteManager = require("../Managers/PermissionOverwriteManager");
const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const Invite = require("./Invite");
const Permissions = require("../Util/Permissions");
const Webhook = require("./Webhook");
const Util = require("../Util/Util");
const ChannelFlags = require("../Util/ChannelFlags");
const Snowflake = require("../Util/Snowflake");
class Channel extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.banner = data.banner ?? null;
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.type =
      (typeof data.type === "number" ? ChannelType[data.type] : data.type) ??
      null;
    this.guildId = guildId;
    this.position = data.position ?? null;
    this.topic = data.topic ?? null;
    this.parentId = data.parent_id ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.defaultAutoArchiveDuration =
      data.default_auto_archive_duration ?? null;
    this.permissionOverwrites = new PermissionOverwriteManager(
      this.id,
      data.permission_overwrites,
      this.client
    );
    this.flags = new ChannelFlags(data.flags ? BigInt(data.flags) : 0n);
  }

  async fetch(options = {}) {
    return await this.client.channels.fetch(this, options);
  }

  async delete(reason) {
    return await this.client.channels.delete(this, reason);
  }

  async edit(options) {
    return await this.client.channels.edit(this, options);
  }

  async fetchInvites() {
    const invite = await this.client.api.get(
      `${this.client.root}/channels/${this.id}/invites`
    );
    return new RaidenCol(
      invite?.map((o) => [o.code, new Invite(o, this.guildId, this.client)])
    );
  }

  async createInvite(options) {
    return await this.client.channels.createInvite(this, options);
  }

  async clone() {
    return await this.guild?.channels.clone(this.id);
  }

  isGuildText() {
    if (["GUILD_TEXT"].includes(this.type)) return true;
    return false;
  }

  isDM() {
    if (["DM"].includes(this.type)) return true;
    return false;
  }

  isStage() {
    if (["GUILD_STAGE_VOICE"].includes(this.type)) return true;
    return false;
  }

  isForum() {
    if (["GUILD_FORUM"].includes(this.type)) return true;
    return false;
  }

  isGuildVoice() {
    if (["GUILD_VOICE"].includes(this.type)) return true;
    return false;
  }

  isNews() {
    if (["GUILD_NEWS"].includes(this.type)) return true;
    return false;
  }

  isCategory() {
    if (["GUILD_CATEGORY"].includes(this.type)) return true;
    return false;
  }

  isText() {
    if (
      [
        "GUILD_TEXT",
        "DM",
        "GUILD_NEWS",
        "GUILD_NEWS_THREAD",
        "GUILD_PUBLIC_THREAD",
        "GUILD_PRIVATE_THREAD",
        "GUILD_VOICE",
      ].includes(this.type)
    )
      return true;
    return false;
  }

  isThread() {
    if (
      [
        "GUILD_PRIVATE_THREAD",
        "GUILD_NEWS_THREAD",
        "GUILD_PUBLIC_THREAD",
      ].includes(this.type)
    )
      return true;
    return false;
  }

  isVoice() {
    if (["GUILD_VOICE", "GUILD_STAGE_VOICE"].includes(this.type)) return true;
    return false;
  }

  isDirectory() {
    if (["GUILD_DIRECTORY"].includes(this.type)) return true;
    return false;
  }

  inGuild() {
    if (this.guildId) return true;
    return false;
  }

  inCachedGuild() {
    if (this.client.guilds.cache.has(this.guildId)) return true;
    return false;
  }

  isRuleChannel() {
    if (this.guild?.rulesChannelId === this.id) return true;
    return false;
  }

  isSystemChannel() {
    if (!this.guild?.systemChannelId) return null;
    if (this.guild?.systemChannelId === this.id) return true;
    return false;
  }

  get parent() {
    return this.client.channels._add(this.parentId) ?? null;
  }

  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.ChannelBanner(
      this.banner,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }

  async setName(name, reason) {
    return await this.edit({ name, reason });
  }

  async setType(type, reason) {
    return await this.edit({ type, reason });
  }

  async setTopic(topic, reason) {
    return await this.edit({ topic, reason });
  }

  async setPosition(position, reason) {
    return await this.edit({ position, reason });
  }

  async setParent(parent, reason) {
    return await this.edit({ parent, reason });
  }

  async setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason) {
    return await this.edit({ defaultAutoArchiveDuration, reason });
  }

  async setFlags(flags, reason) {
    return await this.edit({ flags, reason });
  }

  async lockPermissions() {
    const permissionOverwrites = this.parent.permissionOverwrites.cache.mapVal(
      (o) => o
    );
    return await this.edit({ permissionOverwrites });
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  permissionsFor(userOrRole) {
    userOrRole =
      typeof userOrRole === "string"
        ? userOrRole
        : userOrRole?.user?.id ?? userOrRole?.id;
    const overwrites = this.permissionOverwrites.cache;
    const roles = this.guild.roles.cache.get(userOrRole);
    const member = this.guild.members.cache.get(userOrRole);
    if (roles) {
      if (roles.permissions.has(Permissions.FLAGS.Administrador))
        return new Permissions(Permissions.ALL).freeze();
      const roleOverwrites = overwrites.filter(
        (o) => o.type === "ROLE" && roles.id === o.id
      );
      const rolePerm = new Permissions(
        roleOverwrites?.mapVal((o) => o.allow),
        Permissions.defaultBit
      );
      return rolePerm;
    }
    if (member) {
      if (this.guild.ownerId === member.id)
        return new Permissions(Permissions.ALL).freeze();
      if (member.permissions.has(Permissions.FLAGS.Administrador))
        return new Permissions(Permissions.FLAGS.Administrador).freeze();
      const memberOverwrites = overwrites.filter(
        (o) => o.type === "MEMBER" && o.id === member.id
      );
      const roleOverwrites = overwrites.filter(
        (o) =>
          o.type === "ROLE" && member.roles.cache.keyArray()?.includes(o.id)
      );
      const memberPerm = new Permissions(
        memberOverwrites?.mapVal((overwrites) => overwrites.allow),
        Permissions.defaultBit
      );
      const rolePerms = new Permissions(
        roleOverwrites?.mapVal((overwrites) => overwrites.allow),
        Permissions.defaultBit
      );
      memberPerm.add(member.permissions);
      memberPerm.add(rolePerms);
      return memberPerm;
    }

    throw new RangeError(
      `Rol o GuildMember no encontrado en la caché o inválido.`
    );
  }

  async fetchWebhooks() {
    const webhooks = await this.client.api.get(
      `${this.client.root}/channels/${this.id}/webhooks`
    );
    return new RaidenCol(
      webhooks?.map((o) => [o.id, new Webhook(o, this.guildId, this.client)])
    );
  }

  async createWebhook(options = {}) {
    const { reason } = options;
    const body = {
      name: options.name ?? undefined,
      avatar: options.avatar
        ? await Util.generateDataURI(options.avatar)
        : undefined,
    };

    const webhook = await this.client.api.post(
      `${this.client.root}/channels/${this.id}/webhooks`,
      { reason, body }
    );
    return new Webhook(webhook, this.guildId, this.client);
  }
}

module.exports = Channel;
