const MessageFlags = require("../Util/MessageFlags");
const MessageActionRow = require("../Builders/MessageActionRow");
const MessageEmbed = require("../Builders/MessageEmbed");
const {MessageType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const MessageReference = require("./MessageReference");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const MessageAttachment = require("../Builders/MessageAttachment");
const MessageMentions = require("./MessageMentions");
const PartialSticker = require("./PartialSticker");
const ReactionManager = require("../Managers/ReactionManager");
/**
 * Represents a message in a chat channel.
 * @class
 * @extends Base
 * @param {Object} data - The data object containing information about the message.
 * @param {string} guildId - The ID of the guild the message belongs to.
 * @param {string} channelId - The ID of the channel the message belongs to.
 * @param {Client} client - The client instance.
 */
class Message extends Base {
  /**
   * Constructs a new instance of the Message class.
   * @constructor
   * @param {Object} [data] - The data object containing the message information.
   * @param {string} guildId - The ID of the guild the message belongs to.
   * @param {string} channelId - The ID of the channel the message belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, channelId, client) {
    super(client);
    Object.defineProperty(this, "_author", {
      value: data.author,
    });
    this.partial = data.partial ?? false;
    this.type = (typeof data.type === "number" ? MessageType[data.type] : data.type) ?? null;
    this.id = data.id ?? null;
    this.channelId = channelId;
    this.guildId = guildId ?? null;
    this.member =
      this.guild?.members._add(data.member, guildId, {
        cache: true,
        force: true,
      }) ?? null;
    this.content = data.content ?? null;
    this.createdAt = data.id ? new Date(Snowflake.deconstruct(this.id).timestamp) : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.editedAt = data.edited_timestamp ? new Date(data.edited_timestamp) : null;
    this.editedTimestamp = this.editedAt?.getTime() ?? null;
    this.tts = data.tts ?? null;
    this.nonce = data.nonce ?? null;
    this.reference = data.message_reference ? new MessageReference(data.message_reference, this.client) : null;
    this.embeds = data.embeds?.map((o) => new MessageEmbed(o)) ?? [];
    this.components = data.components?.map((o) => new MessageActionRow(o)) ?? [];
    this.flags = new MessageFlags(data.flags ? BigInt(data.flags) : 0n);
    this.attachments = new RaidenCol(data.attachments?.map((o) => [o.id, new MessageAttachment(o.url, o, o.filename)]));
    this.stickers = new RaidenCol(data.sticker_items?.map((o) => [o.id, new PartialSticker(o, this.client)]));
    this.reactions = new ReactionManager(data.reactions, this.id, this.channelId, this.guildId, this.client);
    this.thread = this.client.channels._add(data.thread) ?? null;
    this.mentions = new MessageMentions(
      {
        mentions: data.mentions,
        roles: data.mention_roles,
        channels: data.content?.match(/<#\d+>/gi),
        everyone: data.mention_everyone,
      },
      this.guildId,
      this.client
    );
  }

  /**
   * Retrieves the channel associated with this object.
   * @returns The channel object if found, otherwise null.
   */
  get channel() {
    return this.client.channels.cache.get(this.channelId) ?? null;
  }

  /**
   * Retrieves the guild associated with this guildId from the client's guild cache.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  /**
   * Edits the message with the given options.
   * @param {Object} options - The options to edit the message with.
   * @returns {Promise} A promise that resolves when the message has been edited.
   */
  async edit(options) {
    return this.channel.messages.edit(this, options);
  }

  /**
   * Deletes the message from the channel.
   * @param {string} reason - The reason for deleting the message.
   * @returns {Promise} A promise that resolves when the message is successfully deleted.
   */
  async delete(reason) {
    return this.channel.messages.delete(this, reason);
  }

  /**
   * Fetches messages from the channel using the given options.
   * @param {Object} [options] - The options to customize the fetch request.
   * @returns {Promise} - A promise that resolves with the fetched messages.
   */
  async fetch(options = {}) {
    return this.channel.messages.fetch(this, options);
  }

  /**
   * Crossposts a message to another channel.
   * @returns {Promise<void>} - A promise that resolves when the crossposting is complete.
   */
  async crosspost() {
    return this.channel.messages.crosspost(this.channelId, this.id);
  }

  /**
   * Reacts to a message with the specified emoji.
   * @param {string} emoji - The emoji to react with.
   * @returns {Promise<void>} - A promise that resolves when the reaction is added.
   */
  async react(emoji) {
    return await this.channel.messages.react(this, emoji);
  }

  /**
   * Removes embeds from a message.
   * @returns {Promise<void>} - A promise that resolves when the embeds are successfully removed.
   */
  async removeEmbeds() {
    return await this.edit({flags: MessageFlags.Flags.Suppress_Embeds});
  }

  /**
   * Removes all attachments from the message.
   * @throws {RangeError} If there are no attachments in the message.
   * @returns {Promise<void>} A promise that resolves when the attachments are successfully removed.
   */
  async removeAttachments() {
    if (this.attachments.size < 1) throw new RangeError(`There are no attachments in this message`);
    return await this.edit({attachments: []});
  }

  /**
   * Removes the specified attachment from the message. If no attachment is provided,
   * all attachments will be removed.
   * @param {string | Attachment} attachment - The attachment or attachment ID to remove.
   * @returns {Promise<void>} - A promise that resolves once the attachment is removed.
   * @throws {RangeError} - If the message does not have the specified attachment.
   */
  async removeAttachment(attachment) {
    if (!attachment) return await this.removeAttachments();
    const attachmentId = typeof attachment === "string" ? attachment : attachment.id;
    if (!this.attachments.has(attachmentId)) throw new RangeError(`This message does not have this attachment`);
    this.attachments.delete(attachmentId);
    return await this.edit({attachments: [...this.attachments.values()]});
  }

  /**
   * Sends a reply message to the channel where the original message was received.
   * @param {Object} options - Additional options for the reply message.
   * @returns {Promise<Message>} - A promise that resolves to the sent message.
   */
  async reply(options = {}) {
    return await this.channel.send(
      Object.assign(options, {
        reference: {
          messageId: this.id,
          guildId: this.guildId,
          channelId: this.channelId,
          failIfNotExists: options.failIfNotExists,
        },
      })
    );
  }

  /**
   * Fetches the reference message from the channel.
   * @returns {Promise<Message>} A promise that resolves to the reference message.
   */
  async fetchReference() {
    return await this.channel.messages.fetch(this.reference.messageId);
  }

  /**
   * Pins the current message to the channel.
   * @param {string} reason - The reason for pinning the message.
   * @returns {Promise} - A promise that resolves when the message is successfully pinned.
   */
  async pin(reason) {
    return await this.channel.messages.pin(this, reason);
  }

  /**
   * Unpins the current message from the channel.
   * @param {string} reason - The reason for unpinning the message.
   * @returns {Promise} - A promise that resolves when the message is successfully unpinned.
   */
  async unpin(reason) {
    return await this.channel.messages.unpin(this, reason);
  }

  /**
   * Get the system value based on the type of the object.
   * @returns {boolean | null} - The system value. Returns null if the type is not set.
   */
  get system() {
    if (!this.type) return null;
    if (!["Default", "Reply", "Application_Command", "Context_Menu_Command"].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current context is within a guild.
   * @returns {boolean} - True if the context is within a guild, false otherwise.
   */
  inGuild() {
    if (this.guildId) return true;
    return false;
  }

  /**
   * Checks if the given object is equal to this Message object.
   * @param {Object} message - The object to compare with this Message object.
   * @returns {boolean|null} - Returns true if the objects are equal, false if they are not equal, and null if the given object is not an instance of Message.
   */
  equals(message) {
    if (!(message instanceof Message)) return null;
    return this.partial === message.partial && this.type === message.type && this.guildId === message.guildId && this.content === message.content;
  }

  /**
   * Get the author of this object.
   * @returns The author of this object.
   */
  get author() {
    return this.client.users._add(this._author);
  }

  /**
   * Creates a new thread in a channel.
   * @param {Object} [options] - The options for creating the thread.
   * @param {string} [options.reason] - The reason for creating the thread.
   * @param {string} [options.name] - The name of the thread.
   * @param {number} [options.autoArchiveDuration] - The duration in minutes to automatically archive the thread.
   * @param {number} [options.ratelimit] - The rate limit per user in the thread.
   * @returns {Promise<Thread>} A promise that resolves with the created thread.
   */
  async createThread(options = {}) {
    const {reason} = options;
    const body = {
      name: options.name ?? undefined,
      auto_archive_duration: options.autoArchiveDuration ?? undefined,
      rate_limit_per_user: options.ratelimit ?? undefined,
    };

    const thread = await this.client.api.post(`${this.client.root}/channels/${this.channelId}/messages/${this.id}/threads`, {reason, body});
    return this.client.channels._add(thread, this.guildId);
  }

  /**
   * Adds attachments to the message.
   * @param {Array} attachments - An array of attachment objects to add to the message.
   * @returns {Promise} - A promise that resolves when the attachments have been added.
   * @throws {RangeError} - If the message has no attachments or if one of the specified attachments already exists.
   */
  async addAttachments(attachments = []) {
    if (this.attachments.size <= 0) throw new RangeError(`This message has no attachments`);
    if (this.attachments.some((o) => attachments.includes(o.id))) throw new RangeError(`This message already has one of its specified attachments`);
    return await this.edit({
      attachments: [...this.attachments.values()],
      files: attachments,
    });
  }
}

module.exports = Message;
