const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const RoleManager = require("./RoleManager");
/* It's a class that manages the roles of a member in a guild */
class GuildMemberRoleManager extends RoleManager {
  /**
   * `This function is a constructor for the class.`
   * @param guildId - The ID of the guild the member is in.
   * @param member - The member object of the member who left the guild.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId, member, client) {
    super(client);

    this.guildId = guildId;
    this.member = member;
  }

  /**
   * It sorts the cache by position, then returns the first item in the sorted collection
   * @returns The highest position in the cache.
   */
  get highest() {
    const collection = this.cache.sort((a, b) => b.position - a.position);
    return collection.first();
  }

  /**
   * It adds a role to a member
   * @param roles - The role(s) to add to the member.
   * @param reason - The reason for the action.
   * @returns The member object
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
   * It removes a role from a member
   * @param roles - The role(s) to remove from the member.
   * @param reason - The reason for the role removal.
   * @returns The member object
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
   * It takes an array of role IDs and a reason, and then it returns a promise that resolves to the
   * result of the edit request.
   * @param roles - The roles to set.
   * @param reason - The reason for the role change.
   * @returns The roles that the member has.
   */
  async set(roles, reason) {
    roles = GuildMemberRoleManager.transformRole(roles);
    const guild = this.client.guilds._add(this.guildId);
    return await guild?.members.edit(this.member, {roles, reason});
  }

  /**
   * It returns the cache, but only if the cache's id is the same as the guild id, or if the member has
   * the role
   * @returns The cache is being filtered to only return objects that have the same id as the guildId or
   * the member's roles.
   */
  get cache() {
    return super.cache.filter((o) => o.id === this.guildId || this.member._roles?.includes(o.id));
  }

  /**
   * It takes a role object, array, or string and returns an array of role IDs
   * @param [role] - The role to check for. Can be a string, a role object, or an array of either.
   * @returns The role is being returned.
   */
  static transformRole(role = {}) {
    if (role instanceof RaidenCol) role = role.keyArray();
    if (typeof role?.id !== "undefined") role = [role?.id];
    if (typeof role === "string") role = [role];
    return role;
  }
}

module.exports = GuildMemberRoleManager;
