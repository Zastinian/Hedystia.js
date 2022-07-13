const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const Message = require("../Structures/Message");
const MessagePayload = require("../Util/MessagePayload");
const EmojiResolver = require("../Util/EmojiResolver");
class MessageManager extends Base {
  constructor(guildId, channelId, client) {
    super(client);
    this.guildId = guildId;
    this.channelId = channelId;
  }

  _add(
    messages,
    guildId = this.guildId,
    channelId = this.channelId,
    options = { cache: true, force: false }
  ) {
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

  async send(channel = this.channelId, options = {}) {
    const body = await MessagePayload.create(options);
    const channelId = typeof channel === "string" ? channel : channel.id;
    const message = await this.client.api.post(
      `${this.client.root}/channels/${channelId}/messages`,
      { body }
    );
    return this._add(message);
  }

  async bulkDelete(channel = this.channelId, message = [], reason) {
    const channelId = typeof channel === "string" ? channel : channel.id;
    if (!channelId) throw new RangeError(`Channel not specified!`);
    if (message instanceof Map)
      return this.bulkDelete(channel, [...message.values()]);
    if (typeof message === "number") {
      const messages = await this.fetch({ limit: message });
      return this.bulkDelete(channel, messages);
    }

    if (message.length <= 0)
      throw new RangeError(
        `Por favor, especifique los mensajes que desea eliminar de forma masiva`
      );
    const body = {
      messages: message.map((o) => (typeof o === "string" ? o : o.id)),
    };
    await this.client.api.post(
      `${this.client.root}/channels/${channelId}/messages/bulk-delete`,
      { body, reason }
    );
    return new this.cache.constructor(
      message.map((o) => [
        o.id ?? o,
        this._add(o, this.guildId, channelId, { cache: false }),
      ])
    );
  }

  async delete(message, reason) {
    const messageId = typeof message === "string" ? message : message.id;
    const deletedMessage = this._add(message, this.guildId, this.channelId);
    message = await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/messages/${messageId}`,
      { reason }
    );
    return deletedMessage;
  }

  async edit(message, options) {
    const messageId = typeof message === "string" ? message : message.id;
    const body = await MessagePayload.create(options);
    message = await this.client.api.patch(
      `${this.client.root}/channels/${this.channelId}/messages/${messageId}`,
      { body }
    );
    return this._add(message);
  }

  async fetch(message, options) {
    if (typeof message?.id !== "undefined" || typeof message === "string")
      return this._fetchId(message, options?.cache, options?.force);
    if (typeof message === "object" && !options) options = message;
    const { cache = true, force = false } = options ?? {};
    const query = MessageManager.transformOptions(options);
    message = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/messages`,
      { query }
    );
    return new this.cache.constructor(
      message.map((o) => [
        o.id,
        this._add(o, o.guild_id, this.channelId, { cache, force }),
      ])
    );
  }

  async _fetchId(message, cache = true, force = false) {
    const messageId = typeof message === "string" ? message : message.id;
    if (this.cache.has(messageId) && force) return this.cache.get(messageId);
    message = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/messages/${messageId}`
    );
    return this._add(message, message.guild_id, this.channelId, {
      cache,
      force: true,
    });
  }

  async crosspost(channel, message) {
    const messageId = typeof message === "string" ? message : message?.id;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    message = await this.client.api.post(
      `${this.client.root}/channels/${channelId}/messages/${messageId}/crosspost`
    );
    return this._add(message);
  }

  async react(message, emoji) {
    const messageId = typeof message === "string" ? message : message?.id;
    const parseEmoji = EmojiResolver.transformEmoji(emoji, this.client);
    await this.client.api.put(
      `${this.client.root}/channels/${
        this.channelId
      }/messages/${messageId}/reactions/${encodeURIComponent(parseEmoji)}/@me`
    );
    return this._add(message);
  }

  async pins() {
    const channelPins = await this.client.api.get(
      `${this.client.root}/channels/${this.channelId}/pins`
    );
    return new this.cache.constructor(
      channelPins?.map((o) => [o.id, this._add(o)])
    );
  }

  async unpin(message, reason) {
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/pins/${messageId}`,
      { reason }
    );
    return this._add(message);
  }

  async pin(message, reason) {
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.put(
      `${this.client.root}/channels/${this.channelId}/pins/${messageId}`,
      { reason }
    );
    return this._add(message);
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  get cache() {
    return Collection;
  }

  static transformOptions(o = {}) {
    if (o === null) return null;
    return {
      limit: o.limit ?? 50,
      around:
        typeof o.around === "string" ? o.around : o.around?.id ?? undefined,
      before:
        typeof o.before === "string" ? o.before : o.before?.id ?? undefined,
      after: typeof o.after === "string" ? o.after : o.after?.id ?? undefined,
    };
  }
}

module.exports = MessageManager;
