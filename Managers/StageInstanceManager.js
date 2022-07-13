const StageInstance = require("../Structures/StageInstance");
const { PrivacyLevel } = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class StageInstanceManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(
    stageInstances,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
    if (!stageInstances) return null;
    const stageinstanceId =
      typeof stageInstances === "string" ? stageInstances : stageInstances.id;
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

  async fetch(channel, options = {}) {
    const { cache = true, force = false } = options;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const stage = await this.client.api.get(
      `${this.client.root}/stage-instances/${channelId}`
    );
    return this._add(stage, this.guildId, { cache, force });
  }

  async create(options = {}) {
    const { reason } = options;
    const body = StageInstanceManager.transformPayload(options);
    const stage = await this.client.api.post(
      `${this.client.root}/stage-instances`,
      { reason, body }
    );
    return this._add(stage);
  }

  async edit(channel, options = {}) {
    const { reason } = options;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const body = StageInstanceManager.transformPayload(options);
    delete body["channel_id"];
    const stage = await this.client.api.patch(
      `${this.client.root}/stage-instances/${channelId}`,
      { reason, body }
    );
    return this._add(stage);
  }

  async delete(channel, reason) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const deletedStage =
      this.cache.find((o) => o.channelId === channelId) ?? null;
    await this.client.api.delete(
      `${this.client.root}/stage-instances/${channelId}`,
      { reason }
    );
    return deletedStage;
  }

  get cache() {
    return Collection;
  }

  static transformPayload(payload = {}) {
    return {
      channel_id:
        typeof payload.channel === "string"
          ? payload.channel
          : payload.channel?.id ?? undefined,
      topic: payload.topic ?? undefined,
      privacy_level:
        (typeof payload.privacyLevel === "string"
          ? PrivacyLevel[payload.privacyLevel]
          : payload.privacyLevel) ?? undefined,
    };
  }
}

module.exports = StageInstanceManager;
