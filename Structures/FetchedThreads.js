const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
class FetchedThreads extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.threads = new RaidenCol(
      data.threads?.map((o) => [
        o.id,
        this.client.channels._add(o, this.guildId),
      ])
    );
    this.hasMore = data.has_more ?? null;
  }
}

module.exports = FetchedThreads;
