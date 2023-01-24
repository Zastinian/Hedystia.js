const Presence = require("../Structures/Presence");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
/* It's a class that manages presences */
class PresenceManager extends Base {
  /**
   * A constructor function.
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It adds a presence to the cache
   * @param presences - The presence(s) to add. Can be a string, a presence object, or an array of
   * either.
   * @param [options] - {cache: true, force: false}
   * @returns A presence object
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
   * `cache` is a getter that returns the `Collection` class
   * @returns The Collection class
   */
  get cache() {
    return Collection;
  }
}

module.exports = PresenceManager;
