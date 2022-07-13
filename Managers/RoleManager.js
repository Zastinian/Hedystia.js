const Role = require("../Structures/Role");
const Permissions = require("../Util/Permissions");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class RoleManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(roles, guildId = this.guildId, options = { cache: true, force: false }) {
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

  async fetch(roles, options) {
    if (typeof roles === "object" && !options) options = roles;
    const { cache = true, force = false } = options ?? {};
    const roleId = typeof roles === "string" ? roles : roles?.id;
    if (this.cache.has(roleId) && force && roleId)
      return this.cache.get(roleId);
    const fetchedRole = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/roles`
    );
    roles = new this.cache.constructor(
      fetchedRole?.map((o) => [
        o.id,
        this._add(o, this.guildId, { cache, force }),
      ])
    );
    return roleId ? this.cache.get(roleId) : roles;
  }

  async create(options = {}) {
    const { reason, position } = options;
    const body = await RoleManager.transformPayload(options);
    const role = await this.client.api.post(
      `${this.client.root}/guilds/${this.guildId}/roles`,
      { body, reason }
    );
    if (position)
      await this.modifyPosition({
        data: [{ role: role?.id, position }],
        reason,
      });
    return this._add(role);
  }

  async edit(role, options = {}) {
    const { reason, position } = options;
    const roleId = typeof role === "string" ? role : role?.id;
    const body = await RoleManager.transformPayload(options);
    role = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/roles/${roleId}`,
      { reason, body }
    );
    if (position)
      await this.modifyPosition({ data: [{ role: roleId, position }], reason });
    return this._add(role);
  }

  async delete(role, reason) {
    const roleId = typeof role === "string" ? role : role?.id;
    const deletedRole = this._add(roleId, this.guildId);
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/roles/${roleId}`,
      { reason }
    );
    return deletedRole;
  }

  async clone(role = {}) {
    const roleId = typeof role === "string" ? role : role.id;
    if (this.cache.has(roleId)) {
      role = this.cache.get(roleId);
      return await this.create(role);
    }

    throw new RangeError(`Role is uncached`);
  }

  async modifyPosition(options = {}) {
    const { reason } = options;
    const body = await Promise.all(
      options.data?.map((o) => RoleManager.transformPayload(o, true))
    );
    const roles = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/roles`,
      { body, reason }
    );
    return new this.cache.constructor(
      roles
        ?.filter((o) => body.some((b) => b.id === o.id))
        ?.map((o) => [o.id, this._add(o)])
    );
  }

  get cache() {
    return Collection;
  }

  static async transformPayload(o = {}, modifyPosition = false) {
    if (modifyPosition) {
      return {
        id: typeof o.role === "string" ? o.role : o.role?.id ?? undefined,
        position: o.position ?? undefined,
      };
    }
    if (typeof o.permissions === "bigint")
      o["permissions"] = o.permissions?.toString();
    return {
      name: o.name ?? undefined,
      permissions: o.permissions
        ? new Permissions(o.permissions).toString()
        : o.permissions,
      color: o.color ? Util.resolveColor(o.color) : undefined,
      hoist: o.hoist ?? undefined,
      icon: o.icon ? await Util.generateDataURI(o.icon) : undefined,
      unicode_emoji: o.unicodeEmoji ?? o.unicode_emoji ?? undefined,
      mentionable: o.mentionable ?? undefined,
    };
  }
}

module.exports = RoleManager;
