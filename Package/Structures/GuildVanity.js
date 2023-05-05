const Base = require("../Base/base");
/**
 * It's a class that represents a guild vanity
 * @class
 * @extends Base
 */
class GuildVanity extends Base {
  /**
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the invite is for.
   * @param client - The client instance
   */
  constructor(data = {}, guildId, client) {
    super(client);

    this.guildId = guildId;
    this.code = data.code;
    this.uses = data.uses;
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = GuildVanity;
