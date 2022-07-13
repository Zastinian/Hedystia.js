const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
class RolePrompts extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = data.guild_id ?? guildId;
    this.description = data.description ?? null;
    this.disabled = data.disabled ?? null;
    this.id = data.id ?? null;
    this.roles = new RaidenCol(
      data.roles?.map((o) => [o.role_id, RolePrompts.transformRolesData(o)])
    );
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.singleSelect = data.single_select ?? null;
    this.title = data.title ?? null;
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  static transformRolesData(roles = {}) {
    return {
      emojiId: roles.emojiId ?? roles.emoji_id ?? null,
      emojiName: roles.emojiName ?? roles.emoji_name ?? null,
      name: roles.name ?? null,
      rolesId: roles.role_id ?? null,
    };
  }
}

module.exports = RolePrompts;
