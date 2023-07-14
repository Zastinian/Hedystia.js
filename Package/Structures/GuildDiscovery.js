const Base = require("../Base/base");
const {GuildPrimaryCategory} = require("../Util/Constants");
/**
 * Represents a guild's discovery metadata.
 * @class
 * @extends Base
 */
class GuildDiscovery extends Base {
  /**
   * @constructor
   * @param {Object} data - The data for the guild discovery metadata
   * @param {Snowflake} guildId - The ID of the guild this discovery metadata belongs to
   * @param {Client} client - The instantiating client
   */
  constructor(data = {}, guildId, client) {
    super(client);

    /**
     * Whether or not this guild discovery object is partial.
     * @type {boolean}
     */
    this.partial = data.partial ?? false;

    /**
     * The about section of the guild discovery.
     * @type {?string}
     */
    this.about = data.about ?? null;

    /**
     * The ID of the guild.
     * @type {Snowflake}
     */
    this.guildId = guildId;

    /**
     * The category IDs of the guild discovery.
     * @type {?string[]}
     */
    this.categoryIds = data.category_ids ?? null;

    /**
     * Whether or not emoji discoverability is enabled.
     * @type {?boolean}
     */
    this.emojiDiscoverabilityEnabled = data.emoji_discoverability_enabled ?? null;

    /**
     * Whether or not the guild discovery is published.
     * @type {?boolean}
     */
    this.published = data.is_published ?? null;

    /**
     * The keywords associated with the guild discovery.
     * @type {?string[]}
     */
    this.keywords = data.keywords ?? null;

    /**
     * The date the guild was partner actioned.
     * @type {?Date}
     */
    this.partnerActionedAt = data.partner_actioned_timestamp ? new Date(data.partner_actioned_timestamp) : null;

    /**
     * The timestamp of when the guild was partner actioned.
     * @type {?number}
     */
    this.partnerActionedTimestamp = this.partnerActionedAt?.getTime() ?? null;

    /**
     * The date the guild applied for partnership.
     * @type {?Date}
     */
    this.partnerApplicationAt = data.partner_application_timestamp ? new Date(data.partner_application_timestamp) : null;

    /**
     * The timestamp of when the guild applied for partnership.
     * @type {?number}
     */
    this.partnerApplicationTimestamp = this.partnerApplicationAt?.getTime() ?? null;

    /**
     * The primary category ID of the guild discovery.
     * @type {?GuildPrimaryCategory}
     */
    this.primaryCategoryId =
      (typeof data.primary_category_id === "number" ? GuildPrimaryCategory[data.primary_category_id] : data.primary_category_id) ?? null;

    /**
     * The reasons to join the guild.
     * @type {?string[]}
     */
    this.reasonsToJoin = data.reasons_to_join ?? null;

    /**
     * The social links associated with the guild discovery.
     * @type {?Object}
     */
    this.socialLinks = data.social_link ?? null;
  }

  /**
   * Returns the guild associated with this discovery metadata.
   * @returns {Guild} The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * Fetches the discovery metadata for the guild.
   * @async
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the discovery metadata object.
   */
  async fetch() {
    return await this.guild?.discovery.fetch();
  }

  /**
   * Fetches the discovery metadata for the guild.
   * @async
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the discovery metadata object.
   */
  async edit(options = {}) {
    return await this.guild?.discovery.edit(this.guildId, options);
  }

  /**
   * Sets whether the emoji discoverability is enabled for the guild.
   * @async
   * @param {boolean} emojiDiscoverabilityEnabled - A boolean indicating whether the emoji discoverability is enabled.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  async setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled) {
    return await this.edit({emojiDiscoverabilityEnabled});
  }

  /**
   * Sets whether the emoji discoverability is enabled for the guild.
   * @async
   * @param {boolean} emojiDiscoverabilityEnabled - A boolean indicating whether the emoji discoverability is enabled.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  async setPublished(published) {
    return await this.edit({published});
  }

  /**
   * Sets the description of the guild for the discovery page.
   * @async
   * @param {string} about - The description of the guild.
   * @returns {Promise<DiscoveryMetadata>} A promise that resolves with the updated discovery metadata object.
   */
  async setAbout(about) {
    return await this.edit({about});
  }

  /**
   * Sets the "Reasons to Join" section for the associated guild in the discovery settings.
   * @async
   * @param {string} reasonsToJoin - The new "Reasons to Join" section content.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  async setReasonsToJoin(reasonsToJoin) {
    return await this.edit({reasonsToJoin});
  }

  /**
   * Sets the keywords associated with the associated guild in the discovery settings.
   * @async
   * @param {Array<string>} keywords - The new keywords.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  async setKeywords(keywords) {
    return await this.edit({keywords});
  }

  /**
   * Sets the keywords associated with the associated guild in the discovery settings.
   * @async
   * @param {Array<string>} keywords - The new keywords.
   * @returns {Promise<Discovery>} The updated discovery object.
   */
  async setPrimaryCategoryId(primaryCategoryId) {
    return await this.edit({primaryCategoryId});
  }
}

module.exports = GuildDiscovery;
