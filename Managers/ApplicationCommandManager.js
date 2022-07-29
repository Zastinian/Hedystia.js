const SlashOption = require("../Builders/Slash/SlashOption");
const ApplicationCommand = require("../Structures/ApplicationCommand");
const { ApplicationCommandTypes, OptionType } = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
const ApplicationCommandPermissionManager = require("./ApplicationCommandPermissionManager");
const Base = require("../Base/base");
const SlashSubCommandGroups = require("../Builders/Slash/SlashSubCommandGroup");
const SlashSubCommands = require("../Builders/Slash/SlashSubCommands");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class ApplicationCommandManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(
    commands,
    guild = this.guildId,
    options = { cache: true, force: false }
  ) {
    const commandId = typeof commands === "string" ? commands : commands.id;
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

  async create(options = {}, guild = this.guildId) {
    const body = ApplicationCommandManager.transformPayload(options);
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const command = await this.client.api.post(
      `${this.client.root}/applications/${this.client.user.id}${
        guildId ? `/guilds/${guildId}/commands` : `/commands`
      }`,
      { body }
    );
    return this._add(command, guildId);
  }

  async set(options = [{}], guild = this.guildId) {
    const body = options?.map((o) =>
      ApplicationCommandManager.transformPayload(o)
    );
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const commands = await this.client.api.put(
      `${this.client.root}/applications/${this.client.user.id}${
        guildId ? `/guilds/${guildId}/commands` : `/commands`
      }`,
      { body }
    );
    return new this.cache.constructor(
      commands?.map((o) => [o.id, this._add(o, guildId)])
    );
  }

  async fetch(command, options) {
    if (typeof command?.id !== "undefined" || typeof command === "string")
      return this._fetchId(
        command,
        options?.cache,
        options?.force,
        options?.guild
      );
    if (typeof command === "object" && !options) options = command;
    const {
      cache,
      force,
      guild = this.guildId,
      withLocalizations,
    } = options ?? {};
    const query = { withLocalizations };
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const commands = await this.client.api.get(
      `${this.client.root}/applications/${this.client.user.id}${
        guildId ? `/guilds/${guildId}/commands` : `/commands`
      }`,
      { query }
    );
    return new this.cache.constructor(
      commands?.map((o) => [o.id, this._add(o, guildId, { cache, force })])
    );
  }

  async delete(command, guild = this.guildId) {
    const commandId = typeof command === "string" ? command : command?.id;
    const guildId = typeof guild === "string" ? guild : guild?.id;
    if (!commandId)
      throw new RangeError(
        `Por favor, especifique un ApplicationCommand para eliminar`
      );
    const deletedCommand = this._add(command, guildId);
    await this.client.api.delete(
      `${this.client.root}/applications/${this.client.user.id}${
        guildId
          ? `/guilds/${guildId}/commands/${commandId}`
          : `/commands/${commandId}`
      }`
    );
    return deletedCommand;
  }

  async edit(command, options = {}, guild = this.guildId) {
    const body = ApplicationCommandManager.transformPayload(options);
    const commandId = typeof command === "string" ? command : command?.id;
    if (!commandId)
      throw new RangeError(`Se requiere el comando de aplicación`);
    const guildId = typeof guild === "string" ? guild : guild?.id;
    command = await this.client.api.patch(
      `${this.client.root}/applications/${this.client.user.id}${
        guildId
          ? `/guilds/${guildId}/commands/${commandId}`
          : `/commands/${commandId}`
      }`,
      { body }
    );
    return this._add(command, guildId);
  }

  async _fetchId(command, cache = true, force = false, guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const commandId = typeof command === "string" ? command : command.id;
    if (this.cache.has(commandId) && !force) return this.cache.get(commandId);
    command = await this.client.api.get(
      `${this.client.root}/applications/${this.client.user.id}${
        guildId ? `/guilds/commands/${commandId}` : `/commands/${commandId}`
      }`
    );
    return this._add(command, guildId, { cache, force: true });
  }

  get permissions() {
    return new ApplicationCommandPermissionManager(this.client, this.guildId);
  }

  get cache() {
    return Collection;
  }

  static transformOptions(options = {}) {
    if (["SUB_COMMAND_GROUP", 2].includes(OptionType[options.type]))
      return new SlashSubCommandGroups(options).toJSON();
    if (["SUB_COMMAND", 1].includes(OptionType[options.type]))
      return new SlashSubCommands(options).toJSON();
    return new SlashOption(options).toJSON();
  }

  static transformPayload(payload = {}) {
    if (!payload.name) throw new RangeError(`Por favor, especifique un nombre`);
    if (payload.name?.length > 32 || payload.name?.length < 1)
      throw new RangeError(`El nombre debe estar entre 1-32`);
    if (!payload.description && [1, "CHAT_INPUT"].includes(payload.type))
      throw new RangeError(`La descripción es necesaria`);
    if (payload.description?.length > 100 || payload.description?.length < 1)
      throw new RangeError(`La descripción debe estar entre 1-100`);
    if (
      ["USER", "MESSAGE", 2, 3].includes(payload.type) &&
      (payload.description || payload.options?.length >= 1)
    )
      throw new RangeError(
        `Los comandos del menú contextual no deben tener descripción ni opciones`
      );
    return {
      type:
        typeof payload.type === "string"
          ? ApplicationCommandTypes[payload.type]
          : payload.type ?? 1,
      name: payload.name,
      name_localizations:
        payload.nameLocalizations ?? payload.name_localizations ?? undefined,
      description: payload.description,
      description_localizations:
        payload.descriptionLocalizations ??
        payload.description_localizations ??
        undefined,
      options:
        payload.options?.map((o) => this.transformOptions(o)) ?? undefined,
      default_member_permissions:
        payload.defaultMemberPermissions ?? payload.default_member_permissions
          ? new Permissions(
              BigInt(
                payload.defaultMemberPermissions ??
                  payload.default_member_permissions
              )
            ).toString()
          : undefined,
    };
  }
}

module.exports = ApplicationCommandManager;
