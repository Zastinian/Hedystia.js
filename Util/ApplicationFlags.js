/**
 * A bitfield for application flags.
 * @extends {Bitfield}
 */
class ApplicationFlags extends Bitfield {
  /**
   * Creates a new ApplicationFlags instance.
   * @param {...number} bit - Bit(s) to set in the bitfield
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * Application flag bitfields.
 * @readonly
 * @enum {number}
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
 * Default application flag bitfield.
 * @type {number}
 */
ApplicationFlags.Default = 0n;

/**
 * All application flag bitfields.
 * @type {number}
 */
ApplicationFlags.All = Object.values(ApplicationFlags.Flags).reduce((a, b) => a | b, ApplicationFlags.Default);

module.exports = ApplicationFlags;
