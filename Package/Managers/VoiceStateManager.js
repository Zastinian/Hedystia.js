const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const VoiceState = require("../Structures/VoiceState");
/* It's a class that manages voice states */
class VoiceStateManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a new voice state to the cache.
   * @param voiceStates - The voice state object to add to the cache.
   * @param [guildId] - The guild ID to use for the voice state.
   * @param [options] - An object with the following properties:
   * @returns A new VoiceState object
   */
  _add(voiceStates, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!voiceStates) return null;
    const userId = typeof voiceStates.user_id === "string" ? voiceStates.user_id : voiceStates.user_id?.id ?? voiceStates;
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

  /**
   * It returns the Collection object.
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }
}

module.exports = VoiceStateManager;
