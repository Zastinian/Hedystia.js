const BaseGuildChannel = require("./BaseGuildChannel");
/**
 * It's a class that extends BaseGuildChannel, and it has two methods: follow and crosspost
 * @class
 * @extends BaseGuildChannel
 */
class NewsChannel extends BaseGuildChannel {
  /**
   * It's a constructor function that takes in three parameters, data, guildId, and client.
   * @param [data] - The data that the role is being created with.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * This function is used to follow a channel
   * @param [options] - Object
   * @returns The channel object.
   */
  async follow(options = {}) {
    return await this.client.channels.follow(this, options);
  }

  /**
   * It takes a message object and returns a promise that resolves to the message object
   * @param message - The message to crosspost.
   * @returns The return value of the function is the return value of the function that is being
   * called.
   */
  async crosspost(message) {
    return await this.messages?.crosspost(this.id, message);
  }
}

module.exports = NewsChannel;
