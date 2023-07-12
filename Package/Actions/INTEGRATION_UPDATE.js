const BaseAction = require("./BaseAction");
class IntegrationUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  async _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    if (guild) {
      const oldIntegration = guild.integrations._add(packet);
      return this.client.emit("integrationUpdate", oldIntegration, guild.integrations._add(packet, packet.guild_id, {cache: true, force: true}));
    }
  }
}

module.exports = IntegrationUpdate;
