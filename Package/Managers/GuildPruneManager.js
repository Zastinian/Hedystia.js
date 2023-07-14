const Base = require("../Base/base");
/**
 * Represents a manager for pruning members in a guild.
 * @class
 * @extends Base
 * @param {string} guildid - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildPruneManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildid - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildid, client) {
    super(client);

    this.guildid = guildid;
  }

  /**
   * Prunes (removes) inactive members from the guild based on the specified options.
   * @param {Object} [options] - The options for pruning.
   * @param {string} [options.reason] - The reason for the prune.
   * @returns {boolean} - True if the prune was successful, false otherwise.
   * @throws {Error} - If an error occurs during the prune process.
   */
  async prune(options = {}) {
    const {reason} = options;
    const body = GuildPruneManager.transformOptions(options);
    const prune = options.getCount
      ? await this.fetchCount(options)
      : await this.client.api.post(`${this.client.root}/guilds/${this.guildid}/prune`, {reason, body});
    return prune.pruned;
  }

  /**
   * Fetches the count of pruned members in a guild based on the given options.
   * @param {Object} [options] - The options for fetching the prune count.
   * @returns {Promise<number>} - A promise that resolves to the prune count.
   */
  async fetchCount(options = {}) {
    const query = GuildPruneManager.transformOptions(options);
    delete query["complete_prune_count"];
    const pruneCount = await this.client.api.get(`${this.client.root}/guilds/${this.guildid}/prune`, {query});
    return pruneCount;
  }

  /**
   * Transforms the given roles object into an array of role IDs.
   * @param {Object | Array} roles - The roles object to transform.
   * @returns {Array} - An array of role IDs.
   */
  static transformRoles(roles = {}) {
    if (Array.isArray(roles)) return roles?.map((o) => (typeof o === "string" ? o : o.id));
    return [roles];
  }

  /**
   * Transforms the options object for server deletion.
   * @param {Object} o - The options object.
   * @param {number} o.days - The number of days for server deletion. Must be between 1 and 30.
   * @param {boolean} o.count - Whether to include the complete prune count. Default is true.
   * @param {Array<string>} o.roles - The roles to include in the deletion. Default is undefined.
   * @returns {Object} - The transformed options object.
   * @throws {RangeError} - If the days value is not between 1 and 30.
   */
  static transformOptions(o = {}) {
    if (o.days < 1 || o.days > 30) throw new RangeError(`Server deletion days must be between 1 and 30 days.`);
    return {
      days: o.days ?? 7,
      complete_prune_count: o.count ?? true,
      include_roles: this.transformRoles(o.roles) ?? undefined,
    };
  }
}

module.exports = GuildPruneManager;
