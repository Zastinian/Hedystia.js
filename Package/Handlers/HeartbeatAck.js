const Base = require("../Base/base");
/**
 * The HeartbeatAck class is a subclass of the Base class that updates the last heartbeat
acknowledgement time and sets a flag to indicate that the heartbeat has been acknowledged.
 */
class HeartbeatAck extends Base {
  /**
   * The constructor function initializes an instance of a class and calls a private method.
   * @constructor
   * @param {Client} client - The "client" parameter is an object that represents the client or the user of the
   * constructor. It could be an instance of a class or an object that contains information about the
   * client.
   */
  constructor(client) {
    super(client);
    this._patch();
  }

  /**
   * The function updates the last heartbeat acknowledgement time and sets a flag to indicate that the
   * heartbeat has been acknowledged.
   * @returns The return statement is returning a debug message indicating that the heartbeat has been
   * acknowledged and specifying when the next heartbeat will be sent.
   */
  _patch() {
    this.client.ws.lastHeartbeatAck = new Date();
    this.client.ws.isHeartbeatAcked = true;
    return this.client.debug(`[Heartbeat]: Heartbeat acknowledged. Sending next heartbeat in ${this.client.heartbeatInterval}ms`);
  }
}

module.exports = HeartbeatAck;
