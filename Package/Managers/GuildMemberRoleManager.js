const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const RoleManager = require("./RoleManager");
/**
 * Represents a manager for handling roles of a guild member.
 * @class
 * @extends RoleManager
 */
class GuildMemberRoleManager extends RoleManager {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {GuildMember} member - The guild member object.
   * @param {Client} client - The client object.
   */
  constructor(guildId, member, client) {
    super(client);

    this.guildId = guildId;
    this.member = member;
  }

  /**
   * Get the highest positioned item from the cache collection.
   * @returns The highest positioned item from the cache collection.
   */
  get highest() {
    const collection = this.cache.sort((a, b) => b.position - a.position);
    return collection.first();
  }

  /**
   * Adds roles to a member in a guild.
   * @param {string[] | RaidenCol} roles - The roles to add. Can be an array of role IDs or a RaidenCol object.
   * @param {string} reason - The reason for adding the roles.
   * @returns {Promise<void>} A promise that resolves when the roles have been added.
   * @throws {RangeError} If an invalid role is specified or if the role cache is empty.
   */
  async add(roles, reason) {
    if (Array.isArray(roles)) {
      if (roles.length >= 1)
        roles = roles.map((o) => {
          const role = this.client.roles.cache.get(typeof o === "string" ? o : o.id);
          if (!role) throw new RangeError(`Invalid role specified, or no cache`);
          this.member._roles.push(role.id);
          return;
        });
      return this.set(this.member._roles, reason);
    }
    if (roles instanceof RaidenCol) return await this.add(roles.keyArray(), reason);
    roles = typeof roles === "string" ? roles : roles?.id;
    const memberId = typeof this.member === "string" ? this.member : this.member.user?.id ?? this.member.id;
    roles = await this.client.api.put(`${this.client.root}/guilds/${this.guildId}/members/${memberId}/roles/${roles}`, {reason});

    return this.client.guilds._add(this.guildId)?.members._add(this.member);
  }

  /**
   * Removes the specified roles from the member.
   * @param {string[] | RaidenCol} roles - The roles to remove. Can be an array of role IDs or a RaidenCol object.
   * @param {string} reason - The reason for removing the roles.
   * @returns {Promise<null>} A promise that resolves to null when the roles have been removed.
   */
  async remove(roles, reason) {
    if (Array.isArray(roles)) {
      if (roles.length >= 1)
        return this.set(
          this.member._roles?.filter((o) => !roles.includes(o.id ?? o)),
          reason
        );
    }

    if (roles instanceof RaidenCol) return await this.remove(roles.keyArray(), reason);
    const roleId = typeof roles === "string" ? roles : roles.id;
    const memberId = typeof this.member === "string" ? this.member : this.member.user?.id ?? this.member.id;
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/members/${memberId}/roles/${roleId}`, {reason});
    return this.client.guilds.cache.get(this.guildId)?.members._add(this.member) ?? null;
  }

  /**
   * Sets the roles for a guild member.
   * @param {string[]} roles - The roles to set for the guild member.
   * @param {string} reason - The reason for setting the roles.
   * @returns {Promise<void>} - A promise that resolves when the roles are set.
   */
  async set(roles, reason) {
    roles = GuildMemberRoleManager.transformRole(roles);
    const guild = this.client.guilds._add(this.guildId);
    return await guild?.members.edit(this.member, {roles, reason});
  }

  /**
   * Retrieves the cache of objects, filtered based on the guild ID and member roles.
   * @returns {Array} An array of objects from the cache that match the guild ID or are included in the member roles.
   */
  get cache() {
    return super.cache.filter((o) => o.id === this.guildId || this.member._roles?.includes(o.id));
  }

  /**
   * Transforms the given role into an array of role IDs.
   * @param {RaidenCol | string | { id?: string }} role - The role to transform.
   * @returns {string[]} - An array of role IDs.
   */
  static transformRole(role = {}) {
    if (role instanceof RaidenCol) role = role.keyArray();
    if (typeof role?.id !== "undefined") role = [role?.id];
    if (typeof role === "string") role = [role];
    return role;
  }
}

module.exports = GuildMemberRoleManager;
