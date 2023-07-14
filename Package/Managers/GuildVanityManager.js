const GuildVanity = require("../Structures/GuildVanity");
const Base = require("../Base/base");
/**
 * Represents a manager for handling guild vanity URLs.
 * @class
 * @extends Base
 */
class GuildVanityManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Fetches the vanity URL for the specified guild.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or Guild object. Defaults to the current guild.
   * @returns {Promise<GuildVanity>} - A promise that resolves to a GuildVanity object containing the vanity URL information.
   */
  async fetch(guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const vanity = await this.client.api.get(`${this.client.root}/guilds/${guildId}/vanity-url`);
    return new GuildVanity(vanity, guildId, this.client);
  }

  /**
   * Edits the code for a guild's vanity URL.
   * @param {string} code - The new code for the vanity URL.
   * @param {string | Guild} [guild=this.guildId] - The guild ID or guild object to edit the vanity URL for.
   * @returns {Promise<GuildVanity>} A promise that resolves with the updated GuildVanity object.
   */
  async edit(code, guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const body = {code};
    const vanity = await this.client.api.patch(`${this.client.root}/guilds/${guildId}/vanity-url`, {body});
    return new GuildVanity(vanity, guildId, this.client);
  }
}

module.exports = GuildVanityManager;
