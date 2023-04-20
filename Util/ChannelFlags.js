const Bitfield = require("./Bitfield");

/**
 * Class representing bitfields of Channel flags.
 * @extends Bitfield
 */
class ChannelFlags {
  /**
   * Creates a new instance of the ChannelFlags class.
   * @param {...number} bit - Bit numbers to include in the Bitfield.
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * Default value for the ChannelFlags class.
 * @type {bigint}
 */
ChannelFlags.Default = 0n;

/**
 * Channel flags and their corresponding bit numbers.
 * @type {Object<string, bigint>}
 * @readonly
 * @enum {bigint}
 */
ChannelFlags.Flags = {
  Pinned: 1n << 1n,
  Require_Tag: 1n << 4n,
};

/**
 * Bitwise OR operation on all flags to get a bitfield with all flags.
 * @type {bigint}
 */
ChannelFlags.All = Object.values(ChannelFlags.Flags).reduce((a, b) => a | b, ChannelFlags.Default);

module.exports = ChannelFlags;
