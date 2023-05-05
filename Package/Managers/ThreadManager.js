const BaseThreadManager = require("./BaseThreadManager");
/* It's a class that extends the BaseThreadManager class, and it filters the cache to only include
threads that are in the channel that the ThreadManager is for */
class ThreadManager extends BaseThreadManager {
  /**
   * `This function is a constructor for the class.`
   * @param channelId - The channel ID of the channel you want to send the message to.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - The client that the command is being run on.
   */
  constructor(channelId, guildId, client) {
    super(client);
    this.channelId = channelId;
    this.guildId = guildId;
  }

  /**
   * It returns the cache, but only the cache items that have a parentId that matches the channelId
   * @returns The cache property is being returned.
   */
  get cache() {
    return super.cache.filter((o) => o.parentId === this.channelId);
  }
}

module.exports = ThreadManager;
