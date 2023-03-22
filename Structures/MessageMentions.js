const Base = require("../Base/base");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
/**
 * It's a class that stores mentions in a message
 * @class
 * @extends Base
 */
class MessageMentions extends Base {
  /**
   * It takes in a data object, a guildId, and a client, and then it sets the guildId, users, members,
   * roles, channels, and everyone properties of the object
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The guild id
   * @param client - The client
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.guildId = guildId;
    this.users = new RaidenCol(data.mentions?.map((o) => [o.id, this.client.users._add(o, {cache: false})]));
    this.members = new RaidenCol(
      data.mentions?.map((o) => [o.id, this.guild?.members._add(Object.assign(o.member, {id: o.id}), this.guildId, {cache: false})])
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
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }
}

module.exports = MessageMentions;
