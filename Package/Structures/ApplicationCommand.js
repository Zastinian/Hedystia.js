const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const {ApplicationCommandTypes} = require("../Util/Constants");
const Base = require("../Base/base");
const Snowflake = require("../Util/Snowflake");
const SlashOption = require("./Interface/SlashOption");
const Permissions = require("../Util/Permissions");

/**
 * Represents an application command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the command information.
 * @param {string} guildId - The ID of the guild the command belongs to.
 * @param {Client} client - The client instance.
 */
class ApplicationCommand extends Base {
  /**
   * Create an application command object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the command.
   * @param {string} guildId - The ID of the guild the command belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.type = typeof data.type === "number" ? ApplicationCommandTypes[data.type] : data.type;
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.nameLocalizations = data.name_localizations ?? null;
    this.description = data.description ?? null;
    this.descriptionLocalizations = data.description_localizations ?? null;
    this.applicationId = data.application_id ?? null;
    this.createdAt = Snowflake.deconstruct(this.id).createdAt;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.guildId = guildId ?? null;
    this.options = new RaidenCol(data.options?.map((o) => [o.name, new SlashOption(o, this.client)]));
    this.defaultMemberPermissions = new Permissions(data.default_member_permissions ? BigInt(data.default_member_permissions) : 0n);
    this.dmPermission = data.dm_permission ?? true;
    this.version = data.version ?? null;
  }

  /**
   * Get the guild object if it exists, otherwise return null.
   * @returns The guild object or null.
   */
  get guild() {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  /**
   * Fetches the commands for a guild or the global application.
   * @param {Object} [options] - Optional parameters for the fetch operation.
   * @returns {Promise} - A promise that resolves with the fetched commands.
   */
  async fetch(options = {}) {
    if (options.guild || this.guildId) return await this.guild?.commands.fetch(this, options);
    return await this.client.application?.commands.fetch(this, options);
  }

  /**
   * Edits the command with the specified options.
   * If the command is associated with a guild, it will edit the guild command.
   * Otherwise, it will edit the global command.
   * @param {Object} options - The options to edit the command with.
   * @returns {Promise} A promise that resolves when the command is successfully edited.
   */
  async edit(options = {}) {
    if (options.guild || this.guildId) return await this.guild?.commands.edit(this, options);
    return await this.client.application?.commands.edit(this, options);
  }

  /**
   * Deletes the command from the guild or the global application.
   * @returns {Promise<void>} - A promise that resolves when the command is successfully deleted.
   */
  async delete() {
    if (this.guildId) return await this.guild?.commands.delete(this);
    return await this.client.application?.commands.delete(this);
  }
}

module.exports = ApplicationCommand;
