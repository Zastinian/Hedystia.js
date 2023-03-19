const SlashOption = require("../Builders/Slash/SlashOption");
const ApplicationCommand = require("../Structures/ApplicationCommand");
const {ApplicationCommandTypes, OptionType} = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
const ApplicationCommandPermissionManager = require("./ApplicationCommandPermissionManager");
const Base = require("../Base/base");
const SlashSubCommandGroups = require("../Builders/Slash/SlashSubCommandGroup");
const SlashSubCommands = require("../Builders/Slash/SlashSubCommands");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages the creation, deletion, and editing of commands for a Discord application */
class ApplicationCommandManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function.
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * _add(commands, guild = this.guildId, options = {cache: true, force: false})
   * @param commands - The command or commands to add.
   * @param [guild] - The guild ID
   * @param [options] - cache = true, force = false
   * @returns The command object.
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
   * It creates a new command for the application
   * @param [options] - The options for the command.
   * @param [guild] - The guild ID or guild object to create the command for.
   * @returns The command object.
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
   * It sets the commands for a guild
   * @param [options] - An array of objects that contain the following properties:
   * @param [guild] - The guild ID or guild object to set the commands for.
   * @returns An array of objects.
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
   * It fetches commands from the API
   * @param command - The command to fetch.
   * @param options - {
   * @returns An array of objects.
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
   * It deletes a command from the application
   * @param command - The command to delete.
   * @param [guild] - The guild to remove the command from.
   * @returns The deleted command.
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
   * It edits an application command
   * @param command - The command to edit.
   * @param [options] - The options for the command.
   * @param [guild] - The guild ID
   * @returns The command object.
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
   * It fetches a command from the API and adds it to the cache
   * @param command - The command to fetch.
   * @param [cache=true] - Whether or not to cache the command.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @param [guild] - The guild to fetch the command from.
   * @returns The command object.
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
   * It returns a new ApplicationCommandPermissionManager object, which is a class that I made.
   *
   * I'm not sure if this is the right place to ask this question, but I'm not sure where else to ask
   * it.
   * @returns A new instance of the ApplicationCommandPermissionManager class.
   */
  get permissions() {
    return new ApplicationCommandPermissionManager(this.client, this.guildId);
  }

  /**
   * It returns the Collection object.
   * @returns The Collection object.
   */
  get cache() {
    return Collection;
  }

  /**
   * If the option type is a sub command group or sub command, return a new instance of the respective
   * class, otherwise return a new instance of the SlashOption class
   * @param [options] - {
   * @returns The return value is a JSON object.
   */
  static transformOptions(options = {}) {
    if (["Sub_Command_Group", 2].includes(OptionType[options.type])) return new SlashSubCommandGroups(options).toJSON();
    if (["Sub_Command", 1].includes(OptionType[options.type])) return new SlashSubCommands(options).toJSON();
    return new SlashOption(options).toJSON();
  }

  /**
   * It takes a payload object and returns a transformed payload object
   * @param [payload] - The payload that is sent to the API.
   * @returns The return is a new object with the properties of the payload object.
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
      default_member_permissions:
        payload.defaultMemberPermissions ?? payload.default_member_permissions
          ? new Permissions(BigInt(payload.defaultMemberPermissions ?? payload.default_member_permissions)).toString()
          : undefined,
    };
  }
}

module.exports = ApplicationCommandManager;
