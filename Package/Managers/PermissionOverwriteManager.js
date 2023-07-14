const Base = require("../Base/base");
const Collection = require("../Util/@Collections/RaidenCol").RaidenCol;
const PermissionOverwrite = require("../Structures/PermissionOverwrite");
const {OverwriteType} = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
/**
 * Represents a manager for permission overwrites in a channel.
 * @class
 * @extends Base
 * @param {string} channelId - The ID of the channel.
 * @param {object} [overwrites] - The initial permission overwrites.
 * @param {Client} client - The client instance.
 */
class PermissionOverwriteManager extends Base {
  /**
   * Constructs a new instance of the Channel class.
   * @constructor
   * @param {string} channelId - The ID of the channel.
   * @param {Object} [overwrites] - The channel overwrites.
   * @param {Client} client - The client instance.
   */
  constructor(channelId, overwrites = {}, client) {
    super(client);
    this.channelId = channelId;
    Object.defineProperty(this, "overwrites", {
      value: overwrites,
    });
  }

  /**
   * Resolves the given `overwrites` parameter and returns a new `PermissionOverwrite` object.
   * @param {string | PermissionOverwriteOptions} overwrites - The overwrites to resolve. Can be a string representing the ID of the overwrite or an object containing the overwrite options.
   * @returns {PermissionOverwrite | undefined} A new `PermissionOverwrite` object if `overwrites` is provided, otherwise `undefined`.
   */
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

  /**
   * Creates or edits permission overwrites for a user or role in a channel.
   * @param {User | Role | string} user - The user or role to create or edit permission overwrites for.
   * @param {PermissionOverwriteOptions} overwrites - The permission overwrites to apply.
   * @param {CreateOptions} [options] - Additional options for creating or editing permission overwrites.
   * @param {string} [options.reason] - The reason for creating or editing the permission overwrites.
   * @returns {Promise<void>} - A promise that resolves when the permission overwrites are created or edited.
   * @throws {RangeError} - If no user or role is found.
   */
  async create(user, overwrites, options = {}) {
    const {reason} = options;
    if (!user) throw new RangeError(`No user or role found`);
    const userId = typeof user === "string" ? user : user.user?.id ?? user.id;
    if (this.cache.has(userId)) return await this.edit(userId, overwrites, options);
    const permissionOverwrites = this.cache.mapVal(({id, type, allow, deny}) => {
      return {id, type, allow, deny};
    });
    const newOverwrites = PermissionOverwriteManager.transformOverwrites(userId, overwrites, options.type);
    permissionOverwrites.push(newOverwrites);
    return await this.client.channels.edit(this.channelId, {
      permissionOverwrites,
      reason,
    });
  }

  /**
   * Sets the permission overwrites for a channel.
   * @param {Array} overwrites - An array of permission overwrite objects.
   * @param {string} reason - The reason for setting the permission overwrites.
   * @returns {Promise} A promise that resolves when the permission overwrites are set.
   */
  async set(overwrites, reason) {
    const permissionOverwrites = overwrites?.map((o) => {
      const userOrRoleId = typeof o.id === "string" ? o.id : o.id?.user?.id ?? o.id?.id;
      return PermissionOverwriteManager.transformOverwrites(userOrRoleId, o.permissions, o.type);
    });
    await this.client.channels.edit(this.channelId, {
      permissionOverwrites,
      reason,
    });
    return this.client.channels._add(this.channelId);
  }

  /**
   * Edits the permissions for a user or role in the channel.
   * @param {string | User | Role} userOrRole - The user or role to edit permissions for.
   * @param {Object} [options] - The options for the permission overwrite.
   * @param {Object} [overwriteOptions] - The options for overwriting the permission overwrite.
   * @param {string} [overwriteOptions.reason] - The reason for the permission overwrite.
   * @param {string} [overwriteOptions.type] - The type of permission overwrite.
   * @returns {Promise<Channel>} A promise that resolves with the updated channel object.
   * @throws {RangeError} If no user or role is specified.
   */
  async edit(userOrRole, options = {}, overwriteOptions = {}) {
    const {reason, type} = overwriteOptions;
    const overwriteId = typeof userOrRole === "string" ? userOrRole : userOrRole?.user?.id ?? userOrRole?.id;
    if (!overwriteId) throw new RangeError(`Por favor, especifique un usuario o rol`);
    const body = PermissionOverwriteManager.editOverwrites(overwriteId, options, type);
    await this.client.api.put(`${this.client.root}/channels/${this.channelId}/permissions/${overwriteId}`, {
      body,
      reason,
    });
    return this.client.channels._add(this.channelId);
  }

  /**
   * Deletes the permission for a user or role in the channel.
   * @param {string | User | Role} userOrRole - The user or role to delete the permission for.
   * @param {string} reason - The reason for deleting the permission.
   * @returns {Promise<Channel>} A promise that resolves with the updated channel object.
   */
  async delete(userOrRole, reason) {
    userOrRole = typeof userOrRole === "string" ? userOrRole : userOrRole?.user?.id ?? userOrRole?.id;
    await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/permissions/${userOrRole}`, {
      reason,
    });
    return this.client.channels._add(this.channelId);
  }

  /**
   * Get the cache collection.
   * @returns {Collection} - The cache collection.
   */
  get cache() {
    return new Collection(this.overwrites?.map((o) => [o.id, this.resolve(o)]));
  }

  /**
   * Edits the existing overwrites with the provided overwrites and type.
   * @param {object} existing - The existing overwrites object.
   * @param {object} overwrites - The new overwrites to apply.
   * @param {string | OverwriteType} type - The type of overwrite.
   * @returns {object} - The updated overwrites object.
   */
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

  /**
   * Transforms the existing overwrites with the provided overwrites and returns a new object
   * with the updated allow and deny properties.
   * @param {Object} existing - The existing overwrites object.
   * @param {Object} [overwrites] - The new overwrites to apply.
   * @param {string} type - The type of the overwrites.
   * @returns {Object} - The transformed overwrites object.
   */
  static transformOverwrites(existing, overwrites = {}, type) {
    const {allow, deny} = this.editOverwrites(existing, overwrites, type);
    return {
      id: existing,
      allow,
      deny,
      type,
    };
  }
}

module.exports = PermissionOverwriteManager;
