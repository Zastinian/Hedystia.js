const Bitfield = require("./Bitfield");

class UserFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

UserFlags.Flags = {
  Staff: 1n << 0n,
  Partner: 1n << 1n,
  Hypesquad: 1n << 2n,
  Bug_Hunter_Level_1: 1n << 3n,
  Hypesquad_Online_House_1: 1n << 6n,
  Hypesquad_Online_House_2: 1n << 7n,
  Hypesquad_Online_House_3: 1n << 8n,
  Premium_Early_Supporter: 1n << 9n,
  Team_Pseudo_User: 1n << 10n,
  Bug_Hunter_Level_2: 1n << 14n,
  Verified_Bot: 1n << 16n,
  Verified_Developer: 1n << 17n,
  Certified_Moderator: 1n << 18n,
  Bot_Http_Interactions: 1n << 19n,
  Spammer: 1n << 20n,
  Disable_Premium: 1n << 21n,
  Mfa_Sms: 1n << 4n,
  Premium_Promo_Dismissed: 1n << 5n,
  Has_Unread_Urgent_Messages: 1n << 13n,
  Quarantined: 1n << 44n,
};

UserFlags.Default = 0n;

UserFlags.All = Object.values(UserFlags.Flags).reduce((a, b) => a | b, UserFlags.Default);

module.exports = UserFlags;
