const MessageReaction = require("../Structures/MessageReaction");
const BaseAction = require("./BaseAction");
class MessageReactionAdd extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  async _patch(data) {
    const packet = data.d;
    const channel = this.client.channels._add(
      packet.channel_id,
      packet.guild_id
    );
    const guild = this.client.guilds._add(packet.guild_id);
    const user = this.client.users._add(packet.user_id);

    if (channel.isText()) {
      let message = channel.messages._add(packet.message_id);
      if (this.client.partials?.includes("MESSAGE"))
        message = await message.fetch({ cache: true, force: true });
      const reaction = new MessageReaction(
        packet,
        packet.guild_id,
        packet.channel_id,
        packet.message_id,
        this.client
      );
      reaction._addUsers(user);
      if (!message.partial)
        message.reactions.reactions.set(
          reaction.emoji?.id ?? reaction.emoji?.name,
          reaction
        );
      return this.client.emit(
        "MensajeReaccionAñadida",
        user ?? guild.members._add(packet.member),
        reaction
      );
    }
  }
}

module.exports = MessageReactionAdd;
