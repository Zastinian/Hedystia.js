const { RaidenCol } = require("../../Util/@Collections/RaidenCol");
const Base = require("../../Base/base");
const SlashOption = require("./SlashOption");
class SlashSubCommand extends Base {
  constructor(data = {}, client) {
    super(client);
    this.type = "SUB_COMMAND";
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.options = new RaidenCol(
      data.options?.map((o) => [o.name, new SlashOption(o, this.client)])
    );
  }
}

module.exports = SlashSubCommand;
