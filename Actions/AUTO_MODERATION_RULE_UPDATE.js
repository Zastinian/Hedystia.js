const BaseAction = require("./BaseAction");
const AutoModManager = require("../Managers/AutoModManager");
class AutoModerationRuleUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const automod = new AutoModManager(this.client);
    const oldRule = automod._add(packet);
    const newRule = automod._add(packet, packet.guild_id, {cache: true, force: true});
    return this.client.emit("autoModerationRuleUpdate", oldRule, newRule);
  }
}

module.exports = AutoModerationRuleUpdate;
