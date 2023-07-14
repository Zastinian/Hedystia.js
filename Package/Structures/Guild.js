const GuildApplicationCommandManager = require("../Managers/GuildApplicationCommandManager");
const GuildBanManager = require("../Managers/GuildBanManager");
const GuildChannelManager = require("../Managers/GuildChannelManager");
const GuildEmojiManager = require("../Managers/GuildEmojiManager");
const GuildIntegrationManager = require("../Managers/GuildIntegrationManager");
const GuildMemberManager = require("../Managers/GuildMemberManager");
const GuildPruneManager = require("../Managers/GuildPruneManager");
const GuildRoleManager = require("../Managers/GuildRoleManager");
const GuildVanityManager = require("../Managers/GuildVanityManager");
const WelcomeScreenManager = require("../Managers/WelcomeScreenManager");
const GuildInviteManager = require("../Managers/GuildInviteManager");
const {
  VerificationLevel,
  DefaultMessageNotifications,
  ExplicitContentFilter,
  MfaLevel,
  PremiumTier,
  NsfwLevel,
  GuildAuditLogEntryActionTypes,
} = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
const Snowflake = require("../Util/Snowflake");
const SystemChannelFlags = require("../Util/SystemChannelFlags");
const Base = require("../Base/base");
const GuildVoiceStateManager = require("../Managers/GuildVoiceStateManager");
const GuildWidgetManager = require("../Managers/GuildWidgetManager");
const PresenceManager = require("../Managers/PresenceManager");
const GuildStageInstanceManger = require("../Managers/GuildStageInstanceManager");
const GuildTemplateManager = require("../Managers/GuildTemplateManager");
const GuildScheduledEventManager = require("../Managers/GuildScheduledEventManager");
const GuildStickerManager = require("../Managers/GuildStickerManager");
const FetchedThreads = require("./FetchedThreads");
const GuildMemberVerificationManager = require("../Managers/GuildMemberVerificationManager");
const GuildAuditLog = require("./GuildAuditLog");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Webhook = require("./Webhook");
const RolePromptManager = require("../Managers/RolePromptManager");
const GuildAutoModManager = require("../Managers/GuildAutoModManager");
const GuildDiscoveryManager = require("../Managers/GuildDiscoveryManager");
/**
 * Represents a guild in Discord.
 * @class
 * @extends Base
 */
class Guild extends Base {
  /**
   * Constructs a new Guild object.
   * @constructor
   * @param {Object} [data] - The data object containing guild information.
   * @param {Client} client - The client object associated with the guild.
   * @property {boolean} partial - Whether the guild is partial or not.
   * @property {string | null} id - The ID of the guild.
   * @property {string | null} name - The name of the guild.
   * @property {string | null} icon - The icon of the guild.
   * @property {string | null} iconHash - The hash of the guild's icon.
   * @property {string | null} splash - The splash image of the guild.
   * @property {string | null}
   */
  constructor(data = {}, client) {
    super(client);
    Object.defineProperty(this, "voices", {
      value: data.voice_states,
    });
    this.partial = data.partial ?? false;
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.icon = data.icon ?? null;
    this.iconHash = data.icon_hash ?? null;
    this.splash = data.splash ?? null;
    this.discoverySplash = data.discovery_splash ?? null;
    this.ownerId = data.owner_id ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.permissions = new Permissions(data.permissions ? BigInt(data.permissions) : 0n);
    this.afkChannelid = data.afk_channel_id ?? null;
    this.afkTimeout = data.afk_timeout ?? null;
    this.widgetEnabled = data.widget_enabled ?? null;
    this.widgetChannelid = data.widget_channel_id ?? null;
    this.verificationLevel =
      (typeof data.verification_level === "number" ? VerificationLevel[data.verification_level] : data.verification_level) ?? "None";
    this.defaultMessageNotifications =
      (typeof data.default_message_notifications === "number"
        ? DefaultMessageNotifications[data.default_message_notifications]
        : data.default_message_notifications) ?? "All_Messages";
    this.explicitContentFilter =
      (typeof data.explicit_content_filter === "number" ? ExplicitContentFilter[data.explicit_content_filter] : data.explicit_content_filter) ??
      "Disabled";
    this.features = data.features ?? null;
    this.mfaLevel = (typeof data.mfa_level === "number" ? MfaLevel[data.mfa_level] : data.mfa_level) ?? "None";
    this.applicationId - data.application_id ?? null;
    this.systemChannelId = data.system_channel_id ?? null;
    this.systemChannelFlags = new SystemChannelFlags(data.system_channel_flags ? BigInt(data.system_channel_flags) : 0n);
    this.rulesChannelId = data.rules_channel_id ?? null;
    this.unavailable = data.unavailable ?? false;
    this.memberCount = data.member_count ?? null;
    this.maxMembers = data.max_members ?? null;
    this.maxPresences = data.max_presences ?? null;
    this.vanityUrlCode = data.vanity_url_code ?? null;
    this.description = data.description ?? null;
    this.banner = data.banner ?? null;
    this.premiumTier = (typeof data.premium_tier === "number" ? PremiumTier[data.premium_tier] : data.premium_tier) ?? "None";
    this.premiumSubscriptionCount = data.premium_subscription_count ?? null;
    this.preferredLocale = data.preferred_locale ?? null;
    this.publicUpdatesChannelId = data.public_updates_channel_id ?? null;
    this.maxVideoChannelUsers = data.max_video_channel_users ?? null;
    this.approximateMemberCount = data.approximate_member_count ?? null;
    this.approximatePresenceCount = data.approximate_presence_count ?? null;
    this.nsfwLevel = (typeof data.nsfw_level === "number" ? NsfwLevel[data.nsfw_level] : data.nsfw_level) ?? "Default";
    this.premiumProgressBar = data.premium_progress_bar_enabled ?? null;
    this.safetyAlertsChannelId = data.safety_alerts_channel_id ?? null;
    this.channels = new GuildChannelManager(this.id, this.client);
    this.roles = new GuildRoleManager(this.id, this.client);
    this.members = new GuildMemberManager(this.id, this.client);
    this.bans = new GuildBanManager(this.id, this.client);
    this.prunes = new GuildPruneManager(this.id, this.client);
    this.emojis = new GuildEmojiManager(this.id, this.client);
    this.prunes = new GuildPruneManager(this.id, this.client);
    this.invites = new GuildInviteManager(this, this.client);
    this.voiceStates = new GuildVoiceStateManager(this.id, this.client);
    this.widgets = new GuildWidgetManager(this.id, this.client);
    this.presences = new PresenceManager(this.client);
    this.stageInstances = new GuildStageInstanceManger(this.id, this.client);
    this.templates = new GuildTemplateManager(this.id, this.client);
    this.events = new GuildScheduledEventManager(this.id, this.client);
    this.stickers = new GuildStickerManager(this.id, this.client);
    this.memberVerification = new GuildMemberVerificationManager(this.id, this.client);
    this.rolePrompts = new RolePromptManager(this.id, this.client);
    this.automod = new GuildAutoModManager(this.id, this.client);
    this.discovery = new GuildDiscoveryManager(this.id, this.client);
  }

  /**
   * Fetches the guild.
   * @param {Object} [options] Options for fetching the guild.
   * @returns {Promise<Guild>}
   */
  async fetch(options = {}) {
    return this.client.guilds.fetch(this, options);
  }

  /**
   * Edits the guild.
   * @param {Object} [options] Options for editing the guild.
   * @returns {Promise<Guild>}
   */
  async edit(options = {}) {
    return this.client.guilds.edit(this, options);
  }

  /**
   * Deletes the guild.
   * @returns {Promise<Guild>}
   */
  async delete() {
    return this.client.guilds.delete(this);
  }

  /**
   * Sets the name of the guild.
   * @param {string} name The new name for the guild.
   * @param {string} [reason] Reason for changing the name.
   * @returns {Promise<Guild>}
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the description of the guild.
   * @param {string} description The new description for the guild.
   * @param {string} [reason] Reason for changing the description.
   * @returns {Promise<Guild>}
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * Sets the verification level of the guild.
   * @param {number} verificationLevel The new verification level for the guild.
   * @param {string} [reason] Reason for changing the verification level.
   * @returns {Promise<Guild>}
   */
  async setVerificationLevel(verificationLevel, reason) {
    return await this.edit({verificationLevel, reason});
  }

  /**
   * Sets the default message notifications of the guild.
   * @param {number} defaultMessageNotifications The new default message notifications for the guild.
   * @param {string} [reason] Reason for changing the default message notifications.
   * @returns {Promise<Guild>}
   */
  async setDefaultMessageNotifications(defaultMessageNotifications, reason) {
    return await this.edit({defaultMessageNotifications, reason});
  }

  /**
   * Sets the explicit content filter level of the guild.
   * @param {number} explicitContentFilter The new explicit content filter level for the guild.
   * @param {string} [reason] Reason for changing the explicit content filter level.
   * @returns {Promise<Guild>}
   */
  async setExplicitContentFilter(explicitContentFilter, reason) {
    return await this.edit({explicitContentFilter, reason});
  }

  /**
   * Sets the AFK channel of the guild.
   * @param {Channel} afkChannel The new AFK channel for the guild.
   * @param {string} [reason] Reason for changing the AFK channel.
   * @returns {Promise<Guild>}
   */
  async setAfkChannel(afkChannel, reason) {
    return await this.edit({afkChannel, reason});
  }

  /**
   * Sets the AFK timeout of the guild.
   * @param {number} afkTimeout The new AFK timeout for the guild.
   * @param {string} [reason] Reason for changing the AFK timeout.
   * @returns {Promise<Guild>}
   */
  async setAfkTimeout(afkTimeout, reason) {
    return await this.edit({afkTimeout, reason});
  }

  /**
   * Sets the icon of the guild.
   * @param {string} icon The new icon for the guild.
   * @param {string} [reason] Reason for changing the icon.
   * @returns {Promise<Guild>}
   */
  async setIcon(icon, reason) {
    return await this.edit({icon, reason});
  }

  /**
   * Set the owner of the guild.
   * @param {GuildMemberResolvable} owner - The new owner of the guild.
   * @param {string} [reason] - The reason for setting the owner.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setOwner(owner, reason) {
    return await this.edit({owner, reason});
  }

  /**
   * Set the splash image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} splash - The new splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current splash image.
   * @param {string} [reason] - The reason for setting the splash.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setSplash(splash, reason) {
    return await this.edit({splash, reason});
  }

  /**
   * Set the discovery splash image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} discoverySplash - The new discovery splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current discovery splash image.
   * @param {string} [reason] - The reason for setting the discovery splash.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setDiscoverySplash(discoverySplash, reason) {
    return await this.edit({discoverySplash, reason});
  }

  /**
   * Set the banner image for the guild.
   * @param {BufferResolvable|Base64Resolvable|null} banner - The new banner image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current banner image.
   * @param {string} [reason] - The reason for setting the banner.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setBanner(banner, reason) {
    return await this.edit({banner, reason});
  }

  /**
   * Set the system channel for the guild.
   * @param {GuildChannelResolvable} systemChannel - The new system channel for the guild.
   * @param {string} [reason] - The reason for setting the system channel.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setSystemChannel(systemChannel, reason) {
    return await this.edit({systemChannel, reason});
  }

  /**
   * Set the preferred locale for the guild.
   * @param {string} preferredLocale - The new preferred locale for the guild.
   * @param {string} [reason] - The reason for setting the preferred locale.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setPreferredLocale(preferredLocale, reason) {
    return await this.edit({preferredLocale, reason});
  }

  /**
   * Set the system channel flags for the guild.
   * @param {number} systemChannelFlags - The new system channel flags for the guild.
   * @param {string} [reason] - The reason for setting the system channel flags.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setSystemChannelFlags(systemChannelFlags, reason) {
    return await this.edit({systemChannelFlags, reason});
  }

  /**
   * Set the features of the guild.
   * @param {GuildFeature[]} features - The new features of the guild.
   * @param {string} [reason] - The reason for setting the features.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setFeatures(features, reason) {
    return await this.edit({features, reason});
  }

  /**
   * Sets the premium progress bar of the guild.
   * @param {string} premiumProgressBar - The new premium progress bar.
   * @param {string} reason - The reason for setting the premium progress bar.
   * @returns {Promise<Guild>} The updated guild.
   */
  async setPremiumProgressBar(premiumProgressBar, reason) {
    return await this.edit({premiumProgressBar, reason});
  }

  /**
   * Returns the URL of the guild's icon.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic icon.
   * @param {number} [options.size] - The size of the icon to return.
   * @param {string} [options.format] - The format of the icon to return.
   * @returns {?string} The URL of the guild's icon, or `null` if the guild has no icon.
   */
  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.GuildIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Returns the URL of the guild's banner.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic banner.
   * @param {number} [options.size] - The size of the banner to return.
   * @param {string} [options.format] - The format of the banner to return.
   * @returns {?string} The URL of the guild's banner, or `null` if the guild has no banner.
   */
  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.GuildBanner(this.banner, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Returns the URL of the guild's splash.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic splash.
   * @param {number} [options.size] - The size of the splash to return.
   * @param {string} [options.format] - The format of the splash to return.
   * @returns {?string} The URL of the guild's splash, or `null` if the guild has no splash.
   */
  splashURL(options = {}) {
    if (!this.splash) return null;
    return this.client.cdn.GuildSplash(this.splash, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Returns the URL of the guild's discovery splash.
   * @param {Object} [options] - Additional options for the URL.
   * @param {boolean} [options.dynamic=false] - Whether to return a dynamic discovery splash.
   * @param {number} [options.size] - The size of the discovery splash to return.
   * @param {string} [options.format] - The format of the discovery splash to return.
   * @returns {?string} The URL of the guild's discovery splash, or `null` if the guild has no discovery splash.
   */
  discoverySplashURL(options = {}) {
    if (!this.discoverySplash) return null;
    return this.client.cdn.GuildDiscoverySplash(this.discoverySplash, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Returns the GuildMember instance of the bot user in this guild.
   * @returns {GuildMember} The GuildMember instance of the bot user in this guild.
   */
  get me() {
    return this.members._add(this.client.user.id);
  }

  /**
   * Fetches the owner of the guild.
   * @param {BaseFetchOptions} [options] The options to fetch the owner with.
   * @returns {Promise<GuildMember>} A promise that resolves with the GuildMember instance of the guild owner.
   */
  async fetchOwner(options = {}) {
    return await this.members.fetch(this.ownerId, options);
  }

  /**
   * Returns the voice channel where users are moved after being AFK for too long.
   * @returns {VoiceChannel} The voice channel where users are moved after being AFK for too long.
   */
  get afkChannel() {
    return this.client.channels._add(this.afkChannelId);
  }

  /**
   * Returns the widget channel of the guild.
   * @returns {Promise<Guild>} The widget channel of the guild.
   */
  get widgetChannel() {
    return this.client.channels._add(this.widgetChannelid);
  }

  /**
   * Returns the system channel of the guild.
   * @returns {Promise<Guild>} The system channel of the guild.
   */
  get systemChannel() {
    return this.client.channels._add(this.systemChannelId);
  }

  /**
   * Returns the rules channel of the guild.
   * @returns {Promise<Guild>} The rules channel of the guild.
   */
  get rulesChannel() {
    return this.client.channels._add(this.rulesChannelId);
  }

  /**
   * Returns the public updates channel of the guild.
   * @returns {Promise<Guild>} The public updates channel of the guild.
   */
  get publicUpdatesChannel() {
    return this.client.channels._add(this.publicUpdatesChannelId);
  }

  /**
   * Returns the welcome screen manager for the guild.
   * @returns {WelcomeScreenManager} The welcome screen manager for the guild.
   */
  get welcomeScreen() {
    return new WelcomeScreenManager(this.id, this.client);
  }

  /**
   * Returns the integration manager for the guild.
   * @returns {GuildIntegrationManager} The integration manager for the guild.
   */
  get integrations() {
    return new GuildIntegrationManager(this.id, this.client);
  }

  /**
   * Returns the vanity manager for the guild.
   * @returns {GuildVanityManager} The vanity manager for the guild.
   */
  get vanity() {
    return new GuildVanityManager(this.id, this.client);
  }

  /**
   * Returns the application command manager for the guild.
   * @returns {GuildApplicationCommandManager} The application command manager for the guild.
   */
  get commands() {
    return new GuildApplicationCommandManager(this.id, this.client);
  }

  /**
   * Fetches a preview of the guild.
   * @async
   * @returns {Promise<Object>} A promise that resolves with the preview of the guild.
   */
  async fetchPreview() {
    return await this.client.fetchPreview(this);
  }

  /**
   * Fetches the active threads in the guild.
   * @async
   * @returns {Promise<FetchedThreads>} A promise that resolves with the active threads in the guild.
   */
  async fetchActiveThreads() {
    const threads = await this.client.api.get(`${this.client.root}/guilds/${this.id}/threads/active`);
    return new FetchedThreads(threads, this.id, this.client);
  }

  /**
   * Fetches the audit logs for the guild.
   * @async
   * @param {Object} [options] - The options for fetching audit logs.
   * @param {UserResolvable} [options.user] - The user to filter the audit log by.
   * @param {string} [options.actionType] - The type of action to filter the audit log by.
   * @param {Snowflake|GuildAuditLogEntry} [options.before] - The entry to get audit logs before.
   * @param {number} [options.limit=50] - The maximum number of audit logs to fetch.
   * @returns {Promise<GuildAuditLog>} A promise that resolves with the fetched audit logs.
   */
  async fetchAuditLogs(options = {}) {
    const query = {
      user_id: typeof options.user === "string" ? options.user : options.user?.id ?? options.id ?? undefined,
      action_type: typeof options.actionType === "string" ? GuildAuditLogEntryActionTypes[options.actionType] : options.actionType ?? undefined,
      before: typeof options.before === "string" ? options.before : options.before?.id ?? undefined,
      limit: options.limit ?? 50,
    };

    const auditLog = await this.client.api.get(`${this.client.root}/guilds/${this.id}/audit-logs`, {query});
    return new GuildAuditLog(auditLog, this.id, this.client);
  }

  /**
   * Fetches the bot's own member object for the guild.
   * @async
   * @param {Object} [options] - The options for fetching the member object.
   * @returns {Promise<GuildMember>} A promise that resolves with the bot's own member object for the guild.
   */
  async fetchMe(options) {
    return await this.members.fetch(this.client.user.id, options);
  }

  /**
   * Fetches the webhooks for the guild.
   * @async
   * @returns {Promise<RaidenCol<string, Webhook>>} A promise that resolves with the fetched webhooks for the guild.
   */
  async fetchWebhooks() {
    const webhooks = await this.client.api.get(`${this.client.root}/guilds/${this.id}/webhooks`);
    return new RaidenCol(webhooks?.map((o) => [o.id, new Webhook(o, this.id, this.client)]));
  }

  /**
   * Fetches the guild feed for the guild.
   * @async
   * @returns {Promise<Object>} A promise that resolves with the fetched guild feed.
   */
  async fetchFeed() {
    return await this.client.api.post(`${this.client.root}/guilds/${this.id}/guild-feed`);
  }

  /**
   * Modifies the MFA (multi-factor authentication) level of the guild.
   * @async
   * @param {number} mfaLevel - The new MFA level for the guild.
   * @param {string} [reason] - The reason for modifying the MFA level.
   * @returns {Promise<Guild>} A promise that resolves with the guild object with the modified MFA level.
   */
  async modifyMFALevel(mfaLevel, reason) {
    return await this.client.guilds.modifyMFALevel(this, {mfaLevel, reason});
  }

  /**
   * Gets all the voice-based channels in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the voice-based channels in the guild.
   */
  getVoiceBasedChannels() {
    return this.channels.cache.filter((o) => ["Guild_Voice", "Guild_Stage_Voice"].includes(o.type));
  }

  /**
   * Gets all the text-based channels in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the text-based channels in the guild.
   */
  getTextBasedChannels() {
    return this.channels.cache.filter((o) =>
      ["Guild_Text", "Guild_News", "Guild_Voice", "Guild_News_Thread", "Guild_Public_Thread", "Guild_Private_Thread"].includes(o.type)
    );
  }

  /**
   * Gets all the categories in the guild.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of all the categories in the guild.
   */
  getCategories() {
    return this.channels.cache.filter((o) => ["GUILD_CATEGORY"].includes(o.type));
  }
}

module.exports = Guild;
