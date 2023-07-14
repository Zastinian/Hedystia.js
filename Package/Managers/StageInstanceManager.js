const StageInstance = require("../Structures/StageInstance");
const {PrivacyLevel} = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Manages stage instances in a guild.
 * @class
 * @extends Base
 */
class StageInstanceManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a stage instance to the cache and returns the stage instance object.
   * @param {string | StageInstance} stageInstances - The stage instance ID or the stage instance object.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the stage instance belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the stage instance.
   * @param {boolean} [options.cache=true] - Whether to cache the stage instance or not.
   * @param {boolean} [options.force=false] - Whether to force fetch the stage instance even if it is already in the cache.
   * @returns {StageInstance | null} The stage
   */
  _add(stageInstances, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!stageInstances) return null;
    const stageinstanceId = typeof stageInstances === "string" ? stageInstances : stageInstances.id;
    let stageinstance;
    if (this.cache.has(stageinstanceId) && !options.force) {
      stageinstance = this.cache.get(stageinstanceId);
    } else {
      const newStage = new StageInstance(
        typeof stageInstances === "string"
          ? {
              partial: true,
              id: stageinstanceId,
            }
          : stageInstances,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(stageinstanceId, newStage);

      stageinstance = newStage;
    }

    return stageinstance;
  }

  /**
   * Fetches a stage instance from the API.
   * @param {string | Channel} channel - The channel or channel ID to fetch the stage instance from.
   * @param {Object} [options] - Additional options for the fetch.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched stage instance.
   * @param {boolean} [options.force=false] - Whether to force fetch the stage instance even if it is already cached.
   * @returns {Promise<StageInstance>} A promise that resolves with the fetched stage instance.
   */
  async fetch(channel, options = {}) {
    const {cache = true, force = false} = options;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const stage = await this.client.api.get(`${this.client.root}/stage-instances/${channelId}`);
    return this._add(stage, this.guildId, {cache, force});
  }

  /**
   * Creates a new stage instance with the given options.
   * @param {Object} [options] - The options for creating the stage instance.
   * @param {string} [options.reason] - The reason for creating the stage instance.
   * @returns {Promise<StageInstance>} A promise that resolves with the created stage instance.
   */
  async create(options = {}) {
    const {reason} = options;
    const body = StageInstanceManager.transformPayload(options);
    const stage = await this.client.api.post(`${this.client.root}/stage-instances`, {reason, body});
    return this._add(stage);
  }

  /**
   * Edits a stage instance in a channel.
   * @param {string | Channel} channel - The channel or channel ID where the stage instance is located.
   * @param {Object} [options] - Additional options for editing the stage instance.
   * @param {string} [options.reason] - The reason for editing the stage instance.
   * @returns {Promise<StageInstance>} A promise that resolves with the updated stage instance.
   */
  async edit(channel, options = {}) {
    const {reason} = options;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const body = StageInstanceManager.transformPayload(options);
    delete body["channel_id"];
    const stage = await this.client.api.patch(`${this.client.root}/stage-instances/${channelId}`, {
      reason,
      body,
    });
    return this._add(stage);
  }

  /**
   * Deletes a stage instance from a channel.
   * @param {string | Channel} channel - The channel or channel ID where the stage instance is located.
   * @param {string} reason - The reason for deleting the stage instance.
   * @returns {Promise<StageInstance | null>} - A promise that resolves to the deleted stage instance, or null if it does not exist.
   */
  async delete(channel, reason) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const deletedStage = this.cache.find((o) => o.channelId === channelId) ?? null;
    await this.client.api.delete(`${this.client.root}/stage-instances/${channelId}`, {reason});
    return deletedStage;
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the given payload object into a new object with specific properties.
   * @param {object} [payload] - The payload object to transform.
   * @returns {object} - The transformed payload object.
   */
  static transformPayload(payload = {}) {
    return {
      channel_id: typeof payload.channel === "string" ? payload.channel : payload.channel?.id ?? undefined,
      topic: payload.topic ?? undefined,
      privacy_level: (typeof payload.privacyLevel === "string" ? PrivacyLevel[payload.privacyLevel] : payload.privacyLevel) ?? undefined,
    };
  }
}

module.exports = StageInstanceManager;
