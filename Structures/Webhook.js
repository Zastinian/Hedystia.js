const { WebhookType } = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const Util = require("../Util/Util");
class Webhook extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.id = data.id ?? null;
    this.createdAt = this.id ? Snowflake.deconstruct(this.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.type =
      (typeof data.type === "number" ? WebhookType[data.type] : data.type) ??
      null;
    this.guildId = guildId;
    this.channelId = data.channel_id ?? null;
    this.user = this.client.users._add(data.user) ?? null;
    this.name = data.name ?? null;
    this.avatar = data.avatar ?? null;
    this.token = data.token ?? null;
    this.applicationId = data.application_id ?? null;
    this.sourceGuild =
      this.client.guilds._add(data.source_guild, { cache: false }) ?? null;
    this.sourceChannel = this.client.channels._add(
      data.source_channel,
      guildId,
      { cache: false }
    );
    this.url = data.token
      ? `${this.client.webhookURL}/${this.id}/${this.token}`
      : null;
  }

  async fetch(token) {
    const webhook = await this.client.api.get(
      `${this.client.root}/webhooks/${this.id}${token ? `/${token}` : ""}`
    );
    return new this.constructor(webhook, this.guildId, this.client);
  }

  async edit(options = {}) {
    const { reason } = options;
    const body = {
      name: options.name ?? undefined,
      avatar: options.avatar
        ? await Util.generateDataURI(options.avatar)
        : undefined,
      channel_id:
        typeof options.channel === "string"
          ? options.channel
          : options.channel?.id ?? undefined,
    };
    if (options.token) delete body["channel_id"];
    const webhook = await this.client.api.patch(
      `${this.client.root}/webhooks/${this.id}${
        options.token ? `/${options.token}` : ""
      }`,
      { body, reason }
    );
    return new this.constructor(webhook, this.guildId, this.client);
  }

  async setName(name, reason) {
    return await this.edit({ name, reason });
  }

  async setAvatar(avatar, reason) {
    return await this.edit({ avatar, reason });
  }

  async setChannel(channel, reason) {
    return await this.edit({ channel, reason });
  }

  async delete(options = {}) {
    const { token, reason } = options;
    await this.client.api.delete(
      `${this.client.root}/webhooks/${this.id}${token ? `/${token}` : ""}`,
      { reason }
    );
    return this;
  }

  defaultAvatarURL() {
    return `https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png`;
  }

  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.defaultAvatarURL();
    return this.client.cdn.WebhookAvatar(
      this.avatar,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }
}

module.exports = Webhook;
