const GuildVanity = require("../Structures/GuildVanity");
const Base = require("../Base/base");
/* It's a class that manages a guild's vanity URL */
class GuildVanityManager extends Base {
  /**
   * The constructor function is a function that is called when an object is created from a class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It fetches the vanity url of a guild
   * @param [guild] - The guild ID or guild object to fetch the vanity URL for.
   * @returns A new instance of the GuildVanity class.
   */
  async fetch(guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const vanity = await this.client.api.get(`${this.client.root}/guilds/${guildId}/vanity-url`);
    return new GuildVanity(vanity, guildId, this.client);
  }

  /**
   * It edits the guild's vanity url
   * @param code - The vanity code you want to set.
   * @param [guild] - The guild ID or guild object to edit the vanity URL for.
   * @returns A new GuildVanity object.
   */
  async edit(code, guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const body = {code};
    const vanity = await this.client.api.patch(`${this.client.root}/guilds/${guildId}/vanity-url`, {body});
    return new GuildVanity(vanity, guildId, this.client);
  }
}

module.exports = GuildVanityManager;
