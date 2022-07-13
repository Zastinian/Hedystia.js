const { ApplicationCommandTypes } = require("../../Util/Constants");
const Permissions = require("../../Util/Permissions");
const SlashOption = require("./SlashOption");
const SlashSubCommandGroup = require("./SlashSubCommandGroup");
const SlashSubCommands = require("./SlashSubCommands");

class Slash {
  constructor(data = {}) {
    this.type =
      (typeof data.type === "number"
        ? ApplicationCommandTypes[data.type]
        : data.type) ?? "CHAT_INPUT";
    this.name = data.name ?? undefined;
    this.nameLocalizations = data.name_localizations ?? undefined;
    this.description = data.description ?? undefined;
    this.descriptionLocalizations = data.description_localizations ?? undefined;
    this.options =
      data.options?.map((o) => new SlashOption(o).toJSON()) ?? undefined;
    this.defaultMemberPermissions = new Permissions(
      data.default_member_permissions
        ? BigInt(data.default_member_permissions)
        : 0n
    );
    this.dmPermission = data.dm_permission ?? true;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  setName(name) {
    this.name = name;
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

  setDescription(description) {
    this.description = description;
    return this;
  }

  setDefaultMemberPermissions(...permission) {
    this.defaultMemberPermissions = new Permissions(permission);
    return this;
  }

  setDmPermission(permission) {
    this.dmPermission = permission;
    return this;
  }

  setOptions(fn) {
    if (Array.isArray(fn)) {
      this.options = fn?.map((o) => new SlashOption(o).toJSON());
    } else {
      const result =
        typeof fn === "function" ? fn(new SlashOption()) : undefined;
      if (!result)
        throw new RangeError(
          `Expected an option bulder but received=${typeof result}`
        );
      this.options.push(result.toJSON());
    }
    return this;
  }

  addSubCommandGroups(fn) {
    if (Array.isArray(fn)) {
      this.options = fn?.map((o) => new SlashSubCommandGroup(o).toJSON());
    } else {
      const result =
        typeof fn === "function" ? fn(new SlashSubCommandGroup()) : undefined;
      if (!result)
        throw new RangeError(
          `Expected an option bulder but received=${typeof result}`
        );
      this.options.push(result.toJSON());
    }
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
          `Expected an option bulder but received=${typeof result}`
        );
      this.options.push(result.toJSON());
    }
    return this;
  }

  validation() {
    if (!ApplicationCommandTypes[this.type])
      throw new TypeError(`Application Command Type is invalid`);
    if (
      ["USER", "MESSAGE"].includes(this.type) &&
      (this.description || this.options?.length >= 1)
    )
      throw new RangeError(
        `Context Menu commands must not have description or options`
      );
    if (this.name?.length > 32 || this.name?.length < 1)
      throw new RangeError(`Slash name must be between 1-32 in length`);
    if (this.description?.length > 100 || this.description?.length < 1)
      throw new RangeError(`Slash description must be between 1-100 in length`);
    if (this.options?.length > 25)
      throw new RangeError(`Slash option must be less than 25`);
    if (typeof this.dmPermission !== "boolean")
      throw new TypeError(
        `dmPermission must be boolean. Received=${typeof this.dmPermission}`
      );
    return;
  }

  toJSON() {
    this.validation();
    return {
      type:
        typeof this.type === "string"
          ? ApplicationCommandTypes[this.type]
          : this.type,
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
