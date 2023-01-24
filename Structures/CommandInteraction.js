const ApplicationCommandInteraction = require("./ApplicationCommandInteraction");
/* It's a class that extends the ApplicationCommandInteraction class */
class CommandInteraction extends ApplicationCommandInteraction {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = CommandInteraction;
