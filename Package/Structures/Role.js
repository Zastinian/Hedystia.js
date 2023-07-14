const Permissions = require("../Util/Permissions");
const RoleFlags = require("../Util/RoleFlags");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * Represents a role in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the role.
 * @param {string} guildId - The ID of the guild that the role belongs to.
 * @param {Client} client - The client instance.
 */
class Role extends Base {
  /**
   * Constructs a new Role object.
   * @constructor
   * @param {Object} [data] - The data object containing role information.
   * @param {string} guildId - The ID of the guild that the role belongs to.
   * @param {Client} client - The Discord client instance.
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
   * Fetches the roles for the guild.
   * @param {Object} [options] - Optional parameters for the fetch operation.
   * @returns {Promise} A promise that resolves with the fetched roles.
   */
  async fetch(options = {}) {
    return await this.guild?.roles.fetch(this, options);
  }

  /**
   * Edits the role with the specified options.
   * @param {Object} options - The options to edit the role with.
   * @returns {Promise} A promise that resolves when the role has been edited.
   */
  async edit(options = {}) {
    return await this.guild?.roles.edit(this, options);
  }

  /**
   * Deletes the role from the guild.
   * @param {string} reason - The reason for deleting the role.
   * @returns {Promise<void>} - A promise that resolves when the role is deleted.
   */
  async delete(reason) {
    return await this.guild?.roles.delete(this, reason);
  }

  /**
   * Clones the current role.
   * @returns {Promise<Role>} A promise that resolves to the cloned role.
   */
  async clone() {
    return await this.guild?.roles.clone(this);
  }

  /**
   * Sets the name of an object and provides a reason for the change.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for changing the name.
   * @returns {Promise} A promise that resolves when the name is successfully set.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the permissions for an entity with the given reason.
   * @param {Object} permissions - The permissions to set for the entity.
   * @param {string} reason - The reason for setting the permissions.
   * @returns {Promise} - A promise that resolves when the permissions are set.
   */
  async setPermissions(permissions, reason) {
    return await this.edit({permissions, reason});
  }

  /**
   * Sets the color of an object and provides a reason for the change.
   * @param {string} color - The new color to set.
   * @param {string} reason - The reason for the color change.
   * @returns {Promise} - A promise that resolves when the color is successfully set.
   */
  async setColor(color, reason) {
    return await this.edit({color, reason});
  }

  /**
   * Sets the hoist value and reason for a specific item.
   * @param {boolean} hoist - The hoist value to set.
   * @param {string} reason - The reason for setting the hoist value.
   * @returns {Promise} - A promise that resolves when the hoist value is set.
   */
  async setHoist(hoist, reason) {
    return await this.edit({hoist, reason});
  }

  /**
   * Sets the icon of an object and provides a reason for the change.
   * @param {any} icon - The new icon to set.
   * @param {string} reason - The reason for changing the icon.
   * @returns {Promise} A promise that resolves when the icon is successfully set.
   */
  async setIcon(icon, reason) {
    return await this.edit({icon, reason});
  }

  /**
   * Sets the unicode emoji for an entity.
   * @param {string} unicodeEmoji - The unicode emoji to set.
   * @param {string} reason - The reason for setting the unicode emoji.
   * @returns {Promise} A promise that resolves when the unicode emoji is set.
   */
  async setUnicodeEmoji(unicodeEmoji, reason) {
    return await this.edit({unicodeEmoji, reason});
  }

  /**
   * Sets the mentionable status of an entity.
   * @param {boolean} mentionable - Whether the entity should be mentionable or not.
   * @param {string} reason - The reason for setting the mentionable status.
   * @returns {Promise<void>} - A promise that resolves when the mentionable status is set.
   */
  async setMentionable(mentionable, reason) {
    return await this.edit({mentionable, reason});
  }

  /**
   * Sets the position of the role within the guild's role hierarchy.
   * @param {number} position - The new position of the role.
   * @param {string} reason - The reason for modifying the role's position.
   * @returns {Promise<Role>} - A promise that resolves to the modified Role object.
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
   * Retrieves the permissions of the bot in the specified channel.
   * @param {string | Channel} channel - The channel to check permissions in.
   * @returns {Permissions} - The permissions of the bot in the channel.
   * @throws {RangeError} - If the channel is not cached.
   */
  permissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (!channel) throw new RangeError(`Channel not cached`);
    return channel.permissionsFor(this);
  }

  /**
   * Retrieves the denied permissions for the specified channel.
   * @param {string | Channel} channel - The channel or channel ID to retrieve the permissions from.
   * @returns {PermissionFlags | null} - The denied permissions for the channel, or null if no permissions are found.
   * @throws {RangeError} - If the channel is not cached.
   */
  deniedPermissionsIn(channel) {
    channel = this.client.channels.cache.get(typeof channel === "string" ? channel : channel?.id);
    if (!channel) throw new RangeError(`Channel not cached`);
    const overwrite = channel.permissionOverwrites.cache.filter((o) => o.type === "Role" && o.id === this.id).first();
    if (!overwrite) return null;
    return overwrite.deny;
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Returns the URL of the icon for this role.
   * @param {Object} options - An optional object containing additional options for the icon URL.
   * @param {boolean} [options.dynamic] - Whether the icon should be dynamically generated.
   * @param {number} [options.size] - The desired size of the icon.
   * @param {string} [options.format] - The desired format of the icon.
   * @returns {string | null} The URL of the icon, or null if no icon is available.
   */
  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.RoleIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Retrieves the members of the guild who have the specified role.
   * @returns {Collection<Snowflake, GuildMember>} A collection of guild members who have the role.
   */
  get members() {
    const filter = this.guild?.members.cache.filter((member) => member.roles.cache.has(this.id));
    return filter;
  }
}

module.exports = Role;
