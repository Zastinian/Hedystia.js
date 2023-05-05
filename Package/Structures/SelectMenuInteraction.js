const MessageComponentInteraction = require("./MessageComponentInteraction");
/**
 * It's a class that extends another class, and it has a constructor that takes in some data, a
guildId, and a client, and it has a property called values that is set to an array of values
 * @class
 * @extends MessageComponentInteraction
 */
class SelectMenuInteraction extends MessageComponentInteraction {
  /**
   * The above function is a constructor function that takes in three parameters, data, guildId, and
   * client. The data parameter is an object that has a property called data, which has a property
   * called values. The guildId parameter is a string, and the client parameter is an object. The
   * function returns an object that has a property called values, which is an array
   * @param [data] - The data that was passed to the constructor.
   * @param guildId - The ID of the guild the data is for.
   * @param client - The client instance
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.values = data.data?.values ?? [];
  }
}

module.exports = SelectMenuInteraction;
