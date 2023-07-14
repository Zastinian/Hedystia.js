const Base = require("../Base/base");
const {Opcodes} = require("../Util/Constants");
/**
 * The `Hello` class is a subclass of `Base` that handles the initialization of an object with optional
data and a client parameter, sets up a heartbeat interval, and handles reconnection or resumption of
a WebSocket connection.
 */
class Hello extends Base {
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
   * The function sets up the heartbeat interval and handles the reconnection or resumption of the
   * WebSocket connection.
   * @param data - The `data` parameter is the data received from the server. It is an object that
   * contains the `d` property, which is the payload of the received message.
   */
  _patch(data) {
    const packet = data.d;
    this.client.debug(`[Websocket]: Received HELLO, now setting the HELLO timeout of 2000`);
    this.client.heartbeatInterval = packet?.heartbeat_interval;
    this.client.debug(`[Heartbeat]: Setting the heartbeat interval to ${this.client.heartbeatInterval}ms`);
    setTimeout(() => {
      this.handleheartBeat();
    }, 2_000).unref();

    if (this.client.ws.reconnected) {
      this.client.ws.reconnected = false;
      this.client.ws.handleResume();
    } else this.client.ws.connect();
  }

  /**
   * The function `handleheartBeat()` sends a heartbeat message to the server at a random interval and
   * handles reconnection if the connection is not acknowledged.
   * @returns In the given code snippet, the function `handleheartBeat()` does not explicitly return
   * any value. Therefore, it implicitly returns `undefined`.
   */
  handleheartBeat() {
    if (this.client.ws.isHeartbeatAcked === false) {
      this.client.debug(`[Websocket]: Zombified connection. Reconnecting`);
      return this.client.ws.handleReconnect();
    }
    this.client.ws.interval = setInterval(() => {
      this.client.heartbeatInterval = Math.floor(Math.random() * (40_250 - 28_523 + 1) + 28_523);
      this.client.ws.send({op: Opcodes.Heartbeat, d: this.client.seq ?? null});
      this.client.debug(`[Heartbeat]: Successfully sent a heartbeat`);
      clearInterval(this.client.ws.interval);
      this.handleheartBeat();
      this.client.ws.isHeartbeatAcked = false;
    }, this.client.heartbeatInterval).unref();
  }
}

module.exports = Hello;
