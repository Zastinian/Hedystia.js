const Bitfield = require("./Bitfield");
class ApplicationFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ApplicationFlags.FLAGS = {
  EMBEDDED_RELEASED: 1n << 1n,
  MANAGED_EMOJI: 1n << 2n,
  GROUP_DM_CREATE: 1n << 4n,
  GATEWAY_PRESENCE: 1n << 12n,
  GATEWAY_PRESENCE_LIMITED: 1n << 13n,
  GATEWAY_GUILD_MEMBERS: 1n << 14n,
  GATEWAY_GUILD_MEMBERS_LIMITED: 1n << 15n,
  VERIFICATION_PENDING_GUILD_LIMIT: 1n << 16n,
  EMBEDDED: 1n << 17n,
  GATEWAY_MESSAGE_CONTENT: 1n << 18n,
  GATEWAY_MESSAGE_CONTENT_LIMITED: 1n << 19n,
  EMBEDDED_FIRST_PARTY: 1n << 20n,
};

ApplicationFlags.DEFAULT = 0n;

ApplicationFlags.ALL = Object.values(ApplicationFlags.FLAGS).reduce(
  (a, b) => a | b,
  ApplicationFlags.DEFAULT
);

module.exports = ApplicationFlags;
