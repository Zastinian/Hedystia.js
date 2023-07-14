const Presence = require("../Structures/Presence");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/**
 * Represents a presence manager that handles the caching and retrieval of presence data.
 * @class
 * @extends Base
 * @param {Client} client - The client instance.
 */
class PresenceManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a presence to the cache and returns the presence object.
   * @param {string | Presence} presences - The presence object or the ID of the presence.
   * @param {object} [options] - Additional options for adding the presence.
   * @param {boolean} [options.cache=true] - Whether to cache the presence object.
   * @param {boolean} [options.force=false] - Whether to force the retrieval of the presence from the cache.
   * @returns {Presence | null} The presence object that was added to the cache, or null if presences is falsy.
   */
  _add(presences, options = {cache: true, force: false}) {
    if (!presences) return null;
    const presenceId = typeof presences === "string" ? presences : presences.user?.id ?? presences.id;
    let presence;
    if (this.cache.has(presenceId) && !options.force) {
      presence = this.cache.get(presenceId);
    } else {
      const newPresence = new Presence(
        typeof presences === "string"
          ? {
              id: presenceId,
              partial: true,
            }
          : presences,
        this.client
      );

      if (options.cache) this.cache.set(presenceId, newPresence);

      presence = newPresence;
    }

    return presence;
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }
}

module.exports = PresenceManager;
