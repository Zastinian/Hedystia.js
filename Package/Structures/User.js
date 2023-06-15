const Snowflake = require("../Util/Snowflake");
const UserFlags = require("../Util/UserFlags");
const Base = require("../Base/base");
/**
 * It's a class that represents a user
 * @class
 * @extends Base
 */
class User extends Base {
  /**
   * It's a constructor for a class that extends another class.
   * @param [data] - The data that is passed to the constructor.
   * @param client - DiscordClient
   */
  constructor(data = {}, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.bio = data.bio ?? null;
    this.id = data.id ?? null;
    this.username = data.username ?? null;
    this.discriminator = data.discriminator ?? null;
    this.global_name = data.global_name ?? null;
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
    this.flags = new UserFlags(!(data.flags ?? data.public_flags) ? 0n : BigInt(data.flags ?? data.public_flags));
  }

  /**
   * It fetches the user from the Discord API
   * @param options - An object with the following properties:
   * @returns The user object.
   */
  async fetch(options) {
    return await this.client.users.fetch(this, options);
  }

  /**
   * It creates a DM channel with the user
   * @returns The user object.
   */
  async createDM() {
    return await this.client.users.createDM(this);
  }

  /**
   * It sends a message to a user
   * @param [options] - Object
   * @returns The user object.
   */
  async send(options = {}) {
    return await this.client.users.send(this, options);
  }

  /**
   * It returns the default avatar URL of the user
   * @returns The default avatar URL for the user.
   */
  defaultAvatarURL() {
    return this.client.cdn.DefaultAvatarURL(this.discriminator) ?? null;
  }

  /**
   * "If the user doesn't have an avatar, return the default avatar URL, otherwise return the user's
   * avatar URL."
   * @param [options] - dynamic, size, format
   * @returns The avatar URL of the user.
   */
  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.defaultAvatarURL();
    return this.client.cdn.UserAvatar(this.avatar, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * "If the user has a banner, return the banner URL, otherwise return null."
   *
   * The function is called like this:
   * @param [options] - The options for the banner.
   * @returns The user's banner URL.
   */
  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.UserBanner(this.banner, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * "If the user has an avatar decoration, return the URL of the avatar decoration, otherwise return
   * null."
   *
   * The function is called avatarDecorationURL because it returns the URL of the avatar decoration
   * @param [options]
   * @returns The avatar decoration URL.
   */
  avatarDecorationURL(options = {}) {
    if (!this.avatarDecoration) return null;
    return this.client.cdn.UserAvatarDecoration(this.avatarDecoration, options.size, options.format, this.id);
  }

  /**
   * If the accentColor property is not null, return a string that starts with a hash symbol and is
   * followed by the accentColor property converted to a string in base 16.
   * @returns The accent color in hexadecimal format.
   */
  hexAccentColor() {
    if (!this.accentColor) return null;
    return `#${this.accentColor?.toString(16)}`;
  }
}

module.exports = User;
