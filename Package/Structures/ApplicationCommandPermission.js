const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const {ApplicationCommandPermissionType} = require("../Util/Constants");
const Base = require("../Base/base");
/**
 * Represents an application command permission.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the command permission information.
 * @param {string} guildId - The ID of the guild the command permission belongs to.
 * @param {Client} client - The client instance.
 */
class ApplicationCommandPermission extends Base {
  /**
   * Constructs a new instance of the CommandPermissions class.
   * @constructor
   * @param {Object} [data] - The data object containing the command permissions.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    (this.commandId = data.id ?? undefined), (this.applicationId = data.application_id ?? null);
    this.guildId = guildId;
    this.permissions = new RaidenCol(data.permissions?.map((o) => [o.id, ApplicationCommandPermission.transformPermissions(o)]));
  }

  /**
   * Fetches the permissions for the guild commands.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @returns {Promise} - A promise that resolves to the fetched permissions.
   */
  async fetch(options = {}) {
    return await this.guild.commands?.permissions.fetch(this, options);
  }

  /**
   * Retrieves the command associated with this instance.
   * @returns The command object if found, otherwise null.
   */
  get command() {
    return this.client.application.commands.cache.get(this.commandId) ?? this.guild.commands?.cache.get(this.commandId) ?? null;
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Transforms a permissions object into a formatted object with specific properties.
   * @param {Object} permissions - The permissions object to transform.
   * @returns {Object} - The transformed permissions object.
   */
  static transformPermissions(permissions = {}) {
    return {
      id: permissions.id ?? undefined,
      type: (typeof permissions.type === "number" ? ApplicationCommandPermissionType[permissions.type] : permissions.type) ?? undefined,
      permission: permissions.permission ?? undefined,
    };
  }
}

module.exports = ApplicationCommandPermission;
