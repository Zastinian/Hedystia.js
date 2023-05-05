const BaseGuildChannel = require("./BaseGuildChannel");
/**
 * It's a class that extends another class, and it has a constructor that takes in a data object, a
guildId, and a client
 * @class 
 * @extends BaseGuildChannel
 */
class TextChannel extends BaseGuildChannel {
  /**
   * It's a constructor function that takes in three parameters, data, guildId, and client.
   * @param [data] - The data that the class will be constructed with.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = TextChannel;
