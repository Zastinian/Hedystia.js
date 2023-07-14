const Base = require("../Base/base");
/**
 * Represents a Guild Vanity URL.
 * @class
 * @extends Base
 */
class GuildVanity extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values for the instance.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);

    this.guildId = guildId;
    this.code = data.code;
    this.uses = data.uses;
  }

  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = GuildVanity;
