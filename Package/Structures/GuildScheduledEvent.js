const GuildScheduledEventUsersManager = require("../Managers/GuildScheduledEventUsersManager");
const {GuildScheduledEventPrivacyLevel, GuildScheduledEventStatus, GuildScheduledEventEntityType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * Represents a scheduled event in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the scheduled event.
 * @param {string} guildId - The ID of the guild that the event belongs to.
 * @param {Client} client - The client instance.
 */
class GuildScheduledEvent extends Base {
  /**
   * Constructs a new GuildScheduledEvent object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the event.
   * @param {string} guildId - The ID of the guild the event belongs to.
   * @param {Client} client - The client instance.
   * @returns {GuildScheduledEvent} - The constructed GuildScheduledEvent object.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    Object.defineProperty(this, "_creator", {value: data.creator});
    this.partial = data.partial ?? false;
    this.id = data.id ?? null;
    this.guildId = guildId;
    this.channelId = data.channel_id ?? null;
    this.creatorId = data.creator_id ?? null;
    this.name = data.name ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.description = data.description ?? null;
    this.scheduledStart = data.scheduled_start_time ? new Date(data.scheduled_start_time) : null;
    this.scheduledStartTimestamp = this.scheduledStart?.getTime() ?? null;
    this.scheduledEnd = data.scheduled_end_time ? new Date(data.scheduled_end_time) : null;
    this.scheduledEndTimestamp = this.scheduledEnd?.getTime() ?? null;
    this.privacyLevel = (typeof data.privacy_level === "number" ? GuildScheduledEventPrivacyLevel[data.privacy_level] : data.privacy_level) ?? null;
    this.status = (typeof data.status === "number" ? GuildScheduledEventStatus[data.status] : data.status) ?? null;
    this.entityType = (typeof data.entity_type === "number" ? GuildScheduledEventEntityType[data.entity_type] : data.entity_type) ?? null;
    this.entityId = data.entity_id ?? null;
    this.entityMetadata = data.entity_metadata
      ? {
          location: data.entity_metadata.location,
        }
      : null;
    this.userCount = data.user_count ?? null;
    this.image = data.image ?? null;
    this.users = new GuildScheduledEventUsersManager(this, this.guildId, this.client);
  }

  /**
   * Fetches events for the guild using the provided options.
   * @param {object} options - The options for fetching events.
   * @returns {Promise} A promise that resolves with the fetched events.
   */
  async fetch(options) {
    return await this.guild?.events.fetch(this, options);
  }

  /**
   * Edits the guild's events with the given options.
   * @param {Object} options - The options to edit the events with.
   * @returns {Promise} A promise that resolves when the events have been successfully edited.
   */
  async edit(options = {}) {
    return await this.guild?.events.edit(this, options);
  }

  /**
   * Deletes the current event from the guild's events collection.
   * @returns {Promise<void>} A promise that resolves once the event is deleted.
   */
  async delete() {
    return await this.guild?.events.delete(this);
  }

  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the description of an object and updates it with the provided reason.
   * @param {string} description - The new description to set.
   * @param {string} reason - The reason for updating the description.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * Sets the privacy level for the current user.
   * @param {string} privacyLevel - The privacy level to set.
   * @param {string} reason - The reason for setting the privacy level.
   * @returns {Promise} - A promise that resolves when the privacy level is successfully set.
   */
  async setPrivacyLevel(privacyLevel, reason) {
    return await this.edit({privacyLevel, reason});
  }

  /**
   * Sets the entity type and reason for the current entity.
   * @param {string} entityType - The new entity type to set.
   * @param {string} reason - The reason for the entity type change.
   * @returns {Promise} - A promise that resolves when the entity type is successfully set.
   */
  async setEntityType(entityType, reason) {
    return await this.edit({entityType, reason});
  }

  /**
   * Sets the metadata of an entity with the given entityMetadata and reason.
   * @param {any} entityMetadata - The metadata to set for the entity.
   * @param {string} reason - The reason for setting the metadata.
   * @returns {Promise<void>} - A promise that resolves when the metadata is successfully set.
   */
  async setEntityMetadata(entityMetadata, reason) {
    return await this.edit({entityMetadata, reason});
  }

  /**
   * Sets the image of an object and updates it with the given reason.
   * @param {any} image - The new image to set.
   * @param {string} reason - The reason for updating the image.
   * @returns {Promise<void>} - A promise that resolves when the image is set and updated.
   */
  async setImage(image, reason) {
    return await this.edit({image, reason});
  }

  /**
   * Sets the scheduled start time and reason for an event.
   * @param {Date} scheduledStartTime - The scheduled start time for the event.
   * @param {string} reason - The reason for the scheduled start time.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  async setScheduledStartTime(scheduledStartTime, reason) {
    return await this.edit({scheduledStartTime, reason});
  }

  /**
   * Sets the scheduled end time and reason for a task.
   * @param {Date} scheduledEndTime - The new scheduled end time for the task.
   * @param {string} reason - The reason for the change in scheduled end time.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  async setScheduledEndTime(scheduledEndTime, reason) {
    return await this.edit({scheduledEndTime, reason});
  }

  /**
   * Sets the status and reason of an object and returns the updated object.
   * @param {any} status - The new status value.
   * @param {any} reason - The new reason value.
   * @returns {Promise<any>} - A promise that resolves to the updated object.
   */
  async setStatus(status, reason) {
    return await this.edit({status, reason});
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Returns the URL of the cover image for the guild scheduled event.
   * @param {Object} options - Optional parameters for generating the URL.
   * @param {boolean} [options.dynamic] - Whether the image should be dynamically generated.
   * @param {string} [options.size] - The desired size of the image.
   * @param {string} [options.format] - The desired format of the image.
   * @returns {string | null} The URL of the cover image, or null if there is no image.
   */
  coverImageURL(options = {}) {
    if (!this.image) return null;
    return this.client.cdn.GuildScheduledEventCoverImage(this.image, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Generates an invite URL for a user.
   * @returns {string} The invite URL.
   */
  inviteURL() {
    return `https://discord.com/events/${this.guildId}/${this.id}`;
  }

  /**
   * Retrieves the creator of this object.
   * @returns The user object representing the creator, or null if the creator is not found.
   */
  get creator() {
    return this.client.users._add(this._creator ?? this.creatorId) ?? null;
  }
}

module.exports = GuildScheduledEvent;
