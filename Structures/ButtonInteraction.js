const MessageComponentInteraction = require("./MessageComponentInteraction");
class ButtonInteraction extends MessageComponentInteraction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = ButtonInteraction;
