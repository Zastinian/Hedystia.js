const GuildMemberVerification = require("../Structures/GuildMemberVerification");
const Base = require("../Base/base");
/* This class is used to manage the member verification settings of a guild */
class GuildMemberVerificationManager extends Base {
  /**
   * `constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
   * assigns them to the `guildId` and `client` properties of the class.
   * @param guildId - The ID of the guild you want to get the settings for.
   * @param client - The client that the command is being run on.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * `fetch` fetches the guild's member verification settings
   * @param [options] - Object
   * @returns A new GuildMemberVerification object
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
   * It edits the verification form
   * @param [options] - Object
   * @returns A new GuildMemberVerification object
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
   * It takes an object with any of the following keys: `fieldType`, `field_type`, `type`, `label`,
   * `required`, `values`, `choices` and returns an object with the following keys: `field_type`,
   * `label`, `required`, `values`, `choices`
   * @param [fields] - The fields object that is passed in from the form.
   * @returns An object with the following properties:
   *   field_type: The type of field.
   *   label: The label of the field.
   *   required: Whether or not the field is required.
   *   values: The values of the field.
   *   choices: The choices of the field.
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
