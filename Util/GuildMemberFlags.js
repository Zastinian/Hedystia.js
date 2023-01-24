const Bitfield = require("./Bitfield");

class GuildMemberFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

GuildMemberFlags.Flags = {
  Did_Rejoin: 1n << 0n,
};

GuildMemberFlags.Default = 0n;
GuildMemberFlags.All = Object.values(GuildMemberFlags.Flags).reduce((a, b) => a | b, GuildMemberFlags.Default);

module.exports = GuildMemberFlags;
