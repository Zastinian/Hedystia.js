const Channel = require("./Channel");
/**
 * Represents a category channel in a guild.
 * @class
 * @extends Channel
 */
class CategoryChannel extends Channel {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * Retrieves the child channels of the current channel.
   * @returns {Collection<Snowflake, GuildChannel>} A collection of child channels.
   */
  get childrens() {
    return this.client.channels.cache.filter((o) => (o.parent_id ?? o.parentId) === this.id);
  }

  /**
   * Get the highest child element based on their position property.
   * @returns The highest child element.
   */
  get highest() {
    const channel = this.childrens.sort((a, b) => a.position - b.position);
    return channel.first();
  }
}

module.exports = CategoryChannel;
