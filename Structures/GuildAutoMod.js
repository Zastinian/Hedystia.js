const {
  GuildAutoModTriggerTypes,
  GuildAutoModEventTypes,
  GuildAutoModPresetTypes,
} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const GuildAutoModActions = require("./GuildAutoModActions");
class GuildAutoMod extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.id = data.id ?? null;
    this.guildId = data.guild_id ?? guildId;
    this.creatorId = data.creator_id ?? null;
    this.name = data.name ?? null;
    this.eventType =
      (typeof data.event_type === "number"
        ? GuildAutoModEventTypes[data.event_type]
        : data.event_type) ?? null;
    this.triggerType =
      (typeof data.trigger_type === "number"
        ? GuildAutoModTriggerTypes[data.trigger_type]
        : data.trigger_type) ?? null;
    this.triggerMetadata = data.trigger_metadata
      ? {
          keywordFilter: data.trigger_metadata.keyword_filter,
          presets: data.trigger_metadata.presets?.map((o) => {
            return typeof o === "number" ? GuildAutoModPresetTypes[o] : o;
          }),
          allowList: data.trigger_metadata.allow_list,
        }
      : null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.actions = data.actions?.map(
      (o) => new GuildAutoModActions(o, this.client)
    );
    this.enabled = data.enabled ?? null;
    this.exemptRoles = data.exempt_roles ?? null;
    this.exemptChannels = data.exempt_channels ?? null;
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  get creator() {
    return this.client.users._add(this.creatorId);
  }

  async fetch(options = {}) {
    return await this.guild.automod.fetch(this, options);
  }

  async edit(options = {}) {
    return await this.guild.automod.edit(this, options);
  }

  async delete(reason) {
    return await this.guild.automod.delete(this, reason);
  }

  async setName(name, reason) {
    return await this.edit({ name, reason });
  }

  async setEventType(eventType, reason) {
    return await this.edit({ eventType, reason });
  }

  async setTriggerMetadata(triggerMetadata, reason) {
    return await this.edit({ triggerMetadata, reason });
  }

  async setActions(actions, reason) {
    return await this.edit({ actions, reason });
  }

  async setEnabled(enabled, reason) {
    return await this.edit({ enabled, reason });
  }

  async setExemptRoles(exemptRoles, reason) {
    return await this.edit({ exemptRoles, reason });
  }

  async setExemptChannels(exemptChannels, reason) {
    return await this.edit({ exemptChannels, reason });
  }
}

module.exports = GuildAutoMod;
