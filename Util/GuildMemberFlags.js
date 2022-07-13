const Bitfield = require("./Bitfield");

class GuildMemberFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

GuildMemberFlags.FLAGS = {
  DID_REJOIN: 1n << 0n,
};

GuildMemberFlags.DEFAULT = 0n;
GuildMemberFlags.ALL = Object.values(GuildMemberFlags.FLAGS).reduce(
  (a, b) => a | b,
  GuildMemberFlags.DEFAULT
);

module.exports = GuildMemberFlags;
