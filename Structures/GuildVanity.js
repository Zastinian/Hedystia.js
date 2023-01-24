const Base = require("../Base/base")
class GuildVanity extends Base {
  constructor(data = {}, guildId, client) {
    super(client)

    this.guildId = guildId
    this.code = data.code
    this.uses = data.uses
  }

  get guild() {
    return this.client.guilds._add(this.guildId)
  }
}

module.exports = GuildVanity
