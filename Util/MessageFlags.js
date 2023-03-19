const Bitfield = require("./Bitfield");

/**
 * Represents a bitfield for Discord message flags.
 * @extends Bitfield
 */
class MessageFlags extends Bitfield {
  /**
   * @param {...number} bit Positions to enable in the bitfield.
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * An object mapping flag names to their corresponding bit positions.
 * @type {Object<string, BigInt>}
 * @readonly
 * @static
 */
MessageFlags.Flags = {
  Crossposted: 1n << 0n,
  Is_Crosspost: 1n << 1n,
  Suppress_Embeds: 1n << 2n,
  Source_Message_Deleted: 1n << 3n,
  Urgent: 1n << 4n,
  Has_Thread: 1n << 5n,
  Ephemeral: 1n << 6n,
  Loading: 1n << 7n,
  Failed_To_Mention_Some_Roles_In_Thread: 1n << 8n,
  Should_Show_Link_Not_Discord_Warning: 1n << 10n,
};

/**
 * The default bitfield value for a new instance.
 * @type {BigInt}
 * @readonly
 * @static
 */
MessageFlags.Default = 0n;

/**
 * The bitfield value with all bits set to 1.
 * @type {BigInt}
 * @readonly
 * @static
 */
MessageFlags.All = Object.values(MessageFlags.Flags).reduce((a, b) => a | b, MessageFlags.Default);

module.exports = MessageFlags;
