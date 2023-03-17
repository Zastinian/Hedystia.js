const MessageActionRow = require("../Builders/MessageActionRow");
const MessageAttachment = require("../Builders/MessageAttachment");
const fs = require("fs");
const path = require("path");
const MessageReference = require("../Structures/MessageReference");
const MessageEmbed = require("../Builders/MessageEmbed");
const MessageFlags = require("./MessageFlags");
class MessagePayload {
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
      const formData = {};

      for (let [index, value] of files.entries()) {
        const reader = new FileReader();
        reader.readAsDataURL(value.buffer);
        reader.onload = () => {
          formData[`files[${index}]`] = reader.result.split(",")[1];
        };

        (data.attachments ?? data.data?.attachments)?.push({
          id: index,
          filename: value.filename,
          description: value.description,
        });
      }

      formData.payload_json = JSON.stringify(data);

      return formData;
    }

    return data;
  }

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
      file = {
        filename: `${file.spoiler ? `SPOILER_` : ""}${file.filename ?? result.url.slice(result.url.lastIndexOf("/") + 1)}`,
        description: file.description,
        buffer: await result.buffer(),
      };
    }

    return file ?? null;
  }

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

  static resolveMessageFlags(flags) {
    if (!flags) return;
    flags = new MessageFlags(flags);
    return parseInt(flags.bitfield);
  }

  static resolveModal(data = {}, type) {
    data = {
      title: data.title ?? undefined,
      custom_id: data.customId ?? data.custom_id ?? undefined,
      components: data.components?.map((o) => new MessageActionRow(o).toJSON()),
    };

    return {type, data};
  }

  static resolveWebhook(payload = {}, extras = {}) {
    return Object.assign(extras, {
      username: payload.username ?? undefined,
      avatar_url: payload.avatarURL ?? undefined,
      thread_name: payload.threadName ?? undefined,
    });
  }

  static resolveDefers(data = {}, type = 5) {
    data = {
      flags: data.ephemeral ? 64 : undefined,
    };

    return {type, data};
  }
}

module.exports = MessagePayload;
