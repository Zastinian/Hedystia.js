const Base = require("../Base/base");
/**
 * Represents a user associated with a scheduled event in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the user.
 * @param {string} guildId - The ID of the guild the user belongs to.
 * @param {string} eventId - The ID of the scheduled event the user is associated with.
 * @param {Client} client - The client instance.
 */
class GuildScheduledEventUser extends Base {
  /**
   * Constructs a new instance of the Event class.
   * @constructor
   * @param {Object} [data] - The data object containing information about the event.
   * @param {string} guildId - The ID of the guild associated with the event.
   * @param {string} eventId - The ID of the scheduled event.
   * @param {Client} client - The client instance.
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
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Retrieves the scheduled event associated with the guild.
   * @returns {ScheduledEvent | null} The scheduled event object if found, otherwise null.
   */
  get guildScheduledEvent() {
    return this.guild?.events._add(this.guildScheduledEventId) ?? null;
  }
}

module.exports = GuildScheduledEventUser;
