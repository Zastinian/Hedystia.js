const Bitfield = require("./Bitfield");

/**
 * A bitfield that represents flags for a guild member.
 * @class
 * @extends {Bitfield}
 */
class GuildMemberFlags extends Bitfield {
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
 * Represents the flags associated with a guild member.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
 */
GuildMemberFlags.Flags = {
  Did_Rejoin: 1n << 0n,
  Completed_Onboarding: 1n << 1n,
  Bypasses_Verification: 1n << 2n,
  Started_Onboarding: 1n << 3n,
};

/**
 * Sets the default value for the GuildMemberFlags to 0n.
 * @param {bigint} Default - The default bit value to set.
 */
GuildMemberFlags.Default = 0n;

/**
 * Calculates the bitwise OR of all the values in the GuildMemberFlags.Flags object
 * and assigns the result to the GuildMemberFlags.All property.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of GuildMemberFlags.All.
 */
GuildMemberFlags.All = Object.values(GuildMemberFlags.Flags).reduce((a, b) => a | b, GuildMemberFlags.Default);

module.exports = GuildMemberFlags;
