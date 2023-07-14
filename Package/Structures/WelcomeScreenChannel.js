const Base = require("../Base/base");
/**
 * Represents a welcome screen channel.
 * @class
 * @extends Base
 */
class WelcomeScreenChannel extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client object used to interact with the Discord API.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.channelId = data.channel_id ?? null;
    this.description = data.description ?? null;
    this.emojiId = data.emoji_id ?? null;
    this.emojiName = data.emoji_name ?? null;
  }

  /**
   * Retrieves the channel object associated with this instance.
   * @returns {Channel | null} The channel object, or null if it does not exist.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = WelcomeScreenChannel;
