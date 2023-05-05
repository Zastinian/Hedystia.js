const {ApplicationCommandTypes} = require("../../Util/Constants");
const Base = require("../../Base/base");
const SlashOption = require("./SlashOption");
/* It's a class that represents a slash command */
class Slash extends Base {
  /**
   * It takes in a data object and a client object, and then it sets the type, name, description,
   * options, and defaultPermission properties of the class to the values of the data object's type,
   * name, description, options, and defaultPermission properties, respectively
   * @param [data] - The data object that is returned from the API.
   * @param client - The client instance.
   */
  constructor(data = {}, client) {
    super(client);
    this.type = typeof data.type === "number" ? ApplicationCommandTypes[data.type] : data.type;
    this.name = data.name ?? undefined;
    this.description = data.description ?? undefined;
    this.options = data.options?.map((o) => new SlashOption(o));
    this.defaultMemberPermissions = data.default_member_permissions ?? true;
  }
}

module.exports = Slash;
