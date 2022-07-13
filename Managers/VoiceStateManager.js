const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const VoiceState = require("../Structures/VoiceState");
class VoiceStateManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(
    voiceStates,
    guildId = this.guildId,
    options = { cache: true, force: false }
  ) {
    if (!voiceStates) return null;
    const userId =
      typeof voiceStates.user_id === "string"
        ? voiceStates.user_id
        : voiceStates.user_id?.id ?? voiceStates;
    let voicestate;
    if (this.cache.has(userId) && !options.force) {
      voicestate = this.cache.get(userId);
    } else {
      const newVoicestate = new VoiceState(
        typeof voiceStates === "string"
          ? {
              partial: true,
              user_id: userId,
            }
          : voiceStates,
        guildId,
        this.client
      );

      if (options.cache) this.cache.set(userId, newVoicestate);

      voicestate = newVoicestate;
    }

    return voicestate;
  }

  get cache() {
    return Collection;
  }
}

module.exports = VoiceStateManager;
