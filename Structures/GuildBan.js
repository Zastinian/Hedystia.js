const Base = require("../Base/base");
class GuildBan extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.reason = data.reason ?? null;
    this.user = this.client.users._add(data.user);
    this.guildId = guildId;
  }

  async fetch(options) {
    return await this.guild?.bans.fetch(this, options);
  }

  async remove(reason) {
    return await this.guild?.bans.remove(this.user, reason);
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = GuildBan;
