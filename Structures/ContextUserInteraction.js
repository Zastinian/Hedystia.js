const ContextMenuInteraction = require("./ContextMenuInteraction");
class ContextUserInteraction extends ContextMenuInteraction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = ContextUserInteraction;
