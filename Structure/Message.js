"use strict";

const DataManager = require("./DataManager");
const MakeAPIMessage = require("../Util/MakeAPIMessage");
const Requester = require("../Util/Requester");

class Message extends DataManager {
  constructor(client, data) {
    super(client);

    this.parseData(data);
  }

  async react(emoji) {
    if (typeof emoji !== "string")
      throw new Error(
        "El emoji debe ser un string (unicode emoji, emoji_name:id)"
      );

    emoji = emoji.includes(":")
      ? emoji.replaceAll("<:", "").replaceAll("<a:", "").replaceAll(">", "")
      : encodeURIComponent(emoji);

    await Requester.create(
      this.client,
      `/channels/${this.channelId}/messages/${this.id}/reactions/${emoji}/@me`,
      "PUT",
      true
    );
    return null;
  }

  async reply(content) {
    if (typeof content === "string") {
      await Requester.create(
        this.client,
        `/channels/${this.channelId}/messages`,
        "POST",
        true,
        {
          content,
          embeds: [],
          tts: false,
          sticker_ids: [],
          components: [],
          message_reference: {
            message_id: this.id,
            channel_id: this.channelId,
            guild_id: this.channel.guildId,
            fail_if_not_exists: this.client.options.failIfNotExists,
          },
          allowed_mentions: this.client.options.allowedMentions,
        }
      );
      return this;
    }

    content.message_reference = {
      message_id: this.id,
      channel_id: this.channelId,
      guild_id: this.channel.guildId,
      fail_if_not_exists: this.client.options.failIfNotExists,
    };

    if (!content.allowed_mentions)
      content.allowed_mentions = this.client.options.allowedMentions;

    await Requester.create(
      this.client,
      `/channels/${this.channelId}/messages`,
      "POST",
      true,
      MakeAPIMessage.transform(content)
    );
    return this;
  }

  async edit(content) {
    if (this.author.id !== this.client.user.id)
      throw new Error("Sólo puedes editar tus propios mensajes");
    if (typeof content === "string") {
      await Requester.create(
        this.client,
        `/channels/${this.channelId}/messages/${this.id}`,
        "PATCH",
        true,
        {
          content,
          embeds: [],
          components: [],
          allowed_mentions: this.client.options.allowedMentions,
        }
      );
      return this;
    }

    if (!content.allowed_mentions)
      content.allowed_mentions = this.client.options.allowedMentions;

    await Requester.create(
      this.client,
      `/channels/${this.channelId}/messages/${this.id}`,
      "PATCH",
      true,
      MakeAPIMessage.transform(content)
    );
    return this;
  }

  async crosspost() {
    const data = await Requester.create(
      this.client,
      `/channels/${this.channelId}/messages/${this.id}/crosspost`,
      "POST",
      true
    );
    return this.parseData(data);
  }

  delete() {
    return Requester.create(
      this.client,
      `/channels/${this.channelId}/messages/${this.id}`,
      "DELETE",
      true
    );
  }

  toString() {
    return this.content;
  }

  get guild() {
    return this.guildId ? this.client.guilds.cache.get(this.guildId) : null;
  }

  get channel() {
    return this.channelId
      ? this.client.channels.cache.get(this.channelId)
      : null;
  }

  get member() {
    return this.guildId ? this.guild?.members.cache.get(this.author.id) : null;
  }

  parseData(data) {
    if (!data) return;
    const User = require("./User");

    this.id = data.id;

    this.channelId = data.channel_id ?? null;
    this.guildId = data.guild_id ?? null;

    if (!this.webhook_id) {
      this.author = new User(this.client, data.author);
    } else {
      this.webhook_id = data.webhook_id ?? null;
    }

    if (data.created_at) {
      this.createdTimestamp = new Date(data.created_at).getTime();
      this.createdAt = new Date(this.createdTimestamp);
    }

    this.content = data.content ?? null;
    this.embeds = data.embeds ?? [];
    this.tts = data.tts ?? false;
    this.pinned = data.pinned ?? false;
    this.type = data.type;
    this.channel?.messages.cache.set(this.id, this);
  }
}

module.exports = Message;
