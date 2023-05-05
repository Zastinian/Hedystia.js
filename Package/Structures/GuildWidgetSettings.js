const Base = require("../Base/base");
/**
 * It's a class that represents the settings of a guild's widget
 * @class
 * @extends Base
 */
class GuildWidgetSettings extends Base {
  /**
   * This function is a constructor that takes in data, guildId, and client as parameters and sets the
   * values of the properties of the class to the values of the parameters.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the settings are for.
   * @param client - The client that the command is being run on.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.enabled = data.enabled ?? null;
    this.channelId = data.channel_id ?? null;
  }

  /**
   * It edits the widget of the guild
   * @param [options] - Object
   * @returns The return value is a Promise that resolves to the edited widget.
   */
  async edit(options = {}) {
    return await this.guild?.widgets.edit(options);
  }

  /**
   * `setEnabled` is an async function that takes two parameters, `enabled` and `reason`, and returns the
   * result of calling `edit` with an object containing the `enabled` and `reason` parameters.
   * `CommandoCommand`.
   * @param enabled - Whether the command should be enabled or not.
   * @param reason - The reason for the action
   * @returns The return value of the edit function.
   */
  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason});
  }

  /**
   * It edits the channel of the voice connection
   * @param channel - The channel to move the member to, can be a voice channel or a category.
   * @param reason - The reason for the edit.
   * @returns The channel that the message was sent in.
   */
  async setChannel(channel, reason) {
    return await this.edit({channel, reason});
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It returns the channel object of the message
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }
}

module.exports = GuildWidgetSettings;
