const BaseGuildChannel = require("./BaseGuildChannel");
class TextChannel extends BaseGuildChannel {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }
}

module.exports = TextChannel;
