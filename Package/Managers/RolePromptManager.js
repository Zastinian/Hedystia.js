const RolePrompts = require("../Structures/RolePrompts");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a manager for role prompts in a guild.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class RolePromptManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);
    this.guildId = guildId;
  }

  /**
   * Adds a role prompt to the collection.
   * @param {string | RolePrompt} prompts - The ID of the prompt or the prompt object itself.
   * @param {string} [guildId=this.guildId] - The ID of the guild where the prompt is added.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the prompt.
   * @param {boolean} [options.cache=true] - Whether to cache the prompt.
   * @param {boolean} [options.force=false] - Whether to force adding the prompt even if it already exists in the cache.
   * @returns {RolePrompt | null} The added role prompt or null if prompts is falsy.
   */
  _add(prompts, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!prompts) return null;
    const promptId = typeof prompts === "string" ? prompts : prompts.id;
    let rolePrompt;
    if (this.cache.has(promptId) && !options.force) {
      rolePrompt = this.cache.get(promptId);
    } else {
      const newRolePrompt = new RolePrompts(
        typeof prompts === "string"
          ? {
              id: promptId,
              partial: true,
            }
          : prompts,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(promptId, newRolePrompt);

      rolePrompt = newRolePrompt;
    }

    return rolePrompt;
  }

  /**
   * Fetches role prompts from the server.
   * @param {Object} [options] - Optional parameters for the fetch request.
   * @param {boolean} [options.cache] - Whether to use cached data or not.
   * @param {boolean} [options.force] - Whether to force a fresh fetch or not.
   * @returns {Promise<Object>} - A promise that resolves to the fetched role prompts.
   */
  async fetch(options = {}) {
    const {cache, force} = options;
    const prompts = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/role-prompts`);
    return new this.cache.constructor(prompts.role_prompts?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * Sets the role prompts for the guild.
   * @param {Object} [options] - The options for setting the role prompts.
   * @param {string} [options.reason] - The reason for setting the role prompts.
   * @returns {Promise<Cache>} A promise that resolves with a new instance of the cache
   * containing the updated role prompts.
   */
  async set(options = {}) {
    const {reason} = options;
    const body = RolePromptManager.transformPayload(options);
    const rolePrompts = await this.client.api.put(`${this.client.root}/guilds/${this.guildId}/role-prompts`, {
      body,
      reason,
    });
    return new this.cache.constructor(rolePrompts.role_prompts?.map((o) => [o.id, this._add(o)]));
  }

  /**
   * Transforms the given payload object into a new object with specific properties.
   * @param {object} payload - The payload object to transform.
   * @returns {object} - The transformed object with properties: title, description, required, and roles.
   */
  static transformPayload(payload = {}) {
    return {
      title: payload.title ?? undefined,
      description: payload.description ?? undefined,
      required: payload.required ?? undefined,
      roles: payload.roles?.map((o) => this.transformRoles(o)),
    };
  }

  /**
   * Transforms a roles object into a new format.
   * @param {Object} roles - The roles object to transform.
   * @returns {Object} - The transformed roles object.
   */
  static transformRoles(roles = {}) {
    return {
      emoji_name: roles.emojiName ?? roles.emoji_name ?? undefined,
      emoji_id: roles.emojiId ?? roles.emoji_id ?? undefined,
      name: roles.name ?? undefined,
      role_id: typeof roles.role === "string" ? roles.role : roles.role?.id ?? undefined,
    };
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = RolePromptManager;
