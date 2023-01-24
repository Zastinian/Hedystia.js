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
class Guild extends Base {
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
      (typeof data.verification_level === "number" ? VerificationLevel[data.verification_level] : data.verification_level) ?? "NONE";
    this.defaultMessageNotifications =
      (typeof data.default_message_notifications === "number"
        ? DefaultMessageNotifications[data.default_message_notifications]
        : data.default_message_notifications) ?? "ALL_MESSAGES";
    this.explicitContentFilter =
      (typeof data.explicit_content_filter === "number" ? ExplicitContentFilter[data.explicit_content_filter] : data.explicit_content_filter) ??
      "DISABLED";
    this.features = data.features ?? null;
    this.mfaLevel = (typeof data.mfa_level === "number" ? MfaLevel[data.mfa_level] : data.mfa_level) ?? "NONE";
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
    this.premiumTier = (typeof data.premium_tier === "number" ? PremiumTier[data.premium_tier] : data.premium_tier) ?? "NONE";
    this.premiumSubscriptionCount = data.premium_subscription_count ?? null;
    this.preferredLocale = data.preferred_locale ?? null;
    this.publicUpdatesChannelId = data.public_updates_channel_id ?? null;
    this.maxVideoChannelUsers = data.max_video_channel_users ?? null;
    this.approximateMemberCount = data.approximate_member_count ?? null;
    this.approximatePresenceCount = data.approximate_presence_count ?? null;
    this.nsfwLevel = (typeof data.nsfw_level === "number" ? NsfwLevel[data.nsfw_level] : data.nsfw_level) ?? "DEFAULT";
    this.premiumProgressBar = data.premium_progress_bar_enabled ?? null;
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

  async fetch(options = {}) {
    return this.client.guilds.fetch(this, options);
  }

  async edit(options = {}) {
    return this.client.guilds.edit(this, options);
  }

  async delete() {
    return this.client.guilds.delete(this);
  }

  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  async setVerificationLevel(verificationLevel, reason) {
    return await this.edit({verificationLevel, reason});
  }

  async setDefaultMessageNotifications(defaultMessageNotifications, reason) {
    return await this.edit({defaultMessageNotifications, reason});
  }

  async setExplicitContentFilter(explicitContentFilter, reason) {
    return await this.edit({explicitContentFilter, reason});
  }

  async setAfkChannel(afkChannel, reason) {
    return await this.edit({afkChannel, reason});
  }

  async setAfkTimeout(afkTimeout, reason) {
    return await this.edit({afkTimeout, reason});
  }

  async setIcon(icon, reason) {
    return await this.edit({icon, reason});
  }

  async setOwner(owner, reason) {
    return await this.edit({owner, reason});
  }

  async setSplash(splash, reason) {
    return await this.edit({splash, reason});
  }

  async setDiscoverySplash(discoverySplash, reason) {
    return await this.edit({discoverySplash, reason});
  }

  async setBanner(banner, reason) {
    return await this.edit({banner, reason});
  }

  async setSystemChannel(systemChannel, reason) {
    return await this.edit({systemChannel, reason});
  }

  async setPreferredLocale(preferredLocale, reason) {
    return await this.edit({preferredLocale, reason});
  }

  async setSystemChannelFlags(systemChannelFlags, reason) {
    return await this.edit({systemChannelFlags, reason});
  }

  async setFeatures(features, reason) {
    return await this.edit({features, reason});
  }

  async setPremiumProgressBar(premiumProgressBar, reason) {
    return await this.edit({premiumProgressBar, reason});
  }

  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.GuildIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }

  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.GuildBanner(this.banner, options.dynamic, options.size, options.format, this.id);
  }

  splashURL(options = {}) {
    if (!this.splash) return null;
    return this.client.cdn.GuildSplash(this.splash, options.dynamic, options.size, options.format, this.id);
  }

  discoverySplashURL(options = {}) {
    if (!this.discoverySplash) return null;
    return this.client.cdn.GuildDiscoverySplash(this.discoverySplash, options.dynamic, options.size, options.format, this.id);
  }

  get me() {
    return this.members._add(this.client.user.id);
  }

  async fetchOwner(options = {}) {
    return await this.members.fetch(this.ownerId, options);
  }

  get afkChannel() {
    return this.client.channels._add(this.afkChannelId);
  }

  get widgetChannel() {
    return this.client.channels._add(this.widgetChannelid);
  }

  get systemChannel() {
    return this.client.channels._add(this.systemChannelId);
  }

  get rulesChannel() {
    return this.client.channels._add(this.rulesChannelId);
  }

  get publicUpdatesChannel() {
    return this.client.channels._add(this.publicUpdatesChannelId);
  }

  get welcomeScreen() {
    return new WelcomeScreenManager(this.id, this.client);
  }

  get integrations() {
    return new GuildIntegrationManager(this.id, this.client);
  }

  get vanity() {
    return new GuildVanityManager(this.id, this.client);
  }

  get commands() {
    return new GuildApplicationCommandManager(this.id, this.client);
  }

  async fetchPreview() {
    return await this.client.fetchPreview(this);
  }

  async fetchActiveThreads() {
    const threads = await this.client.api.get(`${this.client.root}/guilds/${this.id}/threads/active`);
    return new FetchedThreads(threads, this.id, this.client);
  }

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

  async fetchMe(options) {
    return await this.members.fetch(this.client.user.id, options);
  }

  async fetchWebhooks() {
    const webhooks = await this.client.api.get(`${this.client.root}/guilds/${this.id}/webhooks`);
    return new RaidenCol(webhooks?.map((o) => [o.id, new Webhook(o, this.id, this.client)]));
  }

  async fetchFeed() {
    return await this.client.api.post(`${this.client.root}/guilds/${this.id}/guild-feed`);
  }

  async modifyMFALevel(mfaLevel, reason) {
    return await this.client.guilds.modifyMFALevel(this, {mfaLevel, reason});
  }

  getVoiceBasedChannels() {
    return this.channels.cache.filter((o) => ["Guild_Voice", "Guild_Stage_Voice"].includes(o.type));
  }

  getTextBasedChannels() {
    return this.channels.cache.filter((o) =>
      ["Guild_Text", "Guild_News", "Guild_Voice", "Guild_News_Thread", "Guild_Public_Thread", "Guild_Private_Thread"].includes(o.type)
    );
  }

  getCategories() {
    return this.channels.cache.filter((o) => ["GUILD_CATEGORY"].includes(o.type));
  }
}

module.exports = Guild;
