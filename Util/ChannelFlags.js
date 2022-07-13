const Bitfield = require("./Bitfield");

class ChannelFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ChannelFlags.DEFAULT = 0n;
ChannelFlags.FLAGS = {
  GUILD_FEED_REMOVED: 1n << 0n,
  PINNED: 1n << 1n,
  ACTIVE_CHANNELS_REMOVED: 1n << 2n,
  REQUIRE_TAG: 1n << 4n,
};
ChannelFlags.ALL = Object.values(ChannelFlags.FLAGS).reduce(
  (a, b) => a | b,
  ChannelFlags.DEFAULT
);

module.exports = ChannelFlags;
