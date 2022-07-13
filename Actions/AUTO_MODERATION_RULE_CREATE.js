const AutoModManager = require("../Managers/AutoModManager");
const BaseAction = require("./BaseAction");
class AutoModerationRuleCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const automod = new AutoModManager(this.client);
    const rule = automod._add(packet, packet.guild_id);
    return this.client.emit("AutoModeracionReglaCreada", rule);
  }
}

module.exports = AutoModerationRuleCreate;
