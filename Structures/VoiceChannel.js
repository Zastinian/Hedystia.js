const MessageManager = require("../Managers/MessageManager");
const VoiceBasedChannels = require("./Interface/VoiceBasedChannels");
class VoiceChannel extends VoiceBasedChannels {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.rateLimitPerUser = data.rate_limit_per_user ?? null;
    this.lastMessageId = data.last_message_id ?? null;
    this.nsfw = data.nsfw ?? null;
  }

  get messages() {
    return new MessageManager(this.guildId, this.id, this.client);
  }

  async send(options = {}) {
    return await this.messages.send(this, options);
  }

  async bulkDelete(messages, reason) {
    return await this.messages.bulkDelete(this, messages, reason);
  }

  async setNsfw(nsfw, reason) {
    return await this.edit({ nsfw, reason });
  }

  async setRateLimitPerUser(ratelimit, reason) {
    return await this.edit({ ratelimit, reason });
  }

  async setUserLimit(userLimit, reason) {
    return await this.edit({ userLimit, reason });
  }

  async setVideoQualityMode(videoQualityMode, reason) {
    return await this.edit({ videoQualityMode, reason });
  }

  async triggerTyping() {
    return await this.client.channels.triggerTyping(this);
  }
}

module.exports = VoiceChannel;
