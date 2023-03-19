const Base = require("../Base/base");
class VoiceRegion extends Base {
  constructor(data = {}, client) {
    super(client);
    this.id = data.id ?? null;
    this.name = data.name ?? null;
    this.optimal = data.optimal ?? null;
    this.deprecated = data.deprecated ?? null;
    this.custom = data.custom ?? null;
  }
}

module.exports = VoiceRegion;
