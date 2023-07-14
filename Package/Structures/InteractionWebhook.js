const WebhookClient = require("./WebhookClient");
/**
 * Represents an interaction webhook.
 * @class
 * @extends WebhookClient
 * @param {Object} [data] - The data for the interaction webhook.
 * @param {Client} [client] - The client associated with the interaction webhook.
 */
class InteractionWebhook extends WebhookClient {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The initial data for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, client) {
    super(data, client);
  }
}

module.exports = InteractionWebhook;
