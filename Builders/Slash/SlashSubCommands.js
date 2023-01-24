const {OptionType} = require("../../Util/Constants");
const SlashOption = require("./SlashOption");
class SlashSubCommands {
  constructor(data = {}) {
    this.type = "Sub_Command";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.nameLocalizations = data.name_localizations ?? data.nameLocalizations ?? undefined;
    this.descriptionLocalizations = data.description_localizations ?? data.descriptionLocalizations ?? undefined;
    this.options = data.options?.map((o) => new SlashOption(o).toJSON()) ?? [];
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
