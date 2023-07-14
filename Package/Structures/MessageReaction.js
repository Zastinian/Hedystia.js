const ReactionUserManager = require("../Managers/ReactionUserManager");
const EmojiResolver = require("../Util/EmojiResolver");
const Base = require("../Base/base");
const Emoji = require("./Emoji");
/**
 * Represents a message reaction.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the message reaction.
 * @param {string} guildId - The ID of the guild the reaction belongs to.
 * @param {string} channelId - The ID of the channel the reaction belongs to.
 * @param {string} messageId - The ID of the message the reaction belongs to.
 * @param {Client} client - The client instance.
 */
class MessageReaction extends Base {
  /**
   * Constructs a Reaction object.
   * @constructor
   * @param {Object} [data] - The data object containing information about the reaction.
   * @param {string} guildId - The ID of the guild where the reaction occurred.
   * @param {string} channelId - The ID of the channel where the reaction occurred.
   * @param {string} messageId - The ID of the message where the reaction occurred.
   * @param {Client} client - The client instance.
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
   * Fetches a message from a channel and retrieves a reaction associated with it.
   * @returns {Promise<Reaction | null>} A Promise that resolves to the Reaction object if found, or null if not found.
   */
  async fetch() {
    const message = await this.channel.messages.fetch(this.message);
    const reaction = message.reactions.cache.get(this.emoji?.id ?? this.emoji?.name);
    return reaction ?? null;
  }

  /**
   * Removes the reaction associated with this message.
   * @async
   * @returns {Promise<this>} - A promise that resolves to the current instance of the class.
   */
  async remove() {
    const emoji = EmojiResolver.transformEmoji(this.emoji, this.client);
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/messages/${this.message?.id}/reactions/${encodeURIComponent(emoji)}`
    );
    return this;
  }

  /**
   * Retrieves the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }

  /**
   * Get the guild associated with this channel.
   * @returns The guild object associated with this channel.
   */
  get guild() {
    return this.client.guilds._add(this.channelId);
  }

  /**
   * Adds a user to the list of users.
   * @param {User} user - The user to add.
   * @returns {void}
   */
  _addUsers(user) {
    if (this.partial) return;
    if (this.client.user.id === user.id) this.me = true;
    this.count++;
  }

  /**
   * Removes a user from the list of users.
   * @param {User} user - The user to remove.
   * @returns {void}
   */
  _removeUsers(user) {
    if (this.partial) return;
    if (this.client.user.id === user.id) this.me = true;
    this.count--;
  }
}

module.exports = MessageReaction;
