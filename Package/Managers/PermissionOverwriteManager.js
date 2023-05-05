/* It's importing the required modules. */
const Base = require("../Base/base");
const Collection = require("../Util/@Collections/RaidenCol").RaidenCol;
const PermissionOverwrite = require("../Structures/PermissionOverwrite");
const {OverwriteType} = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
/* It's a class that manages the overwrites of a channel */
class PermissionOverwriteManager extends Base {
  /**
   * It creates a new object with the properties of the overwrites object, and the channelId property.
   * @param channelId - The ID of the channel to create the invite for.
   * @param [overwrites] - An object containing the overwrites for the channel.
   * @param client - The client that is creating the channel.
   */
  constructor(channelId, overwrites = {}, client) {
    super(client);
    this.channelId = channelId;
    Object.defineProperty(this, "overwrites", {
      value: overwrites,
    });
  }

  /**
   * It takes an object, and returns a new PermissionOverwrite object
   * @param overwrites - The overwrites to resolve.
   * @returns A new PermissionOverwrite object.
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
   * It creates a new permission overwrite for a user or role
   * @param user - The user or role to add the overwrite to.
   * @param overwrites - An object containing the permissions to overwrite.
   * @param [options] - Object
   * @returns The channel object
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
   * It takes an array of permission overwrites and sets them on the channel
   * @param overwrites - An array of overwrites.
   * @param reason - The reason for the change.
   * @returns The channel object
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
   * It edits the permission overwrites of a channel
   * @param userOrRole - The user or role to edit the overwrite for.
   * @param [options] - The options to overwrite the permission with.
   * @param [overwriteOptions] - This is an object that contains the reason and type of the overwrite.
   * @returns The channel object
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
   * It deletes a permission overwrite for a user or role in a channel
   * @param userOrRole - The user or role to delete the permission overwrite for.
   * @param reason - The reason for the audit log entry.
   * @returns The channel object
   */
  async delete(userOrRole, reason) {
    userOrRole = typeof userOrRole === "string" ? userOrRole : userOrRole?.user?.id ?? userOrRole?.id;
    await this.client.api.delete(`${this.client.root}/channels/${this.channelId}/permissions/${userOrRole}`, {
      reason,
    });
    return this.client.channels._add(this.channelId);
  }

  /**
   * It returns a collection of all the overwrites in the channel, mapped to their resolved permission
   * overwrites
   * @returns A collection of overwrites
   */
  get cache() {
    return new Collection(this.overwrites?.map((o) => [o.id, this.resolve(o)]));
  }

  /**
   * It takes an existing overwrite, overwrites it with the new overwrites, and returns the new overwrite
   * @param existing - The existing overwrite object.
   * @param overwrites - The overwrites to apply.
   * @param type - The type of overwrite. This can be a string or a number.
   * @returns An object with the following properties:
   *   allow: A string representation of the permissions that are allowed.
   *   deny: A string representation of the permissions that are denied.
   *   type: The type of overwrite.
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
   * It takes an existing role, overwrites, and a type, and returns a new role with the overwrites
   * applied
   * @param existing - The existing permissions object.
   * @param [overwrites] - The overwrites object that is passed in from the user.
   * @param type - The type of the permission. This is either "role" or "member".
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
