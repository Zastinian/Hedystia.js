const Base = require("../Base/base")
class GuildWidgetSettings extends Base {
  constructor(data = {}, guildId, client) {
    super(client)
    this.guildId = guildId
    this.enabled = data.enabled ?? null
    this.channelId = data.channel_id ?? null
  }

  async edit(options = {}) {
    return await this.guild?.widgets.edit(options)
  }

  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason})
  }

  async setChannel(channel, reason) {
    return await this.edit({channel, reason})
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null
  }

  get channel() {
    return this.client.channels._add(this.channelId) ?? null
  }
}

module.exports = GuildWidgetSettings
