const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
const WelcomeScreenChannel = require("./WelcomeScreenChannel");
/**
 * Represents a welcome screen for a guild.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the welcome screen.
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class WelcomeScreen extends Base {
  /**
   * Constructs a new instance of the WelcomeScreen class.
   * @constructor
   * @param {Object} [data] - The data object containing the welcome screen information.
   * @param {string} guildId - The ID of the guild the welcome screen belongs to.
   * @param {Client} client - The Discord client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);

    this.description = data.description ?? null;
    this.guildId = guildId;
    this.channels = new RaidenCol(data.welcome_channels?.map((o) => [o.channel_id, new WelcomeScreenChannel(o, this.guildId, this.client)]));
  }

  /**
   * Edits the welcome screen of the guild with the provided options.
   * @param {Object} options - The options to update the welcome screen with.
   * @returns {Promise} A promise that resolves when the welcome screen is successfully edited.
   */
  async edit(options = {}) {
    return await this.guild.welcomeScreen.edit(options);
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
   * Sets the welcome channels for a specific entity.
   * @param {Array} channels - The channels to set as welcome channels.
   * @param {string} reason - The reason for setting the welcome channels.
   * @returns {Promise} - A promise that resolves when the welcome channels are set.
   */
  async setWelcomeChannels(channels, reason) {
    return await this.edit({channels, reason});
  }

  /**
   * Sets the description of an object and updates it with the provided reason.
   * @param {string} description - The new description to set.
   * @param {string} reason - The reason for updating the description.
   * @returns {Promise} - A promise that resolves when the description is successfully updated.
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }
}

module.exports = WelcomeScreen;
