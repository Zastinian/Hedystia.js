const Bitfield = require("./Bitfield");

/**
 * Represents a set of channel flags using a bitfield.
 * @class
 * @extends Bitfield
 * @constructor
 * @param {...bigint} bit - The bits to set in the bitfield.
 */
class ChannelFlags extends Bitfield {
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
 * Channel flags and their corresponding bit numbers.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
 */
ChannelFlags.Flags = {
  Pinned: 1n << 1n,
  Require_Tag: 1n << 4n,
};

/**
 * Sets the default value for the ChannelFlags property to 0n.
 * @param {bigint} Default - The default bit value to set.
 */
ChannelFlags.Default = 0n;

/**
 * Calculates the value of ChannelFlags.All by performing a bitwise OR operation on all the values
 * in the ChannelFlags.Flags object.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of ChannelFlags.All.
 */
ChannelFlags.All = Object.values(ChannelFlags.Flags).reduce((a, b) => a | b, ChannelFlags.Default);

module.exports = ChannelFlags;
