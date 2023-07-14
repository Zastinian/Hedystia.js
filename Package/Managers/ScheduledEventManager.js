const GuildScheduledEvent = require("../Structures/GuildScheduledEvent");
const {GuildScheduledEventPrivacyLevel, GuildScheduledEventEntityType, GuildScheduledEventStatus} = require("../Util/Constants");
const Util = require("../Util/Util");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a Scheduled Event Manager that handles creating, editing, and deleting scheduled events for a guild.
 * @class
 * @extends Base
 */
class ScheduledEventManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds an event to the guild's scheduled events.
   * @param {string | GuildScheduledEvent} events - The event or event ID to add.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the event to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the event.
   * @param {boolean} [options.cache=true] - Whether to cache the event.
   * @param {boolean} [options.force=false] - Whether to force adding the event even if it already exists in the cache.
   * @returns {GuildScheduledEvent | null} - The added event or null if the events parameter is falsy
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
   * Creates a scheduled event with the given options.
   * @param {Object} [options] - The options for the scheduled event.
   * @param {string} [options.reason] - The reason for creating the event.
   * @returns {Promise} A promise that resolves with the created event.
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
   * Edits a scheduled event with the given options.
   * @param {string | Object} event - The ID of the event or the event object itself.
   * @param {Object} [options] - The options to update the event with.
   * @param {string} [options.reason] - The reason for editing the event.
   * @returns {Promise<Object>} A promise that resolves with the updated event object.
   */
  async edit(event, options = {}) {
    const {reason} = options;
    const eventId = typeof event === "string" ? event : event?.id;
    const body = await ScheduledEventManager.transformOptions(options, true);
    event = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`, {body, reason});
    return this._add(event);
  }

  /**
   * Deletes an event from the scheduled events of a guild.
   * @param {string | Object} event - The event to be deleted. Can be either the event ID as a string or the event object itself.
   * @returns {Promise<Object>} - The deleted event object.
   */
  async delete(event) {
    const eventId = typeof event === "string" ? event : event?.id;
    const deletedEvent = this._add(event, this.guildId);
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`);
    return deletedEvent;
  }

  /**
   * Fetches scheduled events from the server based on the provided options.
   * @param {any} events - The events to fetch. Can be an ID, an array of IDs, or an object with query options.
   * @param {object} options - The options for fetching the events.
   * @param {boolean} options.cache - Whether to cache the fetched events. Default is true.
   * @param {boolean} options.force - Whether to force fetch the events even if they are already cached. Default is false.
   * @returns {Promise} A promise that resolves with the fetched events.
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
   * Fetches the ID of an event from the server.
   * @param {string | Event} events - The ID of the event or the event object itself.
   * @param {boolean} [cache=true] - Whether to cache the fetched event.
   * @param {boolean} [force=false] - Whether to force fetch the event even if it is already cached.
   * @returns {Promise<Event>} - The fetched event.
   */
  async _fetchId(events, cache = true, force = false) {
    const eventId = typeof events === "string" ? events : events?.id;
    const query = await ScheduledEventManager.transformOptions(options);
    if (this.cache.has(eventId) && force) return this.cache.get(eventId);
    const event = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/scheduled-events/${eventId}`, {query});
    return this._add(event, this.guildId, {cache, force: true});
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the options object into the desired format based on the provided parameters.
   * @param {Object} o - The options object to transform.
   * @param {boolean} [create=false] - Indicates whether to transform the options for creating a new object.
   * @returns {Promise<Object>} - The transformed options object.
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
