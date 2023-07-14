const Base = require("../Base/base");
/**
 * Represents a set of form fields for verification.
 * @class
 * @extends Base
 * @param {object} [data] - The data object containing the field properties.
 * @param {object} client - The client object used for making API requests.
 * @property {string|null} description - The description of the form field.
 * @property {string|null} fieldType - The type of the form field.
 * @property {string|null} label - The label of the form field.
 * @property {boolean|null} required - Indicates if the form field is required.
 * @property {Array} values - The values associated with the form field.
 */
class VerificationFormFields extends Base {
  /**
   * Constructs a new instance of a class.
   * @constructor
   * @param {Object} [data] - The data object containing the properties for the instance.
   * @param {Client} client - The client object.
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
