const Snowflake = require("../Util/Snowflake");
const UserFlags = require("../Util/UserFlags");
const Base = require("../Base/base");
/**
 * Represents a user in the application.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing user information.
 * @param {Client} client - The client object.
 */
class User extends Base {
  /**
   * Constructs a new User object.
   * @constructor
   * @param {Object} [data] - The data object containing user information.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.bio = data.bio ?? null;
    this.id = data.id ?? null;
    this.username = data.username ?? null;
    this.globalName = data.global_name ?? null;
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
   * Fetches user data using the provided options.
   * @param {Object} options - The options for fetching user data.
   * @returns {Promise} A promise that resolves with the fetched user data.
   */
  async fetch(options) {
    return await this.client.users.fetch(this, options);
  }

  /**
   * Creates a direct message (DM) channel with the user associated with this instance of the client.
   * @returns {Promise<DMChannel>} A promise that resolves to the created DM channel.
   */
  async createDM() {
    return await this.client.users.createDM(this);
  }

  /**
   * Sends a message to the user using the client's user send method.
   * @param {object} options - Optional parameters for sending the message.
   * @returns {Promise} A promise that resolves when the message is sent.
   */
  async send(options = {}) {
    return await this.client.users.send(this, options);
  }

  /**
   * Returns the URL of the default avatar for the user in the specified format.
   * @param {string} format - The format of the avatar image (e.g. "png", "jpg", "gif").
   * @returns {string | null} The URL of the default avatar image, or null if it is not available.
   */
  defaultAvatarURL(format) {
    return this.client.cdn.DefaultAvatarURL(this.id, format) ?? null;
  }

  /**
   * Returns the URL of the avatar for the user.
   * @param {Object} options - The options for generating the avatar URL.
   * @param {boolean} [options.dynamic] - Whether to generate a dynamic avatar URL.
   * @param {number} [options.size] - The size of the avatar.
   * @param {string} [options.format] - The format of the avatar image.
   * @returns {string} The URL of the user's avatar.
   */
  displayAvatarURL(options = {}) {
    if (!this.avatar) return this.defaultAvatarURL();
    return this.client.cdn.UserAvatar(this.avatar, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Generates the URL for the user's banner image.
   * @param {Object} options - Optional parameters for customizing the URL.
   * @param {boolean} [options.dynamic] - Whether to include dynamic content in the URL.
   * @param {string} [options.size] - The desired size of the banner image.
   * @param {string} [options.format] - The desired format of the banner image.
   * @returns {string | null} The URL of the user's banner image, or null if no banner is set.
   */
  bannerURL(options = {}) {
    if (!this.banner) return null;
    return this.client.cdn.UserBanner(this.banner, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Returns the URL of the avatar decoration for the user.
   * @param {Object} options - Optional parameters for the URL generation.
   * @param {number} options.size - The desired size of the avatar decoration.
   * @param {string} options.format - The desired format of the avatar decoration.
   * @returns {string | null} The URL of the avatar decoration, or null if no decoration is set.
   */
  avatarDecorationURL(options = {}) {
    if (!this.avatarDecoration) return null;
    return this.client.cdn.UserAvatarDecoration(this.avatarDecoration, options.size, options.format, this.id);
  }

  /**
   * Returns the hexadecimal representation of the accent color.
   * @returns {string | null} - The hexadecimal representation of the accent color, or null if the accent color is not set.
   */
  hexAccentColor() {
    if (!this.accentColor) return null;
    return `#${this.accentColor?.toString(16)}`;
  }
}

module.exports = User;
