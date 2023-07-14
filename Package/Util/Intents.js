const Bitfield = require("./Bitfield");

/**
 * Represents the intents that the bot wishes to subscribe to.
 * @class
 * @extends Bitfield
 */
class Intents extends Bitfield {
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
 * Represents the flags for different intents in Discord.
 * @type {bigint}
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
 * Sets the default value for the Intents enum to 0.
 * @readonly
 * @type {bigint}
 */
Intents.Default = 0n;

/**
 * Combines all the values of the Intents.Flags object using a bitwise OR operation
 * and assigns the result to the Intents.All property.
 * @param {bigint} All - All bit value.
 * @returns The calculated value of Intents.All.
 */
Intents.All = Object.values(Intents.Flags).reduce((a, b) => a | b, Intents.Default);

module.exports = Intents;
