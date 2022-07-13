const MessagePayload = require("../Util/MessagePayload");
const Channel = require("./Channel");
class ForumChannel extends Channel {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  async createThread(options = {}) {
    const { reason, message } = options;
    let body = {
      name: options.name ?? undefined,
      auto_archive_duration: options.autoArchiveDuration ?? undefined,
      rate_limit_per_user: options.rateLimitPerUser ?? undefined,
    };
    if (message) {
      body = Object.assign(await new MessagePayload.create(message), body);
      return body;
    } else {
      return body;
    }
  }
}

module.exports = ForumChannel;
