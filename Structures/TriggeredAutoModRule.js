const {GuildAutoModTriggerTypes} = require("../Util/Constants");
const Base = require("../Base/base");
const GuildAutoModActions = require("./GuildAutoModActions");
class TriggeredAutoModRule extends Base {
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

  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  get channel() {
    return this.client.channels._add(this.channelId);
  }

  get user() {
    return this.client.users._add(this.userId);
  }

  get message() {
    return this.channel.messages._add(this.messageId);
  }

  async fetch(options = {}) {
    return await this.guild.automod.fetch(this.ruleId, options);
  }

  async edit(options = {}) {
    return await this.guild.automod.edit(this.ruleId, options);
  }

  async delete(reason) {
    return await this.guild.automod.delete(this.ruleId, reason);
  }

  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  async setEventType(eventType, reason) {
    return await this.edit({eventType, reason});
  }

  async setTriggerMetadata(triggerMetadata, reason) {
    return await this.edit({triggerMetadata, reason});
  }

  async setActions(actions, reason) {
    return await this.edit({actions, reason});
  }

  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason});
  }

  async setExemptRoles(exemptRoles, reason) {
    return await this.edit({exemptRoles, reason});
  }

  async setExemptChannels(exemptChannels, reason) {
    return await this.edit({exemptChannels, reason});
  }
}

module.exports = TriggeredAutoModRule;
