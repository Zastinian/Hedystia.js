const MessageComponentInteraction = require("./MessageComponentInteraction");
/* It's a class that extends is MessageComponentInteraction */
class ButtonInteraction extends MessageComponentInteraction {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that the command is being run from
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = ButtonInteraction;
