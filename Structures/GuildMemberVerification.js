const Base = require("../Base/base");
const VerificationFormFields = require("./VerificationFormFields");

/**
 * Represents the verification requirements for a guild member.
 * @class
 * @extends Base
 */
class GuildMemberVerification extends Base {
  /**
   * @param {Object} data - The data for the verification.
   * @param {string} guildId - The ID of the guild the verification is for.
   * @param {Client} client - The client that instantiated this object.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    this.version = data.version ? new Date(data.version) : null;
    this.description = data.description ?? null;
    this.enabled = data.enabled ?? null;
    this.guildId = guildId;
    this.fields = data.form_fields?.map((o) => new VerificationFormFields(o, this.client)) ?? [];
  }

  /**
   * The guild the verification is for.
   * @type {?Guild}
   * @readonly
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Fetches this verification's settings.
   * @param {BaseFetchOptions} [options] - Additional options for the fetch.
   * @returns {Promise<GuildMemberVerification>}
   */
  async fetch(options = {}) {
    return await this.guild?.memberVerification.fetch(options);
  }

  /**
   * Edits this verification's settings.
   * @param {GuildMemberVerificationEditOptions} [options] - The options to edit the verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  async edit(options = {}) {
    return await this.guild?.memberVerification.edit(options);
  }

  /**
   * Sets whether this verification is enabled.
   * @param {boolean} enabled - Whether the verification is enabled.
   * @param {string} [reason] - The reason for the change.
   * @returns {Promise<GuildMemberVerification>}
   */
  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason});
  }

  /**
   * Sets the description for this verification.
   * @param {string} description - The new description for the verification.
   * @param {string} [reason] - The reason for the change.
   * @returns {Promise<GuildMemberVerification>}
   */
  async setDescription(description, reason) {
    return await this.edit({description, reason});
  }

  /**
   * Adds new fields to this verification.
   * @param {VerificationFormFields[]} fields - The fields to add to the verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  async addFields(fields = []) {
    if (fields.length <= 0) throw new RangeError(`Please specify a form field`);
    fields.map((o) => this.fields.push(GuildMemberVerification.transformoptions(o)));
    return await this.edit({fields: this.fields});
  }

  /**
   * Removes all fields from this verification.
   * @returns {Promise<GuildMemberVerification>}
   */
  async removeFields() {
    if (this.fields.length <= 0) throw new RangeError(`This Form has no fields`);
    this.fields = [];
    return await this.edit({fields: this.fields});
  }

  /**
   * Transforms options for a verification form field.
   * @param {Object} fields - The fields to transform.
   * @param {string} fields.type - The type of the form field.
   * @param {string} fields.label - The label for the form field.
   * @param {boolean} fields.required - Whether the field is required or not.
   * @param {Array} fields.values - The values for the field.
   * @param {Array} fields.choices - The choices for the field.
   * @returns {Object} The transformed form fields.
   */
  static transformoptions(fields = {}) {
    return {
      type: fields.type ?? "TERMS",
      label: fields.label ?? undefined,
      required: fields.required ?? undefined,
      values: fields.values ?? undefined,
      choices: fields.choices ?? undefined,
    };
  }
}

module.exports = GuildMemberVerification;
