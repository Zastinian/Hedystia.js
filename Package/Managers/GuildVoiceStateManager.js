const Util = require("../Util/Util");
const VoiceStateManager = require("./VoiceStateManager");
/* It's a VoiceStateManager that only returns voice states for a specific guild */
class GuildVoiceStateManager extends VoiceStateManager {
  /**
   * It creates a new instance of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);
    this.guildId = guildId;
  }

  /**
   * It edits the voice state of a user in a guild
   * @param user - The user to edit the voice state of.
   * @param [options] - Object
   * @returns undefined
   */
  async edit(user, options = {}) {
    const userId = typeof user === "string" ? user : user?.user_id ?? user?.user?.id ?? user?.id;
    const body = {
      channel_id: typeof options.channel === "string" ? options.channel : options.channel?.id ?? undefined,
      suppress: options.suppress ?? undefined,
      request_to_speak_timestamp: options.requestToSpeak ? Util.generateISOString(options.requestToSpeak) : undefined,
    };

    await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/voice-states/${this.client.user.id === userId ? `@me` : userId}`, {body});
    return undefined;
  }

  /**
   * `return super.cache.filter((o) => o.guildId === this.guildId);`
   *
   * The `super` keyword is used to access and call functions on an object's parent
   * @returns The cache property is being returned.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildVoiceStateManager;
