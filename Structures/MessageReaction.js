const ReactionUserManager = require("../Managers/ReactionUserManager");
const EmojiResolver = require("../Util/EmojiResolver");
const Base = require("../Base/base");
const Emoji = require("./Emoji");
/**
 * It's a class that represents a reaction on a message
 * @class
 * @extends Base
 */
class MessageReaction extends Base {
  /**
   * It's a constructor for a class called Reaction.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The guild ID of the message
   * @param channelId - The channel ID of the message
   * @param messageId - The ID of the message that the reaction is on.
   * @param client - The client
   */
  constructor(data = {}, guildId, channelId, messageId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = guildId;
    this.channelId = channelId;
    this.count = data.count ?? null;
    this.me = data.me ?? null;
    this.emoji = new Emoji(data.emoji, this.guildId, this.client);
    this.message = this.channel.messages._add(data.message_id ?? messageId);
    this.users = new ReactionUserManager(this, this.channelId, this.message?.id, this.emoji, this.client);
  }

  /**
   * It fetches the message, gets the reaction, and returns the reaction
   * @returns The reaction object.
   */
  async fetch() {
    const message = await this.channel.messages.fetch(this.message);
    const reaction = message.reactions.cache.get(this.emoji?.id ?? this.emoji?.name);
    return reaction ?? null;
  }

  /**
   * It removes a reaction from a message
   * @returns The reaction object.
   */
  async remove() {
    const emoji = EmojiResolver.transformEmoji(this.emoji, this.client);
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/messages/${this.message?.id}/reactions/${encodeURIComponent(emoji)}`
    );
    return this;
  }

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }

  /**
   * It returns the guild object of the channel
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.channelId);
  }

  /**
   * @param user - The user that was added to the channel.
   * @returns the value of the if statement.
   */
  _addUsers(user) {
    if (this.partial) return;
    if (this.client.user.id === user.id) this.me = true;
    this.count++;
  }

  /**
   * @param user - The user that was removed from the voice channel.
   * @returns the value of the variable "this.me"
   */
  _removeUsers(user) {
    if (this.partial) return;
    if (this.client.user.id === user.id) this.me = true;
    this.count--;
  }
}

module.exports = MessageReaction;
