const Bitfield = require("./Bitfield");

/**
 * Represents a set of activity flags using a bitfield.
 * @class
 * @extends Bitfield
 * @constructor
 * @param {...bigint} bit - The bits to set in the bitfield.
 */
class ActivityFlags extends Bitfield {
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
 * Represents the available flags for activity settings.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
 */
ActivityFlags.Flags = {
  Instance: 1n << 0n,
  Join: 1n << 1n,
  Spectate: 1n << 2n,
  Join_Request: 1n << 3n,
  Sync: 1n << 4n,
  Play: 1n << 5n,
  Party_Privacy_Friends: 1n << 6n,
  Party_Privacy_Voice_Channel: 1n << 7n,
  Embedded: 1n << 8n,
};

/**
 * Sets the default value for the ActivityFlags to 0n.
 * @param {bigint} Default - The default bit value to set.
 */
ActivityFlags.Default = 0n;

/**
 * Calculates the value of the ActivityFlags.All by performing a bitwise OR operation
 * on all the values of the ActivityFlags.Flags.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of ActivityFlags.All.
 */
ActivityFlags.All = Object.values(ActivityFlags.Flags).reduce((a, b) => a | b, ActivityFlags.Default);

module.exports = ActivityFlags;
