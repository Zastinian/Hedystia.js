const {GuildAutoModTriggerTypes, GuildAutoModEventTypes, GuildAutoModPresetTypes} = require("../Util/Constants");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const GuildAutoModActions = require("./GuildAutoModActions");
/**
 * Represents an auto-mod configuration for a guild.
 * @extends Base
 */
class GuildAutoMod extends Base {
  /**
   * @param {Object} data The data for the auto-mod configuration
   * @param {Snowflake} guildId The ID of the guild the auto-mod is for
   * @param {Client} client The client instance
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.id = data.id ?? null;
    this.guildId = data.guild_id ?? guildId;
    this.creatorId = data.creator_id ?? null;
    this.name = data.name ?? null;
    this.eventType = (typeof data.event_type === "number" ? GuildAutoModEventTypes[data.event_type] : data.event_type) ?? null;
    this.triggerType = (typeof data.trigger_type === "number" ? GuildAutoModTriggerTypes[data.trigger_type] : data.trigger_type) ?? null;
    this.triggerMetadata = data.trigger_metadata
      ? {
          keywordFilter: data.trigger_metadata.keyword_filter,
          presets: data.trigger_metadata.presets?.map((o) => {
            return typeof o === "number" ? GuildAutoModPresetTypes[o] : o;
          }),
          allowList: data.trigger_metadata.allow_list,
        }
      : null;
    this.createdAt = data.id ? Snowflake.deconstruct(data.id).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.actions = data.actions?.map((o) => new GuildAutoModActions(o, this.client));
    this.enabled = data.enabled ?? null;
    this.exemptRoles = data.exempt_roles ?? null;
    this.exemptChannels = data.exempt_channels ?? null;
  }

  /**
   * The guild associated with this GuildAutoMod.
   * @type {?Guild}
   * @readonly
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * The user who created this GuildAutoMod.
   * @type {?User}
   * @readonly
   */
  get creator() {
    return this.client.users._add(this.creatorId);
  }

  /**
   * Fetches the GuildAutoMod's data from Discord.
   * @async
   * @param {Object} [options] - Additional options for the API request.
   * @returns {Promise<GuildAutoMod>}
   */
  async fetch(options = {}) {
    return await this.guild.automod.fetch(this, options);
  }

  /**
   * Edits the GuildAutoMod.
   * @async
   * @param {Object} [options] - The options to edit the GuildAutoMod with.
   * @returns {Promise<GuildAutoMod>}
   */
  async edit(options = {}) {
    return await this.guild.automod.edit(this, options);
  }

  /**
   * Deletes the GuildAutoMod.
   * @async
   * @param {string} [reason] - Reason for deleting the GuildAutoMod.
   * @returns {Promise<void>}
   */
  async delete(reason) {
    return await this.guild.automod.delete(this, reason);
  }

  /**
   * Sets the name of the GuildAutoMod.
   * @async
   * @param {string} name - The new name for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the name.
   * @returns {Promise<GuildAutoMod>}
   */
  async setName(name, reason) {
    return await this.edit({name, reason});
  }

  /**
   * Sets the event type of the GuildAutoMod.
   * @async
   * @param {string|number} eventType - The new event type for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the event type.
   * @returns {Promise<GuildAutoMod>}
   */
  async setEventType(eventType, reason) {
    return await this.edit({eventType, reason});
  }

  /**
   * Sets the trigger metadata of the GuildAutoMod.
   * @async
   * @param {Object} triggerMetadata - The new trigger metadata for the GuildAutoMod.
   * @param {string[]} triggerMetadata.keywordFilter - The keyword filter to apply.
   * @param {string[]|number[]} triggerMetadata.presets - The presets to apply.
   * @param {string[]} triggerMetadata.allowList - The allow list to apply.
   * @param {string} [reason] - Reason for changing the trigger metadata.
   * @returns {Promise<GuildAutoMod>}
   */
  async setTriggerMetadata(triggerMetadata, reason) {
    return await this.edit({triggerMetadata, reason});
  }

  /**
   * Sets the actions of the GuildAutoMod.
   * @async
   * @param {Array<Object>} actions - The new actions for the GuildAutoMod.
   * @param {string} [reason] - Reason for changing the actions.
   * @returns {Promise<GuildAutoMod>}
   */
  async setActions(actions, reason) {
    return await this.edit({actions, reason});
  }

  /**
   * Enables or disables the feature.
   * @async
   * @function setEnabled
   * @param {boolean} enabled - Indicates whether the feature should be enabled or disabled.
   * @param {string} reason - The reason for enabling or disabling the feature.
   * @returns {Promise} A promise that resolves with the result of the edit operation.
   */
  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason});
  }

  /**
   * Sets the roles that are exempt from the feature.
   * @async
   * @function setExemptRoles
   * @param {Array<string>} exemptRoles - An array of role IDs that should be exempt from the feature.
   * @param {string} reason - The reason for setting the exempt roles.
   * @returns {Promise} A promise that resolves with the result of the edit operation.
   */
  async setExemptRoles(exemptRoles, reason) {
    return await this.edit({exemptRoles, reason});
  }

  /**
   * Sets the channels that are exempt from the feature.
   * @async
   * @function setExemptChannels
   * @param {Array<string>} exemptChannels - An array of channel IDs that should be exempt from the feature.
   * @param {string} reason - The reason for setting the exempt channels.
   * @returns {Promise} A promise that resolves with the result of the edit operation.
   */
  async setExemptChannels(exemptChannels, reason) {
    return await this.edit({exemptChannels, reason});
  }
}

module.exports = GuildAutoMod;
