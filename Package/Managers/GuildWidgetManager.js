const GuildWidget = require("../Structures/GuildWidget");
const GuildWidgetSettings = require("../Structures/GuildWidgetSettings");
const Base = require("../Base/base");
/**
 * Represents a manager for guild widget settings.
 * @class
 * @extends Base
 */
class GuildWidgetManager extends Base {
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
   * Fetches the widget settings for the guild.
   * @returns {Promise<GuildWidgetSettings>} - A promise that resolves to an instance of GuildWidgetSettings.
   */
  async fetchSettings() {
    const widgetSettings = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/widget`);
    return new GuildWidgetSettings(widgetSettings, this.guildId, this.client);
  }

  /**
   * Fetches the guild widget data for the current guild.
   * @returns {Promise<GuildWidget>} A promise that resolves to a GuildWidget object representing the guild widget data.
   */
  async fetch() {
    const widget = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/widget.json`);
    return new GuildWidget(widget, this.guildId, this.client);
  }

  /**
   * Edits the guild widget settings with the provided options.
   * @param {Object} [options] - The options for editing the guild widget settings.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<GuildWidgetSettings>} A promise that resolves with the updated guild widget settings.
   */
  async edit(options = {}) {
    const {reason} = options;
    const body = GuildWidgetManager.transformOptions(options);
    const widget = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/widget`, {
      body,
      reason,
    });
    return new GuildWidgetSettings(widget, this.guildId, this.client);
  }

  /**
   * Transforms the given options object into a new object with specific properties.
   * @param {Object} o - The options object to transform.
   * @returns {Object} - The transformed object with the following properties:
   *   - enabled: A boolean indicating whether the option is enabled.
   *   - channel_id: A string representing the channel ID, or null if not provided.
   */
  static transformOptions(o = {}) {
    return {
      enabled: o.enabled ?? null,
      channel_id: typeof o.channel === "string" ? o.channel : o.channel?.id ?? null,
    };
  }
}

module.exports = GuildWidgetManager;
