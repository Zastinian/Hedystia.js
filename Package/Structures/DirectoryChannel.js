const Channel = require("./Channel");
/**
 * Represents a directory channel.
 * @class
 * @extends Channel
 * @param {Object} [data] - The data for the directory channel.
 * @param {Client} client - The client instance.
 * @property {boolean} partial - Whether the channel is partial or not.
 * @property {string|null} name - The name of the directory channel.
 */
class DirectoryChannel extends Channel {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data = {}, client) {
    super(data, null, client);
    this.partial = data.partial ?? false;
    this.name = data.name ?? null;
  }
}

module.exports = DirectoryChannel;
