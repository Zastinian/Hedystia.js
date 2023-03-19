const Bitfield = require("./Bitfield");

/**
 * A bitfield that represents flags for a guild member.
 * @extends {Bitfield}
 */
class GuildMemberFlags extends Bitfield {
  /**
   * @param {...string} bit - The bits to set
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * The flags for a guild member.
 * @readonly
 * @enum {bigint}
 */
GuildMemberFlags.Flags = {
  Did_Rejoin: 1n << 0n,
};

/**
 * The default value for a guild member's flags.
 * @type {bigint}
 * @readonly
 */
GuildMemberFlags.Default = 0n;
/**
 * The value of all guild member flags combined.
 * @type {bigint}
 * @readonly
 */
GuildMemberFlags.All = Object.values(GuildMemberFlags.Flags).reduce((a, b) => a | b, GuildMemberFlags.Default);

module.exports = GuildMemberFlags;
