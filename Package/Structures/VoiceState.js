const Base = require("../Base/base");
/**
 * It's a class that represents a user's voice state in a guild
 * @class
 * @extends Base
 */
class VoiceState extends Base {
  /**
   * It's a constructor for a class that is used to store voice state data.
   * @param [data] - The data that was received from the Discord API.
   * @param guildId - The ID of the guild the voice state is in.
   * @param client - Discord.Client
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
   * It edits the member's settings
   * @param options - An object containing the options to edit the member with.
   * @returns The return value is a Promise that resolves to the edited member.
   */
  async edit(options) {
    return await this.guild?.members.edit(this.user, options);
  }

  /**
   * It sets the channel of the invite
   * @param channel - The channel to move the member to, can be a voice channel or a category channel.
   * @param reason - The reason for the update.
   * @returns The channel that the message was sent in.
   */
  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  /**
   * It sets the deaf property of the member to deaf, and the reason property of the member to reason
   * @param deaf - Boolean - Whether or not the member should be deafened
   * @param reason - The reason for the change.
   * @returns The deaf status of the member.
   */
  async setDeaf(deaf, reason) {
    return await this.edit({deaf, reason});
  }

  /**
   * It sets the mute status of a user
   * @param mute - Boolean - Whether or not the member should be muted.
   * @param reason - The reason for the mute.
   * @returns The mute status and the reason for the mute.
   */
  async setMute(mute, reason) {
    return await this.edit({mute, reason});
  }

  /**
   * It sets the user's voice state to suppress
   * @param suppress - Boolean
   * @returns The voice state of the user.
   */
  async setSuppress(suppress) {
    return await this.guild?.voiceStates.edit(this.user, {suppress});
  }

  /**
   * It sets the request to speak status of a user in a voice channel
   * @param requestToSpeak - boolean
   * @returns The return value is a Promise that resolves to the updated VoiceState.
   */
  async setRequestToSpeak(requestToSpeak) {
    return await this.guild?.voiceStates.edit(this.user, {requestToSpeak});
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  get user() {
    return this.client.users._add(this.userId) ?? null;
  }
}

module.exports = VoiceState;
