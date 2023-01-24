const GuildScheduledEventUser = require("../Structures/GuildScheduledEventUser");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/* It's a manager for the scheduled event users of a guild */
class GuildScheduledEventUsersManager extends Base {
  /**
   * It's a constructor for the class
   * @param event - The event that was triggered.
   * @param guildId - The ID of the guild the event is being emitted in.
   * @param client - The client object
   */
  constructor(event, guildId, client) {
    super(client);

    this.event = event;
    this.guildId = guildId;
  }

  /**
   * If the scheduledEventUser is a string, it's a user ID, so we return a partial
   * GuildScheduledEventUser object with the user ID and member ID. If it's an object, we return a full
   * GuildScheduledEventUser object
   * @param scheduledEventUser - The scheduled event user object.
   * @param event - The event to get the scheduled event user from.
   * @returns A new GuildScheduledEventUser
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
   * It fetches the users of a scheduled event
   * @param [event] - The event to fetch the users for. Can be a string or a GuildScheduledEvent object.
   * @param [options] - An object with the following properties:
   * @returns A RaidenCol of GuildScheduledEventUser objects
   */
  async fetch(event = this.event, options = {}) {
    const query = GuildScheduledEventUsersManager.transformQuery(options);
    const eventId = typeof event === "string" ? event : event?.id;
    const users = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}/users`, {query});
    return new RaidenCol(users?.map((o) => [o.user?.id, this.resolve(o, eventId)]));
  }

  /**
   * It takes a query object and returns a new query object with the same properties, but with some of
   * them transformed
   * @param [query] - The query object that was passed to the route.
   * @returns An object with the following properties:
   *   limit: The value of the query.limit property, or 100 if query.limit is undefined.
   *   with_member: The value of the query.withMember property, or undefined if query.withMember is
   * undefined.
   *   before: The value of the query.before property, or undefined if query.before is undefined.
   *   after
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
