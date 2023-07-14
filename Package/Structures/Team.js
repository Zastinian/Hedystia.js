const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const TeamMember = require("./TeamMember");
/**
 * Represents a team object.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing the team information.
 * @param {Client} client - The client object.
 * @property {string | undefined} icon - The icon of the team.
 * @property {string | undefined} id - The ID of the team.
 * @property {RaidenCol} members - A collection of team members.
 * @property {Date | undefined} createdAt - The creation date of the team.
 * @property {number | undefined} createdTimestamp - The timestamp of the team's creation date.
 * @property {string | undefined} name - The name of the team.
 */
class Team extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object associated with the instance.
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
   * Returns the URL of the icon for this team.
   * @param {Object} options - Optional parameters for customizing the icon URL.
   * @param {boolean} [options.dynamic] - Whether to use a dynamic icon.
   * @param {number} [options.size] - The desired size of the icon.
   * @param {string} [options.format] - The desired format of the icon.
   * @returns {string | null} The URL of the team's icon, or null if no icon is available.
   */
  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.TeamIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }
}

module.exports = Team;
