const GuildWidget = require("../Structures/GuildWidget");
const GuildWidgetSettings = require("../Structures/GuildWidgetSettings");
const Base = require("../Base/base");
/* This class allows you to fetch and edit the widget settings for a guild */
class GuildWidgetManager extends Base {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It fetches the guild widget settings and returns a new GuildWidgetSettings object.
   * @returns A new instance of GuildWidgetSettings
   */
  async fetchSettings() {
    const widgetSettings = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/widget`);
    return new GuildWidgetSettings(widgetSettings, this.guildId, this.client);
  }

  /**
   * It fetches the guild widget from the API and returns a new GuildWidget object.
   * @returns A new instance of the GuildWidget class.
   */
  async fetch() {
    const widget = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/widget.json`);
    return new GuildWidget(widget, this.guildId, this.client);
  }

  /**
   * It edits the widget settings of a guild
   * @param [options] - The options to pass to the API.
   * @returns A new GuildWidgetSettings object.
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
   * It takes an object with the keys `enabled` and `channel` and returns an object with the keys
   * `enabled` and `channel_id`
   * @param [o] - The options object.
   * @returns The transformed options object.
   */
  static transformOptions(o = {}) {
    return {
      enabled: o.enabled ?? null,
      channel_id: typeof o.channel === "string" ? o.channel : o.channel?.id ?? null,
    };
  }
}

module.exports = GuildWidgetManager;
