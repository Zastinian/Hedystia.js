/**
 * A class representing fields for guild member verification.
 * @class
 */
class GuildMemberVerificationFields {
  /**
   * Constructs a new GuildMemberVerificationFields object.
   * @param {Object} data - An object containing the data for the verification fields.
   * @param {boolean} data.enabled - Whether or not the verification fields are enabled.
   * @param {string} data.description - A description of the verification fields.
   * @param {Array} data.fields - An array of objects representing the individual verification fields.
   */
  constructor(data = {}) {
    this.enabled = data.enabled ?? undefined;
    this.description = data.description ?? undefined;
    this.fields = data.fields?.map((o) => GuildMemberVerificationFields.transformFields(o)) ?? [];
  }

  /**
   * Sets whether or not the verification fields are enabled.
   * @param {boolean} enabled - Whether or not the verification fields are enabled.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }

  /**
   * Sets the description of the verification fields.
   * @param {string} description - A description of the verification fields.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * Sets the verification fields.
   * @param  {...Object} fields - One or more objects representing the individual verification fields.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  setFields(...fields) {
    if (Array.isArray(fields[0])) {
      this.fields = fields[0]?.map((o) => GuildMemberVerificationFields.transformFields(o));
    } else {
      this.fields = fields?.map((o) => GuildMemberVerificationFields.transformFields(o));
    }

    return this;
  }

  /**
   * Adds one or more verification fields.
   * @param  {...Object} fields - One or more objects representing the individual verification fields.
   * @returns {GuildMemberVerificationFields} The GuildMemberVerificationFields object.
   */
  addFields(...fields) {
    if (Array.isArray(fields[0])) {
      fields[0]?.map((o) => this.fields.push(GuildMemberVerificationFields.transformFields(o)));
    } else {
      fields?.map((o) => this.fields.push(GuildMemberVerificationFields.transformFields(o)));
    }

    return this;
  }

  /**
   * Transforms an object representing a verification field into the required format.
   * @param {Object} fields - An object representing a verification field.
   * @returns {Object} An object representing the verification field in the required format.
   */
  static transformFields(fields = {}) {
    return {
      field_type: fields.type ?? "TERMS",
      label: fields.label ?? undefined,
      description: fields.description ?? undefined,
      required: fields.required ?? undefined,
      values: fields.values ?? undefined,
      choices: fields.choices ?? undefined,
    };
  }

  /**
   * Returns the verification fields as a JSON object.
   * @returns {Object} The verification fields as a JSON object.
   */
  toJSON() {
    return {
      enabled: this.enabled,
      description: this.description,
      form_fields: this.fields,
    };
  }
}

module.exports = GuildMemberVerificationFields;
