const {ApplicationCommandTypes} = require("../Util/Constants");
const CommandInteractionOptionResolver = require("./CommandInteractionOptionResolver");
const Interaction = require("./Interaction");
/* It's a class that extends another class and has a constructor that takes in a data object, a
guildId, and a client */
class ApplicationCommandInteraction extends Interaction {
  /**
   * It's a constructor for a class that extends another class.
   * </code>
   * @param [data] - The data from the API
   * @param guildId - The guild ID
   * @param client - Discord.Client
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.commandId = data.data?.id ?? null;
    this.commandName = data.data?.name ?? null;
    this.commandType = (typeof data.data?.type === "number" ? ApplicationCommandTypes[data.data.type] : data.data.type) ?? null;
    this.options = new CommandInteractionOptionResolver(data.data, this.guildId, this.channelId, this.client);
  }
}

module.exports = ApplicationCommandInteraction;
