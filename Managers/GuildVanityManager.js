const GuildVanity = require("../Structures/GuildVanity");
const Base = require("../Base/base");
class GuildVanityManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  async fetch(guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const vanity = await this.client.api.get(
      `${this.client.root}/guilds/${guildId}/vanity-url`
    );
    return new GuildVanity(vanity, guildId, this.client);
  }

  async edit(code, guild = this.guildId) {
    const guildId = typeof guild === "string" ? guild : guild.id;
    const body = { code };
    const vanity = await this.client.api.patch(
      `${this.client.root}/guilds/${guildId}/vanity-url`,
      { body }
    );
    return new GuildVanity(vanity, guildId, this.client);
  }
}

module.exports = GuildVanityManager;
