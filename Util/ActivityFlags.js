const Bitfield = require("./Bitfield");
class ActivityFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ActivityFlags.FLAGS = {
  INSTANCE: 1n << 0n,
  JOIN: 1n << 1n,
  SPECTATE: 1n << 2n,
  JOIN_REQUEST: 1n << 3n,
  SYNC: 1n << 4n,
  PLAY: 1n << 5n,
  PARTY_PRIVACY_FRIENDS: 1n << 6n,
  PARTY_PRIVACY_VOICE_CHANNEL: 1n << 7n,
  EMBEDDED: 1n << 8n,
};

ActivityFlags.DEFAULT = 0n;

ActivityFlags.ALL = Object.values(ActivityFlags.FLAGS).reduce(
  (a, b) => a | b,
  ActivityFlags.DEFAULT
);

module.exports = ActivityFlags;
