const StageInstance = require("../Structures/StageInstance");
const {PrivacyLevel} = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages the creation, deletion, and editing of stage instances */
class StageInstanceManager extends Base {
  /**
   * A constructor function.
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a stage instance to the cache.
   * @param stageInstances - This is the stage instance object or the stage instance ID.
   * @param [guildId] - The guild ID of the guild the stage instance is in.
   * @param [options] - cache = true, force = false
   * @returns A new StageInstance object
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
   * It fetches a stage instance from the API and adds it to the cache
   * @param channel - The channel to fetch. Can be a channel ID or a channel object.
   * @param [options] - An object containing the following properties:
   * @returns The stage instance
   */
  async fetch(channel, options = {}) {
    const {cache = true, force = false} = options;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const stage = await this.client.api.get(`${this.client.root}/stage-instances/${channelId}`);
    return this._add(stage, this.guildId, {cache, force});
  }

  /**
   * It creates a new stage instance.
   * @param [options] - An object containing the following properties:
   * @returns A new StageInstance object
   */
  async create(options = {}) {
    const {reason} = options;
    const body = StageInstanceManager.transformPayload(options);
    const stage = await this.client.api.post(`${this.client.root}/stage-instances`, {reason, body});
    return this._add(stage);
  }

  /**
   * It edits a stage instance
   * @param channel - The channel to edit.
   * @param [options] - The options to pass to the API.
   * @returns A stage instance object
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
   * It deletes a stage instance
   * @param channel - The channel to delete. Can be a channel object or a channel ID.
   * @param reason - The reason for the deletion.
   * @returns The deleted stage
   */
  async delete(channel, reason) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const deletedStage = this.cache.find((o) => o.channelId === channelId) ?? null;
    await this.client.api.delete(`${this.client.root}/stage-instances/${channelId}`, {reason});
    return deletedStage;
  }

  /**
   * It returns the Collection object.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes a payload object and returns a new object with the same properties, but with the
   * `channel` property replaced with a `channel_id` property
   * @param [payload] - The payload object that is passed to the function.
   * @returns A new object with the properties channel_id, topic, and privacy_level.
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
