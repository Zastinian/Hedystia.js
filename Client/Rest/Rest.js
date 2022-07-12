const Intents = require("../../Util/Intents");

class Rest {
  constructor(client, intents = Intents.default) {
    this.client = client;
    this.intents = client.intents;
  }
}
