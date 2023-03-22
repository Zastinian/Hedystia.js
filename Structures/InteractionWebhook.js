const WebhookClient = require("./WebhookClient");
/**
 * It's a class that extends the WebhookClient class, and it's used to handle interactions
 * @class
 * @extends WebhookClient
 */
class InteractionWebhook extends WebhookClient {
  /**
   * The constructor function is a special method for creating and initializing an object created
   * within a class.
   * @param [data] - The data that was returned from the API.
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, client) {
    super(data, client);
  }
}

module.exports = InteractionWebhook;
