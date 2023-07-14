const Interaction = require("./Interaction");
/**
 * Represents an interaction with an autocomplete component.
 * @class
 * @extends Interaction
 */
class AutocompleteInteraction extends Interaction {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Object} [data] - The data object to initialize the instance with.
   * @param {string} guildId - The ID of the guild associated with the instance.
   * @param {Client} client - The client instance associated with the instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * Retrieves the focused option from the data object.
   * @returns The value of the focused option, or null if no option is focused or if the value is not available.
   */
  getFocused() {
    const options = this.data.options?.find((o) => o.focused);
    if (!options.value) return null;
    if (!options) return null;
    return options.value;
  }

  /**
   * Sends a response to an autocomplete interaction with the provided choices.
   * @param {Array} choices - An array of choices for the autocomplete interaction.
   * @returns {Promise} A promise that resolves when the response is sent.
   */
  async respond(choices) {
    const parse = choices?.map((o) => AutocompleteInteraction.transformChoices(o));
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body: {
        type: 8,
        data: {
          choices: parse,
        },
      },
    });
  }

  /**
   * Transforms the given choices object into a new object with the name and value properties.
   * @param {Object} choices - The choices object to transform.
   * @returns {Object} - The transformed choices object with name and value properties.
   * @throws {RangeError} - If the length of the name property is less than 1 or greater than 100.
   */
  static transformChoices(choices = {}) {
    if (choices.name?.length < 1 || choices.name?.length > 100)
      throw new RangeError(`Exceeded the length of the name of the options or did not put any`);
    return {
      name: choices.name ?? undefined,
      value: choices.value ?? undefined,
    };
  }
}

module.exports = AutocompleteInteraction;
