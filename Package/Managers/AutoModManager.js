const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const GuildAutoMod = require("../Structures/GuildAutoMod");
const {GuildAutoModEventTypes, GuildAutoModTriggerTypes, GuildAutoModPresetTypes, GuildAutoModActionTypes} = require("../Util/Constants");
/**
 * Represents an AutoMod manager that handles the creation, editing, and deletion of auto-moderation rules for a guild.
 * @class
 * @extends Base
 */
class AutoModManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a rule to the guild's auto moderation system.
   * @param {string | Rule} rules - The rule to add. Can be either a rule ID or a Rule object.
   * @param {string} [guildId=this.guildId] - The ID of the guild to add the rule to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the rule.
   * @param {boolean} [options.cache=true] - Whether to cache the added rule.
   * @param {boolean} [options.force=false] - Whether to force adding the rule even if it already exists in the cache.
   * @returns {Rule | null} The added rule, or null if
   */
  _add(rules, guildId = this.guildId, options = {cache: true, force: false}) {
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

  /**
   * Fetches auto-moderation rules from the server based on the provided rule and options.
   * @param {string | object} rule - The rule ID or an object containing the rule details.
   * @param {object} [options] - Additional options for the fetch request.
   * @param {boolean} [options.cache=true] - Whether to cache the fetched rules.
   * @param {boolean} [options.force=false] - Whether to force the fetch request even if the rules are already cached.
   * @returns {Promise<object>} - A promise that resolves to the fetched auto-moderation rules.
   */
  async fetch(rule, options) {
    if (typeof rule?.id !== "undefined" || typeof rule === "string") return this._fetchId(rule, options?.cache, options?.force);
    if (typeof rule === "object" && !options) options = rule;
    const {cache = true, force = false} = options ?? {};
    const rules = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules`);
    return new this.cache.constructor(rules?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * Fetches the ID of a rule from the auto-moderation rules in a guild.
   * @param {string | { id: string }} rule - The rule ID or an object containing the rule ID.
   * @param {boolean} [cache=true] - Whether to cache the fetched rule.
   * @param {boolean} [force=false] - Whether to force fetching the rule even if it is already cached.
   * @returns {Promise<any>} - A promise that resolves to the fetched rule.
   */
  async _fetchId(rule, cache = true, force = false) {
    const ruleId = typeof rule === "string" ? rule : rule.id;
    if (this.cache.has(ruleId) && !force) return this.cache.get(ruleId);
    rule = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`);
    return this._add(rule, this.guildId, {cache, force: true});
  }

  /**
   * Creates a new auto-moderation rule for the guild.
   * @param {Object} [options] - The options for creating the rule.
   * @param {string} [options.reason] - The reason for creating the rule.
   * @returns {Promise} A promise that resolves with the created rule.
   */
  async create(options = {}) {
    const {reason} = options;
    const body = AutoModManager.transformPayload(options);
    const rule = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules`, {body, reason});
    return this._add(rule);
  }

  /**
   * Edits an auto-moderation rule in the guild.
   * @param {string | Rule} rule - The ID or the rule object to edit.
   * @param {Object} [options] - Additional options for the edit operation.
   * @param {string} [options.reason] - The reason for the edit.
   * @returns {Promise<Rule>} A promise that resolves with the edited rule.
   */
  async edit(rule, options = {}) {
    const {reason} = options;
    const body = AutoModManager.transformPayload(options);
    const ruleId = typeof rule === "string" ? rule : rule.id;
    rule = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`, {body, reason});
    return this._add(rule, this.guildId, {force: true});
  }

  /**
   * Deletes an auto-moderation rule from the guild.
   * @param {string | Rule} rule - The ID or the rule object to delete.
   * @param {string} reason - The reason for deleting the rule.
   * @returns {Promise<Rule>} - The deleted rule object.
   */
  async delete(rule, reason) {
    const ruleId = typeof rule === "string" ? rule : rule.id;
    const deletedRule = this._add(rule, this.guildId, {cache: false});
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`, {reason});
    return deletedRule;
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the payload object into a new format.
   * @param {Object} payload - The payload object to transform.
   * @returns {Object} - The transformed payload object.
   */
  static transformPayload(payload = {}) {
    return {
      name: payload.name ?? undefined,
      event_type: typeof payload.eventType === "string" ? GuildAutoModEventTypes[payload.eventType] : payload.eventType,
      trigger_type: typeof payload.triggerType === "string" ? GuildAutoModTriggerTypes[payload.triggerType] : payload.triggerType,
      trigger_metadata: payload.triggerMetadata ? this.transformMetadata(payload.triggerMetadata) : undefined,
      actions: payload.actions?.map((o) => this.transformActions(o)),
      enabled: payload.enabled ?? undefined,
      exempt_roles: payload.exemptRoles?.map((o) => (typeof o === "string" ? o : o.id)),
      exempt_channels: payload.exemptChannels?.map((o) => (typeof o === "string" ? o : o.id)),
    };
  }

  /**
   * Transforms the actions object into a new format.
   * @param {Object} actions - The actions object to transform.
   * @returns {Object} - The transformed actions object.
   */
  static transformActions(actions = {}) {
    return {
      type: typeof actions.type === "string" ? GuildAutoModActionTypes[actions.type] : actions.type,
      metadata: actions.metadata
        ? {
            channel_id: typeof actions.metadata.channel === "string" ? actions.metadata.channel : actions.metadata.channel?.id,
            duration_seconds: actions.metadata.durationSeconds,
            custom_message: actions.metadata.customMessage,
          }
        : undefined,
    };
  }

  /**
   * Transforms the given metadata object into a new format.
   * @param {Object} metadata - The metadata object to transform.
   * @returns {Object} - The transformed metadata object.
   */
  static transformMetadata(metadata = {}) {
    return {
      keyword_filter: metadata.keywordFilter ?? metadata.keyword_filter ?? undefined,
      regex_patterns: metadata.regexPatterns ?? metadata.regex_patterns ?? undefined,
      presets: metadata.presets?.map((o) => (typeof o === "string" ? GuildAutoModPresetTypes[o] : o)),
      allow_list: metadata.allowList ?? metadata.allow_list ?? undefined,
      mention_total_limit: metadata.mentionTotalLimit ?? metadata.mention_total_limit ?? undefined,
      mention_raid_protection_enabled: metadata.mentionRaidProtectionEnabled ?? metadata.mention_raid_protection_enabled ?? undefined,
    };
  }
}

module.exports = AutoModManager;
