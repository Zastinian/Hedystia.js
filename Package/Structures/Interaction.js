const Base = require("../Base/base");
const {InteractionType} = require("../Util/Constants");
const MessagePayload = require("../Util/MessagePayload");
const Permissions = require("../Util/Permissions");
const Snowflake = require("../Util/Snowflake");
/**
 * Represents an interaction with a user in a Discord server.
 * @class
 * @extends Base
 * @param {Object} data - The data object containing information about the interaction.
 * @param {string} guildId - The ID of the guild where the interaction occurred.
 * @param {Client} client - The client instance.
 */
class Interaction extends Base {
  /**
   * Constructs a new instance of the Interaction class.
   * @constructor
   * @param {Object} [data] - The data object containing information about the interaction.
   * @param {string} guildId - The ID of the guild the interaction belongs to.
   * @param {Client} client - The client instance.
   */
  constructor(data = {}, guildId, client) {
    super(client);
    Object.defineProperty(this, "_user", {
      value: data.user ?? data.member?.user,
    });
    this.type = (typeof data.type === "number" ? InteractionType[data.type] : data.type) ?? null;
    this.id = data.id ?? null;
    this.token = data.token ?? null;
    this.applicationId = data.application_id ?? null;
    this.channelId = data.channel_id ?? null;
    this.channel = this.client.channels._add(data.channel, this.guild?.id, {cache: false}) ?? null;
    this.locale = data.locale ?? null;
    this.guildLocale = data.guild_locale ?? null;
    this.version = data.version ?? null;
    this.guildId = guildId ?? null;
    this.member = this.guild?.members._add(data.member ?? data.user) ?? null;
    this.createdAt = data.id ? new Date(Snowflake.deconstruct(this.id).timestamp) : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.editedAt = data.edited_timestamp ? new Date(data.edited_timestamp) : null;
    this.editedTimestamp = this.editedAt?.getTime() ?? null;
    this.appPermissions = new Permissions(data.app_permissions ? BigInt(data.app_permissions) : 0n).freeze();
  }

  /**
   * Checks if the command type is a chat input.
   * @returns {boolean} - true if the command type is a chat input, false otherwise.
   */
  isChatInput() {
    if (["Chat_Input", 1].includes(this.commandType)) return true;
    return false;
  }

  /**
   * Checks if the current object is a command.
   * @returns {boolean} - true if the object is a command, false otherwise.
   */
  isCommand() {
    if (["Application_Command", 2].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the command type is "User" or 2.
   * @returns {boolean} - true if the command type is "User" or 2, false otherwise.
   */
  isUser() {
    if (["User", 2].includes(this.commandType)) return true;
    return false;
  }

  /**
   * Checks if the command type is "Message" or 3.
   * @returns {boolean} - true if the command type is "Message" or 3, false otherwise.
   */
  isMessage() {
    if (["Message", 3].includes(this.commandType)) return true;
    return false;
  }

  /**
   * Checks if the component type is a button.
   * @returns {boolean} - true if the component type is a button, false otherwise.
   */
  isButton() {
    if (["Button", 2].includes(this.componentType)) return true;
    return false;
  }

  /**
   * Checks if the current instance is a modal.
   * @returns {boolean} - Returns true if the instance is a modal, false otherwise.
   */
  isModal() {
    if (["Modal_Submit", 5].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the current object is an autocomplete.
   * @returns {boolean} - True if the object is an autocomplete, false otherwise.
   */
  isAutocomplete() {
    if (["Application_Command_Autocomplete", 4].includes(this.type)) return true;
    return false;
  }

  /**
   * Checks if the component type is a select menu.
   * @returns {boolean} - true if the component type is a select menu, false otherwise.
   */
  isSelect() {
    if (["Select_Menu", 3].includes(this.componentType)) return true;
    return false;
  }

  /**
   * Checks if the current context is valid for the given command type.
   * @returns {boolean} - true if the context is valid, false otherwise.
   */
  isContext() {
    if (["User", "Message", 2, 3].includes(this.commandType)) return true;
    return false;
  }

  /**
   * Checks if the current channel is a direct message (DM) channel.
   * @returns {boolean} - True if the channel is a DM channel, false otherwise.
   */
  isDM() {
    if (this.channel?.type === "Dm") return true;
    return false;
  }

  /**
   * Retrieves the value associated with the given name from the options list.
   * @param {string} name - The name of the option to retrieve the value for.
   * @returns The value associated with the given name.
   */
  getValue(name) {
    return this.options.options.filter((data) => data.name == name)[0].value;
  }

  /**
   * Fetches the reply message from the Discord API using the provided webhook information.
   * @returns {Promise<Message>} A promise that resolves to the fetched reply message.
   */
  async fetchReply() {
    const reply = await this.client.api.get(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`);
    return this.channel.messages._add(reply);
  }

  /**
   * Sends a reply to an interaction with the provided data.
   * @param {Object} data - The data to send as the reply.
   * @returns {Promise<Message|null>} - A promise that resolves to the sent message, or null if fetchReply is false.
   */
  async reply(data) {
    const body = await MessagePayload.create(data, 4);
    await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {body});

    if (data.fetchReply) return await this.fetchReply();
    return null;
  }

  /**
   * Sends a deferred reply to an interaction.
   * @param {Object} options - The options for creating the message payload.
   * @returns {Promise} A promise that resolves when the reply is sent.
   */
  async deferReply(options = {}) {
    const body = await MessagePayload.create(options, 5);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  /**
   * Submits a modal form by sending a POST request to the specified endpoint.
   * @param {Object} options - The options for the modal form submission.
   * @returns {Promise} A promise that resolves when the form submission is complete.
   */
  async modalSubmit(options = {}) {
    const body = await MessagePayload.create(options, 9);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  /**
   * Deletes the reply message associated with the current interaction.
   * @returns {Promise<Message>} A promise that resolves to the deleted message.
   */
  async deleteReply() {
    const message = await this.fetchReply();
    await this.client.api.delete(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`);
    return message;
  }

  /**
   * Edits the reply message of a webhook interaction.
   * @param {Object} options - The options for editing the reply message.
   * @returns {Promise<Message>} A promise that resolves with the edited message.
   */
  async editReply(options) {
    const body = await MessagePayload.create(options);
    const editReply = await this.client.api.patch(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`, {body});
    return this.channel.messages._add(editReply);
  }

  /**
   * Sends a follow-up message using the provided options.
   * @param {object} options - The options for the follow-up message.
   * @returns {Promise<Message>} A promise that resolves to the sent message.
   * @throws {Error} If there was an error sending the follow-up message.
   */
  async followUp(options) {
    const body = await MessagePayload.create(options);
    const request = await this.client.api.post(`${this.client.root}/webhooks/${this.applicationId}/${this.token}`, {body});
    return this.channel.messages._add(request);
  }

  /**
   * Retrieves the guild associated with this guildId.
   * @returns The guild object if found, otherwise null.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * Get the user associated with this instance.
   * @returns {User | null} The user object, or null if it is not available.
   */
  get user() {
    return this.client.users._add(this._user) ?? null;
  }
}

module.exports = Interaction;
