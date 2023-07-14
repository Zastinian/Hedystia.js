const RoleManager = require("./RoleManager");
/**
 * A class representing a manager for guild roles.
 * @class
 * @extends RoleManager
 */
class GuildRoleManager extends RoleManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Get the highest role from the cache based on position.
   * @returns The highest role object.
   */
  get highest() {
    const sortedRoles = this.cache.sort((a, b) => b.position - a.position);
    return sortedRoles.first();
  }

  /**
   * Get the cached data for everyone in the guild.
   * @returns The cached data for everyone in the guild.
   */
  get everyone() {
    return this.cache.get(this.guildId);
  }

  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} - The filtered cache objects for the current guild.
   */
  get cache() {
    return super.cache.filter((o) => (o.guild_id ?? o.guildId) === this.guildId);
  }
}

module.exports = GuildRoleManager;
