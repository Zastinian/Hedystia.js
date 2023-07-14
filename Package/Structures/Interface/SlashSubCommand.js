const {RaidenCol} = require("../../Util/@Collections/RaidenCol");
const Base = require("../../Base/base");
const SlashOption = require("./SlashOption");
/**
 * Represents a sub-command for a slash command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the sub-command.
 * @param {Client} client - The client object.
 * @property {string} type - The type of the sub-command.
 * @property {string | undefined} name - The name of the sub-command.
 * @property {string | undefined} description - The description of the sub-command.
 * @property {RaidenCol} options - The options for the sub-command.
 */
class SlashSubCommand extends Base {
  /**
   * Constructs a new Sub_Command object.
   * @constructor
   * @param {Object} [data] - The data object containing the properties of the Sub_Command.
   * @param {Client} client - The client object.
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
