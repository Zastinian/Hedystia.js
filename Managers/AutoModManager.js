const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const GuildAutoMod = require("../Structures/GuildAutoMod");
const {
  GuildAutoModEventTypes,
  GuildAutoModTriggerTypes,
  GuildAutoModPresetTypes,
  GuildAutoModActionTypes,
} = require("../Util/Constants");
class AutoModManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(rules, guildId = this.guildId, options = { cache: true, force: false }) {
    if (!rules) return null;
    const ruleId = typeof rules === "string" ? rules : rules.id;
    let rule;
    if (this.cache.has(ruleId) && !options.force) {
      rule = this.cache.get(ruleId);
    } else {
      const automod = new GuildAutoMod(
        typeof rules === "string"
          ? {
              id: ruleId,
              partial: true,
            }
          : rules,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(ruleId, automod);

      rule = automod;
    }

    return rule;
  }

  async fetch(rule, options) {
    if (typeof rule?.id !== "undefined" || typeof rule === "string")
      return this._fetchId(rule, options?.cache, options?.force);
    if (typeof rule === "object" && !options) options = rule;
    const { cache = true, force = false } = options ?? {};
    const rules = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/auto-moderation/rules`
    );
    return new this.cache.constructor(
      rules?.map((o) => [o.id, this._add(o, this.guildId, { cache, force })])
    );
  }

  async _fetchId(rule, cache = true, force = false) {
    const ruleId = typeof rule === "string" ? rule : rule.id;
    if (this.cache.has(ruleId) && !force) return this.cache.get(ruleId);
    rule = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`
    );
    return this._add(rule, this.guildId, { cache, force: true });
  }

  async create(options = {}) {
    const { reason } = options;
    const body = AutoModManager.transformPayload(options);
    const rule = await this.client.api.post(
      `${this.client.root}/guilds/${this.guildId}/auto-moderation/rules`,
      { body, reason }
    );
    return this._add(rule);
  }

  async edit(rule, options = {}) {
    const { reason } = options;
    const body = AutoModManager.transformPayload(options);
    const ruleId = typeof rule === "string" ? rule : rule.id;
    rule = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`,
      { body, reason }
    );
    return this._add(rule, this.guildId, { force: true });
  }

  async delete(rule, reason) {
    const ruleId = typeof rule === "string" ? rule : rule.id;
    const deletedRule = this._add(rule, this.guildId, { cache: false });
    await this.client.api.delete(
      `${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`,
      { reason }
    );
    return deletedRule;
  }

  get cache() {
    return Collection;
  }

  static transformPayload(payload = {}) {
    return {
      name: payload.name ?? undefined,
      event_type:
        typeof payload.eventType === "string"
          ? GuildAutoModEventTypes[payload.eventType]
          : payload.eventType,
      trigger_type:
        typeof payload.triggerType === "string"
          ? GuildAutoModTriggerTypes[payload.triggerType]
          : payload.triggerType,
      trigger_metadata: payload.triggerMetadata
        ? this.transformMetadata(payload.triggerMetadata)
        : undefined,
      actions: payload.actions?.map((o) => this.transformActions(o)),
      enabled: payload.enabled ?? undefined,
      exempt_roles: payload.exemptRoles?.map((o) =>
        typeof o === "string" ? o : o.id
      ),
      exempt_channels: payload.exemptChannels?.map((o) =>
        typeof o === "string" ? o : o.id
      ),
    };
  }

  static transformActions(actions = {}) {
    return {
      type:
        typeof actions.type === "string"
          ? GuildAutoModActionTypes[actions.type]
          : actions.type,
      metadata: actions.metadata
        ? {
            channel_id:
              typeof actions.metadata.channel === "string"
                ? actions.metadata.channel
                : actions.metadata.channel?.id,
            duration_seconds: actions.metadata.durationSeconds,
          }
        : undefined,
    };
  }

  static transformMetadata(metadata = {}) {
    return {
      keyword_filter:
        metadata.keywordFilter ?? metadata.keyword_filter ?? undefined,
      allow_list: metadata.allowList ?? metadata.allow_list ?? undefined,
      presets: metadata.presets?.map((o) =>
        typeof o === "string" ? GuildAutoModPresetTypes[o] : o
      ),
    };
  }
}

module.exports = AutoModManager;
