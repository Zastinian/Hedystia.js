const GuildEmojiManager = require("../Managers/GuildEmojiManager");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
/**
 * Represents the preview for a guild.
 * @class
 * @extends Base
 */
class GuildPreview extends Base {
  /**
   * @constructor
   * @param {Object} data The data for the guild preview
   * @param {Client} client The instantiating client
   */
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

  /**
   * Fetches the previewed guild
   * @async
   * @returns {Promise<GuildPreview>}
   */
  async fetch() {
    return await this.client.fetchPreview(this);
  }

  /**
   * Returns the URL of the guild's icon
   * @param {Object} options - Options for the icon URL
   * @param {boolean} options.dynamic - Whether the icon should be dynamically generated
   * @param {number} options.size - The size of the icon in pixels
   * @param {string} options.format - The format of the icon (e.g. "png" or "jpeg")
   * @returns {?string} The URL of the guild's icon or null if no icon is available
   */
  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.GuildIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Returns the URL for the guild splash image.
   * @param {Object} [options] - Options for the splash image.
   * @param {boolean} [options.dynamic=false] - Whether to generate a dynamic or static image.
   * @param {number} [options.size] - The size of the image in pixels.
   * @param {string} [options.format] - The format of the image (e.g. "webp", "png", etc.).
   * @returns {?string} The URL for the guild splash image or null if no splash image is available.
   */
  splashURL(options = {}) {
    if (!this.splash) return null;
    return this.client.cdn.GuildSplash(this.splash, options.dynamic, options.size, options.format, this.id);
  }

  /**
   * Returns the URL for the guild discovery splash image.
   * @param {Object} [options] - Options for the discovery splash image.
   * @param {boolean} [options.dynamic=false] - Whether to generate a dynamic or static image.
   * @param {number} [options.size] - The size of the image in pixels.
   * @param {string} [options.format] - The format of the image (e.g. "webp", "png", etc.).
   * @returns {?string} The URL for the guild discovery splash image or null if no discovery splash image is available.
   */
  discoverySplashURL(options = {}) {
    if (!this.discoverySplash) return null;
    return this.client.cdn.GuildDiscoverySplash(this.discoverySplash, options.dynamic, options.size, options.format, this.id);
  }
}

module.exports = GuildPreview;
