const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * Represents a RolePrompts object that extends the Base class.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the properties of the RolePrompts.
 * @param {string} guildId - The ID of the guild associated with the RolePrompts.
 * @param {Client} client - The client object associated with the RolePrompts.
 * @property {boolean} partial - Indicates if the RolePrompts object is partial or not.
 * @property {string} guildId - The ID of the guild associated with the RolePrompts.
 * @property {string|null} description - The description of the RolePrompts.
 * @property {boolean|null}
 */
class RolePrompts extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the instance.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
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
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * Transforms the roles data object by extracting specific properties and assigning default values if necessary.
   * @param {Object} roles - The roles data object.
   * @returns {Object} - The transformed roles data object with extracted properties and default values.
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
