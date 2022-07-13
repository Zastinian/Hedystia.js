const BaseAction = require("./BaseAction");
const ScheduledEventManager = require("../Managers/ScheduledEventManager");
class GuildScheduledEventDelete extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const events = new ScheduledEventManager(this.client);
    this.client.emit(
      "EventoProgramadoEliminado",
      events._add(packet, packet.guild_id)
    );
    return events.cache.delete(packet.id);
  }
}

module.exports = GuildScheduledEventDelete;
