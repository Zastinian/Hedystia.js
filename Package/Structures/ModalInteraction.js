const {ComponentType} = require("../Util/Constants");
const MessageComponentInteraction = require("./MessageComponentInteraction");
/**
 * Represents a modal interaction, extending the MessageComponentInteraction class.
 * @class
 * @extends MessageComponentInteraction
 * @constructor
 * @param {Object} [data] - The data object for the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance.
 */
class ModalInteraction extends MessageComponentInteraction {
  /**
   * Constructs a new instance of the Input_Text component.
   * @constructor
   * @param {Object} [data] - The data object for the component.
   * @param {string} guildId - The ID of the guild.
   * @param {Client} client - The client object.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.componentType = "Input_Text";
    this.fields = data.data.components?.map((o) => ModalInteraction.transformResolvedFields(o));
  }

  /**
   * Retrieves the value of a text input field with the specified custom ID.
   * @param {string} customId - The custom ID of the text input field.
   * @param {boolean} [required=false] - Indicates whether the text input field is required. If set to true and the field is not found, a RangeError will be thrown.
   * @returns {string|null} The value of the text input field, or null if the field is not found and not required.
   * @throws {RangeError} If the specified custom ID is not found or if the field is not of type "Input_Text".
   */
  getTextInput(customId, required = false) {
    const modal = this.fields?.find((o) => o.components.find((o) => o.customId === customId));
    if (modal) {
      if (modal.components[0].type !== "Input_Text")
        throw new RangeError(`Selected Modal type is not Text_Input. Received=${modal.components[0].type}`);
      return modal.components[0].value ?? null;
    }

    if (required) throw new RangeError(`The required module was not found`);
    return null;
  }

  /**
   * Retrieves the values of a Select component with the specified custom ID.
   * @param {string} customId - The custom ID of the Select component.
   * @param {boolean} [required=false] - Indicates whether the Select component is required.
   * @returns {string[] | null} - The values of the Select component, or null if not found and not required.
   * @throws {RangeError} - If the Select component is not found and is required, or if the mode type selected is not String_Select.
   */
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

  /**
   * Transforms the resolved fields object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.
   * Also, maps the "components" array and transforms each object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.
   * @param {Object} fields - The resolved fields object to transform.
   * @returns {Object} - The transformed fields object.
   */
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
