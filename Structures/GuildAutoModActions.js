const {GuildAutoModActionTypes} = require("../Util/Constants");
const Base = require("../Base/base");
class GuildAutoModActions extends Base {
  constructor(data = {}, client) {
    super(client);
    this.type = (typeof data.type === "number" ? GuildAutoModActionTypes[data.type] : data.type) ?? null;
    this.metadata = data.metadata
      ? {
          channelId: data.metadata.channel_id,
          durationSeconds: data.metadata.duration_seconds,
        }
      : null;
  }
}

module.exports = GuildAutoModActions;
