const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const VoiceState = require("../Structures/VoiceState");
/**
 * Represents a Voice State Manager that handles voice state related operations.
 * @class
 * @extends Base
 */
class VoiceStateManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a voice state to the cache and returns the voice state object.
   * @param {string | VoiceState} voiceStates - The voice state object or user ID.
   * @param {string} [guildId=this.guildId] - The ID of the guild the voice state belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for the operation.
   * @param {boolean} [options.cache=true] - Whether to cache the voice state.
   * @param {boolean} [options.force=false] - Whether to force update the voice state even if it is already cached.
   * @returns {VoiceState | null} The voice state object.
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
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = VoiceStateManager;
