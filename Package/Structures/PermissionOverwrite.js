const {OverwriteType} = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
const Base = require("../Base/base");
/**
 * It's a class that represents a permission overwrite for a channel
 * @class PermissionOverwrite
 * @extends Base
 */
class PermissionOverwrite extends Base {
  /**
   * It's a constructor for a class called Overwrite.
   * @param [data] - The data that was received from the API.
   * @param channelId - The ID of the channel this overwrite is for.
   * @param client - Discord.Client
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
   * It deletes a permission overwrite from a channel
   * @param reason - The reason for the deletion.
   * @returns The return value is a Promise that resolves with a Collection&lt;Snowflake,
   * PermissionOverwrite&gt;.
   */
  async delete(reason) {
    return this.client.channels._add(this.channelId)?.permissionOverwrites?.delete(this.id, reason);
  }

  /**
   * It returns the channel object of the channel ID that is stored in the message object
   * @returns The channel object.
   */
  get channel() {
    return this.client.channels._add(this.channelId);
  }
}

module.exports = PermissionOverwrite;
