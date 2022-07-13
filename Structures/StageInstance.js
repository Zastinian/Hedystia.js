const { PrivacyLevel } = require("../Util/Constants");
const Base = require("../Base/base");
class StageInstance extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = guildId;
    this.channelId = data.channel_id ?? null;
    this.id = data.id ?? null;
    this.topic = data.topic ?? null;
    this.privacyLevel =
      (typeof data.privacy_level === "number"
        ? PrivacyLevel[data.privacy_level]
        : data.privacy_level) ?? null;
    this.guildScheduledEventId = data.guild_scheduled_event_id ?? null;
  }

  async fetch(options) {
    return await this.guild?.stageInstances.fetch(this.channelId, options);
  }

  async edit(options) {
    return await this.guild?.stageInstances.edit(this.channelId, options);
  }

  async delete(reason) {
    return await this.guild?.stageInstances.delete(this.channelId, reason);
  }

  async setTopic(topic, reason) {
    return await this.edit({ topic, reason });
  }

  async setPrivacyLevel(privacyLevel, reason) {
    return await this.edit({ privacyLevel, reason });
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  get guildScheduledEvent() {
    return this.guild?.events._add(this.guildScheduledEventId) ?? null;
  }
}

module.exports = StageInstance;
