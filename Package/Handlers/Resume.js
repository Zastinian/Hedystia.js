const BaseAction = require("../Actions/BaseAction");
/**
 * Represents a Resume action for the Resume class, which extends the BaseAction class.
 */
class Resume extends BaseAction {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
    this._patch();
  }

  /**
   * Method called when the gateway connection is successfully resumed.
   * Logs a debug message indicating the number of events that were replayed.
   * @returns None
   */
  _patch() {
    const replayedEvents = this.client.seq - this.client.closeSequence;
    return this.client.debug(
      `[Websocket]: Successfully resumed gateway connection. Replayed ${replayedEvents} event${replayedEvents > 1 ? "s" : ""}`
    );
  }
}

module.exports = Resume;
