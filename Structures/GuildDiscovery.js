const Base = require("../Base/base");
const {GuildPrimaryCategory} = require("../Util/Constants");

class GuildDiscovery extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.about = data.about ?? null;
    this.guildId = guildId;
    this.categoryIds = data.category_ids ?? null;
    this.emojiDiscoverabilityEnabled = data.emoji_discoverability_enabled ?? null;
    this.published = data.is_published ?? null;
    this.keywords = data.keywords ?? null;
    this.partnerActionedAt = data.partner_actioned_timestamp ? new Date(data.partner_actioned_timestamp) : null;
    this.partnerActionedTimestamp = this.partnerActionedAt?.getTime() ?? null;
    this.partnerApplicationAt = data.partner_application_timestamp ? new Date(data.partner_application_timestamp) : null;
    this.partnerApplicationTimestamp = this.partnerApplicationAt?.getTime() ?? null;
    this.primaryCategoryId =
      (typeof data.primary_category_id === "number" ? GuildPrimaryCategory[data.primary_category_id] : data.primary_category_id) ?? null;
    this.reasonsToJoin = data.reasons_to_join ?? null;
    this.socialLinks = data.social_link ?? null;
  }

  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  async fetch() {
    return await this.guild?.discovery.fetch();
  }

  async edit(options = {}) {
    return await this.guild?.discovery.edit(this.guildId, options);
  }

  async setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled) {
    return await this.edit({emojiDiscoverabilityEnabled});
  }

  async setPublished(published) {
    return await this.edit({published});
  }

  async setAbout(about) {
    return await this.edit({about});
  }

  async setReasonsToJoin(reasonsToJoin) {
    return await this.edit({reasonsToJoin});
  }

  async setKeywords(keywords) {
    return await this.edit({keywords});
  }

  async setPrimaryCategoryId(primaryCategoryId) {
    return await this.edit({primaryCategoryId});
  }
}

module.exports = GuildDiscovery;
