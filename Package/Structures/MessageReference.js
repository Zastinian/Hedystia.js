const Base = require("../Base/base");
/**
 * Represents a reference to a message.
 * @class
 * @extends Base
 */
class MessageReference extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   * @property {string|null} messageId - The ID of the message.
   * @property {string|null} channelId - The ID of the channel.
   * @property {string|null} guildId - The ID of the guild.
   * @property {boolean|null} failIfNotExists - Indicates whether to fail if the entity does not exist.
   */
  constructor(data = {}, client) {
    super(client);
    this.messageId = data.message_id ?? data.messageId ?? null;
    this.channelid = data.channel_id ?? data.channelId ?? null;
    this.guildId = data.guild_id ?? data.guildId ?? null;
    this.failIfNotExists = data.fail_if_not_exists ?? data.failIfNotExists ?? null;
  }

  /**
   * Converts the current object to a JSON representation.
   * @returns {Object} - The JSON representation of the object.
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
