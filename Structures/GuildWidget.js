const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
class GuildWidget extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.id = data.id ?? guildId ?? null;
    this.name = data.name ?? null;
    this.instantInvite = data.instant_invite ?? null;
    this.channels = new RaidenCol(data.channels?.map((o) => [o.id, this.client.channels._add(o, this.id)]));
    this.members = new RaidenCol(data.members?.map((o) => [o.id, this.client.users._add(o)]));
    this.presenceCount = data.presence_count ?? null;
  }

  async fetchSettings() {
    return await this.guild?.widgets.fetchSettings();
  }

  get guild() {
    return this.client.guilds._add(this.id) ?? null;
  }
}

module.exports = GuildWidget;
