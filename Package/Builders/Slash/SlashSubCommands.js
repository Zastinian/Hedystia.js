const {OptionType} = require("../../Util/Constants");
const SlashOption = require("./SlashOption");

/**
 * A class representing a slash subcommand for Discord slash commands.
 * @class
 */
class SlashSubCommands {
  /**
   * Create a new SlashSubCommands instance.
   * @param {Object} data - The data for the subcommand.
   * @param {string} data.name - The name of the subcommand.
   * @param {string} data.description - The description of the subcommand.
   * @param {Object} data.name_localizations - The localized names of the subcommand.
   * @param {Object} data.description_localizations - The localized descriptions of the subcommand.
   * @param {Array<Object>} data.options - The options for the subcommand.
   */
  constructor(data = {}) {
    this.type = "Sub_Command";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.nameLocalizations = data.name_localizations ?? data.nameLocalizations ?? undefined;
    this.descriptionLocalizations = data.description_localizations ?? data.descriptionLocalizations ?? undefined;
    this.options = data.options?.map((o) => new SlashOption(o).toJSON()) ?? [];
  }

  /**
   * Set the name of the subcommand.
   * @param {string} name - The name of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * Set the description of the subcommand.
   * @param {string} description - The description of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Set the localized descriptions of the subcommand.
   * @param {Object} localizations - The localized descriptions of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setDescriptionLocalizations(localizations) {
    this.descriptionLocalizations = localizations;
    return this;
  }

  /**
   * Set the localized names of the subcommand.
   * @param {Object} localizations - The localized names of the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setNameLocalizations(localizations = {}) {
    this.nameLocalizations = localizations;
    return this;
  }

  /**
   * Set the options for the subcommand.
   * @param {Object|function} fn - The options for the subcommand.
   * @returns {SlashSubCommands} The updated SlashSubCommands instance.
   */
  setOptions(fn) {
    if (typeof fn === "object") {
      this.options = fn?.map((o) => new SlashOption(o).toJSON());
    } else {
      const result = typeof fn === "function" ? fn(new SlashOption()) : undefined;
      if (!result) throw new RangeError(`Expected an option bulder but received=${typeof result}`);
      this.options.push(result.toJSON());
    }
    return this;
  }

  /**
   * Convert the SlashSubCommands instance to a JSON object.
   * @returns {Object} The JSON representation of the SlashSubCommands instance.
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

module.exports = SlashSubCommands;
