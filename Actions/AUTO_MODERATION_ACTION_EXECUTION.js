const TriggeredAutoModRule = require("../Structures/TriggeredAutoModRule");
const BaseAction = require("./BaseAction");
class AutoModerationActionExecution extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    return this.client.emit(
      "AutoModeracionAccionEjecutada",
      new TriggeredAutoModRule(packet, packet.guild_id, this.client)
    );
  }
}

module.exports = AutoModerationActionExecution;
