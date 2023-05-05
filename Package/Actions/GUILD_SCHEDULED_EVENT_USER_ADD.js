const BaseAction = require("./BaseAction");
class GuildScheduledEventUserAdd extends BaseAction {
  constructor(data = {}, client) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const guild = this.client.guilds.cache.get(packet.guild_id);
    if (guild) {
      const scheduledEvent = guild.events.cache.get(packet.guild_scheduled_event_id);
      if (scheduledEvent) {
        const user = this.client.users.cache._add(packet.user_id);
        return this.client.emit("guildScheduledEventUserAdd", user);
      }
    }

    return;
  }
}

module.exports = GuildScheduledEventUserAdd;
