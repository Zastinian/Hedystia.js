const { VideoQualityMode, Opcodes } = require("../../Util/Constants");
const Channel = require("../Channel");
class VoiceBasedChannels extends Channel {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.userLimit = data.user_limit ?? null;
    this.bitrate = data.bitrate ?? null;
    this.rtcRegion = data.rtc_region ?? null;
    this.videoQualityMode =
      (typeof data.video_quality_mode === "number"
        ? VideoQualityMode[data.video_quality_mode]
        : data.video_quality_mode) ?? null;
  }

  join(options = {}) {
    this.client.ws.send({
      op: Opcodes.VOICE_STATE_UPDATE,
      d: {
        channel_id: this.id,
        guild_id: this.guildId,
        self_mute: options.selfMute ?? false,
        self_deaf: options.selfDeaf ?? false,
      },
    });

    return this;
  }

  disconnect() {
    this.client.ws.send({
      op: Opcodes.VOICE_STATE_UPDATE,
      d: { channel_id: null, guild_id: this.guildId },
    });

    return this;
  }

  async setRtcRegion(rtcRegion, reason) {
    return await this.edit({ rtcRegion, reason });
  }

  async setBitrate(bitrate, reason) {
    return await this.edit({ bitrate, reason });
  }

  get members() {
    const voiceStates = this.guild?.voiceStates.cache.array();
    const filter = this.guild?.members.cache.filter((member) =>
      voiceStates.some(
        (voice) =>
          (voice.user?.id ?? voice.member?.id) === member.id &&
          this.id === voice.channelId
      )
    );
    if (!filter) return null;
    return filter;
  }
}

module.exports = VoiceBasedChannels;
