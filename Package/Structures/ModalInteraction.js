const {ComponentType} = require("../Util/Constants");
const MessageComponentInteraction = require("./MessageComponentInteraction");
/**
 * It's a class that allows you to get the values of a modal
 * @class
 * @extends MessageComponentInteraction
 */
class ModalInteraction extends MessageComponentInteraction {
  /**
   * It takes a JSON object, and returns a new object with the same properties, but with the values
   * transformed.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The guild ID of the guild the modal is being sent to.
   * @param client - Discord.Client
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.componentType = "Input_Text";
    this.fields = data.data.components?.map((o) => ModalInteraction.transformResolvedFields(o));
  }

  /**
   * Returns the value of a text input component with the specified custom ID, if it exists.
   * @param {string} customId - The custom ID of the text input component to retrieve the value from.
   * @param {boolean} [required=false] - Whether the text input component is required or not.
   * @returns {string|null} The value of the text input component, or null if it does not exist and is not required.
   * @throws {RangeError} If the text input component is required and cannot be found, or if the component found is not of type "Input_Text".
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
   * It takes a customId and returns the values of the first component in the module with that
   * customId.
   * @param customId - The custom id of the module you want to get the select from.
   * @param [required=false] - boolean - If the module is required, it will throw an error if it is not
   * found.
   * @returns The return value is a string.
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
   * It takes an object with a property called "type" and a property called "components" and returns an
   * object with a property called "type" and a property called "components"
   * @param [fields]
   * @returns An object with the following properties:
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
