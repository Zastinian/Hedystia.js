/**
 * Represents a base class with a client property.
 * @class
 * @param {object} client - The client object.
 */
class Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} client - The client object to be assigned to the "client" property.
   */
  constructor(client) {
    Object.defineProperty(this, "client", {value: client});
  }
}

module.exports = Base;
