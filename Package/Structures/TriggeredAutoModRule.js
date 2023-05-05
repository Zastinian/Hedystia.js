const {GuildAutoModTriggerTypes} = require("../Util/Constants");
const Base = require("../Base/base");
const GuildAutoModActions = require("./GuildAutoModActions");
/**
 * It's a class that represents a triggered automod rule.
 * @class
 * @extends Base
 */
class TriggeredAutoModRule extends Base {
  /**
   * "This function is used to create a new instance of the GuildAutoModRule class, which is used to
   * represent a rule that is used to automatically moderate a guild."
   * @param [data] - The data that is passed in from the API.
   * @param guildId - The ID of the guild the alert is for.
   * @param client - Discord.Client
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
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  get user() {
    return this.client.users._add(this.userId);
  }

  /**
   * It returns a message object from the messageId
   * @returns The message object.
   */
  get message() {
    return this.channel.messages._add(this.messageId);
  }

  /**
   * It fetches the rule from the database
   * @param [options] - Object
   * @returns The rule object.
   */
  async fetch(options = {}) {
    return await this.guild.automod.fetch(this.ruleId, options);
  }

  /**
   * It edits a rule in the guild's automod
   * @param [options] - Object
   * @returns The return value is the edited rule.
   */
  async edit(options = {}) {
    return await this.guild.automod.edit(this.ruleId, options);
  }

  /**
   * It deletes a rule from the database
   * @param reason - The reason for the deletion.
   * @returns The return value of the delete method.
   */
  async delete(reason) {
    return await this.guild.automod.delete(this.ruleId, reason);
  }

  /**
   * It edits the name of the channel
   * @param name - The new name of the channel.
   * @param reason - The reason for the edit.
   * @returns The name of the channel.
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * It returns a promise that resolves to the result of calling the edit function with the eventType
   * and reason parameters.
   * @param eventType - The event type to set.
   * @param reason - The reason for the event.
   * @returns The return value of the edit function.
   */
  async setEventType(eventType, reason) {
    return await this.edit({eventType, reason});
  }

  /**
   * It sets the triggerMetadata property of the current object to the value of the triggerMetadata
   * parameter
   * @param triggerMetadata - The metadata of the trigger.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  async setTriggerMetadata(triggerMetadata, reason) {
    return await this.edit({triggerMetadata, reason});
  }

  /**
   * It edits the message with the given actions and reason
   * @param actions - An array of actions to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setActions(actions, reason) {
    return await this.edit({actions, reason});
  }

  /**
   * This function sets the enabled property of the command to the value of the enabled parameter, and
   * the reason property of the command to the value of the reason parameter.
   * @param enabled - Boolean - Whether the command should be enabled or disabled.
   * @param reason - The reason for the change (0-1024 characters).
   * @returns The return value of the edit function.
   */
  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason});
  }

  /**
   * It sets the exempt roles of a role
   * @param exemptRoles - An array of role IDs that are exempt from the filter.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  async setExemptRoles(exemptRoles, reason) {
    return await this.edit({exemptRoles, reason});
  }

  /**
   * It edits the channel overwrites for a role
   * @param exemptChannels - An array of channel IDs that are exempt from the filter.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  async setExemptChannels(exemptChannels, reason) {
    return await this.edit({exemptChannels, reason});
  }
}

module.exports = TriggeredAutoModRule;
