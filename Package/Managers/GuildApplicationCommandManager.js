const ApplicationCommandManager = require("./ApplicationCommandManager");
/* It's a class that extends the ApplicationCommandManager class, and it's used to manage commands for
a specific guild */
class GuildApplicationCommandManager extends ApplicationCommandManager {
  /**
   * This function is a constructor for the class
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }
}

module.exports = GuildApplicationCommandManager;
