const Base = require("../Base/base");
const {Opcodes} = require("../Util/Constants");
/**
 * The Heartbeat class sends a heartbeat to the Discord server in response to a request.
 */
class Heartbeat extends Base {
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
   * The function sends a heartbeat to the Discord server in response to a request.
   * @returns The message "[Websocket]: Successfully sent a heartbeat" is being returned.
   */
  _patch() {
    this.client.debug(`[Websocket]: Discord asked for heartbeat therefore sending one`);
    this.client.ws.send({
      op: Opcodes.Heartbeat,
      d: this.client.seq,
    });
    return this.client.debug(`[Websocket]: Successfully sent a heartbeat`);
  }
}

module.exports = Heartbeat;
