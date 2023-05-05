const ApplicationCommandInteraction = require("./ApplicationCommandInteraction");
/* It's a class that extends the ApplicationCommandInteraction class, and it takes in data, guildId,
and client as parameters. It then sets the targetId and resolved properties to the data that is
passed in */
class ContextMenuInteraction extends ApplicationCommandInteraction {
  /**
   * It's a constructor function that takes in data, guildId, and client as parameters. It then calls the
   * super function, which is a function that is inherited from the parent class. It then sets the
   * targetId and resolved properties to the data that is passed in.
   * @param [data] - The data that was sent from the API.
   * @param guildId - The ID of the guild the case is in
   * @param client - The client that the event was emitted from
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);

    this.targetId = data.data?.target_id ?? null;
    this.resolved = data.data?.resolved ?? null;
  }
}

module.exports = ContextMenuInteraction;
