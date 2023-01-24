const Channel = require("./Channel");
/* It's a class that extends the Channel class, and adds a few methods to it */
class CategoryChannel extends Channel {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * It returns a collection of channels that are children of the current channel
   * @returns A collection of channels that are children of this channel.
   */
  get childrens() {
    return this.client.channels.cache.filter((o) => (o.parent_id ?? o.parentId) === this.id);
  }

  /**
   * It sorts the childrens array by position, and then returns the first element of the sorted array
   * @returns The first channel in the array.
   */
  get highest() {
    const channel = this.childrens.sort((a, b) => a.position - b.position);
    return channel.first();
  }
}

module.exports = CategoryChannel;
