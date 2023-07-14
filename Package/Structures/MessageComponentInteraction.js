const {ComponentType} = require("../Util/Constants");
const MessagePayload = require("../Util/MessagePayload");
const Interaction = require("./Interaction");
/**
 * Represents a message component interaction.
 * @class
 * @extends Interaction
 */
class MessageComponentInteraction extends Interaction {
  /**
   * Constructs a new instance of the Component class.
   * @constructor
   * @param {Object} [data] - The data object containing component information.
   * @param {string} guildId - The ID of the guild the component belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);

    this.componentType =
      (typeof data.data?.component_type === "number" ? ComponentType[data.data.component_type] : data.data.component_type) ?? "Action_Row";
    this.customId = data.data.custom_id ?? null;
    this.message = this.channel.messages?._add(data.message, this.guildId, this.channelId);
  }

  /**
   * Defers the update of an interaction callback and sends a response to the interaction.
   * @param {Object} options - Additional options for the deferred update.
   * @returns {Promise} A promise that resolves when the update is deferred and the response is sent.
   */
  async deferUpdate(options = {}) {
    const body = await MessagePayload.create(options, 6);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  /**
   * Updates the interaction with the specified options.
   * @param {Object} [options] - The options to update the interaction.
   * @returns {Promise<null|Message>} - A promise that resolves to null or a Message object.
   * @throws {Error} - If there is an error while updating the interaction.
   */
  async update(options = {}) {
    const body = await MessagePayload.create(options, 7);
    await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {body});
    if (options.fetchReply) return await this.fetchReply();
    return null;
  }
}

module.exports = MessageComponentInteraction;
