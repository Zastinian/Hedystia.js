const ApplicationCommandPermission = require("../Structures/ApplicationCommandPermission");
const { ApplicationCommandPermissionType } = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class ApplicationCommandPermissionManager extends Base {
  constructor(client, guildId) {
    super(client);

    this.guildId = guildId;
  }

  _add(
    commands,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
    const commandId = typeof commands === "string" ? commands : commands.id;
    let perms;
    if (this.cache.has(commandId) && !options.force) {
      perms = this.cache.get(commandId);
    } else {
      const newPerm = new ApplicationCommandPermission(
        typeof commands === "string"
          ? {
              partial: true,
              id: commandId,
            }
          : commands,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(commandId, newPerm);

      perms = newPerm;
    }

    return perms;
  }

  async fetch(commands, options) {
    if (
      typeof commands?.commandId !== "undefined" ||
      typeof commands === "string"
    )
      return this._fetchId(
        commands,
        options?.cache,
        options?.force,
        options?.guild
      );
    if (typeof commands === "object" && !options) options = commands;
    const { cache, force, guild = this.guildId } = options ?? {};
    if (!guild)
      throw new RangeError(
        `Los permisos de comandos de la aplicación están vinculados al servidor, por lo tanto, especifica un servidor resoluble`
      );
    const guildId = typeof guild === "string" ? guild : guild.id;
    const permissions = await this.client.api.get(
      `${this.client.root}/applications/${this.client.user.id}/guilds/${guildId}/commands/permissions`
    );
    return new this.cache.constructor(
      permissions?.map((o) => [o.id, this._add(o, guild, { cache, force })])
    );
  }

  async _fetchId(commands, cache = true, force = false, guild = this.guildId) {
    if (!guild)
      throw new RangeError(
        `Los permisos de comandos de la aplicación están vinculados al servidor, por favor especifique un servidor que pueda resolver`
      );
    const commandId =
      typeof commands === "string" ? commands : commands.commandId;
    const guildId = typeof guild === "string" ? guild : guild.id;
    if (this.cache.has(commandId) && force) return this.cache.get(commandId);
    const permissions = await this.client.api.get(
      `${this.client.root}/applications/${this.client.user.id}/guilds/${guildId}/commands/${commandId}/permissions`
    );
    return this._add(permissions, guildId, { cache, force });
  }

  get cache() {
    return Collection;
  }

  static transformPermissions(o = {}) {
    return {
      id: typeof o.id === "string" ? o.id : o.id?.id ?? undefined,
      type:
        (typeof o.type === "string"
          ? ApplicationCommandPermissionType[o.type]
          : o.type) ?? 2,
      permission: o.permission,
    };
  }

  static transformPermission(o = {}) {
    return {
      id: typeof o.command === "string" ? o.command : o.command?.id,
      permissions: o.permissions?.map((o) => this.transformPermissions(o)),
    };
  }

  static parseRemoveOptions(payload, fetchedData) {
    let arr = [];
    const data = fetchedData;
    if (payload.channels) {
      payload.channels
        ? data
            .filter(
              (o) => o.type === "CHANNEL" && !payload.channels.includes(o.id)
            )
            ?.mapVal((o) => arr.push(o))
        : null;
    }
    if (payload.users) {
      payload.users
        ? data
            .filter((o) => o.type === "USER" && !payload.users.includes(o.id))
            ?.mapVal((o) => arr.push(o))
        : null;
    }
    if (payload.roles) {
      payload.roles
        ? data
            .filter((o) => o.type === "ROLE" && !payload.roles.includes(o.id))
            ?.mapVal((o) => arr.push(o))
        : null;
    }
    return arr;
  }
}

module.exports = ApplicationCommandPermissionManager;
