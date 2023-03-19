const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const Snowflake = require("../Util/Snowflake");
const Base = require("../Base/base");
const TeamMember = require("./TeamMember");
class Team extends Base {
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

  iconURL(options = {}) {
    if (!this.icon) return null;
    return this.client.cdn.TeamIcon(this.icon, options.dynamic, options.size, options.format, this.id);
  }
}

module.exports = Team;
