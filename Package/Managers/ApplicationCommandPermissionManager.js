const ApplicationCommandPermission = require("../Structures/ApplicationCommandPermission");
const {ApplicationCommandPermissionType} = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Manages application command permissions for a specific guild.
 * @class
 * @extends Base
 * @param {Client} client - The client instance.
 * @param {string} guildId - The ID of the guild.
 */
class ApplicationCommandPermissionManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The Discord client object.
   * @param {string} guildId - The ID of the guild.
   */
  constructor(client, guildId) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Adds a command permission to the guild.
   * @param {string | ApplicationCommand} commands - The command ID or the command object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the permission to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the permission.
   * @param {boolean} [options.cache=true] - Whether to cache the permission.
   * @param {boolean} [options.force=false] - Whether to force adding the permission even if it already exists in the cache.
   * @returns {ApplicationCommandPermission} The added command permission.
   */
  _add(commands, guildId = this.guildId, options = {cache: true, force: false}) {
    const commandId = typeof commands === "string" ? commands : commands.id;
    let perms;
    if (this.cache.has(commandId) && !options.force) {
      perms = this.cache.get(commandId);
    } else {
      const newPerm = new ApplicationCommandPermission(
        typeof commands === "string"
          ? {
              partial: true,
              id: commandId,
            }
          : commands,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(commandId, newPerm);

      perms = newPerm;
    }

    return perms;
  }

  /**
   * Fetches commands from the API based on the provided parameters.
   * @param {string | object} commands - The command ID or an object containing the command details.
   * @param {object} [options] - Additional options for the fetch operation.
   * @param {boolean} [options.cache] - Whether to cache the fetched commands.
   * @param {boolean} [options.force] - Whether to force fetch the commands even if they are already cached.
   * @param {string | Guild} [options.guild] - The ID or instance of the guild to fetch the commands for.
   * @returns {Promise<Cache>} A promise that resolves to a cache object containing the fetched commands.
   * @throws {RangeError} If the guild ID is not provided.
   */
  async fetch(commands, options) {
    if (typeof commands?.commandId !== "undefined" || typeof commands === "string")
      return this._fetchId(commands, options?.cache, options?.force, options?.guild);
    if (typeof commands === "object" && !options) options = commands;
    const {cache, force, guild = this.guildId} = options ?? {};
    if (!guild) throw new RangeError(`The application's command permissions are bound to the server, so specify a resolvable server`);
    const guildId = typeof guild === "string" ? guild : guild.id;
    const permissions = await this.client.api.get(`${this.client.root}/applications/${this.client.user.id}/guilds/${guildId}/commands/permissions`);
    return new this.cache.constructor(permissions?.map((o) => [o.id, this._add(o, guild, {cache, force})]));
  }

  /**
   * Fetches the ID of a command from the server's command permissions.
   * @param {string | { commandId: string }} commands - The ID of the command or an object containing the command ID.
   * @param {boolean} [cache=true] - Whether to cache the fetched permissions.
   * @param {boolean} [force=false] - Whether to force fetching the permissions even if they are already cached.
   * @param {string | { id: string }} [guild=this.guildId] - The ID of the guild or an object containing the guild ID.
   * @returns {Promise<any>} - A promise that resolves to the fetched permissions.
   * @throws {RangeError} - If the guild ID is not provided.
   */
  async _fetchId(commands, cache = true, force = false, guild = this.guildId) {
    if (!guild) throw new RangeError(`The application's command permissions are server bound, please specify a server that can resolve`);
    const commandId = typeof commands === "string" ? commands : commands.commandId;
    const guildId = typeof guild === "string" ? guild : guild.id;
    if (this.cache.has(commandId) && force) return this.cache.get(commandId);
    const permissions = await this.client.api.get(
      `${this.client.root}/applications/${this.client.user.id}/guilds/${guildId}/commands/${commandId}/permissions`
    );
    return this._add(permissions, guildId, {cache, force});
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms a permissions object into the desired format.
   * @param {Object} o - The permissions object to transform.
   * @returns {Object} - The transformed permissions object.
   * - id: The ID of the permission. If the ID is a string, it is used as is. If it is an object, the "id" property is used. If neither is present, it is set to undefined.
   * - type: The type of the permission. If the type is a string, it is converted to the corresponding ApplicationCommandPermissionType enum value. If it is already a valid enum value, it is used as is. If neither is present, it is set to 2 (USER).
   * - permission: The
   */
  static transformPermissions(o = {}) {
    return {
      id: typeof o.id === "string" ? o.id : o.id?.id ?? undefined,
      type: (typeof o.type === "string" ? ApplicationCommandPermissionType[o.type] : o.type) ?? 2,
      permission: o.permission,
    };
  }

  /**
   * Transforms a permission object into a new format.
   * @param {Object} o - The permission object to transform.
   * @returns {Object} - The transformed permission object.
   */
  static transformPermission(o = {}) {
    return {
      id: typeof o.command === "string" ? o.command : o.command?.id,
      permissions: o.permissions?.map((o) => this.transformPermissions(o)),
    };
  }

  /**
   * Parses the remove options from the payload and fetched data to create an array of objects
   * that should be removed.
   * @param {object} payload - The payload object containing the remove options.
   * @param {array} fetchedData - The fetched data array to filter and map.
   * @returns {array} - An array of objects that should be removed based on the remove options.
   */
  static parseRemoveOptions(payload, fetchedData) {
    let arr = [];
    const data = fetchedData;
    if (payload.channels) {
      payload.channels ? data.filter((o) => o.type === "Channel" && !payload.channels.includes(o.id))?.mapVal((o) => arr.push(o)) : null;
    }
    if (payload.users) {
      payload.users ? data.filter((o) => o.type === "User" && !payload.users.includes(o.id))?.mapVal((o) => arr.push(o)) : null;
    }
    if (payload.roles) {
      payload.roles ? data.filter((o) => o.type === "Role" && !payload.roles.includes(o.id))?.mapVal((o) => arr.push(o)) : null;
    }
    return arr;
  }
}

module.exports = ApplicationCommandPermissionManager;
