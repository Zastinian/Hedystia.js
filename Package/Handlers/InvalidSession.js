const Base = require("../Base/base");
const {WebsocketReadyState} = require("../Util/Constants");
/**
 * The `InvalidSession` class is a subclass of `Base` that handles invalid session errors in a
WebSocket connection.
 */
class InvalidSession extends Base {
  /**
   * This is a constructor function that initializes an object with optional data and a client
   * parameter.
   * @constructor
   * @param {Object} data - The `data` parameter is an object that contains the initial data for the
   * constructor. It is optional and defaults to an empty object if not provided.
   * @param {Client} client - The `client` parameter is an object that represents the client or connection to a
   * server. It is typically used to make API requests or perform other operations related to the
   * server.
   */
  constructor(data = {}, client) {
    super(client);
    this._patch(data);
  }

  /**
   * The function checks if a packet is true, and if so, it reconnects the websocket; otherwise, it
   * closes the websocket connection and exits the process.
   * @param data - The `data` parameter is the input data that is being passed to the `_patch`
   * function.
   * @returns either the result of the `this.client.ws.handleReconnect()` function call or the result
   * of the `process.exit()` function call.
   */
  _patch(data) {
    const packet = data.d;
    if (packet === true) {
      this.client.debug(`[Websocket]: Received an Invalid Session. Can reconnect so reconnecting.`);
      return this.client.ws.handleReconnect();
    }
    this.client.debug(
      `[Websocket]: Received an Invalid Session. Cannot reconnect ceasing process ${
        this.client.ws.readyState !== WebsocketReadyState.Closed ? `and Websocket connection` : ""
      }`
    );
    if (this.client.ws.readyState !== WebsocketReadyState.Closed) this.client.ws.destroy(1000);
    return process.exit();
  }
}

module.exports = InvalidSession;
