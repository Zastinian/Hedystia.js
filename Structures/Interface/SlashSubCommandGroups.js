const { RaidenCol } = require("../../Util/@Collections/RaidenCol");
const Base = require("../../Base/base");
const SlashSubCommand = require("./SlashSubCommand");
class SlashSubCommandGroups extends Base {
  constructor(data = {}, client) {
    super(client);
    this.type = "SUB_COMMAND_GROUP";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.options = new RaidenCol(
      data.options?.map((o) => [o.name, new SlashSubCommand(o)])
    );
  }
}

module.exports = SlashSubCommandGroups;
