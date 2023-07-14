const {PrivacyLevel} = require("../Util/Constants");
const Base = require("../Base/base");
/**
 * Represents a Stage Instance in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the Stage Instance.
 * @param {string} guildId - The ID of the guild the Stage Instance belongs to.
 * @param {Client} client - The client instance.
 */
class StageInstance extends Base {
  /**
   * Constructs a new instance of a Channel object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the Channel.
   * @param {string} guildId - The ID of the guild that the Channel belongs to.
   * @param {Client} client - The client object representing the Discord bot.
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
   * Fetches the stage instance for the given channel ID using the provided options.
   * @param {Object} options - The options to pass to the fetch request.
   * @returns {Promise<StageInstance>} A promise that resolves with the fetched stage instance.
   */
  async fetch(options) {
    return await this.guild?.stageInstances.fetch(this.channelId, options);
  }

  /**
   * Edits the stage instance with the given options.
   * @param {Object} options - The options to edit the stage instance.
   * @returns {Promise} A promise that resolves when the stage instance is successfully edited.
   */
  async edit(options) {
    return await this.guild?.stageInstances.edit(this.channelId, options);
  }

  /**
   * Deletes the stage instance associated with the channel.
   * @param {string} reason - The reason for deleting the stage instance.
   * @returns {Promise<void>} - A promise that resolves when the stage instance is deleted.
   */
  async delete(reason) {
    return await this.guild?.stageInstances.delete(this.channelId, reason);
  }

  /**
   * Sets the topic of the current object and provides a reason for the change.
   * @param {string} topic - The new topic to set.
   * @param {string} reason - The reason for changing the topic.
   * @returns {Promise} - A promise that resolves when the topic is successfully set.
   */
  async setTopic(topic, reason) {
    return await this.edit({topic, reason});
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
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Retrieves the channel associated with this object.
   * @returns The channel object if found, otherwise null.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  /**
   * Retrieves the scheduled event associated with the guild.
   * @returns {ScheduledEvent | null} The scheduled event object if found, otherwise null.
   */
  get guildScheduledEvent() {
    return this.guild?.events._add(this.guildScheduledEventId) ?? null;
  }
}

module.exports = StageInstance;
