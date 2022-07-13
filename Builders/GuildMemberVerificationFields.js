class GuildMemberVerificationFields {
  constructor(data = {}) {
    this.enabled = data.enabled ?? undefined;
    this.description = data.description ?? undefined;
    this.fields =
      data.fields?.map((o) =>
        GuildMemberVerificationFields.transformFields(o)
      ) ?? [];
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setFields(...fields) {
    if (Array.isArray(fields[0])) {
      this.fields = fields[0]?.map((o) =>
        GuildMemberVerificationFields.transformFields(o)
      );
    } else {
      this.fields = fields?.map((o) =>
        GuildMemberVerificationFields.transformFields(o)
      );
    }

    return this;
  }

  addFields(...fields) {
    if (Array.isArray(fields[0])) {
      fields[0]?.map((o) =>
        this.fields.push(GuildMemberVerificationFields.transformFields(o))
      );
    } else {
      fields?.map((o) =>
        this.fields.push(GuildMemberVerificationFields.transformFields(o))
      );
    }

    return this;
  }

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

  toJSON() {
    return {
      enabled: this.enabled,
      description: this.description,
      form_fields: this.fields,
    };
  }
}

module.exports = GuildMemberVerificationFields;
