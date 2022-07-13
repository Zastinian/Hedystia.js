const GuildScheduledEvent = require("../Structures/GuildScheduledEvent");
const {
  GuildScheduledEventPrivacyLevel,
  GuildScheduledEventEntityType,
  GuildScheduledEventStatus,
} = require("../Util/Constants");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class ScheduledEventManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(
    events,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
    if (!events) return null;
    const eventsId = typeof events === "string" ? events : events.id;
    let event;
    if (this.cache.has(eventsId) && !options.force) {
      event = this.cache.get(eventsId);
    } else {
      const scheduledEvent = new GuildScheduledEvent(
        typeof events === "string"
          ? {
              partial: true,
              id: eventsId,
            }
          : events,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(eventsId, scheduledEvent);

      event = scheduledEvent;
    }

    return event;
  }

  async create(options = {}) {
    const { reason } = options;
    const body = await ScheduledEventManager.transformOptions(options, true);
    const event = await this.client.api.post(
      `${this.client.root}/guilds/${this.guildId}/scheduled-events`,
      { body, reason }
    );
    return this._add(event);
  }

  async edit(event, options = {}) {
    const { reason } = options;
    const eventId = typeof event === "string" ? event : event?.id;
    const body = await ScheduledEventManager.transformOptions(options, true);
    event = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`,
      { body, reason }
    );
    return this._add(event);
  }

  async delete(event) {
    const eventId = typeof event === "string" ? event : event?.id;
    const deletedEvent = this._add(event, this.guildId);
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`
    );
    return deletedEvent;
  }

  async fetch(events, options) {
    if (typeof events?.id !== "undefined" || typeof events === "string")
      return this._fetchId(events, options?.cache, options?.force);
    if (typeof events === "object" && !options) options = events;
    const { cache = true, force = false } = options ?? {};
    const query = await ScheduledEventManager.transformOptions(options);
    events = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/scheduled-events`,
      { query }
    );
    return new this.cache.constructor(
      events?.map((o) => [o.id, this._add(o, this.guildId, { cache, force })])
    );
  }

  async _fetchId(events, cache = true, force = false) {
    const eventId = typeof events === "string" ? events : events?.id;
    const query = await ScheduledEventManager.transformOptions(options);
    if (this.cache.has(eventId) && force) return this.cache.get(eventId);
    const event = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`,
      { query }
    );
    return this._add(event, this.guildId, { cache, force: true });
  }

  get cache() {
    return Collection;
  }

  static async transformOptions(o = {}, create = false) {
    if (create) {
      return {
        channel_id:
          typeof o.channel === "string"
            ? o.channel
            : o.channel?.id ?? undefined,
        entity_metadata: o.entityMetadata ?? undefined,
        name: o.name ?? undefined,
        privacy_level:
          typeof o.privacyLevel === "string"
            ? GuildScheduledEventPrivacyLevel[o.privacyLevel]
            : o.privacyLevel ?? 2,
        scheduled_start_time:
          Util.generateISOString(o.scheduledStartTime ?? null) ?? undefined,
        scheduled_end_time:
          Util.generateISOString(o.scheduledEndTime ?? null) ?? undefined,
        description: o.description ?? undefined,
        entity_type:
          typeof o.entityType === "string"
            ? GuildScheduledEventEntityType[o.entityType]
            : o.entityType ?? undefined,
        status:
          typeof o.status === "string"
            ? GuildScheduledEventStatus[o.status]
            : o.status ?? undefined,
        image:
          o.image === null
            ? null
            : (await Util.generateDataURI(o.image)) ?? undefined,
      };
    }

    return {
      with_user_count: o.withUserCount ?? undefined,
    };
  }
}

module.exports = ScheduledEventManager;
