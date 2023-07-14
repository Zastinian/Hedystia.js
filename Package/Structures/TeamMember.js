const {MemberShipState} = require("../Util/Constants");
const Base = require("../Base/base");
/**
 * Represents a team member.
 * @class
 * @extends Base
 * @param {Object} [data] - The data object containing information about the team member.
 * @param {Client} client - The client object.
 * @property {MembershipState|null} state - The membership state of the team member.
 * @property {Object|undefined} permissions - The permissions of the team member.
 * @property {string|null} teamId - The ID of the team that the member belongs to.
 * @property {User|null} user - The user object representing the team member.
 */
class TeamMember extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, client) {
    super(client);
    this.state = (typeof data.membership_state === "number" ? MemberShipState[data.membership_state] : data.membership_state) ?? null;
    this.permissions = data.permissions ?? undefined;
    this.teamId = data.team_id ?? null;
    this.user = this.client.users._add(data.user, {force: true, cache: false}) ?? null;
  }
}

module.exports = TeamMember;
