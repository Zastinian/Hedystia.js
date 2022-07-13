const MessageFlags = require("../Util/MessageFlags");
const MessageActionRow = require("../Builders/MessageActionRow");
const MessageEmbed = require("../Builders/MessageEmbed");
const { MessageType } = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const MessageReference = require("./MessageReference");
const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const MessageAttachment = require("../Builders/MessageAttachment");
const MessageMentions = require("./MessageMentions");
const PartialSticker = require("./PartialSticker");
const ReactionManager = require("../Managers/ReactionManager");
class Message extends Base {
  constructor(data = {}, guildId, channelId, client) {
    super(client);
    Object.defineProperty(this, "_author", {
      value: data.author,
    });
    this.partial = data.partial ?? false;
    this.type =
      (typeof data.type === "number" ? MessageType[data.type] : data.type) ??
      null;
    this.id = data.id ?? null;
    this.channelId = channelId;
    this.guildId = guildId ?? null;
    this.member =
      this.guild?.members._add(data.member, guildId, {
        cache: true,
        force: true,
      }) ?? null;
    this.content = data.content ?? null;
    this.createdAt = data.id
      ? new Date(Snowflake.deconstruct(this.id).timestamp)
      : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.editedAt = data.edited_timestamp
      ? new Date(data.edited_timestamp)
      : null;
    this.editedTimestamp = this.editedAt?.getTime() ?? null;
    this.tts = data.tts ?? null;
    this.nonce = data.nonce ?? null;
    this.reference = data.message_reference
      ? new MessageReference(data.message_reference, this.client)
      : null;
    this.embeds = data.embeds?.map((o) => new MessageEmbed(o)) ?? [];
    this.components =
      data.components?.map((o) => new MessageActionRow(o)) ?? [];
    this.flags = new MessageFlags(data.flags ? BigInt(data.flags) : 0n);
    this.attachments = new RaidenCol(
      data.attachments?.map((o) => [
        o.id,
        new MessageAttachment(o.url, o, o.filename),
      ])
    );
    this.stickers = new RaidenCol(
      data.sticker_items?.map((o) => [o.id, new PartialSticker(o, this.client)])
    );
    this.reactions = new ReactionManager(
      data.reactions,
      this.id,
      this.channelId,
      this.guildId,
      this.client
    );
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

  get channel() {
    return this.client.channels.cache.get(this.channelId) ?? null;
  }

  get guild() {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  async edit(options) {
    return this.channel.messages.edit(this, options);
  }

  async delete(reason) {
    return this.channel.messages.delete(this, reason);
  }

  async fetch(options = {}) {
    return this.channel.messages.fetch(this, options);
  }

  async crosspost() {
    return this.channel.messages.crosspost(this.channelId, this.id);
  }

  async react(emoji) {
    return await this.channel.messages.react(this, emoji);
  }

  async removeEmbeds() {
    return await this.edit({ flags: MessageFlags.FLAGS.SUPPRESS_EMBEDS });
  }

  async removeAttachments() {
    if (this.attachments.size < 1)
      throw new RangeError(`No hay archivos adjuntos en este mensaje`);
    return await this.edit({ attachments: [] });
  }

  async removeAttachment(attachment) {
    if (!attachment) return await this.removeAttachments();
    const attachmentId =
      typeof attachment === "string" ? attachment : attachment.id;
    if (!this.attachments.has(attachmentId))
      throw new RangeError(`Este mensaje no tiene este adjunto`);
    this.attachments.delete(attachmentId);
    return await this.edit({ attachments: [...this.attachments.values()] });
  }

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

  async fetchReference() {
    return await this.channel.messages.fetch(this.reference.messageId);
  }

  async pin(reason) {
    return await this.channel.messages.pin(this, reason);
  }

  async unpin(reason) {
    return await this.channel.messages.unpin(this, reason);
  }

  get system() {
    if (!this.type) return null;
    if (
      ![
        "DEFAULT",
        "REPLY",
        "APPLICATION_COMMAND",
        "CONTEXT_MENU_COMMAND",
      ].includes(this.type)
    )
      return true;
    return false;
  }

  inGuild() {
    if (this.guildId) return true;
    return false;
  }

  equals(message) {
    if (!(message instanceof Message)) return null;
    return (
      this.partial === message.partial &&
      this.type === message.type &&
      this.guildId === message.guildId &&
      this.content === message.content
    );
  }

  get author() {
    return this.client.users._add(this._author);
  }

  async createThread(options = {}) {
    const { reason } = options;
    const body = {
      name: options.name ?? undefined,
      auto_archive_duration: options.autoArchiveDuration ?? undefined,
      rate_limit_per_user: options.ratelimit ?? undefined,
    };

    const thread = await this.client.api.post(
      `${this.client.root}/channels/${this.channelId}/messages/${this.id}/threads`,
      { reason, body }
    );
    return this.client.channels._add(thread, this.guildId);
  }

  async addAttachments(attachments = []) {
    if (this.attachments.size <= 0)
      throw new RangeError(`Este mensaje no tiene archivos adjuntos`);
    if (this.attachments.some((o) => attachments.includes(o.id)))
      throw new RangeError(
        `Este mensaje ya tiene uno de sus archivos adjuntos especificados`
      );
    return await this.edit({
      attachments: [...this.attachments.values()],
      files: attachments,
    });
  }
}

module.exports = Message;
