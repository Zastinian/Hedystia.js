const Base = require("../Base/base");
/**
 * It's a class that represents a Discord voice region
 * @class
 * @extends Base
 */
class VoiceRegion extends Base {
  /**
   * It's a constructor function that takes in data and a client, and then sets the data to the class
   * properties
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client that instantiated the object.
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
