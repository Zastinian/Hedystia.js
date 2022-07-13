const Interaction = require("./Interaction");
class AutocompleteInteraction extends Interaction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  getFocused() {
    const options = this.data.options?.find((o) => o.focused);
    if (!options.value) return null;
    if (!options) return null;
    return options.value;
  }

  async respond(choices) {
    const parse = choices?.map((o) =>
      AutocompleteInteraction.transformChoices(o)
    );
    return await this.client.api.post(
      `${this.client.root}/interactions/${this.id}/${this.token}/callback`,
      {
        body: {
          type: 8,
          data: {
            choices: parse,
          },
        },
      }
    );
  }

  static transformChoices(choices = {}) {
    if (choices.name?.length < 1 || choices.name?.length > 100)
      throw new RangeError(
        `Excedió la longitud del nombre de las opciones o no puso ninguna`
      );
    return {
      name: choices.name ?? undefined,
      value: choices.value ?? undefined,
    };
  }
}

module.exports = AutocompleteInteraction;
