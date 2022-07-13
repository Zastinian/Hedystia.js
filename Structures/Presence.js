const Base = require("../Base/base");
const Activity = require("./Activity");
class Presence extends Base {
  constructor(data = {}, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.user = this.client.users._add(data.user);
    this.status = data.status ?? null;
    this.activities = data.activities?.map((o) => new Activity(o, this.client));
    this.clientStatus = data.client_status
      ? {
          desktop: data.client_status.desktop,
          mobile: data.client_status.mobile,
          web: data.client_status.web,
        }
      : null;
  }
}

module.exports = Presence;
