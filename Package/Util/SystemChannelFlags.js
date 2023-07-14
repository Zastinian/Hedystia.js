const Bitfield = require("./Bitfield");

/**
 * A bitfield that represents the system channel flags.
 * @class
 * @extends {Bitfield}
 */
class SystemChannelFlags extends Bitfield {
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
 * Represents the flags for the system channel.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
 */
SystemChannelFlags.Flags = {
  Suppress_Join_Notifications: 1n << 0n,
  Suppress_Premium_Subscriptions: 1n << 1n,
  Suppress_Guild_Reminder_Notifications: 1n << 2n,
  Suppress_Join_Notification_Replies: 1n << 3n,
  Suppress_Role_Subscription_Purchase_Notifications: 1n << 4n,
  Suppress_Role_Subscription_Purchase_Notification_Replies: 1n << 5n,
};

/**
 * Sets the default value for the SystemChannelFlags property.
 * @readonly
 * @type {bigint}
 */
SystemChannelFlags.Default = 0n;

/**
 * Calculates the value of the SystemChannelFlags.All property by performing a bitwise OR operation
 * on all the values of the SystemChannelFlags.Flags object.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of SystemChannelFlags.All.
 */
SystemChannelFlags.All = Object.values(SystemChannelFlags.Flags).reduce((a, b) => a | b, SystemChannelFlags.Default);

module.exports = SystemChannelFlags;
