const { OverwriteType } = require("../Util/Constants");
const Permissions = require("../Util/Permissions");
const Base = require("../Base/base");
class PermissionOverwrite extends Base {
  constructor(data = {}, channelId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.channelId = channelId;
    this.id = data.id ?? null;
    this.type =
      (typeof data.type === "number" ? OverwriteType[data.type] : data.type) ??
      null;
    this.allow = new Permissions(data.allow ? BigInt(data.allow) : 0n);
    this.deny = new Permissions(data.deny ? BigInt(data.deny) : 0n);
  }

  async delete(reason) {
    return this.client.channels
      ._add(this.channelId)
      ?.permissionOverwrites?.delete(this.id, reason);
  }

  get channel() {
    return this.client.channels._add(this.channelId);
  }
}

module.exports = PermissionOverwrite;
