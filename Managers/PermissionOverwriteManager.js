const Base = require("../Base/base");
const Collection = require("../Util/@Collections/RaidenCol").RaidenCol;
const PermissionOverwrite = require("../Structures/PermissionOverwrite");
const { OverwriteType } = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
class PermissionOverwriteManager extends Base {
  constructor(channelId, overwrites = {}, client) {
    super(client);
    this.channelId = channelId;
    Object.defineProperty(this, "overwrites", {
      value: overwrites,
    });
  }

  resolve(overwrites) {
    if (!overwrites) return;
    return new PermissionOverwrite(
      typeof overwrites === "string"
        ? {
            id: overwrites,
            partial: true,
          }
        : overwrites,
      this.channelId,
      this.client
    );
  }

  async create(user, overwrites, options = {}) {
    const { reason } = options;
    if (!user) throw new RangeError(`No se ha encontrado ningún usuario o rol`);
    const userId = typeof user === "string" ? user : user.user?.id ?? user.id;
    if (this.cache.has(userId))
      return await this.edit(userId, overwrites, options);
    const permissionOverwrites = this.cache.mapVal(
      ({ id, type, allow, deny }) => {
        return { id, type, allow, deny };
      }
    );
    const newOverwrites = PermissionOverwriteManager.transformOverwrites(
      userId,
      overwrites,
      options.type
    );
    permissionOverwrites.push(newOverwrites);
    return await this.client.channels.edit(this.channelId, {
      permissionOverwrites,
      reason,
    });
  }

  async set(overwrites, reason) {
    const permissionOverwrites = overwrites?.map((o) => {
      const userOrRoleId =
        typeof o.id === "string" ? o.id : o.id?.user?.id ?? o.id?.id;
      return PermissionOverwriteManager.transformOverwrites(
        userOrRoleId,
        o.permissions,
        o.type
      );
    });
    await this.client.channels.edit(this.channelId, {
      permissionOverwrites,
      reason,
    });
    return this.client.channels._add(this.channelId);
  }

  async edit(userOrRole, options = {}, overwriteOptions = {}) {
    const { reason, type } = overwriteOptions;
    const overwriteId =
      typeof userOrRole === "string"
        ? userOrRole
        : userOrRole?.user?.id ?? userOrRole?.id;
    if (!overwriteId)
      throw new RangeError(`Por favor, especifique un usuario o rol`);
    const body = PermissionOverwriteManager.editOverwrites(
      overwriteId,
      options,
      type
    );
    await this.client.api.put(
      `${this.client.root}/channels/${this.channelId}/permissions/${overwriteId}`,
      { body, reason }
    );
    return this.client.channels._add(this.channelId);
  }

  async delete(userOrRole, reason) {
    userOrRole =
      typeof userOrRole === "string"
        ? userOrRole
        : userOrRole?.user?.id ?? userOrRole?.id;
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/permissions/${userOrRole}`,
      { reason }
    );
    return this.client.channels._add(this.channelId);
  }

  get cache() {
    return new Collection(this.overwrites?.map((o) => [o.id, this.resolve(o)]));
  }

  static editOverwrites(existing, overwrites, type) {
    if (typeof type === "string") type = OverwriteType[type];
    const allow = new Permissions(existing?.allow ?? 0n);
    const deny = new Permissions(existing?.deny ?? 0n);
    for (let [key, val] of Object.entries(overwrites)) {
      if (val === true) {
        allow.add(key);
        deny.remove(key);
      } else if (val === false) {
        allow.remove(key);
        deny.add(key);
      } else {
        allow.remove(key);
        deny.remove(key);
      }
    }
    return {
      allow: allow.toString(),
      deny: deny.toString(),
      type,
    };
  }

  static transformOverwrites(existing, overwrites = {}, type) {
    const { allow, deny } = this.editOverwrites(existing, overwrites, type);
    return {
      id: existing,
      allow,
      deny,
      type,
    };
  }
}

module.exports = PermissionOverwriteManager;
