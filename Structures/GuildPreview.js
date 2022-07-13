const GuildEmojiManager = require("../Managers/GuildEmojiManager");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
class GuildPreview extends Base {
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.icon = data.icon ?? null;
    this.splash = data.splash ?? null;
    this.discoverySplash = data.discovery_splash ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.features = data.features ?? null;
    this.approximateMemberCount = data.approximate_member_count ?? null;
    this.approximatePresenceCount = data.approximate_presence_count ?? null;
    this.description = data.description ?? null;
    this.emojis = new GuildEmojiManager(this.id, this.client);
  }

  async fetch() {
    return await this.client.fetchPreview(this);
  }

  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.GuildIcon(
      this.icon,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }

  splashURL(options = {}) {
    if (!this.splash) return null;
    return this.client.cdn.GuildSplash(
      this.splash,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }

  discoverySplashURL(options = {}) {
    if (!this.discoverySplash) return null;
    return this.client.cdn.GuildDiscoverySplash(
      this.discoverySplash,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }
}

module.exports = GuildPreview;
