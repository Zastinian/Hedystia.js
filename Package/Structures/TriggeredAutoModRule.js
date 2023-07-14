const {GuildAutoModTriggerTypes} = require("../Util/Constants");
const Base = require("../Base/base");
const GuildAutoModActions = require("./GuildAutoModActions");
/**
 * Represents a triggered auto moderation rule.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the triggered auto moderation rule.
 * @param {string} guildId - The ID of the guild that the rule belongs to.
 * @param {Client} client - The client instance.
 */
class TriggeredAutoModRule extends Base {
  /**
   * Constructs a GuildAutoModRule object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the rule.
   * @param {string} guildId - The ID of the guild the rule belongs to.
   * @param {Client} client - The Discord client object.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.ruleId = data.rule_id ?? null;
    this.guildId = data.guild_id ?? guildId ?? null;
    this.ruleTriggerType =
      (typeof data.rule_trigger_type === "number" ? GuildAutoModTriggerTypes[data.rule_trigger_type] : data.rule_trigger_type) ?? null;
    this.action = new GuildAutoModActions(data.action);
    this.userId = data.user_id ?? null;
    this.channelId = data.channel_id ?? null;
    this.messageId = data.message_id ?? null;
    this.alertSystemMessageId = data.alert_system_message_id ?? null;
    this.content = data.content ?? null;
    this.matchedKeyword = data.matched_keyword ?? null;
    this.matchedContent = data.matched_content ?? null;
  }

  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * Retrieves the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }

  /**
   * Get the user object associated with this instance.
   * @returns The user object.
   */
  get user() {
    return this.client.users._add(this.userId);
  }

  /**
   * Retrieves the message from the channel using the specified message ID.
   * @returns The retrieved message object.
   */
  get message() {
    return this.channel.messages._add(this.messageId);
  }

  /**
   * Fetches the automod rule with the specified ruleId from the guild.
   * @param {object} options - Optional parameters for the fetch request.
   * @returns {Promise} A promise that resolves to the fetched automod rule.
   */
  async fetch(options = {}) {
    return await this.guild.automod.fetch(this.ruleId, options);
  }

  /**
   * Edits the automod rule with the specified options.
   * @param {Object} options - The options to update the automod rule.
   * @returns {Promise} A promise that resolves when the automod rule has been successfully edited.
   */
  async edit(options = {}) {
    return await this.guild.automod.edit(this.ruleId, options);
  }

  /**
   * Deletes the automod rule with the specified reason.
   * @param {string} reason - The reason for deleting the rule.
   * @returns {Promise<void>} - A promise that resolves when the rule is successfully deleted.
   */
  async delete(reason) {
    return await this.guild.automod.delete(this.ruleId, reason);
  }

  /**
   * Sets the name and reason for an object.
   * @param {string} name - The new name to set.
   * @param {string} reason - The reason for setting the new name.
   * @returns {Promise} - A promise that resolves when the name and reason are successfully set.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the event type and reason for the current object.
   * @param {string} eventType - The type of event to set.
   * @param {string} reason - The reason for the event.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  async setEventType(eventType, reason) {
    return await this.edit({eventType, reason});
  }

  /**
   * Sets the trigger metadata for the current object and updates it with the given reason.
   * @param {any} triggerMetadata - The new trigger metadata to set.
   * @param {string} reason - The reason for updating the trigger metadata.
   * @returns {Promise<void>} - A promise that resolves when the trigger metadata is successfully set.
   */
  async setTriggerMetadata(triggerMetadata, reason) {
    return await this.edit({triggerMetadata, reason});
  }

  /**
   * Sets the actions and reason for editing a resource.
   * @param {any} actions - The actions to be set.
   * @param {string} reason - The reason for the edit.
   * @returns {Promise<any>} - A promise that resolves to the result of the edit operation.
   */
  async setActions(actions, reason) {
    return await this.edit({actions, reason});
  }

  /**
   * Sets the enabled status of an item and provides a reason for the change.
   * @param {boolean} enabled - The new enabled status of the item.
   * @param {string} reason - The reason for the change in enabled status.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason});
  }

  /**
   * Sets the exempt roles for a certain action and provides a reason for the change.
   * @param {Array} exemptRoles - The roles that are exempt from the action.
   * @param {string} reason - The reason for setting the exempt roles.
   * @returns {Promise} - A promise that resolves when the exempt roles are successfully set.
   */
  async setExemptRoles(exemptRoles, reason) {
    return await this.edit({exemptRoles, reason});
  }

  /**
   * Sets the exempt channels for a specific action and provides a reason.
   * @param {Array} exemptChannels - The channels to exempt from the action.
   * @param {string} reason - The reason for setting the exempt channels.
   * @returns {Promise} - A promise that resolves when the exempt channels are set.
   */
  async setExemptChannels(exemptChannels, reason) {
    return await this.edit({exemptChannels, reason});
  }
}

module.exports = TriggeredAutoModRule;
