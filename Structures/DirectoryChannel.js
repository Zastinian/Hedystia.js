const Channel = require("./Channel");
class DirectoryChannel extends Channel {
  constructor(data = {}, client) {
    super(data, null, client);
    this.partial = data.partial ?? false;
    this.name = data.name ?? null;
  }
}

module.exports = DirectoryChannel;
