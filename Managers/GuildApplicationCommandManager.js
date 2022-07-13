const ApplicationCommandManager = require("./ApplicationCommandManager");
class GuildApplicationCommandManager extends ApplicationCommandManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }
}

module.exports = GuildApplicationCommandManager;
