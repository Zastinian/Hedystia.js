const Base = require("../Base/base");
const {InteractionType} = require("../Util/Constants");
const MessagePayload = require("../Util/MessagePayload");
const Permissions = require("../Util/Permissions");
const Snowflake = require("../Util/Snowflake");
/**
 * It's a class that handles interactions with the Discord API.
 * @class
 * @extends Base
 */
class Interaction extends Base {
  /**
   * It's a constructor function that takes in data, guildId, and client as parameters.
   * @param data - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the user is in.
   * @param client - Discord.Client
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
   * If the commandType is Chat_Input or 1, return true, otherwise return false.
   * @returns a boolean value.
   */
  isChatInput() {
    if (["Chat_Input", 1].includes(this.commandType)) return true;
    return false;
  }

  /**
   * If the type is either "Application_Command" or 2, return true, otherwise return false
   * @returns The return value is a boolean.
   */
  isCommand() {
    if (["Application_Command", 2].includes(this.type)) return true;
    return false;
  }

  /**
   * If the commandType is either "User" or 2, then return true, otherwise return false.
   * @returns a boolean value.
   */
  isUser() {
    if (["User", 2].includes(this.commandType)) return true;
    return false;
  }

  /**
   * If the command type is either "Message" or 3, then return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isMessage() {
    if (["Message", 3].includes(this.commandType)) return true;
    return false;
  }

  /**
   * If the componentType is either "Button" or 2, then return true, otherwise return false.
   * @returns a boolean value.
   */
  isButton() {
    if (["Button", 2].includes(this.componentType)) return true;
    return false;
  }

  /**
   * If the type is either "Modal_Submit" or 5, then return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isModal() {
    if (["Modal_Submit", 5].includes(this.type)) return true;
    return false;
  }

  /**
   * If the type is either "Application_Command_Autocomplete" or 4, return true, otherwise return
   * false.
   * @returns The return value is a boolean.
   */
  isAutocomplete() {
    if (["Application_Command_Autocomplete", 4].includes(this.type)) return true;
    return false;
  }

  /**
   * If the componentType is either "Select_Menu" or 3, then return true, otherwise return false.
   * @returns The return value is a boolean.
   */
  isSelect() {
    if (["Select_Menu", 3].includes(this.componentType)) return true;
    return false;
  }

  /**
   * If the command type is a user, message, 2, or 3, then return true. Otherwise, return false
   * @returns The return value is a boolean.
   */
  isContext() {
    if (["User", "Message", 2, 3].includes(this.commandType)) return true;
    return false;
  }

  /**
   * If the channel type is a DM, return true, otherwise return false
   * @returns a boolean value.
   */
  isDM() {
    if (this.channel?.type === "Dm") return true;
    return false;
  }

  /**
   * It takes a name as an argument, and returns the value of the option with that name
   * @param name - The name of the option you want to get the value of.
   * @returns The value of the option that matches the name.
   */
  getValue(name) {
    return this.options.options.filter((data) => data.name == name)[0].value;
  }

  /**
   * It fetches the original message that the webhook was created with
   * @returns The message object.
   */
  async fetchReply() {
    const reply = await this.client.api.get(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`);
    return this.channel.messages._add(reply);
  }

  /**
   * It sends a reply to the user
   * @param data - The data to send to the user.
   * @returns The reply method returns a Promise that resolves to the reply message.
   */
  async reply(data) {
    const body = await MessagePayload.create(data, 4);
    await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {body});

    if (data.fetchReply) return await this.fetchReply();
    return null;
  }

  /**
   * It takes an object of options, creates a payload from those options, and then sends that payload to
   * the API.
   * @param options
   * @returns The response from the API.
   */
  async deferReply(options = {}) {
    const body = await MessagePayload.create(options, 5);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  /**
   * It takes an object, creates a new object with the original object and a number, and then sends that
   * new object to a URL.
   * @param options - The options object.
   * @returns The response from the API.
   */
  async modalSubmit(options = {}) {
    const body = await MessagePayload.create(options, 9);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  /**
   * It deletes the message that was sent to the webhook
   * @returns The message that was deleted.
   */
  async deleteReply() {
    const message = await this.fetchReply();
    await this.client.api.delete(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`);
    return message;
  }

  /**
   * It edits a message that was sent by a webhook
   * @param options
   * @returns The message object.
   */
  async editReply(options) {
    const body = await MessagePayload.create(options);
    const editReply = await this.client.api.patch(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`, {body});
    return this.channel.messages._add(editReply);
  }

  /**
   * It takes an object of options, creates a message payload, and then sends it to the webhook.
   * @param options
   * @returns The message object.
   */
  async followUp(options) {
    const body = await MessagePayload.create(options);
    const request = await this.client.api.post(`${this.client.root}/webhooks/${this.applicationId}/${this.token}`, {body});
    return this.channel.messages._add(request);
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  get user() {
    return this.client.users._add(this._user) ?? null;
  }
}

module.exports = Interaction;
