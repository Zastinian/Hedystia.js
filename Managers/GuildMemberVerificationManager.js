const GuildMemberVerification = require("../Structures/GuildMemberVerification");
const Base = require("../Base/base");
class GuildMemberVerificationManager extends Base {
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  async fetch(options = {}) {
    const query = {
      with_guild: options.withGuild ?? undefined,
      invite_code:
        typeof options.inviteCode === "string"
          ? options.inviteCode
          : options.inviteCode?.code ?? undefined,
    };

    const memberVerification = await this.client.api.get(
      `${this.client.root}/guilds/${this.guildId}/member-verification`,
      { query }
    );
    return new GuildMemberVerification(
      memberVerification,
      this.guildId,
      this.client
    );
  }

  async edit(options = {}) {
    const body = {
      enabled: options.enabled ?? undefined,
      form_fields: options.fields?.map((o) =>
        GuildMemberVerificationManager.createFormFields(o)
      ),
      description: options.description ?? undefined,
    };
    const formFields = await this.client.api.patch(
      `${this.client.root}/guilds/${this.guildId}/member-verification`,
      { body }
    );
    return new GuildMemberVerification(formFields, this.guildId, this.client);
  }

  static createFormFields(fields = {}) {
    return {
      field_type:
        fields.fieldType ?? fields.field_type ?? fields.type ?? "TERMS",
      label: fields.label ?? undefined,
      required: fields.required ?? undefined,
      values: fields.values ?? undefined,
      choices: fields.choices ?? undefined,
    };
  }
}

module.exports = GuildMemberVerificationManager;
