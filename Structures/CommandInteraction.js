const ApplicationCommandInteraction = require("./ApplicationCommandInteraction");
class CommandInteraction extends ApplicationCommandInteraction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = CommandInteraction;
