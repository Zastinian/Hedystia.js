const WebhookClient = require("./WebhookClient");
class InteractionWebhook extends WebhookClient {
  constructor(data = {}, client) {
    super(data, client);
  }
}

module.exports = InteractionWebhook;
