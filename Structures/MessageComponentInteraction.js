const { ComponentType } = require("../Util/Constants");
const MessagePayload = require("../Util/MessagePayload");
const Interaction = require("./Interaction");
class MessageComponentInteraction extends Interaction {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);

    this.componentType =
      (typeof data.data?.component_type === "number"
        ? ComponentType[data.data.component_type]
        : data.data.component_type) ?? "ACTION_ROW";
    this.customId = data.data.custom_id ?? null;
    this.message = this.channel.messages?._add(
      data.message,
      this.guildId,
      this.channelId
    );
  }

  async deferUpdate(options = {}) {
    const body = await MessagePayload.create(options, 6);
    return await this.client.api.post(
      `${this.client.root}/interactions/${this.id}/${this.token}/callback`,
      { body }
    );
  }

  async update(options = {}) {
    const body = await MessagePayload.create(options, 7);
    await this.client.api.post(
      `${this.client.root}/interactions/${this.id}/${this.token}/callback`,
      { body }
    );
    if (options.fetchReply) return await this.fetchReply();
    return null;
  }
}

module.exports = MessageComponentInteraction;
