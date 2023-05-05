const VoiceBasedChannels = require("./Interface/VoiceBasedChannels");
/**
 * It's a class that extends the VoiceBasedChannels class, and adds a few extra methods to it.
 * @class
 * @extends VoiceBasedChannels
 */
class StageChannel extends VoiceBasedChannels {
  /**
   * It's a constructor function that takes in three parameters, data, guildId, and client.
   * @param [data] - The data that the role is being created with.
   * @param guildId - The ID of the guild the role is in.
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * If the guild exists, return the stage instance that has the same channel ID as the current
   * channel, otherwise return null
   * @returns The stageInstance is being returned.
   */
  get stageInstance() {
    return this.guild?.stageInstances.cache.find((o) => o.channelId === this.id) ?? null;
  }

  /**
   * It creates a new stage instance in the guild, and sets the channel to the current channel
   * @param [options] - The options to pass to the stage instance.
   * @returns The stage instance that was created.
   */
  async createStageInstance(options = {}) {
    options["channel"] = this.id;
    return await this.guild?.stageInstances.create(options);
  }
}

module.exports = StageChannel;
