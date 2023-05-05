const MessageReaction = require("../Structures/MessageReaction");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/* It's a class that manages reactions on a message */
class ReactionManager extends Base {
  /**
   * It's a constructor for the MessageReactionManager class
   * @param reactions - The reactions of the message.
   * @param messageId - The ID of the message that the reactions are on.
   * @param channelId - The channel ID of the message
   * @param guildId - The ID of the guild the message is in.
   * @param client - The client instance
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
   * `return this.client.guilds._add(this.guildId) ?? null`
   *
   * The `??` is a nullish coalescing operator. It's a fancy way of saying "if the left side is null or
   * undefined, return the right side"
   * @returns The guild object
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It takes a reaction object and returns a MessageReaction object
   * @param reaction - The reaction to resolve. This can be a string, a MessageReaction object, or a
   * ReactionEmoji object.
   * @returns A new MessageReaction object
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
   * It removes all reactions from a message
   * @returns Nothing
   */
  async removeAll() {
    await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/messages/${this.messageId}/reactions`);
    return;
  }

  /**
   * It returns the value of the `reactions` property
   * @returns The reactions property of the object.
   */
  get cache() {
    return this.reactions;
  }
}

module.exports = ReactionManager;
