const Channel = require("./Channel");
/* `DirectoryChannel` is a class that represents a directory channel */
class DirectoryChannel extends Channel {
  /**
   * `constructor` is a function that is called when a new instance of the class is created
   * @param [data] - The data that was sent from the API.
   * @param client - The client that created the instance of the class.
   */
  constructor(data = {}, client) {
    super(data, null, client);
    this.partial = data.partial ?? false;
    this.name = data.name ?? null;
  }
}

module.exports = DirectoryChannel;
