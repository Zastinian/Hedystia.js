const SlashOption = require("../Builders/Slash/SlashOption");
const ApplicationCommand = require("../Structures/ApplicationCommand");
const {ApplicationCommandTypes, OptionType} = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
const ApplicationCommandPermissionManager = require("./ApplicationCommandPermissionManager");
const Base = require("../Base/base");
const SlashSubCommandGroups = require("../Builders/Slash/SlashSubCommandGroup");
const SlashSubCommands = require("../Builders/Slash/SlashSubCommands");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for application commands.
 * @class
 * @extends Base
 */
class ApplicationCommandManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a command to the command cache.
   * @param {string | ApplicationCommand} commands - The command or command ID to add.
   * @param {string} [guild=this.guildId] - The ID of the guild to add the command to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the command.
   * @param {boolean} [options.cache=true] - Whether to cache the command.
   * @param {boolean} [options.force=false] - Whether to force adding the command even if it already exists in the cache.
   * @returns {ApplicationCommand} The added command.
   */
  _add(commands, guild = this.guildId, options = {cache: true, force: false}) {
    const commandId = typeof commands === "string" ? commands : commands.commandId;
    let command;
    if (this.cache.has(commandId) && !options.force) {
      command = this.cache.get(commandId);
    } else {
      const newCommand = new ApplicationCommand(
        typeof commands === "string"
          ? {
              partial: true,
              id: commandId,
            }
          : commands,
        guild,
        this.client
      );

      if (options.cache) this.cache.set(commandId, newCommand);

      command = newCommand;
    }

    return command;
  }

  /**
   * Creates a new application command.
   * @param {Object} [options] - The options for the command.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or guild object where the command should be created.
   * @returns {Promise<ApplicationCommand>} A promise that resolves with the created application command.
   * @throws {Error} If the command creation fails.
   */
  async create(options = {}, guild = this.guildId) {
    const body = ApplicationCommandManager.transformPayload(options);
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const command = await this.client.api.post(
      `${this.client.root}/applications/${this.client.user.id}${guildId ? `/guilds/${guildId}/commands` : `/commands`}`,
      {body}
    );
    return this._add(command, guildId);
  }

  /**
   * Sets the application commands for the specified guild or globally.
   * @param {Object[]} [options=[{}]] - An array of options for the application commands.
   * @param {string|Guild} [guild=this.guildId] - The guild ID or guild object to set the commands for.
   * @returns {Promise<Cache>} A promise that resolves to a new instance of the cache with the updated commands.
   */
  async set(options = [{}], guild = this.guildId) {
    const body = options?.map((o) => ApplicationCommandManager.transformPayload(o));
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const commands = await this.client.api.put(
      `${this.client.root}/applications/${this.client.user.id}${guildId ? `/guilds/${guildId}/commands` : `/commands`}`,
      {body}
    );
    return new this.cache.constructor(commands?.map((o) => [o.id, this._add(o, guildId)]));
  }

  /**
   * Fetches commands from the API based on the provided command and options.
   * @param {string | ApplicationCommand} command - The command to fetch. Can be an ID, a string, or an object.
   * @param {object} options - The options for fetching the commands.
   * @param {boolean} options.cache - Whether to use the cache for fetching the commands.
   * @param {boolean} options.force - Whether to force fetch the commands.
   * @param {string} options.guild - The ID of the guild to fetch the commands from.
   * @param {boolean} options.withLocalizations - Whether to include localizations in the fetched commands.
   * @returns {Promise} A promise that resolves to the fetched commands.
   */
  async fetch(command, options) {
    if (typeof command?.id !== "undefined" || typeof command === "string")
      return this._fetchId(command, options?.cache, options?.force, options?.guild);
    if (typeof command === "object" && !options) options = command;
    const {cache, force, guild = this.guildId, withLocalizations} = options ?? {};
    const query = {withLocalizations};
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const commands = await this.client.api.get(
      `${this.client.root}/applications/${this.client.user.id}${guildId ? `/guilds/${guildId}/commands` : `/commands`}`,
      {query}
    );
    return new this.cache.constructor(commands?.map((o) => [o.id, this._add(o, guildId, {cache, force})]));
  }

  /**
   * Deletes an application command from the specified guild or the default guild.
   * @param {string | ApplicationCommand} command - The ID or the ApplicationCommand object to delete.
   * @param {string | Guild} [guild=this.guildId] - The ID or the Guild object where the command is located.
   * @returns {Promise<ApplicationCommand>} - The deleted ApplicationCommand object.
   * @throws {RangeError} - If no command ID is specified.
   */
  async delete(command, guild = this.guildId) {
    const commandId = typeof command === "string" ? command : command?.commandId;
    const guildId = typeof guild === "string" ? guild : guild?.id;
    if (!commandId) throw new RangeError(`Please specify an ApplicationCommand to remove`);
    const deletedCommand = this._add(command, guildId);
    await this.client.api.delete(
      `${this.client.root}/applications/${this.client.user.id}${guildId ? `/guilds/${guildId}/commands/${commandId}` : `/commands/${commandId}`}`
    );
    return deletedCommand;
  }

  /**
   * Edits an application command with the given command ID and options.
   * @param {string | ApplicationCommand} command - The command ID or the command object to edit.
   * @param {object} [options] - The options to update the command with.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or the guild object where the command is located.
   * @returns {Promise<ApplicationCommand>} A promise that resolves with the updated command object.
   * @throws {RangeError} If the application command is required but not provided.
   */
  async edit(command, options = {}, guild = this.guildId) {
    const body = ApplicationCommandManager.transformPayload(options);
    const commandId = typeof command === "string" ? command : command?.commandId;
    if (!commandId) throw new RangeError(`The application command is required`);
    const guildId = typeof guild === "string" ? guild : guild?.id;
    command = await this.client.api.patch(
      `${this.client.root}/applications/${this.client.user.id}${guildId ? `/guilds/${guildId}/commands/${commandId}` : `/commands/${commandId}`}`,
      {body}
    );
    return this._add(command, guildId);
  }

  /**
   * Fetches the ID of a command from the API.
   * @param {string | object} command - The command ID or command object.
   * @param {boolean} [cache=true] - Whether to cache the fetched command.
   * @param {boolean} [force=false] - Whether to force fetch the command even if it is already cached.
   * @param {string | object} [guild=this.guildId] - The guild ID or guild object. Defaults to the guild ID of the instance.
   * @returns {Promise<object>} - A promise that resolves to the fetched command object.
   */
  async _fetchId(command, cache = true, force = false, guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const commandId = typeof command === "string" ? command : command.commandId;
    if (this.cache.has(commandId) && !force) return this.cache.get(commandId);
    command = await this.client.api.get(
      `${this.client.root}/applications/${this.client.user.id}${guildId ? `/guilds/${guildId}/commands/${commandId}` : `/commands/${commandId}`}`
    );
    return this._add(command, guildId, {cache, force: true});
  }

  /**
   * Returns the ApplicationCommandPermissionManager for managing permissions of application commands in a guild.
   * @returns {ApplicationCommandPermissionManager} The ApplicationCommandPermissionManager instance.
   */
  get permissions() {
    return new ApplicationCommandPermissionManager(this.client, this.guildId);
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the given options object into the appropriate JSON format based on its type.
   * @param {object} options - The options object to transform.
   * @returns {object} The transformed options object in JSON format.
   */
  static transformOptions(options = {}) {
    if (["Sub_Command_Group", 2].includes(OptionType[options.type])) return new SlashSubCommandGroups(options).toJSON();
    if (["Sub_Command", 1].includes(OptionType[options.type])) return new SlashSubCommands(options).toJSON();
    return new SlashOption(options).toJSON();
  }

  /**
   * Transforms the payload object into a standardized format for application commands.
   * @param {Object} payload - The payload object containing the command details.
   * @returns {Object} - The transformed payload object.
   * @throws {RangeError} - If the payload is missing required fields or if the field values are out of range.
   */
  static transformPayload(payload = {}) {
    if (!payload.name) throw new RangeError(`Please specify a name`);
    if (payload.name?.length > 32 || payload.name?.length < 1) throw new RangeError(`The name must be between 1-32`);
    if (!payload.description && [1, "Chat_Input"].includes(payload.type)) throw new RangeError(`Description is required`);
    if (payload.description?.length > 100 || payload.description?.length < 1) throw new RangeError(`The description must be between 1-100`);
    if (["User", "Message", 2, 3].includes(payload.type) && (payload.description || payload.options?.length >= 1))
      throw new RangeError(`Context menu commands must have no description or options`);
    return {
      type: typeof payload.type === "string" ? ApplicationCommandTypes[payload.type] : payload.type ?? 1,
      name: payload.name,
      name_localizations: payload.nameLocalizations ?? payload.name_localizations ?? undefined,
      description: payload.description,
      description_localizations: payload.descriptionLocalizations ?? payload.description_localizations ?? undefined,
      options: payload.options?.map((o) => this.transformOptions(o)) ?? undefined,
      dm_permission: payload.dmPermission ?? payload.dm_permission ?? true,
      default_member_permissions:
        payload.defaultMemberPermissions ?? payload.default_member_permissions
          ? new Permissions(BigInt(payload.defaultMemberPermissions ?? payload.default_member_permissions)).toString()
          : undefined,
    };
  }
}

module.exports = ApplicationCommandManager;
