const Base = require("../Base/base");
/**
 * Represents the settings for a guild widget.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the guild widget settings.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildWidgetSettings extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the initial values.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.enabled = data.enabled ?? null;
    this.channelId = data.channel_id ?? null;
  }

  /**
   * Edits the guild's widget with the given options.
   * @param {Object} options - The options to edit the widget with.
   * @returns {Promise} A promise that resolves when the widget is successfully edited.
   */
  async edit(options = {}) {
    return await this.guild?.widgets.edit(options);
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
   * Sets the channel for the current object and updates it with the given reason.
   * @param {Channel} channel - The channel to set.
   * @param {string} reason - The reason for setting the channel.
   * @returns {Promise<void>} - A promise that resolves when the channel is successfully set.
   */
  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Retrieves the channel object associated with this instance.
   * @returns {Channel | null} The channel object, or null if it does not exist.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }
}

module.exports = GuildWidgetSettings;
