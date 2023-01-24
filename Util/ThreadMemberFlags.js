const Bitfield = require("./Bitfield");

class ThreadMemberFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ThreadMemberFlags.Flags = {
  Has_Interacted: 1n << 0n,
  All_Messages: 1n << 1n,
  Only_Mentions: 1n << 2n,
  No_Messages: 1n << 3n,
};

ThreadMemberFlags.Default = 0n;

ThreadMemberFlags.All = Object.values(ThreadMemberFlags.Flags).reduce((a, b) => a | b, ThreadMemberFlags.Default);

module.exports = ThreadMemberFlags;
