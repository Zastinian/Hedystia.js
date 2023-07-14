const {OverwriteType} = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
const Base = require("../Base/base");
/**
 * Represents a permission overwrite for a channel in Discord.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the permission overwrite.
 * @param {string} channelId - The ID of the channel that the permission overwrite belongs to.
 * @param {Client} client - The client instance.
 */
class PermissionOverwrite extends Base {
  /**
   * Constructs a new instance of the Overwrite class.
   * @constructor
   * @param {Object} [data] - The data object containing the overwrite information.
   * @param {string} channelId - The ID of the channel that the overwrite belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, channelId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.channelId = channelId;
    this.id = data.id ?? null;
    this.type = (typeof data.type === "number" ? OverwriteType[data.type] : data.type) ?? null;
    this.allow = new Permissions(data.allow ? BigInt(data.allow) : 0n);
    this.deny = new Permissions(data.deny ? BigInt(data.deny) : 0n);
  }

  /**
   * Deletes the permission overwrite for this channel.
   * @param {string} reason - The reason for deleting the permission overwrite.
   * @returns {Promise<boolean>} - A promise that resolves to true if the deletion was successful, or false otherwise.
   */
  async delete(reason) {
    return this.client.channels._add(this.channelId)?.permissionOverwrites?.delete(this.id, reason);
  }

  /**
   * Retrieves the channel object associated with this instance.
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }
}

module.exports = PermissionOverwrite;
