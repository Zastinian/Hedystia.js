const {OptionType} = require("../../Util/Constants");
const SlashSubCommands = require("./SlashSubCommands");

/**
 * Represents a sub-command group for a slash command.
 * @class
 */
class SlashSubCommandGroups {
  /**
   * @param {Object} [data] - The data for the sub-command group.
   * @param {string} [data.name] - The name of the sub-command group.
   * @param {string} [data.description] - The description of the sub-command group.
   * @param {Object} [data.nameLocalizations] - The name localizations of the sub-command group.
   * @param {Object} [data.descriptionLocalizations] - The description localizations of the sub-command group.
   * @param {Object[]} [data.options] - The sub-commands of the sub-command group.
   */
  constructor(data = {}) {
    this.type = "Sub_Command_Group";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.nameLocalizations = data.name_localizations ?? data.nameLocalizations ?? undefined;
    this.descriptionLocalizations = data.description_localizations ?? data.descriptionLocalizations ?? undefined;
    this.options = data.options?.map((o) => new SlashSubCommands(o).toJSON()) ?? [];
  }

  /**
   * Sets the name of the sub-command group.
   * @param {string} name - The name of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Sets the description of the sub-command group.
   * @param {string} description - The description of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Sets the description localizations of the sub-command group.
   * @param {Object} localizations - The description localizations of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setDescriptionLocalizations(localizations) {
    this.descriptionLocalizations = localizations;
    return this;
  }

  /**
   * Sets the name localizations of the sub-command group.
   * @param {Object} [localizations] - The name localizations of the sub-command group.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   */
  setNameLocalizations(localizations = {}) {
    this.nameLocalizations = localizations;
    return this;
  }

  /**
   * Adds sub-commands to the sub-command group.
   * @param {Function|Object[]} fn - The sub-command builder function or array of sub-command objects.
   * @returns {SlashSubCommandGroups} The sub-command group object.
   * @throws {RangeError} Will throw an error if the sub-command builder is not of type 'SlashSubCommandBuilder'.
   */
  addSubCommands(fn) {
    if (Array.isArray(fn)) {
      this.options = fn?.map((o) => new SlashSubCommands(o).toJSON());
    } else {
      const result = typeof fn === "function" ? fn(new SlashSubCommands()) : undefined;
      if (!result) throw new RangeError(`Expected SlashSubCommandBuilder but received=${typeof result}`);
      this.options.push(result.toJSON());
    }

    return this;
  }

  /**
   * Returns a JSON representation of the sub-command group.
   * @returns {Object} The JSON representation of the sub-command group.
   */
  toJSON() {
    return {
      type: OptionType[this.type],
      name: this.name,
      name_localizations: this.nameLocalizations,
      description_localizations: this.descriptionLocalizations,
      description: this.description,
      options: this.options,
    };
  }
}

module.exports = SlashSubCommandGroups;
