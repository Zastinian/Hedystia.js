const Interaction = require("./Interaction");
/* It's a class that allows you to create an autocomplete interaction */
class AutocompleteInteraction extends Interaction {
  /**
   * It's a constructor for the class.
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the role is in
   * @param client - The client that the command is being run from
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  /**
   * If the data.options array has a focused property, then return the value of that property.
   *
   * If it doesn't, then return null.
   * @returns The value of the focused option.
   */
  getFocused() {
    const options = this.data.options?.find((o) => o.focused);
    if (!options.value) return null;
    if (!options) return null;
    return options.value;
  }

  /**
   * It sends a response to the interaction.
   * @param choices - An array of objects with the following properties:
   * @returns The response from the API.
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
   * It takes an object with a name and value property and returns an object with a name and value
   * property
   * @param [choices]
   * @returns The transformed choices object.
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
