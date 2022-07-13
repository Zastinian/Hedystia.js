const ApplicationCommandInteraction = require("./ApplicationCommandInteraction");
class ContextMenuInteraction extends ApplicationCommandInteraction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);

    this.targetId = data.data?.target_id ?? null;
    this.resolved = data.data?.resolved ?? null;
  }
}

module.exports = ContextMenuInteraction;
