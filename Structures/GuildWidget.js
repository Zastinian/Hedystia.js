const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Base = require("../Base/base");
/**
 * It's a class that represents a guild widget
 * @class
 * @extends Base
 */
class GuildWidget extends Base {
  /**
   * It takes in a data object, a guild id, and a client, and then it sets the id, name, instantInvite,
   * channels, members, and presenceCount properties of the class to the values of the data object, the
   * guild id, and the client
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild
   * @param client - The client
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.id = data.id ?? guildId ?? null;
    this.name = data.name ?? null;
    this.instantInvite = data.instant_invite ?? null;
    this.channels = new RaidenCol(data.channels?.map((o) => [o.id, this.client.channels._add(o, this.id)]));
    this.members = new RaidenCol(data.members?.map((o) => [o.id, this.client.users._add(o)]));
    this.presenceCount = data.presence_count ?? null;
  }

  /**
   * It fetches the settings of the widget
   * @returns The settings of the widget.
   */
  async fetchSettings() {
    return await this.guild?.widgets.fetchSettings();
  }

  /**
   * It adds the guild to the cache if it's not already there, and then returns the guild
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.id) ?? null;
  }
}

module.exports = GuildWidget;
