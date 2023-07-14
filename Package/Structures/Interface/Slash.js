const {ApplicationCommandTypes} = require("../../Util/Constants");
const Base = require("../../Base/base");
const SlashOption = require("./SlashOption");
/**
 * Represents a Slash command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the Slash command.
 * @param {Client} client - The client object.
 * @property {string} type - The type of the Slash command.
 * @property {string} name - The name of the Slash command.
 * @property {string} description - The description of the Slash command.
 * @property {Array<SlashOption>} options - The options of the Slash command.
 * @property {boolean} defaultMemberPermissions - The default member permissions of the Slash command.
 */
class Slash extends Base {
  /**
   * Constructs a new instance of the ApplicationCommand class
   * @constructor.
   * @param {Object} [data] - The data object containing the command information.
   * @param {Client} client - The client object.
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
