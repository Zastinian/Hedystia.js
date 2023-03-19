const Bitfield = require("./Bitfield");

/**
 * Represents the possible flags for a Role
 * @extends {Bitfield}
 */
class RoleFlags extends Bitfield {
  /**
   * @param {...bigint} bit - Bit positions to enable
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * @typedef {Object} RoleFlagsResolvable
 * @property {string} [name] The name of the flag
 * @property {bigint|number} [bit] The bit of the flag
 */

/**
 * The flags for a role
 * @enum {bigint}
 */
RoleFlags.Flags = {
  In_Prompt: 1n << 0n,
};

/**
 * The default bit(s) for a role
 * @type {bigint}
 */
RoleFlags.Default = 0n;

/**
 * The total bit(s) of all the flags combined
 * @type {bigint}
 */
RoleFlags.All = Object.values(RoleFlags.Flags).reduce((a, b) => a | b, RoleFlags.Default);

module.exports = RoleFlags;
