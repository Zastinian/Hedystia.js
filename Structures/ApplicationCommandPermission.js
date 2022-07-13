const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const { ApplicationCommandPermissionType } = require("../Util/Constants");
const Base = require("../Base/base");
class ApplicationCommandPermission extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    (this.commandId = data.id ?? undefined),
      (this.applicationId = data.application_id ?? null);
    this.guildId = guildId;
    this.permissions = new RaidenCol(
      data.permissions?.map((o) => [
        o.id,
        ApplicationCommandPermission.transformPermissions(o),
      ])
    );
  }

  async fetch(options = {}) {
    return await this.guild.commands?.permissions.fetch(this, options);
  }

  get command() {
    return (
      this.client.application.commands.cache.get(this.commandId) ??
      this.guild.commands?.cache.get(this.commandId) ??
      null
    );
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  static transformPermissions(permissions = {}) {
    return {
      id: permissions.id ?? undefined,
      type:
        (typeof permissions.type === "number"
          ? ApplicationCommandPermissionType[permissions.type]
          : permissions.type) ?? undefined,
      permission: permissions.permission ?? undefined,
    };
  }
}

module.exports = ApplicationCommandPermission;
