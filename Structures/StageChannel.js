const VoiceBasedChannels = require("./Interface/VoiceBasedChannels")
class StageChannel extends VoiceBasedChannels {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client)
  }

  get stageInstance() {
    return this.guild?.stageInstances.cache.find((o) => o.channelId === this.id) ?? null
  }

  async createStageInstance(options = {}) {
    options["channel"] = this.id
    return await this.guild?.stageInstances.create(options)
  }
}

module.exports = StageChannel
