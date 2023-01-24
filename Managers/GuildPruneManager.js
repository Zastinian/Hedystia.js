const Base = require("../Base/base");
/* It's a class that allows you to prune members from a guild */
class GuildPruneManager extends Base {
  /**
   * `constructor(guildid, client)` is a function that takes two arguments, `guildid` and `client`, and
   * sets the `guildid` property of the class to the `guildid` argument, and the `client` property of the
   * class to the `client` argument
   * @param guildid - The ID of the guild you want to get the settings for.
   * @param client - The client object
   */
  constructor(guildid, client) {
    super(client);

    this.guildid = guildid;
  }

  /**
   * It prunes members from a guild
   * @param [options] - An object containing the following parameters:
   * @returns The number of members that were pruned.
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
   * It fetches the prune count of a guild
   * @param [options] - An object containing the following parameters:
   * @returns The number of members that would be pruned.
   */
  async fetchCount(options = {}) {
    const query = GuildPruneManager.transformOptions(options);
    delete query["complete_prune_count"];
    const pruneCount = await this.client.api.get(`${this.client.root}/guilds/${this.guildid}/prune`, {query});
    return pruneCount;
  }

  /**
   * It takes an array of role objects or strings and returns an array of role IDs
   * @param [roles] - The roles to check against. This can be a single role, an array of roles, or an
   * object with a `roles` property.
   * @returns An array of strings
   */
  static transformRoles(roles = {}) {
    if (Array.isArray(roles)) return roles?.map((o) => (typeof o === "string" ? o : o.id));
    return [roles];
  }

  /**
   * It takes an object with the keys `days`, `count`, and `roles`, and returns an object with the keys
   * `days`, `complete_prune_count`, and `include_roles`
   * @param [o] - The options object.
   * @returns The transformed options for the prune command.
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
