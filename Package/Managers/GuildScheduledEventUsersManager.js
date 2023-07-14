const GuildScheduledEventUser = require("../Structures/GuildScheduledEventUser");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/**
 * Represents a manager for handling guild scheduled event users.
 * @class
 * @extends Base
 */
class GuildScheduledEventUsersManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Event} event - The event object.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(event, guildId, client) {
    super(client);

    this.event = event;
    this.guildId = guildId;
  }

  /**
   * Resolves a scheduled event user and returns a GuildScheduledEventUser object.
   * @param {string | null} scheduledEventUser - The scheduled event user to resolve.
   * @param {object} event - The event object.
   * @returns {GuildScheduledEventUser | null} - The resolved GuildScheduledEventUser object or null if scheduledEventUser is falsy.
   */
  resolve(scheduledEventUser, event) {
    if (!scheduledEventUser) return null;
    if (typeof event?.id !== "undefined") event = event.id;
    return new GuildScheduledEventUser(
      typeof scheduledEventUser === "string"
        ? {
            partial: true,
            user: scheduledEventUser.user,
            member: scheduledEventUser.member,
          }
        : scheduledEventUser,
      this.guildId,
      event,
      this.client
    );
  }

  /**
   * Fetches the users associated with a scheduled event in a guild.
   * @param {Event | string} [event=this.event] - The event object or event ID.
   * @param {object} [options] - Additional options for the fetch request.
   * @returns {Promise<RaidenCol>} - A promise that resolves to a RaidenCol object containing the fetched users.
   */
  async fetch(event = this.event, options = {}) {
    const query = GuildScheduledEventUsersManager.transformQuery(options);
    const eventId = typeof event === "string" ? event : event?.id;
    const users = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}/users`, {query});
    return new RaidenCol(users?.map((o) => [o.user?.id, this.resolve(o, eventId)]));
  }

  /**
   * Transforms a query object into a formatted query object with default values and
   * proper type checking.
   * @param {Object} query - The query object to transform.
   * @returns {Object} - The transformed query object.
   */
  static transformQuery(query = {}) {
    return {
      limit: query.limit ?? 100,
      with_member: query.withMember ?? undefined,
      before: typeof query.before === "string" ? query.before : query.before?.id ?? undefined,
      after: typeof query.after === "string" ? query.after : query.after?.id ?? undefined,
    };
  }
}

module.exports = GuildScheduledEventUsersManager;
