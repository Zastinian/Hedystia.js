const RoleManager = require("./RoleManager");
/* `GuildRoleManager` is a `RoleManager` that only contains roles from a specific guild */
class GuildRoleManager extends RoleManager {
  /**
   * `constructor` is a function that runs when a new instance of the class is created
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It sorts the roles in the cache by their position, and then returns the first one
   * @returns The highest role in the guild.
   */
  get highest() {
    const sortedRoles = this.cache.sort((a, b) => b.position - a.position);
    return sortedRoles.first();
  }

  /**
   * It returns the cached data for the guild
   * @returns The cache is being returned.
   */
  get everyone() {
    return this.cache.get(this.guildId);
  }

  /**
   * It returns the cache, but only the cache that has the same guild ID as the current guild
   * @returns The cache of the super class, but filtered to only include objects that have a guild_id or
   * guildId property that matches the guildId of the current class.
   */
  get cache() {
    return super.cache.filter((o) => (o.guild_id ?? o.guildId) === this.guildId);
  }
}

module.exports = GuildRoleManager;
