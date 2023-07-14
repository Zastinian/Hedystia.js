const ChannelManager = require("./ChannelManager");
/**
 * Represents a manager for guild channels.
 * @class
 * @extends ChannelManager
 */
class GuildChannelManager extends ChannelManager {
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
   * Creates a new channel in the guild.
   * @param {Object} [options] - The options for creating the channel.
   * @param {string} [options.reason] - The reason for creating the channel.
   * @returns {Promise<Channel>} A promise that resolves with the created channel.
   */
  async create(options = {}) {
    const {reason} = options;
    const body = ChannelManager.transformPayload(options);
    const channel = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/channels`, {
      reason,
      body,
    });
    return this._add(channel, this.guildId);
  }

  /**
   * Modifies the position of channels in a guild.
   * @param {Object} [options] - The options for modifying the position.
   * @param {string} [options.reason] - The reason for modifying the position.
   * @param {Array} [options.data] - The data containing the channels to modify.
   * @returns {Promise} A promise that resolves when the position is modified.
   */
  async modifyPosition(options = {}) {
    const {reason, data} = options ?? {};
    const body = data?.map((o) => ChannelManager.transformPayload(o, true));
    await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/channels`, {body, reason});
    return new this.cache.constructor(parse?.map((o) => [o.id, this._add(o)]));
  }

  /**
   * Retrieves the cache for the current guild.
   * @returns {Array} - The filtered cache objects for the current guild.
   */
  get cache() {
    return super.cache.filter((o) => (o.guild_id ?? o.guildId) === this.guildId);
  }
}

module.exports = GuildChannelManager;
