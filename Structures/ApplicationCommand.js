const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const { ApplicationCommandTypes } = require("../Util/Constants");
const Base = require("../Base/base");
const Snowflake = require("../Util/Snowflake");
const SlashOption = require("./Interface/SlashOption");
const Permissions = require("../Util/Permissions");
class ApplicationCommand extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.type =
      typeof data.type === "number"
        ? ApplicationCommandTypes[data.type]
        : data.type;
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.nameLocalizations = data.name_localizations ?? null;
    this.description = data.description ?? null;
    this.descriptionLocalizations = data.description_localizations ?? null;
    this.applicationId = data.application_id ?? null;
    this.createdAt = Snowflake.deconstruct(this.id).createdAt;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.guildId = guildId ?? null;
    this.options = new RaidenCol(
      data.options?.map((o) => [o.name, new SlashOption(o, this.client)])
    );
    this.defaultMemberPermissions = new Permissions(
      data.default_member_permissions
        ? BigInt(data.default_member_permissions)
        : 0n
    );
    this.dmPermission = data.dm_permission ?? true;
    this.version = data.version ?? null;
  }

  get guild() {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  async fetch(options = {}) {
    if (options.guild || this.guildId)
      return await this.guild?.commands.fetch(this, options);
    return await this.client.application?.commands.fetch(this, options);
  }

  async edit(options = {}) {
    if (options.guild || this.guildId)
      return await this.guild?.commands.edit(this, options);
    return await this.client.application?.commands.edit(this, options);
  }

  async delete() {
    if (this.guildId) return await this.guild?.commands.delete(this);
    return await this.client.application?.commands.delete(this);
  }
}

module.exports = ApplicationCommand;
