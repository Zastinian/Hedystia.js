const {RaidenCol} = require("../../Util/@Collections/RaidenCol");
const Base = require("../../Base/base");
const SlashOption = require("./SlashOption");
/* It creates a new SlashCommand object, and if the data object is not empty, it sets the name,
description, and options properties to the values in the data object */
class SlashSubCommand extends Base {
  /**
   * It creates a new SlashCommand object, and if the data object is not empty, it sets the name,
   * description, and options properties to the values in the data object
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client object.
   */
  constructor(data = {}, client) {
    super(client);
    this.type = "Sub_Command";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.options = new RaidenCol(data.options?.map((o) => [o.name, new SlashOption(o, this.client)]));
  }
}

module.exports = SlashSubCommand;
