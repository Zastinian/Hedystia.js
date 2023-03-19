const GuildScheduledEventUsersManager = require("../Managers/GuildScheduledEventUsersManager");
const {GuildScheduledEventPrivacyLevel, GuildScheduledEventStatus, GuildScheduledEventEntityType} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
class GuildScheduledEvent extends Base {
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

  async fetch(options) {
    return await this.guild?.events.fetch(this, options);
  }

  async edit(options = {}) {
    return await this.guild?.events.edit(this, options);
  }

  async delete() {
    return await this.guild?.events.delete(this);
  }

  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  async setPrivacyLevel(privacyLevel, reason) {
    return await this.edit({privacyLevel, reason});
  }

  async setEntityType(entityType, reason) {
    return await this.edit({entityType, reason});
  }

  async setEntityMetadata(entityMetadata, reason) {
    return await this.edit({entityMetadata, reason});
  }

  async setImage(image, reason) {
    return await this.edit({image, reason});
  }

  async setScheduledStartTime(scheduledStartTime, reason) {
    return await this.edit({scheduledStartTime, reason});
  }

  async setScheduledEndTime(scheduledEndTime, reason) {
    return await this.edit({scheduledEndTime, reason});
  }

  async setStatus(status, reason) {
    return await this.edit({status, reason});
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  coverImageURL(options = {}) {
    if (!this.image) return null;
    return this.client.cdn.GuildScheduledEventCoverImage(this.image, options.dynamic, options.size, options.format, this.id);
  }

  inviteURL() {
    return `https://discord.com/events/${this.guildId}/${this.id}`;
  }

  get creator() {
    return this.client.users._add(this._creator ?? this.creatorId) ?? null;
  }
}

module.exports = GuildScheduledEvent;
