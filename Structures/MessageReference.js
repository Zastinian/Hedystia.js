const Base = require("../Base/base");
/**
 * It's a class that takes in a data object and a client, and then sets the properties of the class to
the values of the data object.
 * @class
 * @extends Base
 */
class MessageReference extends Base {
  /**
   * It's a constructor function that takes in two parameters, data and client, and sets the value of
   * this.messageId to data.message_id if it exists, otherwise it sets it to data.messageId if it exists,
   * otherwise it sets it to null.
   *
   * It does the same thing for the other three variables.
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client that is sending the request
   */
  constructor(data = {}, client) {
    super(client);
    this.messageId = data.message_id ?? data.messageId ?? null;
    this.channelid = data.channel_id ?? data.channelId ?? null;
    this.guildId = data.guild_id ?? data.guildId ?? null;
    this.failIfNotExists = data.fail_if_not_exists ?? data.failIfNotExists ?? null;
  }

  /**
   * It returns an object with the message ID, channel ID, guild ID, and fail if not exists
   * @returns The message ID, channel ID, guild ID, and fail if not exists.
   */
  toJSON() {
    return {
      message_id: this.messageId,
      channel_id: this.channelid,
      guild_id: this.guildId,
      fail_if_not_exists: this.failIfNotExists,
    };
  }
}

module.exports = MessageReference;
