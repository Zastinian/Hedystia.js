const Snowflake = require("../Util/Snowflake");
const UserFlags = require("../Util/UserFlags");
const Base = require("../Base/base");
class User extends Base {
  constructor(data = {}, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.bio = data.bio ?? null;
    this.id = data.id ?? null;
    this.username = data.username ?? null;
    this.discriminator = data.discriminator ?? null;
    this.tag = data.username + "#" + data.discriminator ?? null;
    this.avatar = data.avatar ?? null;
    this.avatarDecoration = data.avatar_decoration ?? null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.pronouns = data.pronouns ?? null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.bot = data.bot ?? null;
    this.system = data.system ?? null;
    this.mfaEnabled = data.mfa_enabled ?? null;
    this.banner = data.banner ?? null;
    this.bannerColor = data.banner_color ?? null;
    this.accentColor = data.accent_color ?? null;
    this.locale = data.locale ?? null;
    this.verified = data.verified ?? null;
    this.email = data.email ?? null;
    this.flags = new UserFlags(
      !(data.flags ?? data.public_flags)
        ? 0n
        : BigInt(data.flags ?? data.public_flags)
    );
  }

  async fetch(options) {
    return await this.client.users.fetch(this, options);
  }

  async createDM() {
    return await this.client.users.createDM(this);
  }

  async send(options = {}) {
    return await this.client.users.send(this, options);
  }

  defaultAvatarURL() {
    return this.client.cdn.DefaultAvatarURL(this.discriminator) ?? null;
  }

  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.defaultAvatarURL();
    return this.client.cdn.UserAvatar(
      this.avatar,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }

  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.UserBanner(
      this.banner,
      options.dynamic,
      options.size,
      options.format,
      this.id
    );
  }

  avatarDecorationURL(options = {}) {
    if (!this.avatarDecoration) return null;
    return this.client.cdn.UserAvatarDecoration(
      this.avatarDecoration,
      options.size,
      options.format,
      this.id
    );
  }

  hexAccentColor() {
    if (!this.accentColor) return null;
    return `#${this.accentColor?.toString(16)}`;
  }
}

module.exports = User;
