const ContextMenuInteraction = require("./ContextMenuInteraction");
/* It's a class that extends another class, and it's constructor takes in 3 arguments. */
class ContextUserInteraction extends ContextMenuInteraction {
  /**
   * It's a constructor function that takes in data, guildId, and client as parameters.
   * @param [data] - The data that the class will be constructed with.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = ContextUserInteraction;
