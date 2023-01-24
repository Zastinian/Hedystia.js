const BaseGuildChannel = require("./BaseGuildChannel")
class NewsChannel extends BaseGuildChannel {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client)
  }

  async follow(options = {}) {
    return await this.client.channels.follow(this, options)
  }

  async crosspost(message) {
    return await this.messages?.crosspost(this.id, message)
  }
}

module.exports = NewsChannel
