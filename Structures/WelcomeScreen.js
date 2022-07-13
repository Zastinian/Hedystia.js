const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
const WelcomeScreenChannel = require("./WelcomeScreenChannel");
class WelcomeScreen extends Base {
  constructor(data = {}, guildId, client) {
    super(client);

    this.description = data.description ?? null;
    this.guildId = guildId;
    this.channels = new RaidenCol(
      data.welcome_channels?.map((o) => [
        o.channel_id,
        new WelcomeScreenChannel(o, this.guildId, this.client),
      ])
    );
  }

  async edit(options = {}) {
    return await this.guild.welcomeScreen.edit(options);
  }

  async setEnabled(enabled, reason) {
    return await this.edit({ enabled, reason });
  }

  async setWelcomeChannels(channels, reason) {
    return await this.edit({ channels, reason });
  }

  async setDescription(description, reason) {
    return await this.edit({ description, reason });
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }
}

module.exports = WelcomeScreen;
