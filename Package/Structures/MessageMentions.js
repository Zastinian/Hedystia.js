const Base = require("../Base/base");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
/**
 * Represents a message mention object.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the message mention object.
 * @param {string} guildId - The ID of the guild the mention is in.
 * @param {Client} client - The client instance.
 */
class MessageMentions extends Base {
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
    this.users = new RaidenCol(data.mentions?.map((o) => [o.id, this.client.users._add(o, {cache: false})]));
    this.members = new RaidenCol(
      data.mentions?.map((o) => [o.id, o.member ? this.guild?.members._add(Object.assign(o.member, {id: o.id}), this.guildId, {cache: false}) : []])
    );
    this.roles = new RaidenCol(data.roles?.map((o) => [o, this.client.roles._add(o, this.guildId, {cache: false})]));
    this.channels = new RaidenCol(
      data.channels
        ?.map((o) => {
          const id = o.replace(/[^\d+]/gi, "");
          const channel = this.client.channels.cache.get(id);
          if (channel) return [id, channel];
          return;
        })
        .filter((item) => item)
    );
    this.everyone = data.everyone ?? null;
  }

  /**
   * Get the guild object associated with this guildId.
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = MessageMentions;
