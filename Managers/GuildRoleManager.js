const RoleManager = require("./RoleManager");
class GuildRoleManager extends RoleManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  get highest() {
    const sortedRoles = this.cache.sort((a, b) => b.position - a.position);
    return sortedRoles.first();
  }

  get everyone() {
    return this.cache.get(this.guildId);
  }

  get cache() {
    return super.cache.filter(
      (o) => (o.guild_id ?? o.guildId) === this.guildId
    );
  }
}

module.exports = GuildRoleManager;
