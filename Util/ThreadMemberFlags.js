const Bitfield = require("./Bitfield");

class ThreadMemberFlags extends Bitfield {
  constructor(...bit) {
    super(bit);
  }
}

ThreadMemberFlags.FLAGS = {
  HAS_INTERACTED: 1n << 0n,
  ALL_MESSAGES: 1n << 1n,
  ONLY_MENTIONS: 1n << 2n,
  NO_MESSAGES: 1n << 3n,
};

ThreadMemberFlags.DEFAULT = 0n;

ThreadMemberFlags.ALL = Object.values(ThreadMemberFlags.FLAGS).reduce(
  (a, b) => a | b,
  ThreadMemberFlags.DEFAULT
);

module.exports = ThreadMemberFlags;
