const WelcomeScreen = require("../Structures/WelcomeScreen");
const Base = require("../Base/base");
/**
 * Represents a manager for the welcome screen of a guild.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class WelcomeScreenManager extends Base {
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
   * Fetches the welcome screen for the guild.
   * @returns {Promise<WelcomeScreen>} A promise that resolves to a WelcomeScreen object representing the fetched welcome screen.
   */
  async fetch() {
    const welcomeScreen = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/welcome-screen`);
    return new WelcomeScreen(welcomeScreen, this.guildId, this.client);
  }

  /**
   * Edits the welcome screen settings for the guild.
   * @param {Object} [options] - The options for editing the welcome screen.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<WelcomeScreen>} A promise that resolves with the updated WelcomeScreen object.
   */
  async edit(options = {}) {
    const {reason} = options;
    const body = WelcomeScreenManager.transformOptions(options);
    const welcomeScreen = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/welcome-screen`, {reason, body});
    return new WelcomeScreen(welcomeScreen, this.guildId, this.client);
  }

  /**
   * Transforms the given channels object into a new format.
   * @param {Object} channels - The channels object to transform.
   * @returns {Object} - The transformed channels object.
   */
  static transformChannels(channels = {}) {
    return {
      channel_id: typeof channels.id === "string" ? channels.id : channels.id?.id ?? undefined,
      description: channels.description ?? undefined,
      emoji_id: channels.emojiId ?? undefined,
      emoji_name: channels.emojiName ?? undefined,
    };
  }

  /**
   * Transforms the options object into a new object with specific properties.
   * @param {Object} o - The options object to transform.
   * @returns {Object} - The transformed object with specific properties.
   */
  static transformOptions(o = {}) {
    return {
      enabled: o.enabled ?? undefined,
      welcome_channels: o.channels?.map((o) => this.transformChannels(o)),
      description: o.description ?? undefined,
    };
  }
}

module.exports = WelcomeScreenManager;
