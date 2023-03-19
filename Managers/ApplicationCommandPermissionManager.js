const ApplicationCommandPermission = require("../Structures/ApplicationCommandPermission");
const {ApplicationCommandPermissionType} = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages the permissions of a command for a specific guild.
 */
class ApplicationCommandPermissionManager extends Base {
  /**
   * This function is a constructor for the class GuildSettings. It takes in a client and a guildId and
   * sets the guildId to the guildId that was passed in.
   * @param client - The client object
   * @param guildId - The ID of the guild you want to get the settings for.
   */
  constructor(client, guildId) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * _add(commands, guildId = this.guildId, options = {cache: true, force: false})
   * @param commands - The command or command ID to add.
   * @param [guildId] - The ID of the guild to get the permissions for.
   * @param [options] - cache = true, force = false
   * @returns The return value is a new instance of the ApplicationCommandPermission class.
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
   * It fetches the command permissions for a guild
   * @param commands - The command ID or an array of command IDs to fetch.
   * @param options - {
   * @returns The return value is a new instance of the cache constructor.
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
   * It fetches the permissions of a command from the API
   * @param commands - The command to fetch permissions for.
   * @param [cache=true] - Whether or not to cache the command permissions.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @param [guild] - The guild to fetch the command permissions for.
   * @returns The permissions of the command.
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
   * It returns the Collection object.
   * @returns The Collection object.
   */
  get cache() {
    return Collection;
  }

  /**
   * "If the object has an id property, and that property is a string, then return that property,
   * otherwise if the object has an id property, and that property has an id property, then return that
   * property, otherwise return undefined."
   *
   * @param [o] - {} -&gt; this is the object that is being passed in.
   * @returns The return value is an object with the following properties:
   */
  static transformPermissions(o = {}) {
    return {
      id: typeof o.id === "string" ? o.id : o.id?.id ?? undefined,
      type: (typeof o.type === "string" ? ApplicationCommandPermissionType[o.type] : o.type) ?? 2,
      permission: o.permission,
    };
  }

  /**
   * It takes an object with a command property and a permissions property, and returns an object with
   * an id property and a permissions property
   * @param [o] - The object that is being transformed.
   * @returns The return value is an object with two properties: id and permissions.
   */
  static transformPermission(o = {}) {
    return {
      id: typeof o.command === "string" ? o.command : o.command?.id,
      permissions: o.permissions?.map((o) => this.transformPermissions(o)),
    };
  }

  /**
   * It takes a payload and fetched data, and returns an array of objects that are not in the payload
   * @param payload - The payload that is sent to the server.
   * @param fetchedData - Array of objects
   * @returns An array of objects.
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
