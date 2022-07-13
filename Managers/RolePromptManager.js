const RolePrompts = require("../Structures/RolePrompts");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class RolePromptManager extends Base {
  constructor(guildId, client) {
    super(client);
    this.guildId = guildId;
  }

  _add(
    prompts,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
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

  async fetch(options = {}) {
    const { cache, force } = options;
    const prompts = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/role-prompts`
    );
    return new this.cache.constructor(
      prompts.role_prompts?.map((o) => [
        o.id,
        this._add(o, this.guildId, { cache, force }),
      ])
    );
  }

  async set(options = {}) {
    const { reason } = options;
    const body = RolePromptManager.transformPayload(options);
    const rolePrompts = await this.client.api.put(
      `${this.client.root}/guilds/${this.guildId}/role-prompts`,
      { body, reason }
    );
    return new this.cache.constructor(
      rolePrompts.role_prompts?.map((o) => [o.id, this._add(o)])
    );
  }

  static transformPayload(payload = {}) {
    return {
      title: payload.title ?? undefined,
      description: payload.description ?? undefined,
      required: payload.required ?? undefined,
      roles: payload.roles?.map((o) => this.transformRoles(o)),
    };
  }

  static transformRoles(roles = {}) {
    return {
      emoji_name: roles.emojiName ?? roles.emoji_name ?? undefined,
      emoji_id: roles.emojiId ?? roles.emoji_id ?? undefined,
      name: roles.name ?? undefined,
      role_id:
        typeof roles.role === "string"
          ? roles.role
          : roles.role?.id ?? undefined,
    };
  }

  get cache() {
    return Collection;
  }
}

module.exports = RolePromptManager;
