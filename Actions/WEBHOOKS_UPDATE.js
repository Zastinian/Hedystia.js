const BaseAction = require("./BaseAction");
class WebhooksUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds._add(packet.guild_id);
    const channel = this.client.channels._add(
      packet.channel_id,
      packet.guild_id
    );
    return this.client.emit("WebhookActualizado", channel, guild);
  }
}

module.exports = WebhooksUpdate;
