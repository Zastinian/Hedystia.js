const Bitfield = require("./Bitfield");

/**
 * Represents a set of application flags using a bitfield.
 * @class
 * @extends Bitfield
 * @constructor
 * @param {...bigint} bit - The bits to set in the bitfield.
 */
class ApplicationFlags extends Bitfield {
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
 * Represents the available application flags.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
 */
ApplicationFlags.Flags = {
  Gateway_Presence: 1n << 12n,
  Gateway_Presence_Limited: 1n << 13n,
  Gateway_Guild_Members: 1n << 14n,
  Gateway_Guild_Members_Limited: 1n << 15n,
  Verification_Pending_Guild_Limit: 1n << 16n,
  Embedded: 1n << 17n,
  Gateway_Message_Content: 1n << 18n,
  Gateway_Message_Content_Limited: 1n << 19n,
  Application_Command_Badge: 1n << 23n,
};

/**
 * Sets the default value for the ApplicationFlags to 0n.
 * @param {bigint} Default - The default bit value to set.
 */
ApplicationFlags.Default = 0n;

/**
 * Combines all the values of the ApplicationFlags.Flags object using a bitwise OR operation
 * and assigns the result to the ApplicationFlags.All property.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of ApplicationFlags.All.
 */
ApplicationFlags.All = Object.values(ApplicationFlags.Flags).reduce((a, b) => a | b, ApplicationFlags.Default);

module.exports = ApplicationFlags;
