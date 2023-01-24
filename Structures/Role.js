const Permissions = require("../Util/Permissions");
const RoleFlags = require("../Util/RoleFlags");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
class Role extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.id = data.id ?? null;
    this.guildId = guildId;
    this.name = data.name ?? null;
    this.color = data.color ?? null;
    this.hoist = data.hoist ?? null;
    this.icon = data.icon ?? null;
    this.unicodeEmoji = data.unicode_emoji ?? null;
    this.position = data.position ?? null;
    this.permissions = new Permissions(data.permissions ? BigInt(data.permissions) : 0n);
    this.createdAt = "id" in data ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.managed = data.managed ?? null;
    this.mentionable = data.mentionable ?? null;
    this.tags = data.tags
      ? {
          botId: data.tags.bot_id ?? null,
          integrationId: data.tags.integration_id ?? null,
          premiumSubscriber: data.tags.premium_subscriber ?? null,
        }
      : null;
    this.flags = new RoleFlags(data.flags ? BigInt(data.flags) : 0n);
  }

  async fetch(options = {}) {
    return await this.guild?.roles.fetch(this, options);
  }

  async edit(options = {}) {
    return await this.guild?.roles.edit(this, options);
  }

  async delete(reason) {
    return await this.guild?.roles.delete(this, reason);
  }

  async clone() {
    return await this.guild?.roles.clone(this);
  }

  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  async setPermissions(permissions, reason) {
    return await this.edit({permissions, reason});
  }

  async setColor(color, reason) {
    return await this.edit({color, reason});
  }

  async setHoist(hoist, reason) {
    return await this.edit({hoist, reason});
  }

  async setIcon(icon, reason) {
    return await this.edit({icon, reason});
  }

  async setUnicodeEmoji(unicodeEmoji, reason) {
    return await this.edit({unicodeEmoji, reason});
  }

  async setMentionable(mentionable, reason) {
    return await this.edit({mentionable, reason});
  }

  async setPosition(position, reason) {
    await this.guild?.roles.modifyPosition({
      data: [
        {
          role: this,
          position,
        },
      ],
      reason,
    });
    return this;
  }

  permissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (!channel) throw new RangeError(`Canal no cacheado`);
    return channel.permissionsFor(this);
  }

  deniedPermissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (!channel) throw new RangeError(`Canal no cacheado`);
    const overwrite = channel.permissionOverwrites.cache.filter((o) => o.type === "Role" && o.id === this.id).first();
    if (!overwrite) return null;
    return overwrite.deny;
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.RoleIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }

  get members() {
    const filter = this.guild?.members.cache.filter((member) => member.roles.cache.has(this.id));
    return filter;
  }
}

module.exports = Role;
