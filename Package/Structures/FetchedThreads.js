const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/**
 * A class representing a collection of fetched threads from a guild.
 * @class
 * @extends Base
 */
class FetchedThreads extends Base {
  /**
   * @param {Object} data - The data for the fetched threads.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client that instantiated this class.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.threads = new RaidenCol(data.threads?.map((o) => [o.id, this.client.channels._add(o, this.guildId)]));
    this.hasMore = data.has_more ?? null;
  }
}

module.exports = FetchedThreads;
