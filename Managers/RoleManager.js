const Role = require("../Structures/Role");
const Permissions = require("../Util/Permissions");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages roles */
class RoleManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a role to the cache
   * @param roles - The role object or role ID to add to the cache.
   * @param [guildId] - The guild ID to use for the role.
   * @param [options] - {cache: true, force: false}
   * @returns A role object
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
   * It fetches all the roles in a guild and returns them
   * @param roles - The role(s) to fetch. Can be a role ID, a role object, or an array of role objects.
   * @param options - An object containing the following properties:
   * @returns The role object
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
   * It creates a role
   * @param [options] - An object containing the following properties:
   * @returns A new role object
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
   * It edits a role
   * @param role - The role to edit. Can be a role object or a role ID.
   * @param [options] - An object containing the following properties:
   * @returns The role object
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
   * `delete` deletes a role
   * @param role - The role to delete. Can be a role object or a role ID.
   * @param reason - The reason for the role deletion.
   * @returns The deleted role
   */
  async delete(role, reason) {
    const roleId = typeof role === "string" ? role : role?.id;
    const deletedRole = this._add(roleId, this.guildId);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/roles/${roleId}`, {reason});
    return deletedRole;
  }

  /**
   * `clone` clones a role
   * @param [role] - The role to clone.
   * @returns A new role object
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
   * It takes an array of role objects, transforms them into a format that the API can understand, and
   * then sends them to the API
   * @param [options] - An object containing the following properties:
   * @returns A new cache object with the roles that were modified.
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
   * It returns the Collection object.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes an object, and returns an object with the same properties, but with some of them modified
   * @param [o] - The object to transform.
   * @param [modifyPosition=false] - Whether or not to modify the position of the role.
   * @returns A function that takes two parameters, o and modifyPosition.
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
