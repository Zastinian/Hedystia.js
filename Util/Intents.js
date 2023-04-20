const Bitfield = require("./Bitfield");

/**
 * Represents the intents that the bot wishes to subscribe to.
 */
class Intents {
  /**
   * Creates a new Intents bitfield.
   * @param {...number} bit - Bit(s) to set in the bitfield.
   */
  constructor(...bit) {
    super(bit);
  }
}

/**
 * The available flags for the Intents bitfield.
 * @type {Object<string, bigint>}
 * @readonly
 * @enum {bigint}
 */
Intents.Flags = {
  Guilds: 1n << 0n,
  Guild_Members: 1n << 1n,
  Guild_Moderation: 1n << 2n,
  Guild_Emojis_And_Stickers: 1n << 3n,
  Guild_Integrations: 1n << 4n,
  Guild_Webhooks: 1n << 5n,
  Guild_Invites: 1n << 6n,
  Guild_Voice_States: 1n << 7n,
  Guild_Presences: 1n << 8n,
  Guild_Messages: 1n << 9n,
  Guild_Message_Reactions: 1n << 10n,
  Guild_Message_Typing: 1n << 11n,
  Direct_Messages: 1n << 12n,
  Direct_Message_Reactions: 1n << 13n,
  Direct_Message_Typing: 1n << 14n,
  Message_Content: 1n << 15n,
  Guild_Scheduled_Events: 1n << 16n,
  Auto_Moderation_Configuration: 1n << 20n,
  Auto_Moderation_Execution: 1n << 21n,
};

/**
 * The default value for the Intents bitfield.
 * @readonly
 * @type {bigint}
 */
Intents.Default = 0n;

/**
 * The value that represents all flags in the Intents bitfield.
 * @readonly
 * @type {bigint}
 */
Intents.All = Object.values(Intents.Flags).reduce((a, b) => a | b, Intents.Default);

module.exports = Intents;
