const {RaidenCol} = require("../../Util/@Collections/RaidenCol");
const Base = require("../../Base/base");
const SlashSubCommand = require("./SlashSubCommand");
/**
 * Represents a sub-command group for a slash command.
 * @class
 * @extends Base
 * @param {Object} [data] - The data for the sub-command group.
 * @param {Client} client - The client object.
 */
class SlashSubCommandGroups extends Base {
  /**
   * Constructs a new instance of the Sub_Command_Group class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the group.
   * @param {Client} client - The client object.
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
