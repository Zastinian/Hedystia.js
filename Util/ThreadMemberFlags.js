const Bitfield = require("./Bitfield");

/**
 * A bitfield of flags for a thread member.
 * @extends {Bitfield}
 */
class ThreadMemberFlags {
  /**
   * @param {...bigint} bit - Bit(s) to set in the bitfield.
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * Thread member flags.
 * @type {Object<string, bigint>}
 * @readonly
 * @enum {bigint}
 */
ThreadMemberFlags.Flags = {
  Has_Interacted: 1n << 0n,
  All_Messages: 1n << 1n,
  Only_Mentions: 1n << 2n,
  No_Messages: 1n << 3n,
};

/**
 * Default bit value for a thread member.
 * @type {bigint}
 * @static
 */
ThreadMemberFlags.Default = 0n;

/**
 * Bitfield representing all available thread member flags.
 * @type {bigint}
 * @static
 */
ThreadMemberFlags.All = Object.values(ThreadMemberFlags.Flags).reduce((a, b) => a | b, ThreadMemberFlags.Default);

module.exports = ThreadMemberFlags;
