const Base = require("../Base/base");
const {InteractionType} = require("../Util/Constants");
const MessagePayload = require("../Util/MessagePayload");
const Permissions = require("../Util/Permissions");
class Interaction extends Base {
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
    this.locale = data.locale ?? null;
    this.guildLocale = data.guild_locale ?? null;
    this.version = data.version ?? null;
    this.guildId = guildId ?? null;
    this.member = this.guild?.members._add(data.member ?? data.user) ?? null;
    this.appPermissions = new Permissions(data.app_permissions ? BigInt(data.app_permissions) : 0n).freeze();
  }

  isChatInput() {
    if (["Chat_Input", 1].includes(this.commandType)) return true;
    return false;
  }

  isCommand() {
    if (["Application_Command", 2].includes(this.type)) return true;
    return false;
  }

  isUser() {
    if (["User", 2].includes(this.commandType)) return true;
    return false;
  }

  isMessage() {
    if (["Message", 3].includes(this.commandType)) return true;
    return false;
  }

  isButton() {
    if (["Button", 2].includes(this.componentType)) return true;
    return false;
  }

  isModal() {
    if (["Modal_Submit", 5].includes(this.type)) return true;
    return false;
  }

  isAutocomplete() {
    if (["Application_Command_Autocomplete", 4].includes(this.type)) return true;
    return false;
  }

  isSelect() {
    if (["Select_Menu", 3].includes(this.componentType)) return true;
    return false;
  }

  isContext() {
    if (["User", "Message", 2, 3].includes(this.commandType)) return true;
    return false;
  }

  isDM() {
    if (this.channel?.type === "Dm") return true;
    return false;
  }

  getValue(name) {
    return this.options.options.filter((data) => data.name == name)[0].value;
  }

  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  async fetchReply() {
    const reply = await this.client.api.get(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`);
    return this.channel.messages._add(reply);
  }

  async reply(data) {
    const body = await MessagePayload.create(data, 4);
    await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {body});

    if (data.fetchReply) return await this.fetchReply();
    return null;
  }

  async deferReply(options = {}) {
    const body = await MessagePayload.create(options, 5);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  async modalSubmit(options = {}) {
    const body = await MessagePayload.create(options, 9);
    return await this.client.api.post(`${this.client.root}/interactions/${this.id}/${this.token}/callback`, {
      body,
    });
  }

  async deleteReply() {
    const message = await this.fetchReply();
    await this.client.api.delete(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`);
    return message;
  }

  async editReply(options) {
    const body = await MessagePayload.create(options);
    const editReply = await this.client.api.patch(`${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`, {body});
    return this.channel.messages._add(editReply);
  }

  async followUp(options) {
    const body = await MessagePayload.create(options);
    const request = await this.client.api.post(`${this.client.root}/webhooks/${this.applicationId}/${this.token}`, {body});
    return this.channel.messages._add(request);
  }

  get guild() {
    return this.client.guilds._add(this.guildId) ?? null;
  }

  get user() {
    return this.client.users._add(this._user) ?? null;
  }
}

module.exports = Interaction;
