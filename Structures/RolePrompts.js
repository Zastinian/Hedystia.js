const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * It's a class that takes in data, guildId, and client.
 * @class
 * @extends Base
 */
class RolePrompts extends Base {
  /**
   * It's a constructor for a class that takes in data, guildId, and client.
   * @param [data] - The data that is being passed in.
   * @param guildId - The guild ID
   * @param client - The client
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = data.guild_id ?? guildId;
    this.description = data.description ?? null;
    this.disabled = data.disabled ?? null;
    this.id = data.id ?? null;
    this.roles = new RaidenCol(data.roles?.map((o) => [o.role_id, RolePrompts.transformRolesData(o)]));
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.singleSelect = data.single_select ?? null;
    this.title = data.title ?? null;
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * It takes an object with keys that are either camelCase or snake_case and returns an object with keys
   * that are camelCase
   * @param [roles] - The object that contains the data that needs to be transformed.
   * @returns An object with the following properties:
   * - emojiId
   * - emojiName
   * - name
   * - rolesId
   */
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
