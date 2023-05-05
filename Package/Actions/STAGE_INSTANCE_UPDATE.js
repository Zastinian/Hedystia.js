const StageInstanceManager = require("../Managers/StageInstanceManager");
const BaseAction = require("./BaseAction");
class StageInstanceUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const stageInstance = new StageInstanceManager(this.client);
    const oldStage = stageInstance._add(packet, packet.guild_id);
    const newStage = stageInstance._add(packet, packet.guild_id, {cache: true, force: true});
    return this.client.emit("stageInstanceUpdate", oldStage, newStage);
  }
}

module.exports = StageInstanceUpdate;
