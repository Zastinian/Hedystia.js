const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const TeamMember = require("./TeamMember");
/**
 * It's a class that represents a team in the Discord API
 * @class
 * @extends Base
 */
class Team extends Base {
  /**
   * It's a constructor for a class that extends another class
   * @param [data] - The data that was passed to the constructor
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, client) {
    super(client);

    this.icon = data?.icon ?? undefined;
    this.id = data?.id ?? undefined;
    this.members = new RaidenCol(data?.members?.map((o) => [o.team_id, new TeamMember(o, this.client)]));
    this.createdAt = this.id ? Snowflake.deconstruct(this.id).createdAt : undefined;
    this.createdTimestamp = this.createdAt?.getTime() ?? undefined;
    this.name = data?.name ?? undefined;
    this.ownerUserId = this.client.users._add(data?.owner_user_id);
  }

  /**
   * "If the team has an icon, return the icon URL, otherwise return null."
   *
   * The function takes an optional parameter, options, which is an object
   * @param [options] - Object
   * @returns The URL of the team icon.
   */
  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.TeamIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }
}

module.exports = Team;
