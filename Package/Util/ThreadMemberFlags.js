const Bitfield = require("./Bitfield");

/**
 * A bitfield of flags for a thread member.
 * @class
 * @extends {Bitfield}
 */
class ThreadMemberFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...bigint} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * An object that represents the flags for a thread member.
 * @type {bigint}
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
 * Sets the default value for the ThreadMemberFlags property.
 * @readonly
 * @type {bigint}
 */
ThreadMemberFlags.Default = 0n;

/**
 * Calculates the bitwise OR of all the values in the ThreadMemberFlags.Flags object
 * and assigns the result to the ThreadMemberFlags.All property.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of ThreadMemberFlags.All.
 */
ThreadMemberFlags.All = Object.values(ThreadMemberFlags.Flags).reduce((a, b) => a | b, ThreadMemberFlags.Default);

module.exports = ThreadMemberFlags;
