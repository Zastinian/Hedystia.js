const {VideoQualityMode, Opcodes} = require("../../Util/Constants");
const Channel = require("../Channel");
/**
 * Represents a voice-based channel in a guild.
 * @class
 * @extends Channel
 */
class VoiceBasedChannels extends Channel {
  /**
   * Constructs a new instance of a class, extending the base class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Object} client - The client object associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.userLimit = data.user_limit ?? null;
    this.bitrate = data.bitrate ?? null;
    this.rtcRegion = data.rtc_region ?? null;
    this.videoQualityMode =
      (typeof data.video_quality_mode === "number" ? VideoQualityMode[data.video_quality_mode] : data.video_quality_mode) ?? null;
  }

  /**
   * Joins the voice channel associated with this VoiceConnection.
   * @param {Object} [options] - Optional parameters for joining the voice channel.
   * @param {boolean} [options.selfMute=false] - Whether to mute the user's own audio.
   * @param {boolean} [options.selfDeaf=false] - Whether to deafen the user's own audio.
   * @returns {VoiceConnection} - The VoiceConnection instance.
   */
  join(options = {}) {
    this.client.ws.send({
      op: Opcodes.Voice_State_Update,
      d: {
        channel_id: this.id,
        guild_id: this.guildId,
        self_mute: options.selfMute ?? false,
        self_deaf: options.selfDeaf ?? false,
      },
    });

    return this;
  }

  /**
   * Disconnects the voice connection by sending a voice state update to the server with a null channel ID.
   * @returns {this} - Returns the current instance of the class.
   */
  disconnect() {
    this.client.ws.send({
      op: Opcodes.Voice_State_Update,
      d: {channel_id: null, guild_id: this.guildId},
    });

    return this;
  }

  /**
   * Sets the RTC (Real-Time Communication) region for the object.
   * @param {string} rtcRegion - The RTC region to set.
   * @param {string} reason - The reason for setting the RTC region.
   * @returns {Promise} - A promise that resolves when the RTC region is successfully set.
   */
  async setRtcRegion(rtcRegion, reason) {
    return await this.edit({rtcRegion, reason});
  }

  /**
   * Sets the bitrate of the current object.
   * @param {number} bitrate - The new bitrate value to set.
   * @param {string} reason - The reason for setting the bitrate.
   * @returns {Promise} - A promise that resolves when the bitrate is successfully set.
   */
  async setBitrate(bitrate, reason) {
    return await this.edit({bitrate, reason});
  }

  /**
   * Retrieves the members in the voice channel associated with the current guild.
   * @returns {Collection<Snowflake, GuildMember> | null} - A collection of guild members in the voice channel, or null if no members are found.
   */
  get members() {
    const voiceStates = this.guild?.voiceStates.cache.array();
    const filter = this.guild?.members.cache.filter((member) =>
      voiceStates.some((voice) => (voice.user?.id ?? voice.member?.id) === member.id && this.id === voice.channelId)
    );
    if (!filter) return null;
    return filter;
  }
}

module.exports = VoiceBasedChannels;
