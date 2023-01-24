const Base = require("../Base/base")
class VoiceState extends Base {
  constructor(data = {}, guildId, client) {
    super(client)
    this.partial = data.partial ?? false
    this.guildId = guildId
    this.userId = data.user_id ?? null
    this.channelId = data.channel_id ?? null
    this.member = this.client.guilds._add(this.guildId)?.members._add(data.member) ?? null
    this.sessionId = data.session_id ?? null
    this.deaf = data.deaf ?? null
    this.mute = data.mute ?? null
    this.selfDeaf = data.self_deaf ?? null
    this.selfMute = data.self_mute ?? null
    this.selfStream = data.self_stream ?? null
    this.selfVideo = data.self_video ?? null
    this.suppress = data.suppress ?? null
    this.requestToSpeak = data.request_to_speak_timestamp ? new Date(data.request_to_speak_timestamp) : null
    this.requestToSpeakTimestamp = this.requestToSpeak?.getTime() ?? null
  }

  async edit(options) {
    return await this.guild?.members.edit(this.user, options)
  }

  async setChannel(channel, reason) {
    return await this.edit({channel, reason})
  }

  async setDeaf(deaf, reason) {
    return await this.edit({deaf, reason})
  }

  async setMute(mute, reason) {
    return await this.edit({mute, reason})
  }

  async setSuppress(suppress) {
    return await this.guild?.voiceStates.edit(this.user, {suppress})
  }

  async setRequestToSpeak(requestToSpeak) {
    return await this.guild?.voiceStates.edit(this.user, {requestToSpeak})
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null
  }

  get channel() {
    return this.client.channels._add(this.channelId) ?? null
  }

  get user() {
    return this.client.users._add(this.userId) ?? null
  }
}

module.exports = VoiceState
