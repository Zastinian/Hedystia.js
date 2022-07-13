const Base = require("../Base/base");
class GuildPruneManager extends Base {
  constructor(guildid, client) {
    super(client);

    this.guildid = guildid;
  }

  async prune(options = {}) {
    const { reason } = options;
    const body = GuildPruneManager.transformOptions(options);
    const prune = options.getCount
      ? await this.fetchCount(options)
      : await this.client.api.post(
          `${this.client.root}/guilds/${this.guildid}/prune`,
          { reason, body }
        );
    return prune.pruned;
  }

  async fetchCount(options = {}) {
    const query = GuildPruneManager.transformOptions(options);
    delete query["complete_prune_count"];
    const pruneCount = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildid}/prune`,
      { query }
    );
    return pruneCount;
  }

  static transformRoles(roles = {}) {
    if (Array.isArray(roles))
      return roles?.map((o) => (typeof o === "string" ? o : o.id));
    return [roles];
  }

  static transformOptions(o = {}) {
    if (o.days < 1 || o.days > 30)
      throw new RangeError(
        `Los días de eliminacion del servidor deben estar entre el 1 y el 30`
      );
    return {
      days: o.days ?? 7,
      complete_prune_count: o.count ?? true,
      include_roles: this.transformRoles(o.roles) ?? undefined,
    };
  }
}

module.exports = GuildPruneManager;
