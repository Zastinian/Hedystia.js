const Permissions = require("../Util/Permissions");
const RoleFlags = require("../Util/RoleFlags");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * It's a class that represents a role in a guild
 * @class
 * @extends Base
 */
class Role extends Base {
  /**
   * It's a constructor for a class called Role.
   * @param [data] - The data that was received from the API.
   * @param guildId - The ID of the guild the role is in
   * @param client - Discord.Client
   */
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

  /**
   * It fetches the role from the guild
   * @param [options] - Fetch options.
   * @returns The role object.
   */
  async fetch(options = {}) {
    return await this.guild?.roles.fetch(this, options);
  }

  /**
   * It edits the role
   * @param [options] - Object
   * @returns The return value is the edited role.
   */
  async edit(options = {}) {
    return await this.guild?.roles.edit(this, options);
  }

  /**
   * It deletes the role
   * @param reason - The reason for the deletion.
   * @returns The role object.
   */
  async delete(reason) {
    return await this.guild?.roles.delete(this, reason);
  }

  /**
   * It clones the role
   * @returns The cloned role.
   */
  async clone() {
    return await this.guild?.roles.clone(this);
  }

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * It edits the permissions of a role
   * @param permissions - The permissions to set on the role.
   * @param reason - The reason for the update.
   * @returns The permissions object.
   */
  async setPermissions(permissions, reason) {
    return await this.edit({permissions, reason});
  }

  /**
   * It sets the color of the embed
   * @param color - The color of the embed.
   * @param reason - The reason for the role color change.
   * @returns The color and reason.
   */
  async setColor(color, reason) {
    return await this.edit({color, reason});
  }

  /**
   * It sets the role's hoist property to the value of the hoist parameter
   * @param hoist - Boolean - Whether or not to hoist the role in the user list.
   * @param reason - The reason for the role update.
   * @returns The role object.
   */
  async setHoist(hoist, reason) {
    return await this.edit({hoist, reason});
  }

  /**
   * It sets the icon of the guild
   * @param icon - The icon of the guild.
   * @param reason - The reason for the change (maximum 256 characters)
   * @returns The return value of the edit function.
   */
  async setIcon(icon, reason) {
    return await this.edit({icon, reason});
  }

  /**
   * This function edits the emoji with the unicode emoji and reason.
   * @param unicodeEmoji - The unicode emoji to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setUnicodeEmoji(unicodeEmoji, reason) {
    return await this.edit({unicodeEmoji, reason});
  }

  /**
   * It sets the role to be mentionable or not.
   * @param mentionable - Boolean - Whether the role should be mentionable or not
   * @param reason - The reason for the role update.
   * @returns The role object.
   */
  async setMentionable(mentionable, reason) {
    return await this.edit({mentionable, reason});
  }

  /**
   * It sets the position of a role
   * @param position - The position you want to set the role to.
   * @param reason - The reason for the change.
   * @returns The role object.
   */
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

  /**
   * It returns the permissions of a user in a channel
   * @param channel - The channel to get the permissions for.
   * @returns The permissions of the user in the channel.
   */
  permissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (!channel) throw new RangeError(`Channel not cached`);
    return channel.permissionsFor(this);
  }

  /**
   * It returns the permissions that the role is denied in the channel
   * @param channel - The channel to check the permissions in.
   * @returns The permissions that are denied to the role.
   */
  deniedPermissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (!channel) throw new RangeError(`Channel not cached`);
    const overwrite = channel.permissionOverwrites.cache.filter((o) => o.type === "Role" && o.id === this.id).first();
    if (!overwrite) return null;
    return overwrite.deny;
  }

  /**
   * If the guild is not in the cache, add it to the cache. If it is in the cache, return it. If it is
   * not in the cache and cannot be added to the cache, return null.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * "If the role has an icon, return the role's icon URL, otherwise return null."
   *
   * The function takes an optional parameter, options, which is an object
   * @param [options] - Object
   * @returns The URL of the role's icon.
   */
  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.RoleIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * It returns an array of all the members that have the role
   * @returns A collection of members that have the role.
   */
  get members() {
    const filter = this.guild?.members.cache.filter((member) => member.roles.cache.has(this.id));
    return filter;
  }
}

module.exports = Role;
