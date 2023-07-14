const Base = require("../Base/base");
/**
 * Represents the state of a voice connection for a user in a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the voice state.
 * @param {string} guildId - The ID of the guild the voice state belongs to.
 * @param {Client} client - The client instance.
 */
class VoiceState extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = guildId;
    this.userId = data.user_id ?? null;
    this.channelId = data.channel_id ?? null;
    this.member = this.client.guilds._add(this.guildId)?.members._add(data.member) ?? null;
    this.sessionId = data.session_id ?? null;
    this.deaf = data.deaf ?? null;
    this.mute = data.mute ?? null;
    this.selfDeaf = data.self_deaf ?? null;
    this.selfMute = data.self_mute ?? null;
    this.selfStream = data.self_stream ?? null;
    this.selfVideo = data.self_video ?? null;
    this.suppress = data.suppress ?? null;
    this.requestToSpeak = data.request_to_speak_timestamp ? new Date(data.request_to_speak_timestamp) : null;
    this.requestToSpeakTimestamp = this.requestToSpeak?.getTime() ?? null;
  }

  /**
   * Edits the user's guild member profile with the given options.
   * @param {Object} options - The options to edit the guild member profile.
   * @returns {Promise} A promise that resolves when the edit is complete.
   */
  async edit(options) {
    return await this.guild?.members.edit(this.user, options);
  }

  /**
   * Sets the channel for the current object and updates it with the given reason.
   * @param {Channel} channel - The channel to set.
   * @param {string} reason - The reason for setting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is successfully set.
   */
  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  /**
   * Sets the deaf status of the user.
   * @param {boolean} deaf - Whether the user should be deafened or not.
   * @param {string} reason - The reason for setting the deaf status.
   * @returns {Promise} - A promise that resolves when the deaf status is set.
   */
  async setDeaf(deaf, reason) {
    return await this.edit({deaf, reason});
  }

  /**
   * Sets the mute status and reason for an object.
   * @param {boolean} mute - The mute status to set.
   * @param {string} reason - The reason for muting.
   * @returns {Promise} - A promise that resolves when the mute status and reason are set.
   */
  async setMute(mute, reason) {
    return await this.edit({mute, reason});
  }

  /**
   * Sets the suppress property of the voice state for the user in the guild.
   * @param {boolean} suppress - The value to set for the suppress property.
   * @returns {Promise<void>} - A promise that resolves when the suppress property is set.
   */
  async setSuppress(suppress) {
    return await this.guild?.voiceStates.edit(this.user, {suppress});
  }

  /**
   * Sets the "request to speak" status for the user in the guild's voice channel.
   * @param {boolean} requestToSpeak - The value indicating whether the user wants to request to speak.
   * @returns {Promise<void>} - A promise that resolves when the request to speak status is set.
   */
  async setRequestToSpeak(requestToSpeak) {
    return await this.guild?.voiceStates.edit(this.user, {requestToSpeak});
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Retrieves the channel object associated with this instance.
   * @returns {Channel | null} The channel object, or null if it does not exist.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  /**
   * Retrieves the user associated with this instance.
   * @returns {User | null} The user object if found, otherwise null.
   */
  get user() {
    return this.client.users._add(this.userId) ?? null;
  }
}

module.exports = VoiceState;
