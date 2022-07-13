const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const TextBasedChannels = require("./Interface/TextBasedChannels");
class DMChannel extends TextBasedChannels {
  constructor(data = {}, guildId = null, client) {
    super(data, guildId, client);

    this.recipients = new RaidenCol(
      data.recipients?.map((o) => [o.id, this.client.users._add(o)])
    );
  }
}

module.exports = DMChannel;
