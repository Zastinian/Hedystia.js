const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/**
 * Represents a collection of fetched threads.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the fetched threads.
 * @param {string} guildId - The ID of the guild the threads belong to.
 * @param {Client} client - The client instance.
 * @property {string} guildId - The ID of the guild the threads belong to.
 * @property {RaidenCol} threads - A collection of threads, where each thread is represented by its ID and a channel object.
 * @property {boolean|null} hasMore - Indicates whether there are more threads to fetch.
 */
class FetchedThreads extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.threads = new RaidenCol(data.threads?.map((o) => [o.id, this.client.channels._add(o, this.guildId)]));
    this.hasMore = data.has_more ?? null;
  }
}

module.exports = FetchedThreads;
