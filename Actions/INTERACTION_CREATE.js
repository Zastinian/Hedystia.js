const ApplicationCommandInteraction = require("../Structures/ApplicationCommandInteraction");
const AutocompleteInteraction = require("../Structures/AutocompleteInteraction");
const ButtonInteraction = require("../Structures/ButtonInteraction");
const CommandInteraction = require("../Structures/CommandInteraction");
const ContextMessageInteraction = require("../Structures/ContextMessageInteraction");
const ContextUserInteraction = require("../Structures/ContextUserInteraction");
const Interaction = require("../Structures/Interaction");
const MessageComponentInteraction = require("../Structures/MessageComponentInteraction");
const ModalInteraction = require("../Structures/ModalInteraction");
const SelectMenuInteraction = require("../Structures/SelectMenuInteraction");
const BaseAction = require("./BaseAction");
class InteractionCreate extends BaseAction {
  constructor(data, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    let Interactions;
    switch (packet.type) {
      case 2:
        switch (packet.data.type) {
          case 1:
            Interactions = CommandInteraction;
            break;
          case 2:
            Interactions = ContextUserInteraction;
            break;
          case 3:
            Interactions = ContextMessageInteraction;
            break;
          default:
            Interactions = ApplicationCommandInteraction;
            break;
        }
        break;
      case 3:
        switch (packet.data.component_type) {
          case 2:
            Interactions = ButtonInteraction;
            break;
          case 3:
            Interactions = SelectMenuInteraction;
            break;
          default:
            Interactions = MessageComponentInteraction;
            break;
        }
        break;
      case 4:
        Interactions = AutocompleteInteraction;
        break;
      case 5:
        Interactions = ModalInteraction;
        break;
      default:
        Interactions = Interaction;
    }

    this.cacheMembers(packet.member, packet.guild_id, {cache: true, force: true});
    return this.client.emit("interactionCreate", new Interactions(packet, packet.guild_id, this.client));
  }

  cacheMembers(member, guildId) {
    if (!guildId) return;
    const members = this.client.guilds._add(guildId)?.members;
    members.cache.clear();
    return members._add(member, guildId, {force: true, cache: true});
  }
}

module.exports = InteractionCreate;
