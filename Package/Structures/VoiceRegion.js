const Base = require("../Base/base");
/**
 * Represents a voice region.
 * @class
 * @extends Base
 */
class VoiceRegion extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
   */
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
