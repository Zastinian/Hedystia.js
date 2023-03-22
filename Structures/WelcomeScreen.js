const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
const WelcomeScreenChannel = require("./WelcomeScreenChannel");
/**
 * It's a class that represents a welcome screen for a guild
 * @class
 * @extends Base
 */
class WelcomeScreen extends Base {
  /**
   * It's a constructor for a class that takes in a data object, a guildId, and a client
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild
   * @param client - The client
   */
  constructor(data = {}, guildId, client) {
    super(client);

    this.description = data.description ?? null;
    this.guildId = guildId;
    this.channels = new RaidenCol(data.welcome_channels?.map((o) => [o.channel_id, new WelcomeScreenChannel(o, this.guildId, this.client)]));
  }

  /**
   * It edits the welcome screen
   * @param [options] - Object
   * @returns The return value is the result of the edit function.
   */
  async edit(options = {}) {
    return await this.guild.welcomeScreen.edit(options);
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
   * It sets the welcome channels of the guild
   * @param channels - The channels to set the welcome channels to.
   * @param reason - The reason for the edit.
   * @returns The return value is the updated guild.
   */
  async setWelcomeChannels(channels, reason) {
    return await this.edit({channels, reason});
  }

  /**
   * It edits the description of the channel
   * @param description - The new description of the channel.
   * @param reason - The reason for the edit.
   * @returns The description of the channel.
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }
}

module.exports = WelcomeScreen;
