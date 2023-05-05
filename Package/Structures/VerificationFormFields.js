const Base = require("../Base/base");
/**
 * This class is used to create a new verification form field
 * @class
 * @extends Base
 */
class VerificationFormFields extends Base {
  /**
   * The above function is a constructor function that takes in two parameters, data and client, and
   * returns an object with the properties description, fieldType, label, required, and values.
   * @param [data] - The data that is passed to the constructor.
   * @param client - The client that instantiated the object.
   */
  constructor(data = {}, client) {
    super(client);
    this.description = data.description ?? null;
    this.fieldType = data.field_type ?? null;
    this.label = data.label ?? null;
    this.required = data.required ?? null;
    this.values = data.values ?? [];
  }
}

module.exports = VerificationFormFields;
