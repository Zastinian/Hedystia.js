const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const TextBasedChannels = require("./Interface/TextBasedChannels");
/**
 * Represents a direct message channel in Discord.
 * @class
 * @extends TextBasedChannels
 * @param {Object} [data] - The data for the DM channel.
 * @param {string|null} [guildId=null] - The ID of the guild that the DM channel belongs to.
 * @param {Client} client - The client that instantiated this DM channel.
 */
class DMChannel extends TextBasedChannels {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string|null} [guildId=null] - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data = {}, guildId = null, client) {
    super(data, guildId, client);

    this.recipients = new RaidenCol(data.recipients?.map((o) => [o.id, this.client.users._add(o)]));
  }
}

module.exports = DMChannel;
