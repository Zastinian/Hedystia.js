const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const Message = require("../Structures/Message");
const MessagePayload = require("../Util/MessagePayload");
const EmojiResolver = require("../Util/EmojiResolver");
/**
 * Represents a message manager for a specific guild and channel.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {string} channelId - The ID of the channel.
 * @param {Client} client - The client instance.
 */
class MessageManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {string} channelId - The ID of the channel.
   * @param {Client} client - The client object.
   */
  constructor(guildId, channelId, client) {
    super(client);
    this.guildId = guildId;
    this.channelId = channelId;
  }

  /**
   * Adds a message to the cache and returns the message object.
   * @param {string | Message} messages - The message or message ID to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild the message belongs to.
   * @param {string} [channelId=this.channelId] - The ID of the channel the message belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the message.
   * @param {boolean} [options.cache=true] - Whether to cache the message.
   * @param {boolean} [options.force=false] - Whether to force adding the message to the cache even if it
   */
  _add(messages, guildId = this.guildId, channelId = this.channelId, options = {cache: true, force: false}) {
    if (!messages) return null;
    const messageId = typeof messages === "string" ? messages : messages.id;
    let message;
    if (this.cache.has(messageId) && !options.force) {
      message = this.cache.get(messageId);
    } else {
      const newMessage = new Message(
        typeof messages === "string"
          ? {
              partial: true,
              id: messageId,
            }
          : messages,
        guildId,
        channelId,
        this.client
      );

      if (options.cache) this.cache.set(messageId, newMessage);

      message = newMessage;
    }

    return message;
  }

  /**
   * Sends a message to a specified channel.
   * @param {string | Channel} [channel=this.channelId] - The channel to send the message to. Can be either a channel ID or a Channel object.
   * @param {object} [options] - Additional options for the message.
   * @returns {Promise<Message>} A promise that resolves with the sent message.
   */
  async send(channel = this.channelId, options = {}) {
    const body = await MessagePayload.create(options);
    const channelId = typeof channel === "string" ? channel : channel.id;
    const message = await this.client.api.post(`${this.client.root}/channels/${channelId}/messages`, {body});
    return this._add(message);
  }

  /**
   * Bulk deletes messages in a channel.
   * @param {string | Channel} [channel=this.channelId] - The channel ID or Channel object where the messages should be deleted.
   * @param {Array<Message> | Map<string, Message> | number} [message=[]] - The messages to be deleted. Can be an array of Message objects, a Map of Message objects, or a number representing the number of messages to fetch and delete.
   * @param {string} [reason] - The reason for deleting the messages.
   * @returns {Promise<Array<[string, Message]>>} - A promise that resolves to an array of deleted message IDs and their corresponding Message objects.
   * @throws {RangeError}
   */
  async bulkDelete(channel = this.channelId, message = [], reason) {
    const channelId = typeof channel === "string" ? channel : channel.id;
    if (!channelId) throw new RangeError(`Channel not specified!`);
    if (message instanceof Map) return this.bulkDelete(channel, [...message.values()]);
    if (typeof message === "number") {
      const messages = await this.fetch({limit: message});
      return this.bulkDelete(channel, messages);
    }

    if (message.length <= 0) throw new RangeError(`Please specify the messages to be deleted in bulk.`);
    const body = {
      messages: message.map((o) => (typeof o === "string" ? o : o.id)),
    };
    await this.client.api.post(`${this.client.root}/channels/${channelId}/messages/bulk-delete`, {
      body,
      reason,
    });
    return new this.cache.constructor(message.map((o) => [o.id ?? o, this._add(o, this.guildId, channelId, {cache: false})]));
  }

  /**
   * Deletes a message from the channel.
   * @param {string | Message} message - The message to delete. Can be either the message ID or the message object itself.
   * @param {string} reason - The reason for deleting the message.
   * @returns {Promise<Message>} - A promise that resolves to the deleted message object.
   */
  async delete(message, reason) {
    const messageId = typeof message === "string" ? message : message.id;
    const deletedMessage = this._add(message, this.guildId, this.channelId);
    message = await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/messages/${messageId}`, {reason});
    return deletedMessage;
  }

  /**
   * Edits a message with the given options.
   * @param {string | Message} message - The message or message ID to edit.
   * @param {Object} options - The options to update the message with.
   * @returns {Promise<Message>} A promise that resolves with the edited message.
   */
  async edit(message, options) {
    const messageId = typeof message === "string" ? message : message.id;
    const body = await MessagePayload.create(options);
    message = await this.client.api.patch(`${this.client.root}/channels/${this.channelId}/messages/${messageId}`, {body});
    return this._add(message);
  }

  /**
   * Fetches a message or a list of messages from the server.
   * @param {string | object} message - The ID of the message to fetch or an object containing options for fetching messages.
   * @param {object} [options] - Additional options for fetching messages.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched messages.
   * @param {boolean} [options.force=false] - Whether to force fetch the messages even if they are already cached.
   * @returns {Promise<Message | Map<string, Message>>} - A single message object if a message ID is provided, or a map of message IDs to message objects if options are provided.
   */
  async fetch(message, options) {
    if (typeof message?.id !== "undefined" || typeof message === "string") return this._fetchId(message, options?.cache, options?.force);
    if (typeof message === "object" && !options) options = message;
    const {cache = true, force = false} = options ?? {};
    const query = MessageManager.transformOptions(options);
    message = await this.client.api.get(`${this.client.root}/channels/${this.channelId}/messages`, {query});
    return new this.cache.constructor(message.map((o) => [o.id, this._add(o, o.guild_id, this.channelId, {cache, force})]));
  }

  /**
   * Fetches a message by its ID from the channel.
   * @param {string | object} message - The ID of the message or the message object itself.
   * @param {boolean} [cache=true] - Whether to cache the fetched message.
   * @param {boolean} [force=false] - Whether to force fetch the message even if it is already cached.
   * @returns {Promise<object>} - A promise that resolves to the fetched message object.
   */
  async _fetchId(message, cache = true, force = false) {
    const messageId = typeof message === "string" ? message : message.id;
    if (this.cache.has(messageId) && force) return this.cache.get(messageId);
    message = await this.client.api.get(`${this.client.root}/channels/${this.channelId}/messages/${messageId}`);
    return this._add(message, message.guild_id, this.channelId, {
      cache,
      force: true,
    });
  }

  /**
   * Crossposts a message to a specified channel.
   * @param {string | Channel} channel - The channel to crosspost the message to.
   * @param {string | Message} message - The message to crosspost.
   * @returns {Promise<Message>} - A promise that resolves to the crossposted message.
   */
  async crosspost(channel, message) {
    const messageId = typeof message === "string" ? message : message?.id;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    message = await this.client.api.post(`${this.client.root}/channels/${channelId}/messages/${messageId}/crosspost`);
    return this._add(message);
  }

  /**
   * Reacts to a message with the specified emoji.
   * @param {string | Message} message - The message to react to. Can be either a message ID or a Message object.
   * @param {string} emoji - The emoji to react with.
   * @returns {Promise<void>} - A promise that resolves when the reaction is successfully added.
   */
  async react(message, emoji) {
    const messageId = typeof message === "string" ? message : message?.id;
    const parseEmoji = EmojiResolver.transformEmoji(emoji, this.client);
    await this.client.api.put(`${this.client.root}/channels/${this.channelId}/messages/${messageId}/reactions/${encodeURIComponent(parseEmoji)}/@me`);
    return this._add(message);
  }

  /**
   * Retrieves the pinned messages in the current channel.
   * @returns {Promise<Cache>} A Promise that resolves to a Cache object containing the pinned messages.
   */
  async pins() {
    const channelPins = await this.client.api.get(`${this.client.root}/channels/${this.channelId}/pins`);
    return new this.cache.constructor(channelPins?.map((o) => [o.id, this._add(o)]));
  }

  /**
   * Unpins a message from the channel.
   * @param {string | Message} message - The message or message ID to unpin.
   * @param {string} reason - The reason for unpinning the message.
   * @returns {Promise<void>} - A promise that resolves when the message is successfully unpinned.
   */
  async unpin(message, reason) {
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/pins/${messageId}`, {reason});
    return this._add(message);
  }

  /**
   * Pins a message in the channel.
   * @param {string | Message} message - The message or message ID to pin.
   * @param {string} reason - The reason for pinning the message.
   * @returns {Promise<void>} - A promise that resolves when the message is pinned.
   */
  async pin(message, reason) {
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.put(`${this.client.root}/channels/${this.channelId}/pins/${messageId}`, {reason});
    return this._add(message);
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the given options object into a new object with specific properties.
   * @param {Object} o - The options object to transform.
   * @returns {Object | null} - The transformed object or null if the input is null.
   */
  static transformOptions(o = {}) {
    if (o === null) return null;
    return {
      limit: o.limit ?? 50,
      around: typeof o.around === "string" ? o.around : o.around?.id ?? undefined,
      before: typeof o.before === "string" ? o.before : o.before?.id ?? undefined,
      after: typeof o.after === "string" ? o.after : o.after?.id ?? undefined,
    };
  }
}

module.exports = MessageManager;
