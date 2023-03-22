const Base = require("../Base/base");

/**
 * Represents a ban for a user in a guild.
 * @class
 * @extends {Base}
 */
class GuildBan extends Base {
  /**
   * @param {Object} data - The data for the ban.
   * @param {string} guildId - The ID of the guild.
   * @param {import("../Client/Client")} client - The client.
   */
  constructor(data = {}, guildId, client) {
    super(client);

    /**
     * Whether or not the ban is partial.
     * @type {boolean}
     */
    this.partial = data.partial ?? false;

    /**
     * The reason for the ban.
     * @type {?string}
     */
    this.reason = data.reason ?? null;

    /**
     * The user who was banned.
     * @type {import("./User")}
     */
    this.user = this.client.users._add(data.user);

    /**
     * The ID of the guild the ban was issued in.
     * @type {string}
     */
    this.guildId = guildId;
  }

  /**
   * Fetches this ban from the API.
   * @param {Object} [options] - Additional options for the fetch.
   * @returns {Promise<GuildBan>}
   */
  async fetch(options) {
    return await this.guild?.bans.fetch(this, options);
  }

  /**
   * Fetches this ban from the API.
   * @param {Object} [options] - Additional options for the fetch.
   * @returns {Promise<GuildBan>}
   */
  async remove(reason) {
    return await this.guild?.bans.remove(this.user, reason);
  }

  /**
   * The guild that this ban was issued in.
   * @type {?Guild}
   * @readonly
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = GuildBan;
