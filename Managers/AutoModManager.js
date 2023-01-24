const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const GuildAutoMod = require("../Structures/GuildAutoMod");
const {GuildAutoModEventTypes, GuildAutoModTriggerTypes, GuildAutoModPresetTypes, GuildAutoModActionTypes} = require("../Util/Constants");
/* It's a manager for the guild's automod rules */
class AutoModManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a rule to the cache
   * @param rules - The rule object or ID of the rule to add.
   * @param [guildId] - The ID of the guild to fetch the rule from.
   * @param [options] - {cache: true, force: false}
   * @returns The rule object
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
   * It fetches all the rules from the API and returns them in a cache
   * @param rule - The rule ID or object.
   * @param options - An object containing the following properties:
   * @returns An array of objects.
   */
  async fetch(rule, options) {
    if (typeof rule?.id !== "undefined" || typeof rule === "string") return this._fetchId(rule, options?.cache, options?.force);
    if (typeof rule === "object" && !options) options = rule;
    const {cache = true, force = false} = options ?? {};
    const rules = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules`);
    return new this.cache.constructor(rules?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * It fetches a rule from the API and adds it to the cache
   * @param rule - The rule to fetch. Can be a string or a rule object.
   * @param [cache=true] - Whether or not to cache the rule.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The rule object
   */
  async _fetchId(rule, cache = true, force = false) {
    const ruleId = typeof rule === "string" ? rule : rule.id;
    if (this.cache.has(ruleId) && !force) return this.cache.get(ruleId);
    rule = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`);
    return this._add(rule, this.guildId, {cache, force: true});
  }

  /**
   * It creates a new rule
   * @param [options] - The options for the rule.
   * @returns A new rule object
   */
  async create(options = {}) {
    const {reason} = options;
    const body = AutoModManager.transformPayload(options);
    const rule = await this.client.api.post(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules`, {body, reason});
    return this._add(rule);
  }

  /**
   * It edits an existing rule
   * @param rule - The rule to edit. Can be a rule object or a rule ID.
   * @param [options] - An object containing the following properties:
   * @returns The rule that was edited.
   */
  async edit(rule, options = {}) {
    const {reason} = options;
    const body = AutoModManager.transformPayload(options);
    const ruleId = typeof rule === "string" ? rule : rule.id;
    rule = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`, {body, reason});
    return this._add(rule, this.guildId, {force: true});
  }

  /**
   * It deletes a rule from the server
   * @param rule - The rule to delete. Can be a rule ID or a rule object.
   * @param reason - The reason for the deletion.
   * @returns The deleted rule.
   */
  async delete(rule, reason) {
    const ruleId = typeof rule === "string" ? rule : rule.id;
    const deletedRule = this._add(rule, this.guildId, {cache: false});
    await this.client.api.delete(`${this.client.root}/guilds/${this.guildId}/auto-moderation/rules/${ruleId}`, {reason});
    return deletedRule;
  }

  /**
   * It returns the Collection object.
   * @returns The Collection class.
   */
  get cache() {
    return Collection;
  }

  /**
   * It takes a payload object and returns a new object with the same properties, but with the values
   * transformed to match the API's expected format
   * @param [payload] - The payload to transform.
   * @returns The payload is being returned.
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
   * It takes an object with a `type` property and an optional `metadata` property, and returns an
   * object with a `type` property and an optional `metadata` property
   * @param [actions] - The actions to transform.
   * @returns An object with a type and metadata property.
   */
  static transformActions(actions = {}) {
    return {
      type: typeof actions.type === "string" ? GuildAutoModActionTypes[actions.type] : actions.type,
      metadata: actions.metadata
        ? {
            channel_id: typeof actions.metadata.channel === "string" ? actions.metadata.channel : actions.metadata.channel?.id,
            duration_seconds: actions.metadata.durationSeconds,
          }
        : undefined,
    };
  }

  /**
   * It takes in a metadata object, and returns a new object with the same properties, but with the
   * properties renamed to match the new naming scheme
   * @param [metadata] - The metadata object that is passed to the constructor of the plugin.
   * @returns The return value is the metadata object with the values of the metadata object being
   * assigned to the keys of the new object.
   */
  static transformMetadata(metadata = {}) {
    return {
      keyword_filter: metadata.keywordFilter ?? metadata.keyword_filter ?? undefined,
      allow_list: metadata.allowList ?? metadata.allow_list ?? undefined,
      presets: metadata.presets?.map((o) => (typeof o === "string" ? GuildAutoModPresetTypes[o] : o)),
    };
  }
}

module.exports = AutoModManager;
