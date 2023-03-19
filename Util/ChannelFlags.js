/**
 * Class representing bitfields of Channel flags.
 * @extends Bitfield
 */
class ChannelFlags extends Bitfield {
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
 * @type {Object}
 * @property {bigint} Guild_Feed_Removed - Flag for guild feeds being removed.
 * @property {bigint} Pinned - Flag for pinned messages.
 * @property {bigint} Active_Channels_Removed - Flag for active channels being removed.
 * @property {bigint} Require_Tag - Flag for tags being required.
 */
ChannelFlags.Flags = {
  Guild_Feed_Removed: 1n << 0n,
  Pinned: 1n << 1n,
  Active_Channels_Removed: 1n << 2n,
  Require_Tag: 1n << 4n,
};

/**
 * Bitwise OR operation on all flags to get a bitfield with all flags.
 * @type {bigint}
 */
ChannelFlags.All = Object.values(ChannelFlags.Flags).reduce((a, b) => a | b, ChannelFlags.Default);

module.exports = ChannelFlags;
