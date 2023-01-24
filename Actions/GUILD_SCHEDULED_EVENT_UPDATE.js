const BaseAction = require("./BaseAction");
const ScheduledEventManager = require("../Managers/ScheduledEventManager");
class GuildScheduledEventUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const events = new ScheduledEventManager(this.client);
    const oldEvent = events._add(packet, packet.guild_id);
    const newEvent = events._add(packet, packet.guild_id, {cache: true, force: true});
    return this.client.emit("guildScheduledEventUpdate", oldEvent, newEvent);
  }
}

module.exports = GuildScheduledEventUpdate;
