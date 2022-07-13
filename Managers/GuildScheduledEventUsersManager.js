const GuildScheduledEventUser = require("../Structures/GuildScheduledEventUser");
const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
class GuildScheduledEventUsersManager extends Base {
  constructor(event, guildId, client) {
    super(client);

    this.event = event;
    this.guildId = guildId;
  }

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

  async fetch(event = this.event, options = {}) {
    const query = GuildScheduledEventUsersManager.transformQuery(options);
    const eventId = typeof event === "string" ? event : event?.id;
    const users = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}/users`,
      { query }
    );
    return new RaidenCol(
      users?.map((o) => [o.user?.id, this.resolve(o, eventId)])
    );
  }

  static transformQuery(query = {}) {
    return {
      limit: query.limit ?? 100,
      with_member: query.withMember ?? undefined,
      before:
        typeof query.before === "string"
          ? query.before
          : query.before?.id ?? undefined,
      after:
        typeof query.after === "string"
          ? query.after
          : query.after?.id ?? undefined,
    };
  }
}

module.exports = GuildScheduledEventUsersManager;
