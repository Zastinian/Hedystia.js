const {ChannelType} = require("../Util/Constants");
const Base = require("../Base/base");
const PermissionOverwriteManager = require("../Managers/PermissionOverwriteManager");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Invite = require("./Invite");
const Permissions = require("../Util/Permissions");
const Webhook = require("./Webhook");
const Util = require("../Util/Util");
const ChannelFlags = require("../Util/ChannelFlags");
const Snowflake = require("../Util/Snowflake");
/* It's a class that represents a channel in Discord */
class Channel extends Base {
  /**
   * It's a constructor for a class that extends another class
   * @param [data] - The data that was received from the API.
   * @param guildId - The ID of the guild the channel is in
   * @param client - DiscordClient
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.banner = data.banner ?? null;
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.type = (typeof data.type === "number" ? ChannelType[data.type] : data.type) ?? null;
    this.guildId = guildId;
    this.position = data.position ?? null;
    this.topic = data.topic ?? null;
    this.parentId = data.parent_id ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.defaultAutoArchiveDuration = data.default_auto_archive_duration ?? null;
    this.permissionOverwrites = new PermissionOverwriteManager(this.id, data.permission_overwrites, this.client);
    this.flags = new ChannelFlags(data.flags ? BigInt(data.flags) : 0n);
  }

  /**
   * It fetches the channel
   * @param [options] - An object containing additional options.
   * @returns The channel object.
   */
  async fetch(options = {}) {
    return await this.client.channels.fetch(this, options);
  }

  /**
   * It deletes a channel
   * @param reason - The reason for the deletion.
   * @returns The channel object.
   */
  async delete(reason) {
    return await this.client.channels.delete(this, reason);
  }

  /**
   * It edits the channel
   * @param options - Object
   * @returns The channel object.
   */
  async edit(options) {
    return await this.client.channels.edit(this, options);
  }

  /**
   * It fetches all the invites for a channel
   * @returns An array of objects.
   */
  async fetchInvites() {
    const invite = await this.client.api.get(`${this.client.root}/channels/${this.id}/invites`);
    return new RaidenCol(invite?.map((o) => [o.code, new Invite(o, this.guildId, this.client)]));
  }

  /**
   * It creates an invite for the channel
   * @param options - Object
   * @returns The invite object.
   */
  async createInvite(options) {
    return await this.client.channels.createInvite(this, options);
  }

  /**
   * It clones the channel
   * @returns The channel that was cloned.
   */
  async clone() {
    return await this.guild?.channels.clone(this.id);
  }

  /**
   * If the type is Guild_Text, return true, otherwise return false.
   * @returns a boolean value.
   */
  isGuildText() {
    if (["Guild_Text"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is Dm, return true, otherwise return false.
   * @returns The function isDM() is being returned.
   */
  isDM() {
    if (["Dm"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is Guild_Stage_Voice, return true, otherwise return false.
   * @returns A boolean value.
   */
  isStage() {
    if (["Guild_Stage_Voice"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is Guild_Forum, return true. Otherwise, return false.
   * @returns A boolean value.
   */
  isForum() {
    if (["Guild_Forum"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is Guild_Voice, return true, otherwise return false.
   * @returns A boolean value.
   */
  isGuildVoice() {
    if (["Guild_Voice"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is Guild_News, return true. Otherwise, return false.
   * @returns a boolean value.
   */
  isNews() {
    if (["Guild_News"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type of the channel is Guild_Category, return true. Otherwise, return false
   * @returns a boolean value.
   */
  isCategory() {
    if (["Guild_Category"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is one of the following, return true, otherwise return false.
   * @returns A boolean value.
   */
  isText() {
    if (["Guild_Text", "Dm", "Guild_News", "Guild_News_Thread", "Guild_Public_Thread", "Guild_Private_Thread", "Guild_Voice"].includes(this.type))
      return true;
    return false;
  }

  /**
   * If the type is one of the three types of threads, return true, otherwise return false.
   * @returns A boolean value.
   */
  isThread() {
    if (["Guild_Private_Thread", "Guild_News_Thread", "Guild_Public_Thread"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is Guild_Voice or Guild_Stage_Voice, return true, otherwise return false.
   * @returns A boolean value.
   */
  isVoice() {
    if (["Guild_Voice", "Guild_Stage_Voice"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is Guild_Directory, return true, otherwise return false.
   * @returns A boolean value.
   */
  isDirectory() {
    if (["Guild_Directory"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the guildId is defined, return true, otherwise return false.
   * @returns A boolean value.
   */
  inGuild() {
    if (this.guildId) return true;
    return false;
  }

  /**
   * If the client has the guild in its cache, return true, otherwise return false.
   * @returns A boolean value.
   */
  inCachedGuild() {
    if (this.client.guilds.cache.has(this.guildId)) return true;
    return false;
  }

  /**
   * If the guild's rules channel ID is equal to the channel's ID, return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isRuleChannel() {
    if (this.guild?.rulesChannelId === this.id) return true;
    return false;
  }

  /**
   * If the guild doesn't have a system channel, return null. If the guild has a system channel and it's
   * the same as the channel, return true. Otherwise, return false.
   * @returns A boolean value.
   */
  isSystemChannel() {
    if (!this.guild?.systemChannelId) return null;
    if (this.guild?.systemChannelId === this.id) return true;
    return false;
  }

  /**
   * If the parentId is not null, then return the parentId, otherwise return null.
   * @returns The parent channel of the channel.
   */
  get parent() {
    return this.client.channels._add(this.parentId) ?? null;
  }

  /**
   * It returns the URL of the channel banner
   * @param [options] - The options for the banner.
   * @returns The bannerURL method returns the URL of the channel's banner.
   */
  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.ChannelBanner(this.banner, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the change (0-1024 characters).
   * @returns The return value of the edit method.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * It edits the type of the channel.
   * @param type - The type of the channel.
   * @param reason - The reason for the change.
   * @returns The edited message.
   */
  async setType(type, reason) {
    return await this.edit({type, reason});
  }

  /**
   * It sets the topic of the channel
   * @param topic - The new topic of the channel.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  async setTopic(topic, reason) {
    return await this.edit({topic, reason});
  }

  /**
   * It edits the position of a role in a guild
   * @param position - The position you want to move the role to.
   * @param reason - The reason for the move.
   * @returns The return value of the edit function.
   */
  async setPosition(position, reason) {
    return await this.edit({position, reason});
  }

  /**
   * It edits the channel's parent
   * @param parent - The parent category to move this category to.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setParent(parent, reason) {
    return await this.edit({parent, reason});
  }

  /**
   * It sets the default auto archive duration of a guild.
   *
   * Here's a more detailed explanation of the above function:
   *
   * It sets the default auto archive duration of a guild.
   *
   * Here's an example of the above function in use:
   * @param defaultAutoArchiveDuration - The default auto-archive duration for the guild.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  async setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason) {
    return await this.edit({defaultAutoArchiveDuration, reason});
  }

  /**
   * It edits the message with the given flags and reason
   * @param flags - The flags to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setFlags(flags, reason) {
    return await this.edit({flags, reason});
  }

  /**
   * It takes the permission overwrites from the parent channel and applies them to the current channel
   * @returns The permissionOverwrites of the parent channel.
   */
  async lockPermissions() {
    const permissionOverwrites = this.parent.permissionOverwrites.cache.mapVal((o) => o);
    return await this.edit({permissionOverwrites});
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It takes a user or role and returns the permissions that user or role has in the channel
   * @param userOrRole - The user or role to get the permissions for.
   * @returns A Permissions object.
   */
  permissionsFor(userOrRole) {
    userOrRole = typeof userOrRole === "string" ? userOrRole : userOrRole?.user?.id ?? userOrRole?.id;
    const overwrites = this.permissionOverwrites.cache;
    const roles = this.guild.roles.cache.get(userOrRole);
    const member = this.guild.members.cache.get(userOrRole);
    if (roles) {
      if (roles.permissions.has(Permissions.Flags.Administrator)) return new Permissions(Permissions.All).freeze();
      const roleOverwrites = overwrites.filter((o) => o.type === "Role" && roles.id === o.id);
      const rolePerm = new Permissions(
        roleOverwrites?.mapVal((o) => o.allow),
        Permissions.defaultBit
      );
      return rolePerm;
    }
    if (member) {
      if (this.guild.ownerId === member.id) return new Permissions(Permissions.All).freeze();
      if (member.permissions.has(Permissions.Flags.Administrator)) return new Permissions(Permissions.Flags.Administrator).freeze();
      const memberOverwrites = overwrites.filter((o) => o.type === "Member" && o.id === member.id);
      const roleOverwrites = overwrites.filter((o) => o.type === "Role" && member.roles.cache.keyArray()?.includes(o.id));
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

    throw new RangeError(`Role or GuildMember not found in cache or invalid.`);
  }

  /**
   * It fetches all webhooks in a channel and returns them in a RaidenCol
   * @returns An array of webhooks.
   */
  async fetchWebhooks() {
    const webhooks = await this.client.api.get(`${this.client.root}/channels/${this.id}/webhooks`);
    return new RaidenCol(webhooks?.map((o) => [o.id, new Webhook(o, this.guildId, this.client)]));
  }

  /**
   * It creates a webhook for the channel
   * @param [options] - {
   * @returns A webhook object.
   */
  async createWebhook(options = {}) {
    const {reason} = options;
    const body = {
      name: options.name ?? undefined,
      avatar: options.avatar ? await Util.generateDataURI(options.avatar) : undefined,
    };

    const webhook = await this.client.api.post(`${this.client.root}/channels/${this.id}/webhooks`, {
      reason,
      body,
    });
    return new Webhook(webhook, this.guildId, this.client);
  }
}

module.exports = Channel;
