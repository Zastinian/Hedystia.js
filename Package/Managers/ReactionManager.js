const MessageReaction = require("../Structures/MessageReaction");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/**
 * A class representing a reaction manager for a specific message in a channel.
 * @class
 * @extends Base
 * @param {Array} reactions - An array of reaction objects.
 * @param {string} messageId - The ID of the message.
 * @param {string} channelId - The ID of the channel.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class ReactionManager extends Base {
  /**
   * Constructs a new instance of the ReactionCollector class.
   * @constructor
   * @param {Array} reactions - An array of reaction objects.
   * @param {string} messageId - The ID of the message that the reactions are collected from.
   * @param {string} channelId - The ID of the channel that the message belongs to.
   * @param {string} guildId - The ID of the guild that the message belongs to.
   * @param {Client} client - The Discord client instance.
   */
  constructor(reactions, messageId, channelId, guildId, client) {
    super(client);

    this.channelId = channelId;
    this.guildId = guildId;
    this.messageId = messageId;
    Object.defineProperty(this, "reactions", {
      value: new RaidenCol(reactions?.map((o) => [o.emoji?.id ?? o.emoji?.name, this.resolve(o)])),
    });
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Resolves a reaction object and returns a new MessageReaction instance.
   * @param {string | MessageReaction} reaction - The reaction object to resolve. Can be either a string or a MessageReaction instance.
   * @returns {MessageReaction} A new MessageReaction instance with the resolved reaction object.
   */
  resolve(reaction) {
    return new MessageReaction(
      typeof reaction === "string"
        ? {
            partial: true,
            emoji: reaction.emoji,
          }
        : reaction,
      this.guildId,
      this.channelId,
      this.messageId,
      this.client
    );
  }

  /**
   * Removes all reactions from a specific message in a channel.
   * @returns {void}
   */
  async removeAll() {
    await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/messages/${this.messageId}/reactions`);
    return;
  }

  /**
   * Get the cache of reactions.
   * @returns The cache of reactions.
   */
  get cache() {
    return this.reactions;
  }
}

module.exports = ReactionManager;
