const EventEmitter = require("node:events");
const { Error } = require("../Util/Errors");
const Intents = require("../Uil/Intents");

class Client extends EventEmitter {
  intents = 0;
  readyAt = null;
  user = null;
  constructor(options = {}) {
    super();
    this.intents = 0;
    if (options.intents) {
      this.intents = this.setIntents(options.intents);
    } else {
      this.intents = Intents.default;
    }
  }
}

module.exports = Client;
