const ChannelManager = require("./ChannelManager");
class GuildChannelManager extends ChannelManager {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  async create(options = {}) {
    const { reason } = options;
    const body = ChannelManager.transformPayload(options);
    const channel = await this.client.api.post(
      `${this.client.root}/guilds/${this.guildId}/channels`,
      { reason, body }
    );
    return this._add(channel, this.guildId);
  }

  async modifyPosition(options = {}) {
    const { reason, data } = options ?? {};
    const body = data?.map((o) => ChannelManager.transformPayload(o, true));
    await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/channels`,
      { body, reason }
    );
    return new this.cache.constructor(parse?.map((o) => [o.id, this._add(o)]));
  }

  get cache() {
    return super.cache.filter(
      (o) => (o.guild_id ?? o.guildId) === this.guildId
    );
  }
}

module.exports = GuildChannelManager;
