const BaseAction = require("./BaseAction");
class IntegrationDelete extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds.cache.get(packet.guild_id);
    if (guild) {
      const integration = guild.integrations.cache.get(packet.id);
      if (integration) {
        this.client.emit("integrationDelete", integration);
        return guild.integrations.cache.delete(packet.id);
      }
    }
  }
}

module.exports = IntegrationDelete;
