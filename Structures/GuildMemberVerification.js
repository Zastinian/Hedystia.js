const Base = require("../Base/base")
const VerificationFormFields = require("./VerificationFormFields")
class GuildMemberVerification extends Base {
  constructor(data = {}, guildId, client) {
    super(client)
    this.version = data.version ? new Date(data.version) : null
    this.description = data.description ?? null
    this.enabled = data.enabled ?? null
    this.guildId = guildId
    this.fields = data.form_fields?.map((o) => new VerificationFormFields(o, this.client)) ?? []
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null
  }

  async fetch(options = {}) {
    return await this.guild?.memberVerification.fetch(options)
  }

  async edit(options = {}) {
    return await this.guild?.memberVerification.edit(options)
  }

  async setEnabled(enabled, reason) {
    return await this.edit({enabled, reason})
  }

  async setDescription(description, reason) {
    return await this.edit({description, reason})
  }

  async addFields(fields = []) {
    if (fields.length <= 0) throw new RangeError(`Por favor, especifique un campo de formulario`)
    fields.map((o) => this.fields.push(GuildMemberVerification.transformoptions(o)))
    return await this.edit({fields: this.fields})
  }

  async removeFields() {
    if (this.fields.length <= 0) throw new RangeError(`This Form has no fields`)
    this.fields = []
    return await this.edit({fields: this.fields})
  }

  static transformoptions(fields = {}) {
    return {
      type: fields.type ?? "TERMS",
      label: fields.label ?? undefined,
      required: fields.required ?? undefined,
      values: fields.values ?? undefined,
      choices: fields.choices ?? undefined,
    }
  }
}

module.exports = GuildMemberVerification
