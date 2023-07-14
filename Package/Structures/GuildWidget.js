const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/**
 * Represents a guild widget.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing guild widget information.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildWidget extends Base {
  /**
   * Constructs a new instance of the Guild class.
   * @constructor
   * @param {Object} [data] - The data object containing guild information.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.id = data.id ?? guildId ?? null;
    this.name = data.name ?? null;
    this.instantInvite = data.instant_invite ?? null;
    this.channels = new RaidenCol(data.channels?.map((o) => [o.id, this.client.channels._add(o, this.id)]));
    this.members = new RaidenCol(data.members?.map((o) => [o.id, this.client.users._add(o)]));
    this.presenceCount = data.presence_count ?? null;
  }

  /**
   * Fetches the settings for the guild's widgets.
   * @returns {Promise} A promise that resolves to the fetched settings.
   */
  async fetchSettings() {
    return await this.guild?.widgets.fetchSettings();
  }

  /**
   * Retrieves the guild associated with this object.
   * @returns {Guild | null} The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.id) ?? null;
  }
}

module.exports = GuildWidget;
