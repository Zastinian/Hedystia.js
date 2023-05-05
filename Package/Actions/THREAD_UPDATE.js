const BaseThreadManager = require("../Managers/BaseThreadManager");
const BaseAction = require("./BaseAction");
class ThreadUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const threads = new BaseThreadManager(this.client);
    const oldThread = threads._add(packet, packet.guild_id);
    const newThread = threads._add(packet, packet.guild_id, {cache: true, force: true});
    this.client.emit("threadUpdate", oldThread, newThread);
    return this.client.channels._add(packet, packet.guild_id, {cache: true, force: true});
  }
}

module.exports = ThreadUpdate;
