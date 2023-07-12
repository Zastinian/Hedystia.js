const ClientUser = require("../Structures/ClientUser");
const BaseAction = require("./BaseAction");
const {setTimeout} = require("timers/promises");
const ClientApplication = require("../Structures/ClientApplication");
class Ready extends BaseAction {
  constructor(data, client) {
    super(client);
    this._patch(data);
  }

  async _patch(data) {
    const packet = data.d;
    this.client.user = new ClientUser(packet.user, this.client, this.ws);
    this.client.application = new ClientApplication(packet.application, this.client);
    await setTimeout(this.client.restReadyTimeout);
    this.client.readyAt = new Date();
    this.client.readyTimestamp = this.client.readyAt?.getTime() ?? null;
    this.client.sessionId = packet.session_id;
    this.client.resumeGatewayURL = `${packet.resume_gateway_url}?v=${this.client.version}&encoding=${this.client.encoding}`;
    this.client.ws.status = "READY";
    return this.client.emit("ready");
  }
}

module.exports = Ready;
