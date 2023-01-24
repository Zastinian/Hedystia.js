const {VideoQualityMode, Opcodes} = require("../../Util/Constants");
const Channel = require("../Channel");
/* It's a class that extends the Channel class and adds some voice channel specific methods */
class VoiceBasedChannels extends Channel {
  /**
   * It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
   * userLimit, bitrate, rtcRegion, and videoQualityMode properties of the object to the values of the
   * corresponding properties of the data object, or null if the data object doesn't have those
   * properties.
   * @param [data] - The data that was sent from the Discord API.
   * @param guildId - The ID of the guild the voice channel is in.
   * @param client - Discord.Client
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
   * It sends a packet to the Discord API to join the voice channel
   * @param [options] - An object containing the following properties:
   * @returns The VoiceChannel object.
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
   * It sends a packet to the Discord API to disconnect the bot from the voice channel
   * @returns The VoiceConnection object.
   */
  disconnect() {
    this.client.ws.send({
      op: Opcodes.Voice_State_Update,
      d: {channel_id: null, guild_id: this.guildId},
    });

    return this;
  }

  /**
   * This function sets the rtcRegion of the guild.
   * @param rtcRegion - The region to set the voice server to.
   * @param reason - The reason for the change.
   * @returns The return value of the edit function.
   */
  async setRtcRegion(rtcRegion, reason) {
    return await this.edit({rtcRegion, reason});
  }

  /**
   * It sets the bitrate of the voice channel
   * @param bitrate - The bitrate of the voice channel in bits.
   * @param reason - The reason for the change.
   * @returns The bitrate of the voice channel.
   */
  async setBitrate(bitrate, reason) {
    return await this.edit({bitrate, reason});
  }

  /**
   * It returns an array of members in the voice channel
   * @returns The members in the voice channel.
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
