const ChannelManager = require("./ChannelManager");
/* It's a class that manages channels in a guild */
class GuildChannelManager extends ChannelManager {
  /**
   * It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
   * guildId that was passed in, and then sets the client to the client that was passed in.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It creates a new channel in the guild.
   * @param [options] - {
   * @returns The channel object.
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
   * It takes an array of objects, transforms them, and then sends them to the API
   * @param [options] - An object containing the following properties:
   * @returns A new cache object.
   */
  async modifyPosition(options = {}) {
    const {reason, data} = options ?? {};
    const body = data?.map((o) => ChannelManager.transformPayload(o, true));
    await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/channels`, {body, reason});
    return new this.cache.constructor(parse?.map((o) => [o.id, this._add(o)]));
  }

  /**
   * It filters the cache to only include objects that have a guild_id or guildId property that matches
   * the guildId of the current instance
   * @returns The cache is being filtered to only return the objects that have the same guildId as the
   * guildId of the current guild.
   */
  get cache() {
    return super.cache.filter((o) => (o.guild_id ?? o.guildId) === this.guildId);
  }
}

module.exports = GuildChannelManager;
