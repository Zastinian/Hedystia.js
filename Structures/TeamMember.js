const {MemberShipState} = require("../Util/Constants")
const Base = require("../Base/base")
class TeamMember extends Base {
  constructor(data = {}, client) {
    super(client)
    this.state =
      (typeof data.membership_state === "number"
        ? MemberShipState[data.membership_state]
        : data.membership_state) ?? null
    this.permissions = data.permissions ?? undefined
    this.teamId = data.team_id ?? null
    this.user = this.client.users._add(data.user, {force: true, cache: false}) ?? null
  }
}

module.exports = TeamMember
