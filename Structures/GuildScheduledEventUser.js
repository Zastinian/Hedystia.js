const Base = require("../Base/base");
class GuildScheduledEventUser extends Base {
  constructor(data = {}, guildId, eventId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.user = this.client.users._add(data.user);
    this.guildId = guildId;
    this.member = this.guild?.members._add(data.member);
    this.guildScheduledEventId = eventId;
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  get guildScheduledEvent() {
    return this.guild?.events._add(this.guildScheduledEventId) ?? null;
  }
}

module.exports = GuildScheduledEventUser;
