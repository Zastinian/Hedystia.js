const StageInstanceManager = require("../Managers/StageInstanceManager");
const BaseAction = require("./BaseAction");
class StageInstanceCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const stageInstance = new StageInstanceManager(this.client);
    return this.client.emit(
      "EscenarioCreado",
      stageInstance._add(packet, packet.guild_id)
    );
  }
}

module.exports = StageInstanceCreate;
