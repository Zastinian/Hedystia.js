const Bitfield = require("./Bitfield");

/**
 * Represents the possible flags for a Role
 * @class
 * @extends {Bitfield}
 */
class RoleFlags extends Bitfield {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {...any} bit - The arguments to pass to the superclass constructor.
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * Represents the available role flags.
 * @type {bigint}
 * @readonly
 * @enum {bigint}
 */
RoleFlags.Flags = {
  In_Prompt: 1n << 0n,
};

/**
 * Sets the RoleFlags.Default value to 0n.
 * @readonly
 * @type {bigint}
 */
RoleFlags.Default = 0n;

/**
 * Calculates the bitwise OR of all the values in the RoleFlags.Flags object and assigns
 * the result to the RoleFlags.All property.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of RoleFlags.All.
 */
RoleFlags.All = Object.values(RoleFlags.Flags).reduce((a, b) => a | b, RoleFlags.Default);

module.exports = RoleFlags;
