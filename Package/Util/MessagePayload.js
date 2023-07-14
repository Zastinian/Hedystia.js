const MessageActionRow = require("../Builders/MessageActionRow");
const MessageAttachment = require("../Builders/MessageAttachment");
const form = new (require("form-data"))();
const fs = require("fs");
const path = require("path");
const MessageReference = require("../Structures/MessageReference");
const MessageEmbed = require("../Builders/MessageEmbed");
const MessageFlags = require("./MessageFlags");
/**
 * Represents a message payload and provides methods for creating and resolving message data.
 * @class
 */
class MessagePayload {
  /**
   * Creates a payload for a given type.
   * @param {Object} payload - The payload object.
   * @param {string} type - The type of payload to create.
   * @returns {Promise<Object>|Object} - The created payload.
   */
  static async create(payload = {}, type) {
    let data = this.resolveData(payload);
    if (type) {
      switch (type) {
        case "webhook":
          return this.resolveWebhook(payload, data);
        case 9:
          data = this.resolveModal(payload, type);
          break;
        default:
          data = {type, data};
          break;
      }
      if ([5, 6].includes(type)) data = this.resolveDefers(payload, type);
    }
    if (payload.files?.length >= 1) {
      const files = await Promise.all(payload.files?.map((o) => this.resolveFiles(o)));
      for (let [index, value] of files.entries()) {
        (data.attachments ?? data.data?.attachments)?.push({
          id: index,
          filename: value.filename,
          description: value.description,
        });

        form.append(`files[${index}]`, value.buffer, {
          filename: value.filename,
        });
      }

      form.append(`payload_json`, JSON.stringify(data), {
        contentType: "application/json",
      });
      return form;
    }

    return data;
  }

  /**
   * Resolves a file to a Buffer object.
   * @param {Buffer | MessageAttachment | string} file - The file to resolve.
   * @returns {Promise<Buffer | null>} - A Promise that resolves to a Buffer object or null if the file cannot be resolved.
   */
  static async resolveFiles(file) {
    if (file instanceof Buffer) return file;
    if (file instanceof MessageAttachment) {
      return await this.resolveFiles({
        filename: file.filename,
        spoiler: file.spoiler,
        description: file.description,
        buffer: file.file ?? file.url,
      });
    }
    const url = file.buffer ?? file;
    if (/^(\.(\.)?)/g.test(url)) {
      file = {
        filename: `${file.spoiler ? `SPOILER_` : ""}${file.filename ?? path.basename(url)}`,
        description: file.description,
        buffer: fs.readFileSync(url),
      };
    }

    if (/^(http(s)?)/g.test(url)) {
      const result = await fetch(url);
      const arrayBuffer = await result.arrayBuffer();
      file = {
        filename: `${file.spoiler ? `SPOILER_` : ""}${file.filename ?? result.url.slice(result.url.lastIndexOf("/") + 1)}`,
        description: file.description,
        buffer: Buffer.from(arrayBuffer),
      };
    }

    return file ?? null;
  }

  /**
   * Resolves the data payload for a message.
   * @param {Object} [payload] - The payload object containing the message data.
   * @returns {Object} - The resolved data payload for the message.
   */
  static resolveData(payload = {}) {
    return {
      content: payload.content ?? undefined,
      components: payload.components?.map((o) => new MessageActionRow(o).toJSON()),
      embeds: payload.embeds?.map((o) => new MessageEmbed(o).toJSON()),
      attachments: payload.attachments ?? [],
      tts: payload.tts ?? undefined,
      allowed_mentions: payload.allowedMentions
        ? {
            parse: payload.allowedMentions.parse,
            roles: payload.allowedMentions.roles?.id ?? payload.allowedMentions.roles,
            users: payload.allowedMentions.users?.id ?? payload.allowedMentions.users,
            replied_user: payload.allowedMentions.repliedUser,
          }
        : undefined,
      message_reference: payload.reference ? new MessageReference(payload.reference).toJSON() : undefined,
      sticker_ids: payload.stickers?.map((o) => (typeof o === "string" ? o : o.id)) ?? undefined,
      flags: this.resolveMessageFlags(payload.flags),
    };
  }

  /**
   * Resolves the message flags and returns the parsed bitfield value.
   * @param {number} flags - The message flags to resolve.
   * @returns {number | undefined} The parsed bitfield value of the message flags.
   */
  static resolveMessageFlags(flags) {
    if (!flags) return;
    flags = new MessageFlags(flags);
    return parseInt(flags.bitfield);
  }

  /**
   * Resolves the modal data and returns an object with the specified type and data.
   * @param {Object} data - The modal data object.
   * @param {string} type - The type of the modal.
   * @returns {Object} - An object with the specified type and data.
   */
  static resolveModal(data = {}, type) {
    data = {
      title: data.title ?? undefined,
      custom_id: data.customId ?? data.custom_id ?? undefined,
      components: data.components?.map((o) => new MessageActionRow(o).toJSON()),
    };

    return {type, data};
  }

  /**
   * Resolves a webhook payload by merging it with additional extras.
   * @param {object} payload - The webhook payload object.
   * @param {object} extras - Additional extras to merge with the payload.
   * @returns {object} - The resolved webhook payload with merged extras.
   */
  static resolveWebhook(payload = {}, extras = {}) {
    return Object.assign(extras, {
      username: payload.username ?? undefined,
      avatar_url: payload.avatarURL ?? undefined,
      thread_name: payload.threadName ?? undefined,
    });
  }

  /**
   * Resolves deferred data by assigning the appropriate flags and returning the resolved data.
   * @param {object} data - The data object to resolve.
   * @param {number} [type=5] - The type of the resolved data.
   * @returns {object} - The resolved data object with assigned flags.
   */
  static resolveDefers(data = {}, type = 5) {
    data = {
      flags: data.ephemeral ? 64 : undefined,
    };

    return {type, data};
  }
}

module.exports = MessagePayload;
