const MessagePayload = require("../Util/MessagePayload");
const Base = require("../Base/base");
const Webhook = require("./Webhook");
/**
 * It's a class that allows you to send messages to a channel using a webhook.
 * @class
 * @extends Base
 */
class WebhookClient extends Base {
  /**
   * The above function is a constructor function that takes in two parameters, data and client, and
   * sets the id, token, and url properties of the object to the values of the data object's id, token,
   * and url properties, or null if the data object doesn't have those properties.
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client that the webhook is being created for.
   */
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.token = data.token ?? null;
    this.url = data.url ?? `${client.webhookURL}/${this.id}/${this.token}`;
  }

  /**
   * It fetches the webhook from the API and returns a new Webhook instance
   * @returns A new Webhook object.
   */
  async fetchWebhook() {
    const webhook = await this.client.api.get(`${this.client.root}/webhooks/${this.id}`);
    return new Webhook(webhook, webhook.guild_id, this.client);
  }

  /**
   * It sends a message to a channel using a webhook
   * @param [options] - An object containing the following properties:
   * @returns The message object.
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
   * It deletes a message from a thread.
   * @param message - The message object or message ID to delete.
   * @param thread - The thread ID of the thread you want to delete the message from.
   * @returns Nothing.
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
   * It edits a message sent by a webhook
   * @param message - The message to edit.
   * @param [options] - The options to send to the message.
   * @param thread - The thread ID of the message to edit.
   * @returns The message that was edited.
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
   * It fetches a message from a webhook
   * @param message - The message to fetch. Can be a message object, a message ID, or a message URL.
   * @param thread - The thread ID of the message.
   * @returns The message object.
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
