module.exports.ActivityType = createEnum([
  "PLAYING",
  "STREAMING",
  "LISTENING",
  "WATCHING",
  "CUSTOM",
  "COMPETING",
]);
module.exports.InteractionType = createEnum([
  null,
  "PING",
  "APPLICATION_COMMAND",
  "MESSAGE_COMPONENT",
  "APPLICATION_COMMAND_AUTOCOMPLETE",
  "MODAL_SUBMIT",
]);
module.exports.ApplicationCommandTypes = createEnum([
  null,
  "CHAT_INPUT",
  "USER",
  "MESSAGE",
]);
module.exports.ChannelType = createEnum([
  "GUILD_TEXT",
  "DM",
  "GUILD_VOICE",
  "GROUP_DM",
  "GUILD_CATEGORY",
  "GUILD_NEWS",
  "GUILD_STORE",
  null,
  null,
  null,
  "GUILD_NEWS_THREAD",
  "GUILD_PUBLIC_THREAD",
  "GUILD_PRIVATE_THREAD",
  "GUILD_STAGE_VOICE",
  "GUILD_DIRECTORY",
  "GUILD_FORUM",
]);
module.exports.ComponentType = createEnum([
  null,
  "ACTION_ROW",
  "BUTTON",
  "STRING_SELECT",
  "INPUT_TEXT",
  "USER_SELECT",
  "ROLE_SELECT",
  "MENTIONABLE_SELECT",
  "CHANNEL_SELECT",
]);
module.exports.ButtonStyle = createEnum([
  null,
  "PRIMARY",
  "SECONDARY",
  "SUCCESS",
  "DANGER",
  "LINK",
]);
module.exports.TextInputStyle = createEnum([null, "SHORT", "PARAGRAPH"]);
module.exports.OptionType = createEnum([
  null,
  "SUB_COMMAND",
  "SUB_COMMAND_GROUP",
  "STRING",
  "INTEGER",
  "BOOLEAN",
  "USER",
  "CHANNEL",
  "ROLE",
  "MENTIONABLE",
  "NUMBER",
  "ATTACHMENT",
  "DATE",
]);
module.exports.VideoQualityMode = createEnum([null, "AUTO", "FULL"]);
module.exports.ApplicationCommandPermissionType = createEnum([
  null,
  "ROLE",
  "USER",
  "CHANNEL",
]);
module.exports.OverwriteType = createEnum(["ROLE", "MEMBER"]);
module.exports.MemberShipState = createEnum([null, "INVITED", "ACCEPTED"]);
module.exports.MessageType = createEnum([
  "DEFAULT",
  "RECIPIENT_ADD",
  "RECIPIENT_REMOVE",
  "CALL",
  "CHANNEL_NAME_CHANGE",
  "CHANNEL_ICON_CHANGE",
  "CHANNEL_PINNED_MESSAGE",
  "USER_JOIN",
  "GUILD_BOOST",
  "GUILD_BOOST_TIER_1",
  "GUILD_BOOST_TIER_2",
  "GUILD_BOOST_TIER_3",
  "CHANNEL_FOLLOW_ADD",
  "GUILD_STREAM",
  "GUILD_DISCOVERY_DISQUALIFIED",
  "GUILD_DISCOVERY_REQUALIFIED",
  "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
  "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
  "THREAD_CREATED",
  "REPLY",
  "CHAT_INPUT_COMMAND",
  "THREAD_STARTER_MESSAGE",
  "GUILD_INVITE_REMINDER",
  "CONTEXT_MENU_COMMAND",
  "AUTO_MODERATION_ACTION",
]);
module.exports.VerificationLevel = createEnum([
  "NONE",
  "LOW",
  "MEDIUM",
  "HIGH",
  "VERY_HIGH",
]);
module.exports.DefaultMessageNotifications = createEnum([
  "ALL_MESSAGES",
  "ONLY_MENTIONS",
]);
module.exports.ExplicitContentFilter = createEnum([
  "DISABLED",
  "MEMBERS_WITHOUT_ROLES",
  "ALL_MEMBERS",
]);
module.exports.MfaLevel = createEnum(["NONE", "ELEVATED"]);
module.exports.PremiumTier = createEnum(["NONE", "TIER_1", "TIER_2", "TIER_3"]);
module.exports.NsfwLevel = createEnum([
  "DEFAULT",
  "EXPLICIT",
  "SAFE",
  "AGE_RESTRICTED",
]);
module.exports.IntegrationExpireBehavior = createEnum(["Remove role", "Kick"]);
module.exports.InviteTargetTypes = createEnum([
  null,
  "STREAM",
  "EMBEDDED_APPLICATION",
]);
module.exports.PrivacyLevel = createEnum([null, "PUBLIC", "GUILD_ONLY"]);
module.exports.GuildScheduledEventPrivacyLevel = createEnum([
  null,
  null,
  "GUILD_ONLY",
]);
module.exports.GuildScheduledEventStatus = createEnum([
  null,
  "SCHEDULED",
  "ACTIVE",
  "COMPLETED",
  "CANCELED",
]);
module.exports.GuildScheduledEventEntityType = createEnum([
  null,
  "STAGE_INSTANCE",
  "VOICE",
  "EXTERNAL",
]);
module.exports.StickerType = createEnum([null, "STANDARD", "STICKER"]);
module.exports.StickerFormatType = createEnum([null, "PNG", "APNG", "LOTTIE"]);
module.exports.GuildAuditLogEntryActionTypes = createEnum([
  null,
  "GUILD_UPDATE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "CHANNEL_CREATE",
  "CHANNEL_UPDATE",
  "CHANNEL_DELETE",
  "CHANNEL_OVERWRITE_CREATE",
  "CHANNEL_OVERWRITE_UPDATE",
  "CHANNEL_OVERWRITE_DELETE",
  null,
  null,
  null,
  null,
  "MEMBER_KICK",
  "MEMBER_PRUNE",
  "MEMBER_BAN_ADD",
  "MEMBER_BAN_REMOVE",
  "MEMBER_UPDATE",
  "MEMBER_ROLE_UPDATE",
  "MEMBER_MOVE",
  "MEMBER_DISCONNECT",
  "BOT_ADD",
  null,
  "ROLE_CREATE",
  "ROLE_UPDATE",
  "ROLE_DELETE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "INVITE_CREATE",
  "INVITE_UPDATE",
  "INVITE_DELETE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "WEBHOOK_CREATE",
  "WEBHOOK_UPDATE",
  "WEBHOOK_DELETE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "EMOJI_CREATE",
  "EMOJI_UPDATE",
  "EMOJI_DELETE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "MESSAGE_DELETE",
  "MESSAGE_BULK_DELETE",
  "MESSAGE_PIN",
  "MESSAGE_UNPIN",
  null,
  null,
  null,
  null,
  "INTEGRATION_CREATE",
  "INTEGRATION_UPDATE",
  "INTEGRATION_DELETE",
  "STAGE_INSTANCE_CREATE",
  "STAGE_INSTANCE_UPDATE",
  "STAGE_INSTANCE_DELETE",
  null,
  null,
  null,
  null,
  "STICKER_CREATE",
  "STICKER_UPDATE",
  "STICKER_DELETE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "GUILD_SCHEDULED_EVENT_CREATE",
  "GUILD_SCHEDULED_EVENT_UPDATE",
  "GUILD_SCHEDULED_EVENT_DELETE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "THREAD_CREATE",
  "THREAD_UPDATE",
  "THREAD_DELETE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "APPLICATION_COMMAND_PERMISSION_UPDATE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "AUTO_MODERATION_RULE_CREATE",
  "AUTO_MODERATION_RULE_UPDATE",
  "AUTO_MODERATION_RULE_DELETE",
  "AUTO_MODERATION_BLOCK_MESSAGE",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "ROLE_PROMPT_CREATE",
  "ROLE_PROMPT_UPDATE",
  "ROLE_PROMPT_DELETE",
]);
module.exports.WebhookType = createEnum([
  null,
  "Incoming",
  "Channel Follower",
  "Application",
]);
module.exports.GuildAutoModTriggerTypes = createEnum([
  null,
  "KEYWORD",
  "HARMFUL_LINK",
  "SPAM",
  "KEYWORD_PRESET",
]);
module.exports.GuildAutoModEventTypes = createEnum([null, "MESSAGE_SEND"]);
module.exports.GuildAutoModPresetTypes = createEnum([
  null,
  "PROFANITY",
  "SEXUAL_CONTENT",
  "SLURS",
]);
module.exports.GuildAutoModActionTypes = createEnum([
  null,
  "BLOCK_MESSAGE",
  "SEND_ALERT_MESSAGE",
  "TIMEOUT",
]);
module.exports.GuildPrimaryCategory = createEnum([
  null,
  "GAMING",
  "MUSIC",
  "ENTERTAINMENT",
  "CREATIVE_ARTS",
  "SCIENCE_AND_TECH",
  "EDUCATION",
  "SPORTS",
  "FASHION_AND_BEAUTY",
  "RELATIONSHIPS_AND_IDENTITY",
  "TRAVEL_AND_FOOD",
  "FITNESS_AND_HEALTH",
  "FINANCE",
  "OTHER",
  "GENERAL_CHATTING",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "EMOJI",
  null,
  null,
  null,
  null,
  null,
  "BOTS",
]);
function createEnum(keys) {
  let obj = {};
  for (let [index, value] of keys.entries()) {
    if (keys[index] === null) continue;
    obj[index] = value;
    obj[value] = index;
  }

  return obj;
}

module.exports.InviteTargetTypesEnums = {
  STREAM: 1,
  EMBEDDED_APPLICATION: 2,
};

module.exports.OverwriteTypeEnums = {
  ROLE: 0,
  MEMBER: 1,
};

module.exports.ComponentTypes = {
  ACTION_ROW: 1,
  BUTTON: 2,
  SELECT_MENU: 3,
  TEXT_INPUT: 4,
};

module.exports.Opcodes = {
  DISPATCH: 0,
  HEARTBEAT: 1,
  IDENTIFY: 2,
  PRESENCE_UPDATE: 3,
  VOICE_STATE_UPDATE: 4,
  RESUME: 6,
  RECONNECT: 7,
  REQUEST_GUILD_MEMBERS: 8,
  INVALID_SESSION: 9,
  HELLO: 10,
  HEARTBEAT_ACK: 11,
};

module.exports.WebsocketReadyState = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
};

module.exports.Colors = {
  DEFAULT: 0x000000,
  WHITE: 0xffffff,
  AQUA: 0x1abc9c,
  GREEN: 0x57f287,
  BLUE: 0x3498db,
  YELLOW: 0xfee75c,
  PURPLE: 0x9b59b6,
  LUMINOUS_VIVID_PINK: 0xe91e63,
  FUCHSIA: 0xeb459e,
  GOLD: 0xf1c40f,
  ORANGE: 0xe67e22,
  RED: 0xed4245,
  GREY: 0x95a5a6,
  NAVY: 0x34495e,
  DARK_AQUA: 0x11806a,
  DARK_GREEN: 0x1f8b4c,
  DARK_BLUE: 0x206694,
  DARK_PURPLE: 0x71368a,
  DARK_VIVID_PINK: 0xad1457,
  DARK_GOLD: 0xc27c0e,
  DARK_ORANGE: 0xa84300,
  DARK_RED: 0x992d22,
  DARK_GREY: 0x979c9f,
  DARKER_GREY: 0x7f8c8d,
  LIGHT_GREY: 0xbcc0c0,
  DARK_NAVY: 0x2c3e50,
  BLURPLE: 0x5865f2,
  GREYPLE: 0x99aab5,
  DARK_BUT_NOT_BLACK: 0x2c2f33,
  NOT_QUITE_BLACK: 0x23272a,
};

module.exports.ActivityEnums = {
  PLAYING: 0,
  STREAMING: 1,
  LISTENING: 2,
  WATCHING: 3,
  CUSTOM: 4,
  COMPETING: 5,
};

module.exports.StatusEnums = {
  ONLINE: "online",
  DND: "dnd",
  IDLE: "idle",
  INVISIBLE: "invisible",
  OFFLINE: "offline",
};

module.exports.ButtonStyleEnums = {
  PRIMARY: 1,
  SECONDARY: 2,
  SUCCESS: 3,
  DANGER: 4,
  LINK: 5,
};

module.exports.InputTextStyleEnums = {
  SHORT: 1,
  PARAGRAPH: 2,
};

module.exports.ApiVersion = {
  V6: 6,
  V7: 7,
  V8: 8,
  V9: 9,
  V10: 10,
};

module.exports.ApplicationCommandTypeEnums = {
  CHAT_INPUT: 1,
  USER: 2,
  MESSAGE: 3,
};

module.exports.CDN = {
  root: `https://cdn.discordapp.com`,
  DefaultAvatarURL: (discriminator) => {
    return `${this.CDN.root}/embed/avatars/${discriminator}png`;
  },
  UserAvatar: (avatar, dynamic, size, format = "png", userId) => {
    if (dynamic) format = avatar.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/avatars/${userId}/${avatar}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  UserBanner: (banner, dynamic, size, format = "png", userId) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/banners/${userId}/${banner}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  GuildMemberBanner: (
    banner,
    dynamic,
    size,
    format = "png",
    memberId,
    guildId
  ) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${
      this.CDN.root
    }/guilds/${guildId}/users/${memberId}/banners/${banner}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  TeamIcon: (icon, dynamic, size, format = "png", teamId) => {
    if (dynamic) format = icon.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/team-icons/${teamId}/${icon}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  ApplicationIcon: (icon, dynamic, size, format = "png", applicationId) => {
    if (dynamic) format = icon.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/app-icons/${applicationId}/${icon}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  ChannelBanner: (banner, dynamic, size, format = "png", channelId) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/channel-banners/${channelId}/${banner}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  GuildIcon: (icon, dynamic, size, format = "png", guildId) => {
    if (dynamic) format = icon.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/icons/${guildId}/${icon}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  GuildBanner: (banner, dynamic, size, format = "png", guildId) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/banners/${guildId}/${banner}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  GuildSplash: (splash, dynamic, size, format = "png", guildId) => {
    if (dynamic) format = splash.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/splashes/${guildId}/${splash}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  GuildDiscoverySplash: (
    discoverySplash,
    dynamic,
    size,
    format = "png",
    guildId
  ) => {
    if (dynamic) format = splash.startsWith("a_") ? "gif" : format;
    return `${
      this.CDN.root
    }/discovery-splashes/${guildId}/${discoverySplash}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  RoleIcon: (roleIcon, dynamic, size, format = "png", roleId) => {
    if (dynamic) format = splash.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/role-icons/${roleId}/${roleIcon}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  GuildMemberAvatar: (
    avatar,
    dynamic,
    size,
    format = "png",
    memberId,
    guildId
  ) => {
    if (dynamic) format = avatar.startsWith("a_") ? "gif" : format;
    return `${
      this.CDN.root
    }/guilds/${guildId}/users/${memberId}/avatars/${avatar}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  GuildScheduledEventCoverImage: (
    coverImage,
    dynamic,
    size,
    format = "png",
    eventId
  ) => {
    if (dynamic) format = coverImage.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/guild-events/${eventId}/${coverImage}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  StickerPackBanner: (bannerId, size, format = "png") => {
    return `${
      this.CDN.root
    }/app-assets/710982414301790216/store/${bannerId}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  StickerImage: (stickerId, size, format = "png") => {
    return `${this.CDN.root}/stickers/${stickerId}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  WebhookAvatar: (avatar, dynamic, size, format = "png", webhookId) => {
    if (dynamic) format = avatar.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/avatars/${webhookId}/${avatar}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  UserAvatarDecoration: (decoration, size, format = "png", userId) => {
    return `${
      this.CDN.root
    }/avatar-decorations/${userId}/${decoration}.${format}${
      size ? `?size=${size}` : ""
    }`;
  },
  EmojiURL: (emojiId, dynamic, size, format = "png", quality) => {
    if (dynamic) format = "gif" ?? format;
    return `${this.CDN.root}/emojis/${emojiId}.${format}${
      size ? `?size=${size}` : ""
    }${quality ? `&quality=${quality}` : ""}`;
  },
};
