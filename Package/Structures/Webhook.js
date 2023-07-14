const {WebhookType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const Util = require("../Util/Util");
/**
 * Represents a webhook.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the webhook.
 * @param {string} guildId - The ID of the guild the webhook belongs to.
 * @param {Client} client - The client that instantiated this webhook.
 */
class Webhook extends Base {
  /**
   * Constructs a new instance of the Webhook class.
   * @constructor
   * @param {Object} [data] - The data object containing the webhook information.
   * @param {string} guildId - The ID of the guild the webhook belongs to.
   * @param {Client} client - The client instance.
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
   * Fetches a webhook using the provided token.
   * @param {string} token - The token used to authenticate the webhook.
   * @returns {Promise<Webhook>} A promise that resolves to the fetched webhook.
   */
  async fetch(token) {
    const webhook = await this.client.api.get(`${this.client.root}/webhooks/${this.id}${token ? `/${token}` : ""}`);
    return new this.constructor(webhook, this.guildId, this.client);
  }

  /**
   * Edits the webhook with the specified options.
   * @param {Object} options - The options for editing the webhook.
   * @param {string} [options.reason] - The reason for the edit.
   * @param {string} [options.name] - The new name for the webhook.
   * @param {string | File} [options.avatar] - The new avatar for the webhook.
   * @param {string | Channel} [options.channel] - The new channel for the webhook.
   * @param {string} [options.token] - The token of the webhook.
   * @returns {Webhook} - The edited webhook.
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
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the avatar for the user.
   * @param {string} avatar - The URL or file path of the new avatar image.
   * @param {string} reason - The reason for setting the new avatar.
   * @returns {Promise} - A promise that resolves when the avatar is successfully set.
   */
  async setAvatar(avatar, reason) {
    return await this.edit({avatar, reason});
  }

  /**
   * Sets the channel for the current object and updates it with the given reason.
   * @param {Channel} channel - The channel to set.
   * @param {string} reason - The reason for setting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is successfully set.
   */
  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  /**
   * Deletes the webhook.
   * @param {Object} [options] - Optional parameters for the deletion.
   * @param {string} [options.token] - The token associated with the webhook.
   * @param {string} [options.reason] - The reason for the deletion.
   * @returns {Promise} A promise that resolves to the deleted webhook.
   */
  async delete(options = {}) {
    const {token, reason} = options;
    await this.client.api.delete(`${this.client.root}/webhooks/${this.id}${token ? `/${token}` : ""}`, {
      reason,
    });
    return this;
  }

  /**
   * Returns the default URL for an avatar image.
   * @returns {string} The URL of the default avatar image.
   */
  defaultAvatarURL() {
    return `https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png`;
  }

  /**
   * Returns the URL of the avatar for the user or webhook.
   * @param {Object} options - The options for generating the avatar URL.
   * @param {boolean} [options.dynamic] - Whether to generate a dynamic avatar URL.
   * @param {number} [options.size] - The size of the avatar in pixels.
   * @param {string} [options.format] - The format of the avatar image.
   * @returns {string} The URL of the avatar.
   */
  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.defaultAvatarURL();
    return this.client.cdn.WebhookAvatar(this.avatar, options.dynamic, options.size, options.format, this.id);
  }
}

module.exports = Webhook;
