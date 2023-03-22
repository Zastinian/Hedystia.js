const Base = require("../Base/base");
/**
 * It's a class that represents a user that is going to an event
 * @class
 * @extends Base
 */
class GuildScheduledEventUser extends Base {
  /**
   * This function is used to create a new instance of the class GuildScheduledEventMember.
   * @param [data] - The data that was received from the API.
   * @param guildId - The ID of the guild the event is in
   * @param eventId - The ID of the event
   * @param client - Discord.Client
   */
  constructor(data = {}, guildId, eventId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.user = this.client.users._add(data.user);
    this.guildId = guildId;
    this.member = this.guild?.members._add(data.member);
    this.guildScheduledEventId = eventId;
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * "If the guild exists, add the guildScheduledEventId to the events array, otherwise return null."
   * @returns The guildScheduledEventId is being returned.
   */
  get guildScheduledEvent() {
    return this.guild?.events._add(this.guildScheduledEventId) ?? null;
  }
}

module.exports = GuildScheduledEventUser;
