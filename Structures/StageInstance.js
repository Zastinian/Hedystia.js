const {PrivacyLevel} = require("../Util/Constants");
const Base = require("../Base/base");
/**
 * It's a class that represents a stage instance.
 * @class
 * @extends Base
 */
class StageInstance extends Base {
  /**
   * @param [data] - The data that was passed into the constructor
   * @param guildId - The ID of the guild the voice channel is in.
   * @param client - Discord.Client
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = guildId;
    this.channelId = data.channel_id ?? null;
    this.id = data.id ?? null;
    this.topic = data.topic ?? null;
    this.privacyLevel = (typeof data.privacy_level === "number" ? PrivacyLevel[data.privacy_level] : data.privacy_level) ?? null;
    this.guildScheduledEventId = data.guild_scheduled_event_id ?? null;
  }

  /**
   * It fetches the stage instance from the guild's stage instances.
   * @param options - An object containing the following properties:
   * @returns The stage instance.
   */
  async fetch(options) {
    return await this.guild?.stageInstances.fetch(this.channelId, options);
  }

  /**
   * It edits the stage instance
   * @param options - {
   * @returns The return value of the edit method.
   */
  async edit(options) {
    return await this.guild?.stageInstances.edit(this.channelId, options);
  }

  /**
   * It deletes the stage instance
   * @param reason - The reason for the deletion.
   * @returns The return value of the delete method of the StageInstances class.
   */
  async delete(reason) {
    return await this.guild?.stageInstances.delete(this.channelId, reason);
  }

  /**
   * It sets the topic of the channel
   * @param topic - The new topic of the channel.
   * @param reason - The reason for the change (0-1024 characters).
   * @returns The return value of the edit function.
   */
  async setTopic(topic, reason) {
    return await this.edit({topic, reason});
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
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It returns the channel object of the message
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  /**
   * If the guild exists, return the event with the id of the guildScheduledEventId, otherwise return
   * null.
   * @returns The guildScheduledEventId is being returned.
   */
  get guildScheduledEvent() {
    return this.guild?.events._add(this.guildScheduledEventId) ?? null;
  }
}

module.exports = StageInstance;
