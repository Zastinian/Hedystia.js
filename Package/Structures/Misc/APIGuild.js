const {RaidenCol} = require("../../Util/@Collections/RaidenCol");
const {VerificationLevel, DefaultMessageNotifications, ExplicitContentFilter} = require("../../Util/Constants");
const SystemChannelFlags = require("../../Util/SystemChannelFlags");
const Base = require("../../Base/base");
/**
 * Represents a guild in the API.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing guild information.
 * @param {Client} client - The client instance.
 * @property {string | null} name - The name of the guild.
 * @property {string | null} description - The description of the guild.
 * @property {string | null} region - The region of the guild.
 * @property {VerificationLevel | null} verificationLevel - The verification level of the guild.
 * @property {DefaultMessageNotifications | null} defaultMessageNotifications - The default message notifications setting of the guild.
 * @property {ExplicitContentFilter | null} explicitContentFilter
 */
class APIGuild extends Base {
  /**
   * It takes in a data object and a client, and then sets the properties of the class to the values of
   * the data object
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
   */
  constructor(data = {}, client) {
    super(client);
    this.name = data.name ?? null;
    this.description = data.description ?? null;
    this.region = data.region ?? null;
    this.verificationlevel =
      (typeof data.verification_level === "number" ? VerificationLevel[data.verification_level] : data.verification_level) ?? null;
    this.defaultMessageNotifications =
      (typeof data.default_message_notifications === "number"
        ? DefaultMessageNotifications[data.default_message_notifications]
        : data.default_message_notifications) ?? null;
    this.explicitContentFilter =
      (typeof data.explicit_content_filter === "number" ? ExplicitContentFilter[data.explicit_content_filter] : data.explicit_content_filter) ?? null;
    this.preferredLocale = data.preferred_locale ?? null;
    this.afkTimeout = data.afk_timeout ?? null;
    this.roles = new RaidenCol(data.roles?.map((o) => [o.id, this.client.roles._add(o, null, {cache: false})]));
    this.channels = new RaidenCol(data.channels?.map((o) => [o.id, this.client.channels._add(o, null, {cache: false})]));
    this.afkChannelId = data.afk_channel_id;
    this.systemChannelId = data.system_channel_id;
    this.systemChannelFlags = new SystemChannelFlags(data.system_channel_flags ? BigInt(data.system_channel_flags) : 0n);
  }
}

module.exports = APIGuild;
