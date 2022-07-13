const { ApplicationCommandTypes } = require("../../Util/Constants");
const Base = require("../../Base/base");
const SlashOption = require("./SlashOption");
class Slash extends Base {
  constructor(data = {}, client) {
    super(client);
    this.type =
      typeof data.type === "number"
        ? ApplicationCommandTypes[data.type]
        : data.type;
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.options = data.options?.map((o) => new SlashOption(o));
    this.defaultPermission = data.default_permission ?? true;
  }
}

module.exports = Slash;
