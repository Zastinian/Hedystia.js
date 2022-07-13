const Base = require("../Base/base");
const { InteractionType } = require("../Util/Constants");
const MessagePayload = require("../Util/MessagePayload");
const Permissions = require("../Util/Permissions");
class Interaction extends Base {
  constructor(data = {}, guildId, client) {
    super(client);
    Object.defineProperty(this, "_user", {
      value: data.user ?? data.member?.user,
    });
    this.type =
      (typeof data.type === "number"
        ? InteractionType[data.type]
        : data.type) ?? null;
    this.id = data.id ?? null;
    this.token = data.token ?? null;
    this.applicationId = data.application_id ?? null;
    this.channelId = data.channel_id ?? null;
    this.locale = data.locale ?? null;
    this.guildLocale = data.guild_locale ?? null;
    this.version = data.version ?? null;
    this.guildId = guildId ?? null;
    this.member = this.guild?.members._add(data.member ?? data.user) ?? null;
    this.appPermissions = new Permissions(
      data.app_permissions ? BigInt(data.app_permissions) : 0n
    ).freeze();
  }

  isChatInput() {
    if (["CHAT_INPUT", 1].includes(this.commandType)) return true;
    return false;
  }

  isCommand() {
    if (["APPLICATION_COMMAND", 2].includes(this.type)) return true;
    return false;
  }

  isUser() {
    if (["USER", 2].includes(this.commandType)) return true;
    return false;
  }

  isMessage() {
    if (["MESSAGE", 3].includes(this.commandType)) return true;
    return false;
  }

  isButton() {
    if (["BUTTON", 2].includes(this.componentType)) return true;
    return false;
  }

  isModal() {
    if (["MODAL_SUBMIT", 5].includes(this.type)) return true;
    return false;
  }

  isAutocomplete() {
    if (["APPLICATION_COMMAND_AUTOCOMPLETE", 4].includes(this.type))
      return true;
    return false;
  }

  isSelect() {
    if (["SELECT_MENU", 3].includes(this.componentType)) return true;
    return false;
  }

  isContext() {
    if (["USER", "MESSAGE", 2, 3].includes(this.commandType)) return true;
    return false;
  }

  isDM() {
    if (this.channel?.type === "DM") return true;
    return false;
  }

  get channel() {
    return this.client.channels._add(this.channelId) ?? null;
  }

  async fetchReply() {
    const reply = await this.client.api.get(
      `${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`
    );
    return this.channel.messages._add(reply);
  }

  async reply(data) {
    const body = await MessagePayload.create(data, 4);
    await this.client.api.post(
      `${this.client.root}/interactions/${this.id}/${this.token}/callback`,
      { body }
    );

    if (data.fetchReply) return await this.fetchReply();
    return null;
  }

  async deferReply(options = {}) {
    const body = await MessagePayload.create(options, 5);
    return await this.client.api.post(
      `${this.client.root}/interactions/${this.id}/${this.token}/callback`,
      { body }
    );
  }

  async modalSubmit(options = {}) {
    const body = await MessagePayload.create(options, 9);
    return await this.client.api.post(
      `${this.client.root}/interactions/${this.id}/${this.token}/callback`,
      { body }
    );
  }

  async deleteReply() {
    const message = await this.fetchReply();
    await this.client.api.delete(
      `${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`
    );
    return message;
  }

  async editReply(options) {
    const body = await MessagePayload.create(options);
    const editReply = await this.client.api.patch(
      `${this.client.root}/webhooks/${this.applicationId}/${this.token}/messages/@original`,
      { body }
    );
    return this.channel.messages._add(editReply);
  }

  async followUp(options) {
    const body = await MessagePayload.create(options);
    const request = await this.client.api.post(
      `${this.client.root}/webhooks/${this.applicationId}/${this.token}`,
      { body }
    );
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
