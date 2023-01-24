const {ComponentType} = require("../Util/Constants");
const MessageComponentInteraction = require("./MessageComponentInteraction");
class ModalInteraction extends MessageComponentInteraction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.componentType = "INPUT_TEXT";
    this.fields = data.data.components?.map((o) => ModalInteraction.transformResolvedFields(o));
  }

  getTextInput(customId, required = false) {
    const modal = this.data.components?.find((o) => o.components.find((o) => o.custom_id === customId));
    if (modal) {
      if (modal.components[0].type !== 4)
        throw new RangeError(`Selected Modal type is not Text_Input. Received=${ComponentType[modal.components[0].type]}`);
      return modal.components[0].value ?? null;
    }

    if (required) throw new RangeError(`The required module was not found`);
    return null;
  }

  getSelect(customId, required = false) {
    const modal = this.data.components?.find((o) => o.components.find((o) => o.custom_id === customId));
    if (modal) {
      if (modal.components[0].type !== 3)
        throw new RangeError(`Mode type selected is not String_Select. Received=${ComponentType[modal.components[0].type]}`);
      return modal.components[0].values ?? null;
    }

    if (required) throw new RangeError(`The required module was not found`);
    return null;
  }

  static transformResolvedFields(fields = {}) {
    return {
      type: typeof fields.type === "number" ? ComponentType[fields.type] : fields.type ?? undefined,
      components: fields.components?.map((o) => {
        return {
          values: o.values,
          type: typeof o.type === "number" ? ComponentType[o.type] : o.type,
          customId: o.customId ?? o.custom_id,
          value: o.value,
        };
      }),
    };
  }
}

module.exports = ModalInteraction;
