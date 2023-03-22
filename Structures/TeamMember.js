const {MemberShipState} = require("../Util/Constants");
const Base = require("../Base/base");
/**
 * It's a class that represents a team member
 * @class
 * @extends Base
 */
class TeamMember extends Base {
  /**
   * It's a constructor for a class that takes in a data object and a client object, and sets the
   * state, permissions, teamId, and user properties of the class to the values of the state,
   * permissions, teamId, and user properties of the data object, respectively
   * @param [data] - The data that was received from the API.
   * @param client - The client that instantiated the object.
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
