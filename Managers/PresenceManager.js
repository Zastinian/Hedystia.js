const Presence = require("../Structures/Presence");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
class PresenceManager extends Base {
  constructor(client) {
    super(client);
  }

  _add(presences, options = { cache: true, force: false }) {
    if (!presences) return null;
    const presenceId =
      typeof presences === "string"
        ? presences
        : presences.user?.id ?? presences.id;
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

  get cache() {
    return Collection;
  }
}

module.exports = PresenceManager;
