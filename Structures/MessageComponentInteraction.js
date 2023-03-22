const {ComponentType} = require("../Util/Constants");
const MessagePayload = require("../Util/MessagePayload");
const Interaction = require("./Interaction");
/**
 * It's a class that represents a message interaction
 * @class
 * @extends Interaction
 */
class MessageComponentInteraction extends Interaction {
  /**
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the message is in
   * @param client - Discord.Client
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);

    this.componentType =
      (typeof data.data?.component_type === "number" ? ComponentType[data.data.component_type] : data.data.component_type) ?? "Action_Row";
    this.customId = data.data.custom_id ?? null;
    this.message = this.channel.messages?._add(data.message, this.guildId, this.channelId);
  }

  /**
   * It takes an object as an argument, creates a new MessagePayload object with the options and a 6,
   * then posts to the API with the body of the MessagePayload object.
   * @param [options] - Object
   * @returns The response from the API.
   */
  async deferUpdate(options = {}) {
    const body = await MessagePayload.create(options, 6);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  /**
   * It updates the message with the given options and returns the reply if fetchReply is true
   * @param [options] - Object
   * @returns The return value is the result of the await expression.
   */
  async update(options = {}) {
    const body = await MessagePayload.create(options, 7);
    await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {body});
    if (options.fetchReply) return await this.fetchReply();
    return null;
  }
}

module.exports = MessageComponentInteraction;
