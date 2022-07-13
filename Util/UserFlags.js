const Bitfield = require("./Bitfield");

class UserFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

UserFlags.FLAGS = {
  STAFF: 1n << 0n,
  PARTNER: 1n << 1n,
  HYPESQUAD: 1n << 2n,
  BUG_HUNTER_LEVEL_1: 1n << 3n,
  HYPESQUAD_ONLINE_HOUSE_1: 1n << 6n,
  HYPESQUAD_ONLINE_HOUSE_2: 1n << 7n,
  HYPESQUAD_ONLINE_HOUSE_3: 1n << 8n,
  PREMIUM_EARLY_SUPPORTER: 1n << 9n,
  TEAM_PSEUDO_USER: 1n << 10n,
  BUG_HUNTER_LEVEL_2: 1n << 14n,
  VERIFIED_BOT: 1n << 16n,
  VERIFIED_DEVELOPER: 1n << 17n,
  CERTIFIED_MODERATOR: 1n << 18n,
  BOT_HTTP_INTERACTIONS: 1n << 19n,
  SPAMMER: 1n << 20n,
  DISABLE_PREMIUM: 1n << 21n,
  MFA_SMS: 1n << 4n,
  PREMIUM_PROMO_DISMISSED: 1n << 5n,
  HAS_UNREAD_URGENT_MESSAGES: 1n << 13n,
  QUARANTINED: 1n << 44n,
};

UserFlags.DEFAULT = 0n;

UserFlags.ALL = Object.values(UserFlags.FLAGS).reduce(
  (a, b) => a | b,
  UserFlags.DEFAULT
);

module.exports = UserFlags;
