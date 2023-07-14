const MessagePayload = require("../Util/MessagePayload");
const Base = require("../Base/base");
const Webhook = require("./Webhook");
/**
 * Represents a webhook client that can interact with webhooks.
 * @class
 * @extends Base
 */
class WebhookClient extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.token = data.token ?? null;
    this.url = data.url ?? `${client.webhookURL}/${this.id}/${this.token}`;
  }

  /**
   * Fetches a webhook from the server.
   * @returns {Promise<Webhook>} A promise that resolves to a Webhook object.
   */
  async fetchWebhook() {
    const webhook = await this.client.api.get(`${this.client.root}/webhooks/${this.id}`);
    return new Webhook(webhook, webhook.guild_id, this.client);
  }

  /**
   * Sends a message using a webhook.
   * @param {Object} [options] - The options for sending the message.
   * @param {number} [options.wait] - The time to wait before sending the message.
   * @param {string | Object} [options.thread] - The thread ID or thread object to send the message to.
   * @returns {Promise<Message | undefined>} - A promise that resolves to the sent message, or undefined if the message failed to send.
   */
  async send(options = {}) {
    const query = {
      wait: options.wait ?? undefined,
      thread_id: typeof options.thread === "string" ? options.thread : options.thread?.id ?? undefined,
    };

    const body = await MessagePayload.create(options, "webhook");
    const message = await this.client.api.post(`${this.client.root}/webhooks/${this.id}/${this.token}`, {
      query,
      body,
    });
    if (message) {
      const channel = this.client.channels._add(message?.channel_id);
      return channel.messages?._add(message);
    }
    return;
  }

  /**
   * Deletes a message from a thread.
   * @param {string | Message} message - The ID or the message object to delete.
   * @param {string | Thread} thread - The ID or the thread object where the message is located.
   * @returns {void}
   */
  async delete(message, thread) {
    const query = {
      thread_id: typeof thread === "string" ? thread : thread?.id ?? undefined,
    };
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.delete(`${this.client.root}/webhooks/${this.id}/${this.token}/messages/${messageId}`, {query});
    return;
  }

  /**
   * Edits a message in a channel using the Discord API.
   * @param {string | Message} message - The ID or the message object to edit.
   * @param {Object} [options] - The options for editing the message.
   * @param {string | ThreadChannel} [thread] - The ID or the thread channel object where the message is located.
   * @returns {void}
   * @throws {RangeError} If the channel is not cached.
   */
  async edit(message, options = {}, thread) {
    const query = {
      thread_id: typeof thread === "string" ? thread : thread?.id ?? undefined,
    };
    const messageId = typeof message === "string" ? message : message?.id;
    const body = await MessagePayload.create(options);
    message = await this.client.api.patch(`${this.client.root}/webhooks/${this.id}/${this.token}/messages/${messageId}`, {query, body});
    const channel = this.client.channels._add(message.channel_id);
    if (channel) return channel.messages?._add(message);
    throw new RangeError(`Channel not cached`);
  }

  /**
   * Fetches a webhook message from the specified thread.
   * @param {string | Message} message - The ID or the message object to fetch.
   * @param {string | ThreadChannel} thread - The ID or the thread object to fetch the message from.
   * @returns {Promise<Message | undefined>} - A promise that resolves to the fetched message, or undefined if the channel is not found.
   */
  async fetch(message, thread) {
    const query = {
      thread_id: typeof thread === "string" ? thread : thread?.id ?? undefined,
    };
    const messageId = typeof message === "string" ? message : message?.id;
    const webhookMessage = await this.client.api.get(`${this.client.root}/webhooks/${this.id}/${this.token}/messages/${messageId}`, {query});
    const channel = this.client.channels._add(webhookMessage.channel_id);
    if (channel) return channel.messages?._add(webhookMessage);
    return;
  }
}

module.exports = WebhookClient;
