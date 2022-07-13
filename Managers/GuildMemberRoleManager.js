const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const RoleManager = require("./RoleManager");
class GuildMemberRoleManager extends RoleManager {
  constructor(guildId, member, client) {
    super(client);

    this.guildId = guildId;
    this.member = member;
  }

  get highest() {
    const collection = this.cache.sort((a, b) => b.position - a.position);
    return collection.first();
  }

  async add(roles, reason) {
    if (Array.isArray(roles)) {
      if (roles.length >= 1)
        roles = roles.map((o) => {
          const role = this.client.roles.cache.get(
            typeof o === "string" ? o : o.id
          );
          if (!role)
            throw new RangeError(`Rol inválido especificado, o sin caché`);
          this.member._roles.push(role.id);
          return;
        });
      return this.set(this.member._roles, reason);
    }
    if (roles instanceof RaidenCol)
      return await this.add(roles.keyArray(), reason);
    roles = typeof roles === "string" ? roles : roles?.id;
    const memberId =
      typeof this.member === "string"
        ? this.member
        : this.member.user?.id ?? this.member.id;
    roles = await this.client.api.put(
      `${this.client.root}/guilds/${this.guildId}/members/${memberId}/roles/${roles}`,
      { reason }
    );

    return this.client.guilds._add(this.guildId)?.members._add(this.member);
  }

  async remove(roles, reason) {
    if (Array.isArray(roles)) {
      if (roles.length >= 1)
        return this.set(
          this.member._roles?.filter((o) => !roles.includes(o.id ?? o)),
          reason
        );
    }

    if (roles instanceof RaidenCol)
      return await this.remove(roles.keyArray(), reason);
    const roleId = typeof roles === "string" ? roles : roles.id;
    const memberId =
      typeof this.member === "string"
        ? this.member
        : this.member.user?.id ?? this.member.id;
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/members/${memberId}/roles/${roleId}`,
      { reason }
    );
    return (
      this.client.guilds.cache.get(this.guildId)?.members._add(this.member) ??
      null
    );
  }

  async set(roles, reason) {
    roles = GuildMemberRoleManager.transformRole(roles);
    const guild = this.client.guilds._add(this.guildId);
    return await guild?.members.edit(this.member, { roles, reason });
  }

  get cache() {
    return super.cache.filter(
      (o) => o.id === this.guildId || this.member._roles?.includes(o.id)
    );
  }

  static transformRole(role = {}) {
    if (role instanceof RaidenCol) role = role.keyArray();
    if (typeof role?.id !== "undefined") role = [role?.id];
    if (typeof role === "string") role = [role];
    return role;
  }
}

module.exports = GuildMemberRoleManager;
