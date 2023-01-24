const {RaidenCol} = require("../../Util/@Collections/RaidenCol");
const Base = require("../../Base/base");
const SlashSubCommand = require("./SlashSubCommand");
/* It's a collection of SlashSubCommand objects */
class SlashSubCommandGroups extends Base {
  /**
   * It creates a new SlashSubCommandGroup object, which is a collection of SlashSubCommand objects
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client that the command is being registered to.
   */
  constructor(data = {}, client) {
    super(client);
    this.type = "Sub_Command_Group";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.options = new RaidenCol(data.options?.map((o) => [o.name, new SlashSubCommand(o)]));
  }
}

module.exports = SlashSubCommandGroups;
