/**
 * It creates an object with the keys being the index of the value in the array and the value being the
 * value in the array.
 * @param keys - An array of strings that will be used to create the enum.
 * @returns The return value is an object with the following properties:
 */
module.exports.ActivityType = createEnum(["Playing", "Streaming", "Listening", "Watching", "Custom", "Competing"]);
module.exports.InteractionType = createEnum([
  null,
  "Ping",
  "Application_Command",
  "Message_Component",
  "Application_Command_Autocomplete",
  "Modal_Submit",
]);
module.exports.ApplicationCommandTypes = createEnum([null, "Chat_Input", "User", "Message"]);
module.exports.ChannelType = createEnum([
  "Guild_Text",
  "Dm",
  "Guild_Voice",
  "Group_Dm",
  "Guild_Category",
  "Guild_Announcement",
  null,
  null,
  null,
  null,
  "Announcement_Thread",
  "Public_Thread",
  "Private_Thread",
  "Guild_Stage_Voice",
  "Guild_Directory",
  "Guild_Forum",
  "Guild_Media",
]);
module.exports.ComponentType = createEnum([
  null,
  "Action_Row",
  "Button",
  "String_Select",
  "Input_Text",
  "User_Select",
  "Role_Select",
  "Mentionable_Select",
  "Channel_Select",
]);
module.exports.ButtonStyle = createEnum([null, "Primary", "Secondary", "Success", "Danger", "Link"]);
module.exports.TextInputStyle = createEnum([null, "Short", "Paragraph"]);
module.exports.OptionType = createEnum([
  null,
  "Sub_Command",
  "Sub_Command_Group",
  "String",
  "Integer",
  "Boolean",
  "User",
  "Channel",
  "Role",
  "Mentionable",
  "Number",
  "Attachment",
]);
module.exports.VideoQualityMode = createEnum([null, "Auto", "Full"]);
module.exports.SortOrderTypes = createEnum(["Latest_Activity", "Creation_Date"]);
module.exports.ForumLayoutTypes = createEnum(["Not_Set", "List_View", "Gallery_View"]);
module.exports.ApplicationCommandPermissionType = createEnum([null, "Role", "User", "Channel"]);
module.exports.OverwriteType = createEnum(["Role", "Member"]);
module.exports.MemberShipState = createEnum([null, "Invited", "Accepted"]);
module.exports.MessageType = createEnum([
  "Default",
  "Recipient_Add",
  "Recipient_Remove",
  "Call",
  "Channel_Name_Change",
  "Channel_Icon_Change",
  "Channel_Pinned_Message",
  "User_Join",
  "Guild_Boost",
  "Guild_Boost_Tier_1",
  "Guild_Boost_Tier_2",
  "Guild_Boost_Tier_3",
  "Channel_Follow_Add",
  "Guild_Discovery_Disqualified",
  "Guild_Discovery_Requalified",
  "Guild_Discovery_Grace_Period_Initial_Warning",
  "Guild_Discovery_Grace_Period_Final_Warning",
  "Thread_Created",
  "Reply",
  "Chat_Input_Command",
  "Thread_Starter_Message",
  "Guild_Invite_Reminder",
  "Context_Menu_Command",
  "Auto_Moderation_Action",
  "Role_Subscription_Purchase",
  "Interaction_Premium_Upsell",
  "Stage_Start",
  "Stage_End",
  "Stage_Speaker",
  "Stage_Topic",
  "Guild_Application_Premium_Subscription",
]);
module.exports.VerificationLevel = createEnum(["None", "Low", "Medium", "High", "Very_High"]);
module.exports.DefaultMessageNotifications = createEnum(["All_Messages", "Only_Mentions"]);
module.exports.ExplicitContentFilter = createEnum(["Disabled", "Members_Without_Roles", "All_Members"]);
module.exports.MfaLevel = createEnum(["None", "Elevated"]);
module.exports.PremiumTier = createEnum(["None", "Tier_1", "Tier_2", "Tier_3"]);
module.exports.NsfwLevel = createEnum(["Default", "Explicit", "Safe", "Age_Restricted"]);
module.exports.IntegrationExpireBehavior = createEnum(["Remove role", "Kick"]);
module.exports.InviteTargetTypes = createEnum([null, "Stream", "Embedded_Application"]);
module.exports.PrivacyLevel = createEnum([null, "Public", "Guild_Only"]);
module.exports.GuildScheduledEventPrivacyLevel = createEnum([null, null, "Guild_Only"]);
module.exports.GuildScheduledEventStatus = createEnum([null, "Scheduled", "Active", "Completed", "Canceled"]);
module.exports.GuildScheduledEventEntityType = createEnum([null, "Stage_Instance", "Voice", "External"]);
module.exports.StickerType = createEnum([null, "Standard", "Guild"]);
module.exports.StickerFormatType = createEnum([null, "Png", "Apng", "Lottie", "Gif"]);
module.exports.GuildAuditLogEntryActionTypes = createEnum([
  null,
  "Guild_Update",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Channel_Create",
  "Channel_Update",
  "Channel_Delete",
  "Channel_Overwrite_Create",
  "Channel_Overwrite_Update",
  "Channel_Overwrite_Delete",
  null,
  null,
  null,
  null,
  "Member_Kick",
  "Member_Prune",
  "Member_Ban_Add",
  "Member_Ban_Remove",
  "Member_Update",
  "Member_Role_Update",
  "Member_Move",
  "Member_Disconnect",
  "Bot_Add",
  null,
  "Role_Create",
  "Role_Update",
  "Role_Delete",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Invite_Create",
  "Invite_Update",
  "Invite_Delete",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Webhook_Create",
  "Webhook_Update",
  "Webhook_Delete",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Emoji_Create",
  "Emoji_Update",
  "Emoji_Delete",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Message_Delete",
  "Message_Bulk_Delete",
  "Message_Pin",
  "Message_Unpin",
  null,
  null,
  null,
  null,
  "Integration_Create",
  "Integration_Update",
  "Integration_Delete",
  "Stage_Instance_Create",
  "Stage_Instance_Update",
  "Stage_Instance_Delete",
  null,
  null,
  null,
  null,
  "Sticker_Create",
  "Sticker_Update",
  "Sticker_Delete",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Guild_Scheduled_Event_Create",
  "Guild_Scheduled_Event_Update",
  "Guild_Scheduled_Event_Delete",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Thread_Create",
  "Thread_Update",
  "Thread_Delete",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Application_Command_Permission_Update",
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
  "Auto_Moderation_Rule_Create",
  "Auto_Moderation_Rule_Update",
  "Auto_Moderation_Rule_Delete",
  "Auto_Moderation_Block_Message",
  "Auto_Moderation_Flag_To_Channel",
  "Auto_Moderation_User_Communication_Disabled",
  null,
  null,
  null,
  null,
  "Creator_Monetization_Request_Created",
  "Creator_Monetization_Terms_Accepted",
]);
module.exports.WebhookType = createEnum([null, "Incoming", "Channel Follower", "Application"]);
module.exports.GuildAutoModTriggerTypes = createEnum([null, "Keyword", "Spam", "Keyword_Preset", "Mention_Spam"]);
module.exports.GuildAutoModEventTypes = createEnum([null, "Message_Send"]);
module.exports.GuildAutoModPresetTypes = createEnum([null, "Profanity", "Sexual_Content", "Slurs"]);
module.exports.GuildAutoModActionTypes = createEnum([null, "Block_Message", "Send_Alert_Message", "Timeout"]);
module.exports.GuildPrimaryCategory = createEnum([
  null,
  "Gaming",
  "Music",
  "Entertainment",
  "Creative_Arts",
  "Science_And_Tech",
  "Education",
  "Sports",
  "Fashion_And_Beauty",
  "Relationships_And_Identity",
  "Travel_And_Food",
  "Fitness_And_Health",
  "Finance",
  "Other",
  "General_Chatting",
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
  "Emoji",
  null,
  null,
  null,
  null,
  null,
  "Bots",
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

module.exports.ComponentTypes = {
  Action_Row: 1,
  Button: 2,
  String_Select: 3,
  Input_Text: 4,
  User_Select: 5,
  Role_Select: 6,
  Mentionable_Select: 7,
  Channel_Select: 8,
};

module.exports.Opcodes = {
  Dispatch: 0,
  Heartbeat: 1,
  Identify: 2,
  Presence_Update: 3,
  Voice_State_Update: 4,
  Resume: 6,
  Reconnect: 7,
  Request_Guild_Members: 8,
  Invalid_Session: 9,
  Hello: 10,
  Heartbeat_Ack: 11,
};

module.exports.WebsocketReadyState = {
  Connecting: 0,
  Open: 1,
  Closing: 2,
  Closed: 3,
};

module.exports.Colors = {
  Default: 0x000000,
  White: 0xffffff,
  Aqua: 0x1abc9c,
  Green: 0x57f287,
  Blue: 0x3498db,
  Yellow: 0xfee75c,
  Purple: 0x9b59b6,
  Luminous_Vivid_Pink: 0xe91e63,
  Fuchsia: 0xeb459e,
  Gold: 0xf1c40f,
  Orange: 0xe67e22,
  Red: 0xed4245,
  Grey: 0x95a5a6,
  Navy: 0x34495e,
  Dark_Aqua: 0x11806a,
  Dark_Green: 0x1f8b4c,
  Dark_Blue: 0x206694,
  Dark_Purple: 0x71368a,
  Dark_Vivid_Pink: 0xad1457,
  Dark_Gold: 0xc27c0e,
  Dark_Orange: 0xa84300,
  Dark_Red: 0x992d22,
  Dark_Grey: 0x979c9f,
  Darker_Grey: 0x7f8c8d,
  Light_Grey: 0xbcc0c0,
  Dark_Navy: 0x2c3e50,
  Blurple: 0x5865f2,
  Greyple: 0x99aab5,
  Dark_But_Not_Black: 0x2c2f33,
  Not_Quite_Black: 0x23272a,
};

module.exports.Activity = {
  Playing: 0,
  Streaming: 1,
  Listening: 2,
  Watching: 3,
  Custom: 4,
  Competing: 5,
};

module.exports.Status = {
  Online: "online",
  Dnd: "dnd",
  Idle: "idle",
  Invisible: "invisible",
  Offline: "offline",
};

module.exports.ButtonStyles = {
  Primary: 1,
  Secondary: 2,
  Success: 3,
  Danger: 4,
  Link: 5,
};

module.exports.InputTextStyle = {
  Short: 1,
  Paragraph: 2,
};

module.exports.ApiVersion = {
  V6: 6,
  V7: 7,
  V8: 8,
  V9: 9,
  V10: 10,
};

module.exports.ApplicationCommandType = {
  Chat_Input: 1,
  User: 2,
  Message: 3,
};

module.exports.CDN = {
  root: `https://cdn.discordapp.com`,
  DefaultAvatarURL: (id, format = "png") => {
    return `${this.CDN.root}/embed/avatars/${(BigInt(id) >> 22n) % 6n}.${format}`;
  },
  UserAvatar: (avatar, dynamic, size, format = "png", userId) => {
    if (dynamic) format = avatar.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/avatars/${userId}/${avatar}.${format}${size ? `?size=${size}` : ""}`;
  },
  UserBanner: (banner, dynamic, size, format = "png", userId) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/banners/${userId}/${banner}.${format}${size ? `?size=${size}` : ""}`;
  },
  GuildMemberBanner: (banner, dynamic, size, format = "png", memberId, guildId) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/guilds/${guildId}/users/${memberId}/banners/${banner}.${format}${size ? `?size=${size}` : ""}`;
  },
  TeamIcon: (icon, dynamic, size, format = "png", teamId) => {
    if (dynamic) format = icon.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/team-icons/${teamId}/${icon}.${format}${size ? `?size=${size}` : ""}`;
  },
  ApplicationIcon: (icon, dynamic, size, format = "png", applicationId) => {
    if (dynamic) format = icon.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/app-icons/${applicationId}/${icon}.${format}${size ? `?size=${size}` : ""}`;
  },
  ChannelBanner: (banner, dynamic, size, format = "png", channelId) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/channel-banners/${channelId}/${banner}.${format}${size ? `?size=${size}` : ""}`;
  },
  GuildIcon: (icon, dynamic, size, format = "png", guildId) => {
    if (dynamic) format = icon.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/icons/${guildId}/${icon}.${format}${size ? `?size=${size}` : ""}`;
  },
  GuildBanner: (banner, dynamic, size, format = "png", guildId) => {
    if (dynamic) format = banner.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/banners/${guildId}/${banner}.${format}${size ? `?size=${size}` : ""}`;
  },
  GuildSplash: (splash, dynamic, size, format = "png", guildId) => {
    if (dynamic) format = splash.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/splashes/${guildId}/${splash}.${format}${size ? `?size=${size}` : ""}`;
  },
  GuildDiscoverySplash: (discoverySplash, dynamic, size, format = "png", guildId) => {
    if (dynamic) format = discoverySplash.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/discovery-splashes/${guildId}/${discoverySplash}.${format}${size ? `?size=${size}` : ""}`;
  },
  RoleIcon: (roleIcon, dynamic, size, format = "png", roleId) => {
    if (dynamic) format = roleIcon.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/role-icons/${roleId}/${roleIcon}.${format}${size ? `?size=${size}` : ""}`;
  },
  GuildMemberAvatar: (avatar, dynamic, size, format = "png", memberId, guildId) => {
    if (dynamic) format = avatar.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/guilds/${guildId}/users/${memberId}/avatars/${avatar}.${format}${size ? `?size=${size}` : ""}`;
  },
  GuildScheduledEventCoverImage: (coverImage, dynamic, size, format = "png", eventId) => {
    if (dynamic) format = coverImage.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/guild-events/${eventId}/${coverImage}.${format}${size ? `?size=${size}` : ""}`;
  },
  StickerPackBanner: (bannerId, size, format = "png") => {
    return `${this.CDN.root}/app-assets/710982414301790216/store/${bannerId}.${format}${size ? `?size=${size}` : ""}`;
  },
  StickerImage: (stickerId, size, format = "png") => {
    return `${this.CDN.root}/stickers/${stickerId}.${format}${size ? `?size=${size}` : ""}`;
  },
  WebhookAvatar: (avatar, dynamic, size, format = "png", webhookId) => {
    if (dynamic) format = avatar.startsWith("a_") ? "gif" : format;
    return `${this.CDN.root}/avatars/${webhookId}/${avatar}.${format}${size ? `?size=${size}` : ""}`;
  },
  UserAvatarDecoration: (decoration, size, format = "png", userId) => {
    return `${this.CDN.root}/avatar-decorations/${userId}/${decoration}.${format}${size ? `?size=${size}` : ""}`;
  },
  EmojiURL: (emojiId, dynamic, size, format = "png", quality) => {
    if (dynamic) format = "gif" ?? format;
    return `${this.CDN.root}/emojis/${emojiId}.${format}${size ? `?size=${size}` : ""}${quality ? `&quality=${quality}` : ""}`;
  },
};
