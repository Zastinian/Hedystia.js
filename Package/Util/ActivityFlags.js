const Bitfield = require("./Bitfield");

/**
 * Represents a set of flags that can be used to represent various activity options.
 * @extends Bitfield
 */
class ActivityFlags extends Bitfield {
  /**
   * Creates a new ActivityFlags instance.
   * @param {...number} bit - The bits to set for this ActivityFlags instance.
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * The individual flags that can be used to represent activity options.
 * @type {Object<string, bigint>}
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
 * The default flag value.
 * @type {number}
 */
ActivityFlags.Default = 0n;

/**
 * All available flag values.
 * @type {number}
 */
ActivityFlags.All = Object.values(ActivityFlags.Flags).reduce((a, b) => a | b, ActivityFlags.Default);

module.exports = ActivityFlags;
