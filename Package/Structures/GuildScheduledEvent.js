const GuildScheduledEventUsersManager = require("../Managers/GuildScheduledEventUsersManager");
const {GuildScheduledEventPrivacyLevel, GuildScheduledEventStatus, GuildScheduledEventEntityType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * It's a class that represents a scheduled event in a guild.
 * @class
 * @extends Base
 */
class GuildScheduledEvent extends Base {
  /**
   * @param data - guildId, client
   * @param guildId - The ID of the guild the event is in
   * @param client - Discord.Client
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
   * It fetches the event from the guild's event cache
   * @param options - An object containing the following properties:
   * @returns The event object.
   */
  async fetch(options) {
    return await this.guild?.events.fetch(this, options);
  }

  /**
   * It edits the event
   * @param [options] - Object
   * @returns The return value of the edit method.
   */
  async edit(options = {}) {
    return await this.guild?.events.edit(this, options);
  }

  /**
   * It deletes the event
   * @returns The return value of the delete method of the events object of the guild object of the
   * event object.
   */
  async delete() {
    return await this.guild?.events.delete(this);
  }

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @param reason - The reason for the edit.
   * @returns The description of the channel.
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * This function sets the privacy level of the current channel to the privacy level specified in the
   * first parameter, and sets the reason for the change to the reason specified in the second
   * parameter.
   * @param privacyLevel - The privacy level of the channel.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  async setPrivacyLevel(privacyLevel, reason) {
    return await this.edit({privacyLevel, reason});
  }

  /**
   * It returns a promise that resolves to the result of calling the edit function with the given
   * parameters.
   * @param entityType - The type of entity you want to change the entity to.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  async setEntityType(entityType, reason) {
    return await this.edit({entityType, reason});
  }

  /**
   * It edits the entity metadata of the message
   * @param entityMetadata - The metadata of the entity.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  async setEntityMetadata(entityMetadata, reason) {
    return await this.edit({entityMetadata, reason});
  }

  /**
   * It edits the image of the embed
   * @param image - The image to set the avatar to.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  async setImage(image, reason) {
    return await this.edit({image, reason});
  }

  /**
   * It takes a scheduledStartTime and a reason, and then it returns the result of calling the edit
   * function with the scheduledStartTime and reason as arguments.
   *
   * The edit function is defined in the same file, and it looks like this:
   * @param scheduledStartTime - The time at which the meeting is scheduled to start.
   * @param reason - The reason for the change.
   * @returns The return value of the edit() method.
   */
  async setScheduledStartTime(scheduledStartTime, reason) {
    return await this.edit({scheduledStartTime, reason});
  }

  /**
   * It takes a time and a reason, and then it edits the event with the time and reason.
   * @param scheduledEndTime - The time at which the live stream is scheduled to end. The value is
   * specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
   * @param reason - The reason for the change.
   * @returns The return value of the edit method.
   */
  async setScheduledEndTime(scheduledEndTime, reason) {
    return await this.edit({scheduledEndTime, reason});
  }

  /**
   * It sets the status of the message.
   * @param status - The status of the embed.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  async setStatus(status, reason) {
    return await this.edit({status, reason});
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It returns the URL of the cover image of the event
   * @param [options]
   * @returns The coverImageURL is being returned.
   */
  coverImageURL(options = {}) {
    if (!this.image) return null;
    return this.client.cdn.GuildScheduledEventCoverImage(this.image, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * It returns a URL to the invite
   * @returns The inviteURL() method returns a string that is the invite URL for the event.
   */
  inviteURL() {
    return `https://discord.com/events/${this.guildId}/${this.id}`;
  }

  /**
   * It returns the user object of the creator of the guild
   * @returns The creator of the guild.
   */
  get creator() {
    return this.client.users._add(this._creator ?? this.creatorId) ?? null;
  }
}

module.exports = GuildScheduledEvent;
