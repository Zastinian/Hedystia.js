const ApplicationCommandManager = require("../Managers/ApplicationCommandManager");
const ApplicationFlags = require("../Util/ApplicationFlags");
const Permissions = require("../Util/Permissions");
const Base = require("../Base/base");
const Team = require("./Team");
class ClientApplication extends Base {
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.icon = data.icon ?? null;
    this.description = data.description ?? null;
    this.rpcOrigins = data.rpc_origins ?? null;
    this.public = data.bot_public ?? null;
    this.requireCodeGrant = data.bot_require_code_grant ?? null;
    this.termsOfService = data.terms_of_service_url ?? null;
    this.privacyPolicy = data.privacy_policy_url ?? null;
    this.owner = this.client.users._add(data.owner) ?? null;
    this.summary = data.summary ?? null;
    this.verifyKey = data.verify_key ?? null;
    this.team = data.team ? new Team(data.team, this.client) : null;
    this.guildId = data.guild_id ?? null;
    this.primarySkuId = data.primary_sku_id ?? null;
    this.slug = data.slug ?? null;
    this.cover = data.cover_image ?? null;
    this.flags = new ApplicationFlags(data.flags ? BigInt(data.flags) : 0n);
    this.installParams = data.install_params
      ? {
          scopes: data.install_params.scopes,
          permissions: new Permissions(data.install_params.permissions),
        }
      : null;
    this.customInstallURL = data.custom_install_url ?? null;
  }

  async fetch() {
    const application = await this.client.api.get(
      `${this.client.root}/oauth2/applications/@me`
    );
    this.client.application = new this.constructor(application, this.client);
    return this.client.application;
  }

  get commands() {
    return new ApplicationCommandManager(this.client);
  }

  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.ApplicationIcon(
      this.icon,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }
}

module.exports = ClientApplication;
