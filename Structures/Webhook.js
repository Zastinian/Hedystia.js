const {WebhookType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const Util = require("../Util/Util");
/**
 * It's a class that represents a webhook
 * @class
 * @extends Base
 */
class Webhook extends Base {
  /**
   * This function is used to create a new webhook object, and it takes in a data object, a guildId,
   * and a client object.
   * @param [data] - The data that was passed in.
   * @param guildId - The ID of the guild the webhook is in
   * @param client - Discord.Client
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.id = data.id ?? null;
    this.createdAt = this.id ? Snowflake.deconstruct(this.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.type = (typeof data.type === "number" ? WebhookType[data.type] : data.type) ?? null;
    this.guildId = guildId;
    this.channelId = data.channel_id ?? null;
    this.user = this.client.users._add(data.user) ?? null;
    this.name = data.name ?? null;
    this.avatar = data.avatar ?? null;
    this.token = data.token ?? null;
    this.applicationId = data.application_id ?? null;
    this.sourceGuild = this.client.guilds._add(data.source_guild, {cache: false}) ?? null;
    this.sourceChannel = this.client.channels._add(data.source_channel, guildId, {cache: false});
    this.url = data.token ? `${this.client.webhookURL}/${this.id}/${this.token}` : null;
  }

  /**
   * It fetches a webhook from the Discord API
   * @param token - The token of the webhook.
   * @returns A new instance of the Webhook class.
   */
  async fetch(token) {
    const webhook = await this.client.api.get(`${this.client.root}/webhooks/${this.id}${token ? `/${token}` : ""}`);
    return new this.constructor(webhook, this.guildId, this.client);
  }

  /**
   * It edits a webhook
   * @param [options]
   * @returns A new instance of the Webhook class.
   */
  async edit(options = {}) {
    const {reason} = options;
    const body = {
      name: options.name ?? undefined,
      avatar: options.avatar ? await Util.generateDataURI(options.avatar) : undefined,
      channel_id: typeof options.channel === "string" ? options.channel : options.channel?.id ?? undefined,
    };
    if (options.token) delete body["channel_id"];
    const webhook = await this.client.api.patch(`${this.client.root}/webhooks/${this.id}${options.token ? `/${options.token}` : ""}`, {body, reason});
    return new this.constructor(webhook, this.guildId, this.client);
  }

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * It sets the avatar of the bot
   * @param avatar - The new avatar of the bot.
   * @param reason - The reason for the change (0-1024 characters)
   * @returns The avatar of the user.
   */
  async setAvatar(avatar, reason) {
    return await this.edit({avatar, reason});
  }

  /**
   * It sets the channel of the invite
   * @param channel - The channel to move the member to, can be a voice channel or a category channel.
   * @param reason - The reason for the update.
   * @returns The channel that the message was sent in.
   */
  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  /**
   * It deletes a webhook
   * @param [options] - Object
   * @returns The webhook object.
   */
  async delete(options = {}) {
    const {token, reason} = options;
    await this.client.api.delete(`${this.client.root}/webhooks/${this.id}${token ? `/${token}` : ""}`, {
      reason,
    });
    return this;
  }

  /**
   * It returns the default avatar URL.
   * @returns The default avatar URL.
   */
  defaultAvatarURL() {
    return `https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png`;
  }

  /**
   * If the avatar is not set, return the default avatar URL, otherwise return the avatar URL.
   * @param [options] - Object
   * @returns The avatar URL of the webhook.
   */
  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.defaultAvatarURL();
    return this.client.cdn.WebhookAvatar(this.avatar, options.dynamic, options.size, options.format, this.id);
  }
}

module.exports = Webhook;
