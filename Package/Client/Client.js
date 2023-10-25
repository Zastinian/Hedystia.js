const {EventEmitter} = require("events");
const ChannelManager = require("../Managers/ChannelManager");
const WebsocketManager = require("../Managers/WebsocketManager");
const {ActivityType, CDN} = require("../Util/Constants");
const Intents = require("../Util/Intents");
const REST = require("../REST/REST");
const UserManager = require("../Managers/UserManager");
const GuildManager = require("../Managers/GuildManager");
const RoleManager = require("../Managers/RoleManager");
const Invite = require("../Structures/Invite");
const GuildPreview = require("../Structures/GuildPreview");
const GuildWidget = require("../Structures/GuildWidget");
const {RaidenCol} = require("../Util/@Collections/RaidenCol");
const VoiceRegion = require("../Structures/VoiceRegion");
const GuildTemplate = require("../Structures/GuildTemplate");
const Util = require("../Util/Util");
const Sticker = require("../Structures/Sticker");
const StickerPack = require("../Structures/StickerPack");
const Permissions = require("../Util/Permissions");
const EmojiManager = require("../Managers/EmojiManager");

/**
 * Represents a Discord client.
 * @extends EventEmitter
 * @class
 */
class Client extends EventEmitter {
  /**
   * @constructor
   * @param {Object} [options] - The options to set for the client.
   * @param {Array<String>} [options.intents=Intents.Flags.Guilds] - The intents to use for the client.
   * @param {String} options.token - The bot token to use for authorization.
   * @param {Object} [options.presence] - The presence options for the client.
   * @param {Number} [options.maxShards=1] - The maximum number of shards for the client.
   * @param {Number} [options.shardId=0] - The shard ID for the client.
   * @param {String} [options.version="10"] - The API version to use for the client.
   * @param {String} [options.encoding="json"] - The encoding to use for the client.
   * @param {Number} [options.timeout=15000] - The timeout for REST requests.
   * @param {Number} [options.restRequestTimeout=15000] - The timeout for REST requests in milliseconds.
   * @param {Number} [options.restReadyTimeout=2000] - The timeout for the REST ready event in milliseconds.
   * @param {Array<String>} [options.partials=[]] - The partials to use for the client.
   */
  constructor(options = {}) {
    super(options);

    this.intents = new Intents(options.intents ?? Intents.Flags.Guilds);
    this.token = options.user ? `${options.token}` : `Bot ${options.token}`;
    this.presence = Client.transformPresence(options.presence);
    this.restRequestTimeout = options.restRequestTimeout ?? 15_000;
    this.restReadyTimeout = options.restReadyTimeout ?? 2000;
    this.maxShards = options.maxShards ?? 1;
    this.shardId = options.shardId ?? 0;

    this.version = options.version ?? "10";
    this.encoding = options.encoding ?? "json";
    this.restRequestTimeout = options.timeout ?? 1000 * 15;
    this.partials = options.partials ?? [];

    this.root = `https://discord.com/api/v${this.version}`;
    this.oauth2 = `https://discord.com/api/oauth2`;
    this.cdnRoot = "https://cdn.discordapp.com";
    this.websocketURL = `wss://gateway.discord.gg/?v=${this.version}&encoding=${this.encoding}`;
    this.webhookURL = `https://canary.discord.com/api/webhooks`;

    this.readyAt = null;
    this.application = null;

    this.channels = new ChannelManager(this);
    this.guilds = new GuildManager(this, this.ws);
    this.users = new UserManager(this, this.ws);
    this.roles = new RoleManager(this);
    this.emojis = new EmojiManager(this);
    this.ws = new WebsocketManager(this);

    this.application = null;
    this.heartbeatInterval = null;
    this.readyAt = null;
  }

  /**
   * Getter method that returns a new instance of the REST class with the token set.
   * @returns {REST} - A new instance of the REST class with the token set.
   */
  get api() {
    return new REST(this).setToken(this.token);
  }

  /**
   * The function returns the value of the CDN variable.
   * @returns The CDN property.
   */
  get cdn() {
    return CDN;
  }

  /**
   * Fetches an invitation using the provided invite code and query parameters.
   * @param {string | object} invite - The invitation code or an object containing the invite code.
   * @param {object} query - The query parameters to include in the request.
   * @returns {Promise<Invite>} A promise that resolves to an Invite object representing the fetched invitation.
   * @throws {RangeError} If no invitation code is specified.
   */
  async fetchInvite(invite, query) {
    if (!invite) throw new RangeError(`Please specify an invitation code to obtain it`);
    if (/^(http(s)?)/gi.test(invite)) invite = invite.slice(invite.lastIndexOf("/") + 1);
    const inviteCode = typeof invite === "string" ? invite : invite.code;
    query = Client.transformInviteOptions(query);
    invite = await this.api.get(`${this.root}/invites/${inviteCode}`, {
      query,
    });
    return new Invite(invite, invite.guild, this);
  }

  /**
   * Fetches the preview information for a guild.
   * @param {string | Guild} guild - The guild ID or guild object for which to fetch the preview.
   * @returns {Promise<GuildPreview>} - A promise that resolves to a GuildPreview object containing the preview information.
   */
  async fetchPreview(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const preview = await this.api.get(`${this.root}/guilds/${guildId}/preview`);
    return new GuildPreview(preview, this);
  }

  /**
   * Fetches the guild widget for the specified guild.
   * @param {string | Guild} guild - The guild ID or guild object for which to fetch the widget.
   * @returns {Promise<GuildWidget>} - A promise that resolves to a GuildWidget object representing the guild widget.
   */
  async fetchGuildWidget(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const widget = await this.api.get(`${this.root}/guilds/${guildId}/widget.json`);
    return new GuildWidget(widget, guildId, this);
  }

  /**
   * Fetches the voice regions from the API.
   * @returns {Promise<RaidenCol<VoiceRegion>>} - A promise that resolves to a collection of VoiceRegion objects.
   */
  async fetchVoiceRegions() {
    const regions = await this.api.get(`${this.root}/voice/regions`);
    return new RaidenCol(regions?.map((o) => [o.id, new VoiceRegion(o, this)]));
  }

  /**
   * Generates a template using the provided code and options.
   * @param {string | object} code - The code or URL of the server template.
   * @param {object} [options] - Additional options for generating the template.
   * @returns {Promise<Guild>} A promise that resolves with the created guild.
   * @throws {RangeError} If the server template code is not provided.
   */
  async generateTemplate(code, options = {}) {
    if (!code) throw new RangeError(`Server template code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    code = typeof code === "string" ? code : code.code;
    const parse = await Client.generateTemplateGuild(options);
    const guild = await this.api.post(`${this.root}/guilds/templates/${code}`, {
      body: parse,
    });

    return this.guilds._add(guild);
  }

  /**
   * Generates an invite URL for the bot with the specified options.
   * @param {Object} [options] - The options for generating the invite URL.
   * @param {Array<string>} [options.scopes] - The scopes to request from the user.
   * @param {Array<string>} [options.permissions] - The permissions to request from the user.
   * @param {boolean} [options.guildSelect] - Whether to enable guild selection in the invite flow.
   * @param {string|Guild} [options.guild] - The guild to pre-select in the invite flow.
   * @param {string} [options.responseType] - The response type to use for the invite.
   * @returns {string|undefined}
   */
  generateInvite(options = {}) {
    if (!this.readyAt) throw new RangeError(`The customer must be prepared`);
    const url = new URLSearchParams({
      client_id: this.user.id,
    });
    if (options.scopes) {
      url.set("scope", options.scopes?.join(20));
    }

    if (options.permissions) {
      url.set("permissions", Permissions.resolve(options.permissions).toString());
    }

    if (options.guildSelect) {
      if (options.guild) {
        const guildId = typeof options.guild === "string" ? options.guild : options.guild?.id;
        url.set("disabled_guild_select", options.guildSelect);
        url.set("guild_id", guildId);
      }
    }

    if (options.responseType) {
      url.set("response_type", options.responseType);
    }

    if ([...url.values()]?.length > 0) return `${this.oauth2}/authorize?${url}`;
  }

  /**
   * Emits a debug event with the given message.
   * @param {any} message - The debug message to emit.
   * @returns None
   */
  debug(message) {
    return this.emit("debug", message);
  }

  /**
   * Fetches a sticker from the server.
   * @param {string | Sticker} sticker - The sticker ID or the sticker object.
   * @returns {Promise<Sticker>} - A promise that resolves to a Sticker object.
   */
  async fetchSticker(sticker) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    sticker = await this.api.get(`${this.root}/stickers/${stickerId}`);
    return new Sticker(sticker, sticker.guild_id, this);
  }

  /**
   * Fetches the Nitro Packs from the API.
   * @returns {Promise<RaidenCol>} - A promise that resolves to a RaidenCol object containing the fetched sticker packs.
   * @throws {Error} - If there is an error fetching the sticker packs.
   */
  async fetchNitroPacks() {
    const stickerPacks = await this.api.get(`${this.root}/sticker-packs`);
    return new RaidenCol(stickerPacks.sticker_packs?.map((o) => [o.id, new StickerPack(o, this)]));
  }

  /**
   * Fetches a guild template from the server using the provided code.
   * @param {string} code - The code of the guild template to fetch.
   * @throws {RangeError} If the server template code is not provided.
   * @returns {Promise<GuildTemplate>} A promise that resolves to a GuildTemplate object.
   */
  async fetchGuildTemplate(code) {
    if (!code) throw new RangeError(`Server template code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    code = typeof code === "string" ? code : code.code;
    const template = await this.api.get(`${this.root}/guilds/templates/${code}`);
    return new GuildTemplate(template, this);
  }

  /**
   * Generates a template guild object with optional properties.
   * @param {Object} o - An object containing optional properties for the guild.
   * @param {string} o.name - The name of the guild. If not provided, it will be set to undefined.
   * @param {string} o.icon - The icon of the guild. If provided, it will be converted to a base64 string.
   * @returns {Object} - The generated guild object with optional properties.
   */
  static async generateTemplateGuild(o = {}) {
    if (o.icon) o.icon = `data:image/png;base64,${(await Util.getBuffer(o.icon)).toString("base64")}`;
    return {
      name: o.name ?? undefined,
      icon: o.icon ?? undefined,
    };
  }

  /**
   * Transforms the given invite options object into a new object with specific properties.
   * @param {Object} o - The invite options object.
   * @param {boolean} [o.withCounts] - Whether to include counts in the invite.
   * @param {boolean} [o.withExpiration] - Whether to include expiration in the invite.
   * @param {string | undefined} [o.guildScheduledEvent] - The ID of the guild scheduled event.
   * @returns {Object} - The transformed invite options object.
   */
  static transformInviteOptions(o = {}) {
    return {
      with_counts: o.withCounts ?? undefined,
      with_expiration: o.withExpiration ?? undefined,
      guild_scheduled_event_id: typeof o.guildScheduledEvent === "string" ? o.guildScheduledEvent : o.guildScheduledEvent?.id ?? undefined,
    };
  }

  /**
   * Transforms a presence object into a new format.
   * @param {Object} [presence] - The presence object to transform.
   * @returns {Object} - The transformed presence object.
   */
  static transformPresence(presence = {}) {
    return {
      status: presence.status ?? "online",
      activities: presence.activities?.map((o) => this.transformActivities(o)) ?? [],
      since: Date.now() * 1000,
      afk: presence.afk ?? false,
    };
  }

  /**
   * Transforms the activities object into a new format.
   * @param {Object} activities - The activities object to transform.
   * @returns {Object} - The transformed activities object.
   * - name: The name of the activity. If not provided, it will be set to undefined.
   * - type: The type of the activity. If not provided or not a string, it will be set to 0.
   * - url: The URL of the activity. If not provided, it will be set to undefined.
   */
  static transformActivities(activities = {}) {
    return {
      name: activities.name ?? undefined,
      type: (typeof activities.type === "string" ? ActivityType[activities.type] : activities.type) ?? 0,
      url: activities.url ?? undefined,
    };
  }
}

module.exports = Client;
