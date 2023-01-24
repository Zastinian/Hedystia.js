const BaseThreadManager = require("../Managers/BaseThreadManager");
const BaseAction = require("./BaseAction");
class ThreadCreate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const thread = new BaseThreadManager(this.client);
    const threadChannel = thread._add(packet, packet.guild_id);
    threadChannel.members._add(packet.owner_id);
    this.client.channels._add(packet, packet.guild_id);
    return this.client.emit("threadCreate", threadChannel);
  }
}

module.exports = ThreadCreate;
