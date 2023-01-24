const BaseAction = require("./BaseAction");
const MessageReaction = require("../Structures/MessageReaction");
class MessageReactionRemove extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  async _patch(data) {
    const packet = data.d;
    const channel = this.client.channels._add(packet.channel_id);
    if (channel.isText()) {
      let message = channel.messages._add(packet.message_id);
      if (this.client.partials.includes("Message")) message = await message.fetch({force: true, cache: true});
      const reaction = new MessageReaction(packet, packet.guild_id, packet.channel_id, packet.message_id, this.client);
      reaction._removeUsers(this.client.users._add(packet.user_id));
      this.client.emit("messageReactionRemove", this.client.users._add(packet.user_id), reaction);
      return message.reactions.reactions.delete(reaction.emoji?.id ?? reaction.emoji?.name);
    }
  }
}

module.exports = MessageReactionRemove;
