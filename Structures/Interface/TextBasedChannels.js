const MessageManager = require("../../Managers/MessageManager");
const Channel = require("../Channel");
class TextBasedChannels extends Channel {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.rateLimitPerUser = data.rate_limit_per_user ?? null;
    this.lastPinnedAt = data.last_pin_timestamp
      ? new Date(data.last_pin_timestamp)
      : null;
    this.lastPinnedTimestamp = this.lastPinnedAt?.getTime() ?? null;
    this.lastMessageId = data.last_message_id ?? null;
    this.nsfw = data.nsfw ?? null;
  }

  get messages() {
    return new MessageManager(this.guildId, this.id, this.client);
  }

  async send(options) {
    return await this.messages.send(this.id, options);
  }

  async bulkDelete(messages, reason) {
    return await this.messages.bulkDelete(this.id, messages, reason);
  }

  async setNsfw(nsfw, reason) {
    return await this.edit({ nsfw, reason });
  }

  async setRateLimitPerUser(ratelimit, reason) {
    return await this.edit({ ratelimit, reason });
  }

  async triggerTyping() {
    return await this.client.channels.triggerTyping(this);
  }
}

module.exports = TextBasedChannels;
