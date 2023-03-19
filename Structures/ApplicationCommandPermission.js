const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const {ApplicationCommandPermissionType} = require("../Util/Constants");
const Base = require("../Base/base");
/* It's a class that stores the permissions of a command in a guild.
 */
class ApplicationCommandPermission extends Base {
  /**
   * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
   * commandId to the id of the data object, or undefined if it doesn't exist, and sets the applicationId
   * to the application_id of the data object, or null if it doesn't exist. It then sets the guildId to
   * the guildId, and then sets the permissions to a new RaidenCol object, which is a collection class,
   * and then maps the permissions of the data object to a new array, and then sets the id of the object
   * to the id of the data object, and then sets the permissions of the object to the
   * ApplicationCommandPermission.transformPermissions function, which takes in the object.
   * @param [data] - The data that is passed to the constructor
   * @param guildId - The guild id
   * @param client - RaidenClient
   */
  constructor(data = {}, guildId, client) {
    super(client);
    (this.commandId = data.id ?? undefined), (this.applicationId = data.application_id ?? null);
    this.guildId = guildId;
    this.permissions = new RaidenCol(data.permissions?.map((o) => [o.id, ApplicationCommandPermission.transformPermissions(o)]));
  }

  /**
   * It fetches the permissions of the command
   * @param [options] - An object containing the following properties:
   * @returns The return value is the result of the await expression.
   */
  async fetch(options = {}) {
    return await this.guild.commands?.permissions.fetch(this, options);
  }

  /**
   * If the command is in the client's cache, return it. If it's not, check if it's in the guild's cache.
   * If it's not, return null.
   * @returns The command object.
   */
  get command() {
    return this.client.application.commands.cache.get(this.commandId) ?? this.guild.commands?.cache.get(this.commandId) ?? null;
  }

  /**
   * It returns the guild object if it exists, otherwise it returns null.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It takes an object with a property called `type` that can be a number or a string, and if it's a
   * number, it converts it to a string using a lookup table.
   *
   * The lookup table is defined in the `ApplicationCommandPermissionType` enum.
   *
   * The function returns an object with the same properties as the input object, but with the `type`
   * property converted to a string if it was a number.
   *
   * The function is called like this:
   * @param [permissions] - {
   * @returns The return value is an object with the following properties:
   * id: The id of the permission.
   * type: The type of the permission.
   * permission: The permission.
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
