const Base = require("../Base/base");
class WelcomeScreenChannel extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.channelId = data.channel_id ?? null;
    this.description = data.description ?? null;
    this.emojiId = data.emoji_id ?? null;
    this.emojiName = data.emoji_name ?? null;
  }

  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = WelcomeScreenChannel;
