const Role = require("../Structures/Role");
const Permissions = require("../Util/Permissions");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a Role Manager that handles operations related to roles in a guild.
 * @class
 * @extends Base
 */
class RoleManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a role to the cache and returns the role object.
   * @param {string | Role} roles - The role ID or role object to add to the cache.
   * @param {string} [guildId=this.guildId] - The ID of the guild the role belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for role caching.
   * @param {boolean} [options.cache=true] - Whether to cache the role object.
   * @param {boolean} [options.force=false] - Whether to force fetching the role from the API even if it is already in the cache.
   * @returns {Role | null} The role object that was added to the cache
   */
  _add(roles, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!roles) return null;
    const roleId = typeof roles === "string" ? roles : roles.id;
    let role;
    if (this.cache.has(roleId) && !options.force) {
      role = this.cache.get(roleId);
    } else {
      const newRole = new Role(
        typeof roles === "string"
          ? {
              id: roleId,
              partial: true,
            }
          : roles,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(roleId, newRole);

      role = newRole;
    }

    return role;
  }

  /**
   * Fetches roles from the server based on the provided roles and options.
   * @param {string | object} roles - The roles to fetch. Can be a string representing a role ID or an object containing options.
   * @param {object} options - The options for fetching roles. Can contain properties like cache and force.
   * @returns {Promise} - A promise that resolves to the fetched roles.
   */
  async fetch(roles, options) {
    if (typeof roles === "object" && !options) options = roles;
    const {cache = true, force = false} = options ?? {};
    const roleId = typeof roles === "string" ? roles : roles?.id;
    if (this.cache.has(roleId) && force && roleId) return this.cache.get(roleId);
    const fetchedRole = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/roles`);
    roles = new this.cache.constructor(fetchedRole?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
    return roleId ? this.cache.get(roleId) : roles;
  }

  /**
   * Creates a new role in the guild with the given options.
   * @param {Object} options - The options for creating the role.
   * @param {string} options.reason - The reason for creating the role.
   * @param {number} options.position - The position of the role in the hierarchy.
   * @returns {Promise<Role>} A promise that resolves with the created role.
   */
  async create(options = {}) {
    const {reason, position} = options;
    const body = await RoleManager.transformPayload(options);
    const role = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/roles`, {
      body,
      reason,
    });
    if (position)
      await this.modifyPosition({
        data: [{role: role?.id, position}],
        reason,
      });
    return this._add(role);
  }

  /**
   * Edits a role in the guild.
   * @param {string | Role} role - The role ID or role object to edit.
   * @param {Object} [options] - Additional options for editing the role.
   * @param {string} [options.reason] - The reason for editing the role.
   * @param {number} [options.position] - The new position of the role.
   * @returns {Promise<Role>} A promise that resolves with the edited role object.
   */
  async edit(role, options = {}) {
    const {reason, position} = options;
    const roleId = typeof role === "string" ? role : role?.id;
    const body = await RoleManager.transformPayload(options);
    role = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/roles/${roleId}`, {
      reason,
      body,
    });
    if (position) await this.modifyPosition({data: [{role: roleId, position}], reason});
    return this._add(role);
  }

  /**
   * Deletes a role from the guild.
   * @param {string | Role} role - The role to delete. Can be either the role ID or the Role object.
   * @param {string} reason - The reason for deleting the role.
   * @returns {Promise<Role>} - The deleted role.
   * @throws {Error} - If the role cannot be deleted.
   */
  async delete(role, reason) {
    const roleId = typeof role === "string" ? role : role?.id;
    const deletedRole = this._add(roleId, this.guildId);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/roles/${roleId}`, {reason});
    return deletedRole;
  }

  /**
   * Clones a role by creating a new instance of it.
   * @param {string | Object} [role] - The role to clone. Can be either a role ID or a role object.
   * @returns {Promise} - A promise that resolves with the cloned role.
   * @throws {RangeError} - If the role is not found in the cache.
   */
  async clone(role = {}) {
    const roleId = typeof role === "string" ? role : role.id;
    if (this.cache.has(roleId)) {
      role = this.cache.get(roleId);
      return await this.create(role);
    }

    throw new RangeError(`Role is uncached`);
  }

  /**
   * Modifies the position of roles in a guild.
   * @param {Object} [options] - The options for modifying the position.
   * @param {string} [options.reason] - The reason for the modification.
   * @param {Array} [options.data] - The data containing the roles to modify.
   * @returns {Promise} A promise that resolves with the modified roles.
   */
  async modifyPosition(options = {}) {
    const {reason} = options;
    const body = await Promise.all(options.data?.map((o) => RoleManager.transformPayload(o, true)));
    const roles = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/roles`, {
      body,
      reason,
    });
    return new this.cache.constructor(roles?.filter((o) => body.some((b) => b.id === o.id))?.map((o) => [o.id, this._add(o)]));
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the payload object based on the provided parameters.
   * @param {object} o - The payload object to transform.
   * @param {boolean} [modifyPosition=false] - Whether to modify the position property.
   * @returns {Promise<object>} - The transformed payload object.
   */
  static async transformPayload(o = {}, modifyPosition = false) {
    if (modifyPosition) {
      return {
        id: typeof o.role === "string" ? o.role : o.role?.id ?? undefined,
        position: o.position ?? undefined,
      };
    }
    if (typeof o.permissions === "bigint") o["permissions"] = o.permissions?.toString();
    return {
      name: o.name ?? undefined,
      permissions: o.permissions ? new Permissions(o.permissions).toString() : o.permissions,
      color: o.color ? Util.resolveColor(o.color) : undefined,
      hoist: o.hoist ?? undefined,
      icon: o.icon ? await Util.generateDataURI(o.icon) : undefined,
      unicode_emoji: o.unicodeEmoji ?? o.unicode_emoji ?? undefined,
      mentionable: o.mentionable ?? undefined,
    };
  }
}

module.exports = RoleManager;
