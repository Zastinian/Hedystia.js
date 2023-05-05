const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const Message = require("../Structures/Message");
const MessagePayload = require("../Util/MessagePayload");
const EmojiResolver = require("../Util/EmojiResolver");
/* It's a class that manages messages in a channel */
class MessageManager extends Base {
  /**
   * The constructor function is a function that is called when an object is created from a class.
   * @param guildId - The ID of the guild you want to send the message to.
   * @param channelId - The channel ID of the channel you want to send the message to.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, channelId, client) {
    super(client);
    this.guildId = guildId;
    this.channelId = channelId;
  }

  /**
   * _add(messages, guildId = this.guildId, channelId = this.channelId, options = {cache: true, force:
   * false})
   * @param messages - The message object
   * @param [guildId] - The guild ID of the message
   * @param [channelId] - The channel ID of the channel the message is in.
   * @param [options] - cache = true, force = false
   * @returns The message object
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
   * It sends a message to a channel
   * @param [channel] - The channel to send the message to.
   * @param [options] - The options for the message.
   * @returns A message object.
   */
  async send(channel = this.channelId, options = {}) {
    const body = await MessagePayload.create(options);
    const channelId = typeof channel === "string" ? channel : channel.id;
    const message = await this.client.api.post(`${this.client.root}/channels/${channelId}/messages`, {body});
    return this._add(message);
  }

  /**
   * It deletes messages in bulk
   * @param [channel] - The channel to delete the messages from.
   * @param [message] - The message to be deleted.
   * @param reason - The reason for the bulk delete.
   * @returns An array of messages.
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
   * It deletes a message from a channel.
   * @param message - The message to delete.
   * @param reason - The reason for the deletion.
   * @returns The deleted message.
   */
  async delete(message, reason) {
    const messageId = typeof message === "string" ? message : message.id;
    const deletedMessage = this._add(message, this.guildId, this.channelId);
    message = await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/messages/${messageId}`, {reason});
    return deletedMessage;
  }

  /**
   * It edits a message.
   * @param message - The message to edit.
   * @param options
   * @returns A message object.
   */
  async edit(message, options) {
    const messageId = typeof message === "string" ? message : message.id;
    const body = await MessagePayload.create(options);
    message = await this.client.api.patch(`${this.client.root}/channels/${this.channelId}/messages/${messageId}`, {body});
    return this._add(message);
  }

  /**
   * It fetches messages from a channel
   * @param message - The message to fetch. Can be a message object, a message ID, or a string.
   * @param options
   * @returns An array of objects.
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
   * It fetches a message from the API and adds it to the cache
   * @param message - The message object or message ID
   * @param [cache=true] - Whether or not to cache the message.
   * @param [force=false] - true
   * @returns The message object.
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
   * It takes a message and a channel and crossposts the message to the channel
   * @param channel - The channel to crosspost the message to.
   * @param message - The message to crosspost.
   * @returns The message object.
   */
  async crosspost(channel, message) {
    const messageId = typeof message === "string" ? message : message?.id;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    message = await this.client.api.post(`${this.client.root}/channels/${channelId}/messages/${messageId}/crosspost`);
    return this._add(message);
  }

  /**
   * It takes a message and an emoji and adds the emoji to the message.
   * @param message - The message to react to.
   * @param emoji - The emoji to react with.
   * @returns The message object.
   */
  async react(message, emoji) {
    const messageId = typeof message === "string" ? message : message?.id;
    const parseEmoji = EmojiResolver.transformEmoji(emoji, this.client);
    await this.client.api.put(`${this.client.root}/channels/${this.channelId}/messages/${messageId}/reactions/${encodeURIComponent(parseEmoji)}/@me`);
    return this._add(message);
  }

  /**
   * It gets the pins from the channel and returns a cache of the pins
   * @returns A new cache object.
   */
  async pins() {
    const channelPins = await this.client.api.get(`${this.client.root}/channels/${this.channelId}/pins`);
    return new this.cache.constructor(channelPins?.map((o) => [o.id, this._add(o)]));
  }

  /**
   * It deletes a message from the pinned messages list.
   * @param message - The message to unpin.
   * @param reason - The reason for the unpin.
   * @returns The message that was unpinned.
   */
  async unpin(message, reason) {
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/pins/${messageId}`, {reason});
    return this._add(message);
  }

  /**
   * This function pins a message to a channel.
   * @param message - The message to pin.
   * @param reason - The reason for pinning the message.
   * @returns The message that was pinned.
   */
  async pin(message, reason) {
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.put(`${this.client.root}/channels/${this.channelId}/pins/${messageId}`, {reason});
    return this._add(message);
  }

  /**
   * It returns the guild object if it exists, otherwise it returns null.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It returns a collection of all the elements in the document that have the same tag name as the one
   * passed to the function.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes an object with optional properties, and returns an object with the same optional
   * properties, but with the values transformed to a different type
   * @param [o] - The options object
   * @returns an object with the properties limit, around, before, and after.
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
