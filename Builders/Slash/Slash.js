const {ApplicationCommandTypes} = require("../../Util/Constants");
const Permissions = require("../../Util/Permissions");
const SlashOption = require("./SlashOption");
const SlashSubCommandGroup = require("./SlashSubCommandGroup");
const SlashSubCommands = require("./SlashSubCommands");

/**
 * A class representing a Discord Slash Command.
 * @class
 * @param {Object} [data={}] - The data for the Slash Command.
 * @param {number | string} [data.type="Chat_Input"] - The type of the command.
 * @param {string} [data.name] - The name of the command.
 * @param {Object} [data.name_localizations] - The localizations of the command name.
 * @param {string} [data.description] - The description of the command.
 * @param {Object} [data.description_localizations] - The localizations of the command description.
 * @param {Array<Object>} [data.options] - The options of the command.
 * @param {string} [data.default_member_permissions] - The default permissions of the command for members.
 * @param {boolean} [data.dm_permission=true] - Whether the command can be used in DMs.
 */
class Slash {
  constructor(data = {}) {
    this.type = (typeof data.type === "Number" ? ApplicationCommandTypes[data.type] : data.type) ?? "Chat_Input";
    this.name = data.name ?? undefined;
    this.nameLocalizations = data.name_localizations ?? undefined;
    this.description = data.description ?? undefined;
    this.descriptionLocalizations = data.description_localizations ?? undefined;
    this.options = data.options?.map((o) => new SlashOption(o).toJSON()) ?? undefined;
    this.defaultMemberPermissions = new Permissions(data.default_member_permissions ? BigInt(data.default_member_permissions) : 0n);
    this.dmPermission = data.dm_permission ?? true;
  }

  /**
   * Sets the type of the Slash Command.
   * @param {number | string} type - The type of the command.
   * @returns {Slash} The Slash instance.
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * Sets the name of the Slash Command.
   * @param {string} name - The name of the command.
   * @returns {Slash} The Slash instance.
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Sets the description of the Slash Command.
   * @param {string} description - The description of the command.
   * @returns {Slash} The Slash instance.
   */
  setDescriptionLocalizations(localizations) {
    this.descriptionLocalizations = localizations;
    return this;
  }

  /**
   * Sets the localizations of the name of the Slash Command.
   * @param {Object} [localizations={}] - The localizations of the command name.
   * @returns {Slash} The Slash instance.
   */
  setNameLocalizations(localizations = {}) {
    this.nameLocalizations = localizations;
    return this;
  }

  /**
   * Sets the description of the Slash Command.
   * @param {string} description - The description of the command.
   * @returns {Slash} The Slash instance.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Sets the default member permissions of the Slash Command.
   * @param {...number} permission - The permissions of the command for members.
   * @returns {Slash} The Slash instance.
   */
  setDefaultMemberPermissions(...permission) {
    this.defaultMemberPermissions = new Permissions(permission);
    return this;
  }

  /**
   * Sets whether the Slash Command can be used in DMs.
   * @param {boolean} permission - Whether the command can be used in DMs.
   * @returns {Slash} The Slash instance.
   */
  setDmPermission(permission) {
    this.dmPermission = permission;
    return this;
  }

  /**
   * Sets the options of the Slash Command.
   * @param {(Array<Object>|Function)} fn - The options of the command or a function that returns options.
   * @returns {Slash} The Slash instance.
   */
  setOptions(fn) {
    if (Array.isArray(fn)) {
      this.options = fn?.map((o) => new SlashOption(o).toJSON());
    } else {
      const result = typeof fn === "function" ? fn(new SlashOption()) : undefined;
      if (!result) throw new RangeError(`Expected an option bulder but received=${typeof result}`);
      this.options.push(result.toJSON());
    }
    return this;
  }

  /**
   * Adds sub-command groups to the Slash Command.
   * @param {(Array<Object>|Function)} fn - The sub-command groups or a function that returns sub-command groups.
   * @returns {Slash} The Slash instance.
   */
  addSubCommandGroups(fn) {
    if (Array.isArray(fn)) {
      this.options = fn?.map((o) => new SlashSubCommandGroup(o).toJSON());
    } else {
      const result = typeof fn === "function" ? fn(new SlashSubCommandGroup()) : undefined;
      if (!result) throw new RangeError(`Expected an option bulder but received=${typeof result}`);
      this.options.push(result.toJSON());
    }
    return this;
  }

  /**
   * Adds sub-commands to the Slash Command.
   * @param {(Array<Object>|Function)} fn - The sub-commands or a function that returns sub-commands.
   * @returns {Slash} The Slash instance.
   */
  addSubCommands(fn) {
    if (Array.isArray(fn)) {
      this.options = fn?.map((o) => new SlashSubCommands(o).toJSON());
    } else {
      const result = typeof fn === "function" ? fn(new SlashSubCommands()) : undefined;
      if (!result) throw new RangeError(`Expected an option bulder but received=${typeof result}`);
      this.options.push(result.toJSON());
    }
    return this;
  }

  /**
   * Validates the properties of the ApplicationCommand object.
   * @throws {TypeError} If the Application Command Type is invalid or dmPermission is not a boolean.
   * @throws {RangeError} If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.
   */
  validation() {
    if (!ApplicationCommandTypes[this.type]) throw new TypeError(`Application Command Type is invalid`);
    if (["USER", "MESSAGE"].includes(this.type) && (this.description || this.options?.length >= 1))
      throw new RangeError(`Context Menu commands must not have description or options`);
    if (this.name?.length > 32 || this.name?.length < 1) throw new RangeError(`Slash name must be between 1-32 in length`);
    if (this.description?.length > 100 || this.description?.length < 1) throw new RangeError(`Slash description must be between 1-100 in length`);
    if (this.options?.length > 25) throw new RangeError(`Slash option must be less than 25`);
    if (typeof this.dmPermission !== "boolean") throw new TypeError(`dmPermission must be boolean. Received=${typeof this.dmPermission}`);
    return;
  }

  /**
   * Converts the ApplicationCommand object to JSON format.
   * @returns {Object} The ApplicationCommand object in JSON format.
   * @throws {TypeError} If the Application Command Type is invalid or dmPermission is not a boolean.
   * @throws {RangeError} If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.
   */
  toJSON() {
    this.validation();
    return {
      type: typeof this.type === "string" ? ApplicationCommandTypes[this.type] : this.type,
      name: this.name,
      name_localizations: this.nameLocalizations,
      description: this.description,
      description_localizations: this.descriptionLocalizations,
      options: this.options,
      default_member_permissions: this.defaultMemberPermissions.toString(),
      dm_permission: this.dmPermission,
    };
  }
}

module.exports = Slash;
