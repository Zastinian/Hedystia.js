const Util = require("../Util/Util");
const VoiceStateManager = require("./VoiceStateManager");
class GuildVoiceStateManager extends VoiceStateManager {
  constructor(guildId, client) {
    super(client);
    this.guildId = guildId;
  }

  async edit(user, options = {}) {
    const userId =
      typeof user === "string"
        ? user
        : user?.user_id ?? user?.user?.id ?? user?.id;
    const body = {
      channel_id:
        typeof options.channel === "string"
          ? options.channel
          : options.channel?.id ?? undefined,
      suppress: options.suppress ?? undefined,
      request_to_speak_timestamp: options.requestToSpeak
        ? Util.generateISOString(options.requestToSpeak)
        : undefined,
    };

    await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/voice-states/${
        this.client.user.id === userId ? `@me` : userId
      }`,
      { body }
    );
    return undefined;
  }

  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildVoiceStateManager;
