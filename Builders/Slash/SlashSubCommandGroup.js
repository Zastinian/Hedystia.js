const { OptionType } = require("../../Util/Constants");
const SlashSubCommands = require("./SlashSubCommands");

class SlashSubCommandGroups {
  constructor(data = {}) {
    this.type = "SUB_COMMAND_GROUP";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.nameLocalizations =
      data.name_localizations ?? data.nameLocalizations ?? undefined;
    this.descriptionLocalizations =
      data.description_localizations ??
      data.descriptionLocalizations ??
      undefined;
    this.options =
      data.options?.map((o) => new SlashSubCommands(o).toJSON()) ?? [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setDescriptionLocalizations(localizations) {
    this.descriptionLocalizations = localizations;
    return this;
  }

  setNameLocalizations(localizations = {}) {
    this.nameLocalizations = localizations;
    return this;
  }

  addSubCommands(fn) {
    if (Array.isArray(fn)) {
      this.options = fn?.map((o) => new SlashSubCommands(o).toJSON());
    } else {
      const result =
        typeof fn === "function" ? fn(new SlashSubCommands()) : undefined;
      if (!result)
        throw new RangeError(
          `Expected SlashSubCommandBuilder but received=${typeof result}`
        );
      this.options.push(result.toJSON());
    }

    return this;
  }

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
