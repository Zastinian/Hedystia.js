const ContextMenuInteraction = require("./ContextMenuInteraction");
class ContextMessageInteraction extends ContextMenuInteraction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = ContextMessageInteraction;
