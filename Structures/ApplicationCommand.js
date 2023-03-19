const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const {ApplicationCommandTypes} = require("../Util/Constants");
const Base = require("../Base/base");
const Snowflake = require("../Util/Snowflake");
const SlashOption = require("./Interface/SlashOption");
const Permissions = require("../Util/Permissions");

/**
 * Class representing an application command.
 * @class
 */
class ApplicationCommand extends Base {
  /**
   * Create an application command object.
   * @param data - The data object for the command.
   * @param guildId - The ID of the guild the command belongs to.
   * @param client - The client object for the command.
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
   * Fetch the command from the guild or the client.
   * @param [options] - The options to pass to the command.
   * @returns The command object.
   */
  async fetch(options = {}) {
    if (options.guild || this.guildId) return await this.guild?.commands.fetch(this, options);
    return await this.client.application?.commands.fetch(this, options);
  }

  /**
   * Edit the command.
   * @param [options] - The options to edit the command with.
   * @returns The return value of the edit method of the commands property of the guild or application object.
   */
  async edit(options = {}) {
    if (options.guild || this.guildId) return await this.guild?.commands.edit(this, options);
    return await this.client.application?.commands.edit(this, options);
  }

  /**
   * Delete the command from the commands collection.
   * @returns The return value of the delete method.
   */
  async delete() {
    if (this.guildId) return await this.guild?.commands.delete(this);
    return await this.client.application?.commands.delete(this);
  }
}

module.exports = ApplicationCommand;
