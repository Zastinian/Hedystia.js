const ApplicationCommandManager = require("../Managers/ApplicationCommandManager");
const ApplicationFlags = require("../Util/ApplicationFlags");
const Permissions = require("../Util/Permissions");
const Base = require("../Base/base");
const Team = require("./Team");
/**
 * Represents a client application.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the client application.
 * @param {Client} client - The client object associated with the application.
 */
class ClientApplication extends Base {
  /**
   * Constructs a new instance of the Application class.
   * @constructor
   * @param {Object} [data] - The data object containing the application properties.
   * @param {Client} client - The client instance.
   */
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
    this.approximateGuildCount = data.approximate_guild_count ?? null;
    this.tags = data.tags ?? null;
    this.installParams = data.install_params
      ? {
          scopes: data.install_params.scopes,
          permissions: new Permissions(data.install_params.permissions),
        }
      : null;
    this.customInstallURL = data.custom_install_url ?? null;
    this.roleConnectionsVerificationUrl = data.role_connections_verification_url ?? null;
  }

  /**
   * Fetches the application information for the authenticated user.
   * @async
   * @returns {Promise<Application>} A promise that resolves to the application object.
   */
  async fetch() {
    const application = await this.client.api.get(`${this.client.root}/oauth2/applications/@me`);
    this.client.application = new this.constructor(application, this.client);
    return this.client.application;
  }

  /**
   * Get the commands for the application.
   * @returns {ApplicationCommandManager} - The application command manager.
   */
  get commands() {
    return new ApplicationCommandManager(this.client);
  }

  /**
   * Returns the URL of the icon for this application.
   * @param {Object} options - An optional object containing additional options for the icon URL.
   * @param {boolean} options.dynamic - Whether the icon should be dynamically generated.
   * @param {number} options.size - The desired size of the icon.
   * @param {string} options.format - The desired format of the icon.
   * @returns {string | null} The URL of the icon, or null if no icon is available.
   */
  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.ApplicationIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }
}

module.exports = ClientApplication;
