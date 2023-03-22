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
 * It's a class that extends another class
 * @class
 * @extends Base
 */
class Message extends Base {
  /**
   * It's a constructor for a class that extends another class
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the message is in.
   * @param channelId - The channel ID of the message
   * @param client - RaidenClient
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
   * It returns the channel object if it exists, otherwise it returns null
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels.cache.get(this.channelId) ?? null;
  }

  /**
   * It returns the guild object if it exists, otherwise it returns null
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  /**
   * It edits a message
   * @param options - Object
   * @returns The message object.
   */
  async edit(options) {
    return this.channel.messages.edit(this, options);
  }

  /**
   * It deletes a message
   * @param reason - The reason for the deletion.
   * @returns The message object.
   */
  async delete(reason) {
    return this.channel.messages.delete(this, reason);
  }

  /**
   * It fetches the message from the channel
   * @param [options] - An object containing additional options to pass to the method.
   * @returns The message object.
   */
  async fetch(options = {}) {
    return this.channel.messages.fetch(this, options);
  }

  /**
   * It crossposts a message
   * @returns The message object.
   */
  async crosspost() {
    return this.channel.messages.crosspost(this.channelId, this.id);
  }

  /**
   * It reacts to a message with an emoji
   * @param emoji - The emoji to react with. Can be a string (e.g. "🤔") or a custom emoji object.
   * @returns The message object.
   */
  async react(emoji) {
    return await this.channel.messages.react(this, emoji);
  }

  /**
   * It removes embeds from a message
   * @returns The message object.
   */
  async removeEmbeds() {
    return await this.edit({flags: MessageFlags.Flags.Suppress_Embeds});
  }

  /**
   * It removes all attachments from a message
   * @returns The message object.
   */
  async removeAttachments() {
    if (this.attachments.size < 1) throw new RangeError(`There are no attachments in this message`);
    return await this.edit({attachments: []});
  }

  /**
   * It removes an attachment from a message
   * @param attachment - The attachment to remove.
   * @returns The message is being edited with the new attachments.
   */
  async removeAttachment(attachment) {
    if (!attachment) return await this.removeAttachments();
    const attachmentId = typeof attachment === "string" ? attachment : attachment.id;
    if (!this.attachments.has(attachmentId)) throw new RangeError(`This message does not have this attachment`);
    this.attachments.delete(attachmentId);
    return await this.edit({attachments: [...this.attachments.values()]});
  }

  /**
   * It sends a message to the channel that the message was sent in
   * @param [options] - The options to pass to the send method.
   * @returns The message object.
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
   * It fetches a message from a channel
   * @returns A promise that resolves to a Message object.
   */
  async fetchReference() {
    return await this.channel.messages.fetch(this.reference.messageId);
  }

  /**
   * It pins the message to the channel
   * @param reason - The reason for pinning this message.
   * @returns The message object.
   */
  async pin(reason) {
    return await this.channel.messages.pin(this, reason);
  }

  /**
   * It unpins a message
   * @param reason - The reason for unpinning the message.
   * @returns The unpinned message.
   */
  async unpin(reason) {
    return await this.channel.messages.unpin(this, reason);
  }

  /**
   * If the type is not one of the four types listed, then it's a system type
   * @returns The value of the property "type" of the object "this".
   */
  get system() {
    if (!this.type) return null;
    if (!["Default", "Reply", "Application_Command", "Context_Menu_Command"].includes(this.type)) return true;
    return false;
  }

  /**
   * If the guildId is defined, return true, otherwise return false.
   * @returns The boolean value of the if statement.
   */
  inGuild() {
    if (this.guildId) return true;
    return false;
  }

  /**
   * It returns true if the message is a partial message and the type, guildId, and content are the same
   * @param message - The message to compare to.
   * @returns The return value is a boolean.
   */
  equals(message) {
    if (!(message instanceof Message)) return null;
    return this.partial === message.partial && this.type === message.type && this.guildId === message.guildId && this.content === message.content;
  }

  /**
   * It returns the author of the message
   * @returns The author of the message.
   */
  get author() {
    return this.client.users._add(this._author);
  }

  /**
   * It creates a thread
   * @param [options] - An object containing the following properties:
   * @returns The thread object.
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
   * It adds attachments to a message
   * @param [attachments] - The attachments to add to the message.
   * @returns The message is being edited with the attachments and files.
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
