const GuildWidget = require("../Structures/GuildWidget");
const GuildWidgetSettings = require("../Structures/GuildWidgetSettings");
const Base = require("../Base/base");
class GuildWidgetManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  async fetchSettings() {
    const widgetSettings = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/widget`
    );
    return new GuildWidgetSettings(widgetSettings, this.guildId, this.client);
  }

  async fetch() {
    const widget = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/widget.json`
    );
    return new GuildWidget(widget, this.guildId, this.client);
  }

  async edit(options = {}) {
    const { reason } = options;
    const body = GuildWidgetManager.transformOptions(options);
    const widget = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/widget`,
      { body, reason }
    );
    return new GuildWidgetSettings(widget, this.guildId, this.client);
  }

  static transformOptions(o = {}) {
    return {
      enabled: o.enabled ?? null,
      channel_id:
        typeof o.channel === "string" ? o.channel : o.channel?.id ?? null,
    };
  }
}

module.exports = GuildWidgetManager;
