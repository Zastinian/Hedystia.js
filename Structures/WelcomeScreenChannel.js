const Base = require("../Base/base");
/**
 * It's a class that represents a welcome screen channel
 * @class
 * @extends Base
 */
class WelcomeScreenChannel extends Base {
  /**
   * This function is a constructor for the class ReactionRole.
   * @param [data] - The data that was sent from the API.
   * @param guildId - The ID of the guild the reaction role is in.
   * @param client - The client that the event was emitted from
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
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = WelcomeScreenChannel;
