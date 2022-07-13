const WelcomeScreen = require("../Structures/WelcomeScreen");
const Base = require("../Base/base");
class WelcomeScreenManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  async fetch() {
    const welcomeScreen = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/welcome-screen`
    );
    return new WelcomeScreen(welcomeScreen, this.guildId, this.client);
  }

  async edit(options = {}) {
    const { reason } = options;
    const body = WelcomeScreenManager.transformOptions(options);
    const welcomeScreen = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/welcome-screen`,
      { reason, body }
    );
    return new WelcomeScreen(welcomeScreen, this.guildId, this.client);
  }

  static transformChannels(channels = {}) {
    return {
      channel_id:
        typeof channels.id === "string"
          ? channels.id
          : channels.id?.id ?? undefined,
      description: channels.description ?? undefined,
      emoji_id: channels.emojiId ?? undefined,
      emoji_name: channels.emojiName ?? undefined,
    };
  }

  static transformOptions(o = {}) {
    return {
      enabled: o.enabled ?? undefined,
      welcome_channels: o.channels?.map((o) => this.transformChannels(o)),
      description: o.description ?? undefined,
    };
  }
}

module.exports = WelcomeScreenManager;
