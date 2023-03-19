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
 * @property {number} Embedded_Released - The application has been embedded
 * @property {number} Managed_Emoji - The application can create emojis
 * @property {number} Group_Dm_Create - The application can create group DMs
 * @property {number} Gateway_Presence - The application can use gateway presence intents
 * @property {number} Gateway_Presence_Limited - The application can use gateway presence intents, but with lower privileged intents
 * @property {number} Gateway_Guild_Members - The application can use gateway guild members intents
 * @property {number} Gateway_Guild_Members_Limited - The application can use gateway guild members intents, but with lower privileged intents
 * @property {number} Verification_Pending_Guild_Limit - The application's guild limit is pending verification
 * @property {number} Embedded - The application is embedded
 * @property {number} Gateway_Message_Content - The application can use gateway message content intents
 * @property {number} Gateway_Message_Content_Limited - The application can use gateway message content intents, but with lower privileged intents
 * @property {number} Embedded_First_Party - The application is a first party embedded application
 */
ApplicationFlags.Flags = {
  Embedded_Released: 1n << 1n,
  Managed_Emoji: 1n << 2n,
  Group_Dm_Create: 1n << 4n,
  Gateway_Presence: 1n << 12n,
  Gateway_Presence_Limited: 1n << 13n,
  Gateway_Guild_Members: 1n << 14n,
  Gateway_Guild_Members_Limited: 1n << 15n,
  Verification_Pending_Guild_Limit: 1n << 16n,
  Embedded: 1n << 17n,
  Gateway_Message_Content: 1n << 18n,
  Gateway_Message_Content_Limited: 1n << 19n,
  Embedded_First_Party: 1n << 20n,
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
