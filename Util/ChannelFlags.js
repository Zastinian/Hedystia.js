const Bitfield = require("./Bitfield");

class ChannelFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ChannelFlags.Default = 0n;
ChannelFlags.Flags = {
  Guild_Feed_Removed: 1n << 0n,
  Pinned: 1n << 1n,
  Active_Channels_Removed: 1n << 2n,
  Require_Tag: 1n << 4n,
};
ChannelFlags.All = Object.values(ChannelFlags.Flags).reduce((a, b) => a | b, ChannelFlags.Default);

module.exports = ChannelFlags;
