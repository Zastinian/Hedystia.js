const MessagePayload = require("../Util/MessagePayload");
const Base = require("../Base/base");
const Webhook = require("./Webhook");
class WebhookClient extends Base {
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.token = data.token ?? null;
    this.url = data.url ?? `${client.webhookURL}/${this.id}/${this.token}`;
  }

  async fetchWebhook() {
    const webhook = await this.client.api.get(
      `${this.client.root}/webhooks/${this.id}`
    );
    return new Webhook(webhook, webhook.guild_id, this.client);
  }

  async send(options = {}) {
    const query = {
      wait: options.wait ?? undefined,
      thread_id:
        typeof options.thread === "string"
          ? options.thread
          : options.thread?.id ?? undefined,
    };

    const body = await MessagePayload.create(options, "webhook");
    const message = await this.client.api.post(
      `${this.client.root}/webhooks/${this.id}/${this.token}`,
      { query, body }
    );
    if (message) {
      const channel = this.client.channels._add(message?.channel_id);
      return channel.messages?._add(message);
    }
    return;
  }

  async delete(message, thread) {
    const query = {
      thread_id: typeof thread === "string" ? thread : thread?.id ?? undefined,
    };
    const messageId = typeof message === "string" ? message : message?.id;
    await this.client.api.delete(
      `${this.client.root}/webhooks/${this.id}/${this.token}/messages/${messageId}`,
      { query }
    );
    return;
  }

  async edit(message, options = {}, thread) {
    const query = {
      thread_id: typeof thread === "string" ? thread : thread?.id ?? undefined,
    };
    const messageId = typeof message === "string" ? message : message?.id;
    const body = await MessagePayload.create(options);
    message = await this.client.api.patch(
      `${this.client.root}/webhooks/${this.id}/${this.token}/messages/${messageId}`,
      { query, body }
    );
    const channel = this.client.channels._add(message.channel_id);
    if (channel) return channel.messages?._add(message);
    throw new RangeError(`Channel not cached`);
  }

  async fetch(message, thread) {
    const query = {
      thread_id: typeof thread === "string" ? thread : thread?.id ?? undefined,
    };
    const messageId = typeof message === "string" ? message : message?.id;
    const webhookMessage = await this.client.api.get(
      `${this.client.root}/webhooks/${this.id}/${this.token}/messages/${messageId}`,
      { query }
    );
    const channel = this.client.channels._add(webhookMessage.channel_id);
    if (channel) return channel.messages?._add(webhookMessage);
    return;
  }
}

module.exports = WebhookClient;
