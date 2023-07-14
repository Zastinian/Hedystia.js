const Util = require("../Util/Util");
const VoiceStateManager = require("./VoiceStateManager");
/**
 * Represents a voice state manager for a specific guild.
 * @class
 * @extends VoiceStateManager
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildVoiceStateManager extends VoiceStateManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);
    this.guildId = guildId;
  }

  /**
   * Edits the voice state of a user in a guild.
   * @param {string | User} user - The user or user ID to edit the voice state for.
   * @param {Object} [options] - The options for editing the voice state.
   * @param {string | Channel} [options.channel] - The channel or channel ID to move the user to.
   * @param {boolean} [options.suppress] - Whether to suppress the user's audio.
   * @param {Date} [options.requestToSpeak] - The timestamp for the user's request to speak.
   * @returns {Promise<void>} A promise that resolves when the voice state is successfully edited.
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
   * Retrieves the cache for the current guild.
   * @returns {Array} An array of objects from the cache that belong to the current guild.
   */
  get cache() {
    return super.cache.filter((o) => o.guildId === this.guildId);
  }
}

module.exports = GuildVoiceStateManager;
