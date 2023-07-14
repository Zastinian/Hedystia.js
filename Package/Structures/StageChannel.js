const VoiceBasedChannels = require("./Interface/VoiceBasedChannels");
/**
 * Represents a stage channel, which is a type of voice-based channel.
 * @class
 * @extends VoiceBasedChannels
 */
class StageChannel extends VoiceBasedChannels {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * Retrieves the stage instance associated with the channel.
   * @returns {StageInstance | null} The stage instance object if found, otherwise null.
   */
  get stageInstance() {
    return this.guild?.stageInstances.cache.find((o) => o.channelId === this.id) ?? null;
  }

  /**
   * Creates a stage instance in the specified channel.
   * @param {Object} options - The options for creating the stage instance.
   * @returns {Promise<StageInstance>} A promise that resolves to the created stage instance.
   */
  async createStageInstance(options = {}) {
    options["channel"] = this.id;
    return await this.guild?.stageInstances.create(options);
  }
}

module.exports = StageChannel;
