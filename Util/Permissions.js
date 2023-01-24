const Bitfield = require("./Bitfield");
class Permissions extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

Permissions.Flags = {
  Create_Instant_Invite: 1n << 0n,
  Kick_Members: 1n << 1n,
  Ban_Members: 1n << 2n,
  Administrator: 1n << 3n,
  Manage_Channels: 1n << 4n,
  Manage_Guild: 1n << 5n,
  Add_Reactions: 1n << 6n,
  View_Audit_Log: 1n << 7n,
  Priority_Speakers: 1n << 8n,
  Stream: 1n << 9n,
  View_Channel: 1n << 10n,
  Send_Messages: 1n << 11n,
  Send_TTS_Messages: 1n << 12n,
  Manage_Messages: 1n << 13n,
  Embed_Links: 1n << 14n,
  Attach_Files: 1n << 15n,
  Read_Message_History: 1n << 16n,
  Mention_Everyone: 1n << 17n,
  Use_External_Emojis: 1n << 18n,
  View_Guild_Analitics: 1n << 19n,
  Connect: 1n << 20n,
  Speak: 1n << 21n,
  Mute_Members: 1n << 22n,
  Deafen_Members: 1n << 23n,
  Move_Members: 1n << 24n,
  Use_Vad: 1n << 25n,
  Change_Nickname: 1n << 26n,
  Manage_Nicknames: 1n << 27n,
  Manage_Roles: 1n << 28n,
  Manage_Webhooks: 1n << 29n,
  Manage_Emojis_And_Stickers: 1n << 30n,
  Use_Applications_Commands: 1n << 31n,
  Request_To_Speak: 1n << 32n,
  Manage_Events: 1n << 33n,
  Manage_Threads: 1n << 34n,
  Create_Public_Threads: 1n << 35n,
  Create_Private_Threads: 1n << 36n,
  Use_External_Stickers: 1n << 37n,
  Send_Messages_In_Threads: 1n << 38n,
  Use_Embedded_Activities: 1n << 39n,
  Moderate_Members: 1n << 40n,
  View_Creator_Monetization_Analytics: 1n << 41n,
};

Permissions.Default = 0n;

Permissions.All = Object.values(Permissions.Flags).reduce((a, b) => a | b, Permissions.Default);

module.exports = Permissions;
