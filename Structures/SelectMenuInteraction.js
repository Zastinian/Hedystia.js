const MessageComponentInteraction = require("./MessageComponentInteraction");
class SelectMenuInteraction extends MessageComponentInteraction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.values = data.data?.values ?? [];
  }
}

module.exports = SelectMenuInteraction;
