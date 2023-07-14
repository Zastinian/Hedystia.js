const Bitfield = require("./Bitfield");

/**
 * Represents a set of user flags using a bitfield.
 * @class
 * @extends Bitfield
 */
class UserFlags extends Bitfield {
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
 * An object that represents various user flags in Discord.
 * Each flag is represented as a bit in a BigInt value.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
 */
UserFlags.Flags = {
  Staff: 1n << 0n,
  Partner: 1n << 1n,
  Hypesquad: 1n << 2n,
  Bug_Hunter_Level_1: 1n << 3n,
  Hypesquad_Online_House_1: 1n << 6n,
  Hypesquad_Online_House_2: 1n << 7n,
  Hypesquad_Online_House_3: 1n << 8n,
  Premium_Early_Supporter: 1n << 9n,
  Team_Pseudo_User: 1n << 10n,
  Bug_Hunter_Level_2: 1n << 14n,
  Verified_Bot: 1n << 16n,
  Verified_Developer: 1n << 17n,
  Certified_Moderator: 1n << 18n,
  Bot_Http_Interactions: 1n << 19n,
  Active_Developer: 1n << 22n,
};

/**
 * Sets the default value for the UserFlags to 0n.
 * @readonly
 * @type {bigint}
 */
UserFlags.Default = 0n;

/**
 * Combines all the values of the UserFlags.Flags object using a bitwise OR operation
 * and assigns the result to the UserFlags.All property.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of UserFlags.All.
 */
UserFlags.All = Object.values(UserFlags.Flags).reduce((a, b) => a | b, UserFlags.Default);

module.exports = UserFlags;
