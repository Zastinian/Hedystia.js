const Bitfield = require("./Bitfield");

/**
 * Represents a bitfield for Discord message flags.
 * @class
 * @extends Bitfield
 */
class MessageFlags extends Bitfield {
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
 * Represents the different flags that can be applied to a message.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
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
  Suppress_Notifications: 1n << 12n,
};

/**
 * Sets the default value for the MessageFlags to 0n.
 * @readonly
 * @type {bigint}
 */
MessageFlags.Default = 0n;

/**
 * Combines all the values of the MessageFlags.Flags object using a bitwise OR operation
 * and assigns the result to the MessageFlags.All property.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of Intents.All.
 */
MessageFlags.All = Object.values(MessageFlags.Flags).reduce((a, b) => a | b, MessageFlags.Default);

module.exports = MessageFlags;
