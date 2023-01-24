const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const TextBasedChannels = require("./Interface/TextBasedChannels");
/* It's a class that extends TextBasedChannels, and it has a constructor that takes in data, guildId,
and client, and it has a recipients property that is a RaidenCol of the data.recipients mapped to
the client.users._add(o) */
class DMChannel extends TextBasedChannels {
  /**
   * It's a constructor for a class that extends another class
   * @param [data] - The data that is passed to the constructor.
   * @param [guildId=null] - The ID of the guild the message is in.
   * @param client - The client instance
   */
  constructor(data = {}, guildId = null, client) {
    super(data, guildId, client);

    this.recipients = new RaidenCol(data.recipients?.map((o) => [o.id, this.client.users._add(o)]));
  }
}

module.exports = DMChannel;
