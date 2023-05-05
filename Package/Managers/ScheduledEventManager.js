const GuildScheduledEvent = require("../Structures/GuildScheduledEvent");
const {GuildScheduledEventPrivacyLevel, GuildScheduledEventEntityType, GuildScheduledEventStatus} = require("../Util/Constants");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages scheduled events for a guild */
class ScheduledEventManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a scheduled event to the cache.
   * @param events - The event to add. Can be a string or a GuildScheduledEvent object.
   * @param [guildId] - The ID of the guild the event is in.
   * @param [options] - cache = true, force = false
   * @returns A new instance of the GuildScheduledEvent class.
   */
  _add(events, guildId = this.guildId, options = {cache: true, force: false}) {
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

  /**
   * It creates a scheduled event
   * @param [options] - An object containing the following parameters:
   * @returns A new ScheduledEvent instance.
   */
  async create(options = {}) {
    const {reason} = options;
    const body = await ScheduledEventManager.transformOptions(options, true);
    const event = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/scheduled-events`, {
      body,
      reason,
    });
    return this._add(event);
  }

  /**
   * It edits a scheduled event
   * @param event - The event to edit. This can be a ScheduledEvent object, or the ID of the event.
   * @param [options] - The options to pass to the event.
   * @returns The event object
   */
  async edit(event, options = {}) {
    const {reason} = options;
    const eventId = typeof event === "string" ? event : event?.id;
    const body = await ScheduledEventManager.transformOptions(options, true);
    event = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`, {body, reason});
    return this._add(event);
  }

  /**
   * It deletes an event from the database
   * @param event - The event to delete. Can be an event object or an event ID.
   * @returns The deleted event
   */
  async delete(event) {
    const eventId = typeof event === "string" ? event : event?.id;
    const deletedEvent = this._add(event, this.guildId);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`);
    return deletedEvent;
  }

  /**
   * It fetches scheduled events from the API and returns a collection of them
   * @param events - The event ID, or an object containing the following parameters:
   * @param options - The options object.
   * @returns A new cache constructor with the events mapped to the id and the _add function.
   */
  async fetch(events, options) {
    if (typeof events?.id !== "undefined" || typeof events === "string") return this._fetchId(events, options?.cache, options?.force);
    if (typeof events === "object" && !options) options = events;
    const {cache = true, force = false} = options ?? {};
    const query = await ScheduledEventManager.transformOptions(options);
    events = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/scheduled-events`, {query});
    return new this.cache.constructor(events?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * It fetches an event by ID, and returns it
   * @param events - The event to fetch. Can be an event ID or an event object.
   * @param [cache=true] - Whether or not to cache the event.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The event object
   */
  async _fetchId(events, cache = true, force = false) {
    const eventId = typeof events === "string" ? events : events?.id;
    const query = await ScheduledEventManager.transformOptions(options);
    if (this.cache.has(eventId) && force) return this.cache.get(eventId);
    const event = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`, {query});
    return this._add(event, this.guildId, {cache, force: true});
  }

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes an object with the properties of the class, and returns an object with the properties of
   * the API
   * @param [o] - The options object.
   * @param [create=false] - Whether or not this is a create request.
   * @returns The return value is a promise that resolves to a GuildScheduledEvent object.
   */
  static async transformOptions(o = {}, create = false) {
    if (create) {
      return {
        channel_id: typeof o.channel === "string" ? o.channel : o.channel?.id ?? undefined,
        entity_metadata: o.entityMetadata ?? undefined,
        name: o.name ?? undefined,
        privacy_level: typeof o.privacyLevel === "string" ? GuildScheduledEventPrivacyLevel[o.privacyLevel] : o.privacyLevel ?? 2,
        scheduled_start_time: Util.generateISOString(o.scheduledStartTime ?? null) ?? undefined,
        scheduled_end_time: Util.generateISOString(o.scheduledEndTime ?? null) ?? undefined,
        description: o.description ?? undefined,
        entity_type: typeof o.entityType === "string" ? GuildScheduledEventEntityType[o.entityType] : o.entityType ?? undefined,
        status: typeof o.status === "string" ? GuildScheduledEventStatus[o.status] : o.status ?? undefined,
        image: o.image === null ? null : (await Util.generateDataURI(o.image)) ?? undefined,
      };
    }

    return {
      with_user_count: o.withUserCount ?? undefined,
    };
  }
}

module.exports = ScheduledEventManager;
