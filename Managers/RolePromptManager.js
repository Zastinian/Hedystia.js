const RolePrompts = require("../Structures/RolePrompts");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* `RolePromptManager` is a class that manages role prompts for a guild */
class RolePromptManager extends Base {
  /**
   * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
   * assigns them to the `guildId` and `client` properties of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);
    this.guildId = guildId;
  }

  /**
   * It adds a role prompt to the cache
   * @param prompts - This is the prompt you want to add. It can be a string or an object. If it's a
   * string, it will be the prompt's ID. If it's an object, it will be the prompt's data.
   * @param [guildId] - The guild ID to use for the role prompt.
   * @param [options] -
   * @returns A new RolePrompts object
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
   * It fetches all role prompts from the API and returns them in a cache
   * @param [options] - Object
   * @returns A new instance of the cache constructor.
   */
  async fetch(options = {}) {
    const {cache, force} = options;
    const prompts = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/role-prompts`);
    return new this.cache.constructor(prompts.role_prompts?.map((o) => [o.id, this._add(o, this.guildId, {cache, force})]));
  }

  /**
   * It sets the role prompts for the guild
   * @param [options] - Object
   * @returns A new cache.constructor
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
   * It transforms the payload into a format that the API can understand.
   * @param [payload] - The payload that is passed to the function.
   * @returns The payload is being returned with the title, description, required, and roles.
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
   * It takes an object with the keys `emojiName`, `emojiId`, `name`, and `role` and returns an object
   * with the keys `emoji_name`, `emoji_id`, `name`, and `role_id`
   * @param [roles] - The roles object.
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
   * It returns the Collection object.
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }
}

module.exports = RolePromptManager;
