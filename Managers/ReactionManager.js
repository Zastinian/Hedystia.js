const MessageReaction = require("../Structures/MessageReaction");
const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
class ReactionManager extends Base {
  constructor(reactions, messageId, channelId, guildId, client) {
    super(client);

    this.channelId = channelId;
    this.guildId = guildId;
    this.messageId = messageId;
    Object.defineProperty(this, "reactions", {
      value: new RaidenCol(
        reactions?.map((o) => [o.emoji?.id ?? o.emoji?.name, this.resolve(o)])
      ),
    });
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

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

  async removeAll() {
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/messages/${this.messageId}/reactions`
    );
    return;
  }

  get cache() {
    return this.reactions;
  }
}

module.exports = ReactionManager;
