/**
 * The class "Base" has a constructor that sets a "client" property.
 * @class
 */
class Base {
  /**
   * This is a constructor function that sets the "client" property of an object to a given value.
   * @param client - The "client" parameter is an object that is being passed into the constructor
   * function. It is likely that this object represents a client or connection to some external service
   * or resource that the class will interact with. The constructor function is using the
   * Object.defineProperty method to define a property called "client" on the
   */
  constructor(client) {
    Object.defineProperty(this, "client", {value: client});
  }
}

module.exports = Base;
