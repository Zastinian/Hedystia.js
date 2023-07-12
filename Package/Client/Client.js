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
 * Client class representing a Discord bot client.
 * @extends EventEmitter
 * @class
 */
class Client extends EventEmitter {
  /**
   * @constructor
   * @param {Object} [options={}] - The options to set for the client.
   * @param {Array<String>} [options.intents=["GUILDS"]] - The intents to use for the client.
   * @param {String} options.token - The bot token to use for authorization.
   * @param {Object} [options.presence={}] - The presence options for the client.
   * @param {Number} [options.maxShards=1] - The maximum number of shards for the client.
   * @param {Number} [options.shardId=0] - The shard ID for the client.
   * @param {String} [options.version="10"] - The API version to use for the client.
   * @param {String} [options.encoding="json"] - The encoding to use for the client.
   * @param {Number} [options.timeout=15000] - The timeout for REST requests.
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
   * It returns a new REST object with the token set to the token of the client.
   * @returns A new instance of the REST class.
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
   * It fetches an invite from the Discord API
   * @param invite - The invite code
   * @param query
   * @returns A new Invite object.
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
   * It fetches the preview of a guild
   * @param guild - The guild to fetch the preview for.
   * @returns A new GuildPreview object.
   */
  async fetchPreview(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const preview = await this.api.get(`${this.root}/guilds/${guildId}/preview`);
    return new GuildPreview(preview, this);
  }

  /**
   * It fetches the guild widget of a guild
   * @param guild - The guild object or ID
   * @returns A new instance of the GuildWidget class.
   */
  async fetchGuildWidget(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const widget = await this.api.get(`${this.root}/guilds/${guildId}/widget.json`);
    return new GuildWidget(widget, guildId, this);
  }

  /**
   * It fetches the voice regions from the Discord API and returns them as a RaidenCol
   * @returns An array of objects.
   */
  async fetchVoiceRegions() {
    const regions = await this.api.get(`${this.root}/voice/regions`);
    return new RaidenCol(regions?.map((o) => [o.id, new VoiceRegion(o, this)]));
  }

  /**
   * It takes a template code and creates a new guild with the template
   * @param code - The code of the template you want to use.
   * @param [options] - Object
   * @returns The guild object.
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
   * The function generates an invite link for the user to invite the bot to their server
   * @param [options] - Object
   * @returns The URL to the OAuth2 page.
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
   * The debug function emits a debug event with a given message.
   * @param message - The `message` parameter is the debug message that you want to emit.
   * @returns The "debug" event is being emitted with the provided message as the argument.
   */
  debug(message) {
    return this.emit("debug", message);
  }

  /**
   * It fetches a sticker from the API and returns a new Sticker object
   * @param sticker - The sticker object or ID
   * @returns A new Sticker object.
   */
  async fetchSticker(sticker) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    sticker = await this.api.get(`${this.root}/stickers/${stickerId}`);
    return new Sticker(sticker, sticker.guild_id, this);
  }

  /**
   * It fetches the sticker packs from the API and returns them as a RaidenCol
   * @returns A collection of sticker packs.
   */
  async fetchNitroPacks() {
    const stickerPacks = await this.api.get(`${this.root}/sticker-packs`);
    return new RaidenCol(stickerPacks.sticker_packs?.map((o) => [o.id, new StickerPack(o, this)]));
  }

  /**
   * It fetches a guild template from the discord api
   * @param code - The code of the template you want to fetch.
   * @returns A new GuildTemplate object.
   */
  async fetchGuildTemplate(code) {
    if (!code) throw new RangeError(`Server template code is required!`);
    if (/^(http(s)?)/gi.test(code)) code = code.slice(code.lastIndexOf("/") + 1);
    code = typeof code === "string" ? code : code.code;
    const template = await this.api.get(`${this.root}/guilds/templates/${code}`);
    return new GuildTemplate(template, this);
  }

  /**
   * It takes an object with a name and icon property, and returns an object with a name and icon
   * property
   * @param [o] - The object that contains the parameters.
   * @returns an object with the properties name and icon.
   */
  static async generateTemplateGuild(o = {}) {
    if (o.icon) o.icon = `data:image/png;base64,${(await Util.getBuffer(o.icon)).toString("base64")}`;
    return {
      name: o.name ?? undefined,
      icon: o.icon ?? undefined,
    };
  }

  /**
   * It takes an object with properties that are camelCase and returns an object with properties that
   * are snake_case
   * @param [o] - The options object.
   * @returns an object with the following properties:
   */
  static transformInviteOptions(o = {}) {
    return {
      with_counts: o.withCounts ?? undefined,
      with_expiration: o.withExpiration ?? undefined,
      guild_scheduled_event_id: typeof o.guildScheduledEvent === "string" ? o.guildScheduledEvent : o.guildScheduledEvent?.id ?? undefined,
    };
  }

  /**
   * It transforms a presence object into a presence object
   * @param [presence] - The presence object to transform.
   * @returns The presence object is being returned.
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
   * It takes an object with a name, type, and url property, and returns an object with the same
   * properties, but with the type property converted to a number.
   * @param [activities]
   * @returns An object with the properties name, type, and url.
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
