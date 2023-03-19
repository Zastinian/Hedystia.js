const {IntegrationExpireBehavior} = require("../Util/Constants");
const Base = require("../Base/base");
const ClientApplication = require("./ClientApplication");
class GuildIntegration extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = guildId;
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.type = data.type ?? null;
    this.enabled = data.enabled ?? null;
    this.syncing = data.syncing ?? null;
    this.roleId = data.role_id ?? null;
    this.enabledEmoticons = data.enabled_emoticons ?? null;
    this.expireBehavior = typeof data.expire_behavior === "number" ? IntegrationExpireBehavior[data.expire_behavior] : data.expire_behavior;
    this.expireGracePeriod = data.expire_grace_period ?? null;
    this.user = this.client.users._add(data.user) ?? null;
    this.account = data.account ?? null;
    this.syncedAt = "synced_at" in data ? new Date(data.synced_at) : null;
    this.syncedTimestamp = this.syncedAt?.getTime() ?? null;
    this.subscriberCount = data.subscriber_count ?? null;
    this.revoked = data.revoked ?? null;
    this.application = new ClientApplication(data.application, this.client);
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = GuildIntegration;
