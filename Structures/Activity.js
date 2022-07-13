const ActivityFlags = require("../Util/ActivityFlags");
const { ActivityType } = require("../Util/Constants");
const Base = require("../Base/base");
class Activity extends Base {
  constructor(data = {}, client) {
    super(client);
    this.name = data.name ?? undefined;
    this.type =
      (typeof data.type === "number" ? ActivityType[data.type] : data.type) ??
      undefined;
    this.url = data.url ?? undefined;
    this.createdAt = data.created_at ? new Date(data.created_at) : undefined;
    this.createdTimestamp = this.createdAt?.getTime() ?? undefined;
    this.timestamps =
      "timestamps" in data
        ? {
            startTimestamp: data.timestamps?.start,
            endTimestamp: data.timestamps?.end,
          }
        : undefined;
    this.applicationId = data.application_id ?? undefined;
    this.details = data.details ?? undefined;
    this.state = data.state ?? undefined;
    this.emoji =
      "emoji" in data
        ? {
            name: data.emoji.name,
            id: data.emoji.id,
            animated: data.emoji.animated,
          }
        : undefined;
    this.party =
      "party" in data
        ? {
            id: data.party.id,
            size: data.party.size,
          }
        : undefined;
    this.assets =
      "assets" in data
        ? {
            largeImage: data.assets.large_image,
            largeText: data.assets.large_text,
            smallImage: data.assets.small_iamge,
            smallText: data.assets.small_text,
          }
        : undefined;
    this.secrets =
      "secrets" in data
        ? {
            join: data.secrets.join,
            spectate: data.secrets.spectate,
            match: data.secrets.match,
          }
        : undefined;
    this.instance = data.instance ?? undefined;
    this.flags = new ActivityFlags(data.flags ? BigInt(data.flags) : 0n);
    this.buttons = data.buttons ?? [];
  }

  toJSON() {
    return {
      name: this.name,
      url: this.url,
      type: ActivityType[this.type],
    };
  }
}

module.exports = Activity;
