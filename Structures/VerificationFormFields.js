const Base = require("../Base/base")
class VerificationFormFields extends Base {
  constructor(data = {}, client) {
    super(client)
    this.description = data.description ?? null
    this.fieldType = data.field_type ?? null
    this.label = data.label ?? null
    this.required = data.required ?? null
    this.values = data.values ?? []
  }
}

module.exports = VerificationFormFields
