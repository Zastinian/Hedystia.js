const GuildMemberVerification = require("../Structures/GuildMemberVerification");
const Base = require("../Base/base");
/**
 * Represents a manager for guild member verification settings.
 * @class
 * @extends Base
 * @param {string} guildId - The ID of the guild.
 * @param {Client} client - The client instance.
 */
class GuildMemberVerificationManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * Fetches the member verification information for a guild.
   * @param {Object} [options] - The options for the fetch request.
   * @param {boolean} [options.withGuild] - Whether to include guild information in the response.
   * @param {string | { code: string }} [options.inviteCode] - The invite code or object containing the invite code.
   * @returns {Promise<GuildMemberVerification>} - A promise that resolves with the fetched GuildMemberVerification object.
   */
  async fetch(options = {}) {
    const query = {
      with_guild: options.withGuild ?? undefined,
      invite_code: typeof options.inviteCode === "string" ? options.inviteCode : options.inviteCode?.code ?? undefined,
    };

    const memberVerification = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/member-verification`, {query});
    return new GuildMemberVerification(memberVerification, this.guildId, this.client);
  }

  /**
   * Edits the member verification settings for the guild.
   * @param {Object} [options] - The options for the member verification settings.
   * @param {boolean} [options.enabled] - Whether member verification is enabled or not.
   * @param {Array<Object>} [options.fields] - An array of form field objects for member verification.
   * @param {string} [options.description] - The description for the member verification form.
   * @returns {Promise<GuildMemberVerification>} A promise that resolves with the updated GuildMemberVerification object.
   */
  async edit(options = {}) {
    const body = {
      enabled: options.enabled ?? undefined,
      form_fields: options.fields?.map((o) => GuildMemberVerificationManager.createFormFields(o)),
      description: options.description ?? undefined,
    };
    const formFields = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/member-verification`, {body});
    return new GuildMemberVerification(formFields, this.guildId, this.client);
  }

  /**
   * Creates a form field object with the given fields.
   * @param {Object} fields - The fields to include in the form field object.
   * @returns {Object} - The created form field object.
   */
  static createFormFields(fields = {}) {
    return {
      field_type: fields.fieldType ?? fields.field_type ?? fields.type ?? "TERMS",
      label: fields.label ?? undefined,
      required: fields.required ?? undefined,
      values: fields.values ?? undefined,
      choices: fields.choices ?? undefined,
    };
  }
}

module.exports = GuildMemberVerificationManager;
