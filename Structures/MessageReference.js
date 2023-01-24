const Base = require("../Base/base")
class MessageReference extends Base {
  constructor(data = {}, client) {
    super(client)
    this.messageId = data.message_id ?? data.messageId ?? null
    this.channelid = data.channel_id ?? data.channelId ?? null
    this.guildId = data.guild_id ?? data.guildId ?? null
    this.failIfNotExists = data.fail_if_not_exists ?? data.failIfNotExists ?? null
  }

  toJSON() {
    return {
      message_id: this.messageId,
      channel_id: this.channelid,
      guild_id: this.guildId,
      fail_if_not_exists: this.failIfNotExists,
    }
  }
}

module.exports = MessageReference
