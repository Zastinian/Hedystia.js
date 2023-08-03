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
/**
 * Represents a channel in a guild or a direct message.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the channel.
 * @param {string} guildId - The ID of the guild that the channel belongs to.
 * @param {Client} client - The client instance.
 */
class Channel extends Base {
  /**
   * Constructs a new Channel object.
   * @constructor
   * @param {Object} [data] - The data object containing the channel information.
   * @param {string} guildId - The ID of the guild that the channel belongs to.
   * @param {Client} client - The client instance.
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
   * Fetches the channels using the provided options.
   * @param {Object} [options] - The options to be used for fetching the channels.
   * @returns {Promise} - A promise that resolves to the fetched channels.
   */
  async fetch(options = {}) {
    return await this.client.channels.fetch(this, options);
  }

  /**
   * Deletes the channel with the specified reason.
   * @param {string} reason - The reason for deleting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is deleted.
   */
  async delete(reason) {
    return await this.client.channels.delete(this, reason);
  }

  /**
   * Edits the properties of a channel using the provided options.
   * @param {Object} options - The options object containing the properties to edit.
   * @returns {Promise} A promise that resolves when the channel has been successfully edited.
   */
  async edit(options) {
    return await this.client.channels.edit(this, options);
  }

  /**
   * Fetches the invites for the channel.
   * @async
   * @returns {Promise<RaidenCol>} A promise that resolves to a collection of invites.
   */
  async fetchInvites() {
    const invite = await this.client.api.get(`${this.client.root}/channels/${this.id}/invites`);
    return new RaidenCol(invite?.map((o) => [o.code, new Invite(o, this.guildId, this.client)]));
  }

  /**
   * Creates an invite for the current channel using the specified options.
   * @param {Object} options - The options for creating the invite.
   * @returns {Promise<Invite>} A promise that resolves to the created invite.
   */
  async createInvite(options) {
    return await this.client.channels.createInvite(this, options);
  }

  /**
   * Clones the channel.
   * @returns {Promise<Channel>} A promise that resolves to the cloned channel.
   */
  async clone() {
    return await this.guild?.channels.clone(this.id);
  }

  /**
   * Checks if the type of the object is "Guild_Text".
   * @returns {boolean} - true if the type is "Guild_Text", false otherwise.
   */
  isGuildText() {
    if (["Guild_Text"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the type of the object is "Dm".
   * @returns {boolean} - true if the type is "Dm", false otherwise.
   */
  isDM() {
    if (["Dm"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current stage is a Guild Stage Voice.
   * @returns {boolean} - True if the current stage is a Guild Stage Voice, false otherwise.
   */
  isStage() {
    if (["Guild_Stage_Voice"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current page is a forum page.
   * @returns {boolean} - true if the page is a forum page, false otherwise.
   */
  isForum() {
    if (["Guild_Forum"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current object is of media type.
   * @returns {boolean} - true if the object is of media type, false otherwise.
   */
  isMedia() {
    if (["Guild_Media"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the type of the object is "Guild_Voice".
   * @returns {boolean} - true if the type is "Guild_Voice", false otherwise.
   */
  isGuildVoice() {
    if (["Guild_Voice"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current type is "Guild_News".
   * @returns {boolean} - Returns true if the type is "Guild_News", otherwise returns false.
   */
  isNews() {
    if (["Guild_News"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current object is of the category type.
   * @returns {boolean} - true if the object is of the category type, false otherwise.
   */
  isCategory() {
    if (["Guild_Category"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current text is of a specific type.
   * @returns {boolean} - True if the text is of a specific type, false otherwise.
   */
  isText() {
    if (["Guild_Text", "Dm", "Guild_News", "Guild_News_Thread", "Guild_Public_Thread", "Guild_Private_Thread", "Guild_Voice"].includes(this.type))
      return true;
    return false;
  }

  /**
   * Checks if the current thread is a private, news, or public guild thread.
   * @returns {boolean} - True if the thread is a private, news, or public guild thread, false otherwise.
   */
  isThread() {
    if (["Guild_Private_Thread", "Guild_News_Thread", "Guild_Public_Thread"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current object is of type "Guild_Voice" or "Guild_Stage_Voice".
   * @returns {boolean} - true if the object is of type "Guild_Voice" or "Guild_Stage_Voice", false otherwise.
   */
  isVoice() {
    if (["Guild_Voice", "Guild_Stage_Voice"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current object is a directory.
   * @returns {boolean} - Returns true if the object is a directory, false otherwise.
   */
  isDirectory() {
    if (["Guild_Directory"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current context is within a guild.
   * @returns {boolean} - True if the context is within a guild, false otherwise.
   */
  inGuild() {
    if (this.guildId) return true;
    return false;
  }

  /**
   * Checks if the guild is cached in the client's guild cache.
   * @returns {boolean} - true if the guild is cached, false otherwise.
   */
  inCachedGuild() {
    if (this.client.guilds.cache.has(this.guildId)) return true;
    return false;
  }

  /**
   * Checks if the current channel is the rules channel for the guild.
   * @returns {boolean} - true if the current channel is the rules channel, false otherwise.
   */
  isRuleChannel() {
    if (this.guild?.rulesChannelId === this.id) return true;
    return false;
  }

  /**
   * Checks if the current channel is the system channel of the guild.
   * @returns {boolean | null} - Returns true if the channel is the system channel,
   * false if it is not, and null if the guild does not have a system channel.
   */
  isSystemChannel() {
    if (!this.guild?.systemChannelId) return null;
    if (this.guild?.systemChannelId === this.id) return true;
    return false;
  }

  /**
   * Get the parent channel of this channel.
   * @returns {Channel | null} The parent channel if it exists, otherwise null.
   */
  get parent() {
    return this.client.channels._add(this.parentId) ?? null;
  }

  /**
   * Returns the URL of the channel banner image.
   * @param {Object} options - Optional parameters for generating the URL.
   * @param {boolean} [options.dynamic] - Whether to generate a dynamic URL.
   * @param {string} [options.size] - The desired size of the banner image.
   * @param {string} [options.format] - The desired format of the banner image.
   * @returns {string | null} The URL of the channel banner image, or null if no banner is set.
   */
  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.ChannelBanner(this.banner, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the type and reason of an object asynchronously.
   * @param {any} type - The type to set.
   * @param {any} reason - The reason to set.
   * @returns {Promise<any>} - A promise that resolves to the edited object.
   */
  async setType(type, reason) {
    return await this.edit({type, reason});
  }

  /**
   * Sets the topic of the current object and provides a reason for the change.
   * @param {string} topic - The new topic to set.
   * @param {string} reason - The reason for changing the topic.
   * @returns {Promise} - A promise that resolves when the topic is successfully set.
   */
  async setTopic(topic, reason) {
    return await this.edit({topic, reason});
  }

  /**
   * Sets the position of an object and provides a reason for the change.
   * @param {any} position - The new position of the object.
   * @param {string} reason - The reason for the position change.
   * @returns {Promise<void>} - A promise that resolves when the position is successfully set.
   */
  async setPosition(position, reason) {
    return await this.edit({position, reason});
  }

  /**
   * Sets the parent of an object and provides a reason for the change.
   * @param {any} parent - The new parent object.
   * @param {string} reason - The reason for setting the new parent.
   * @returns {Promise} A promise that resolves when the parent is successfully set.
   */
  async setParent(parent, reason) {
    return await this.edit({parent, reason});
  }

  /**
   * Sets the default auto-archive duration for a specific item.
   * @param {number} defaultAutoArchiveDuration - The new default auto-archive duration to set.
   * @param {string} reason - The reason for setting the new default auto-archive duration.
   * @returns {Promise} - A promise that resolves when the default auto-archive duration is successfully set.
   */
  async setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason) {
    return await this.edit({defaultAutoArchiveDuration, reason});
  }

  /**
   * Sets the flags and reason for an object.
   * @param {any} flags - The flags to set.
   * @param {string} reason - The reason for setting the flags.
   * @returns {Promise<void>} - A promise that resolves when the flags are set.
   */
  async setFlags(flags, reason) {
    return await this.edit({flags, reason});
  }

  /**
   * Locks the permissions for the current object.
   * @async
   * @returns {Promise<void>} A promise that resolves when the permissions are locked.
   */
  async lockPermissions() {
    const permissionOverwrites = this.parent.permissionOverwrites.cache.mapVal((o) => o);
    return await this.edit({permissionOverwrites});
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Retrieves the permissions for a given user or role in the guild.
   * @param {string | GuildMember | Role} userOrRole - The user or role to retrieve permissions for.
   * @returns {Permissions} - The permissions for the user or role.
   * @throws {RangeError} - If the user or role is not found in the cache or is invalid.
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
   * Fetches the webhooks associated with the channel.
   * @returns {Promise<RaidenCol>} A promise that resolves to a collection of webhooks.
   */
  async fetchWebhooks() {
    const webhooks = await this.client.api.get(`${this.client.root}/channels/${this.id}/webhooks`);
    return new RaidenCol(webhooks?.map((o) => [o.id, new Webhook(o, this.guildId, this.client)]));
  }

  /**
   * Creates a webhook for the current channel.
   * @param {Object} [options] - Optional parameters for creating the webhook.
   * @param {string} [options.reason] - The reason for creating the webhook.
   * @param {string} [options.name] - The name of the webhook.
   * @param {string} [options.avatar] - The avatar URL or file path of the webhook.
   * @returns {Promise<Webhook>} A promise that resolves with the created webhook.
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
