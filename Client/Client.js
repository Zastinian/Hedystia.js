const EventEmitter = require("node:events");
const ChannelManager = require("../Managers/ChannelManager");
const WebsocketManager = require("../Managers/WebsocketManager");
const { ActivityType, CDN } = require("../Util/Constants");
const Intents = require("../Util/Intents");
const REST = require("../REST/REST");
const UserManager = require("../Managers/UserManager");
const GuildManager = require("../Managers/GuildManager");
const RoleManager = require("../Managers/RoleManager");
const Invite = require("../Structures/Invite");
const GuildPreview = require("../Structures/GuildPreview");
const GuildWidget = require("../Structures/GuildWidget");
const { RaidenCol } = require("../Util/@Collections/RaidenCol");
const VoiceRegion = require("../Structures/VoiceRegion");
const GuildTemplate = require("../Structures/GuildTemplate");
const Util = require("../Util/Util");
const Sticker = require("../Structures/Sticker");
const StickerPack = require("../Structures/StickerPack");
const Permissions = require("../Util/Permissions");
const EmojiManager = require("../Managers/EmojiManager");
class Client extends EventEmitter {
  constructor(options = {}) {
    super(options);

    this.intents = new Intents(options.intents ?? Intents.FLAGS.GUILDS);
    this.token = options.user ? `${options.token}` : `Bot ${options.token}`;
    this.presence = Client.transformPresence(options.presence);
    this.version = options.version ?? "9";
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

    this.ws.connect();
  }

  IniciarSesion() {}

  get api() {
    return new REST(this).setToken(this.token);
  }

  get cdn() {
    return CDN;
  }

  async fetchInvite(invite, query) {
    if (!invite)
      throw new RangeError(
        `Por favor, especifique un código de invitación para obtenerlo`
      );
    if (/^(http(s)?)/gi.test(invite))
      invite = invite.slice(invite.lastIndexOf("/") + 1);
    const inviteCode = typeof invite === "string" ? invite : invite.code;
    query = Client.transformInviteOptions(query);
    invite = await this.api.get(`${this.root}/invites/${inviteCode}`, {
      query,
    });
    return new Invite(invite, invite.guild, this);
  }

  async fetchPreview(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const preview = await this.api.get(
      `${this.root}/guilds/${guildId}/preview`
    );
    return new GuildPreview(preview, this);
  }

  async fetchGuildWidget(guild) {
    const guildId = typeof guild === "string" ? guild : guild?.id;
    const widget = await this.api.get(
      `${this.root}/guilds/${guildId}/widget.json`
    );
    return new GuildWidget(widget, guildId, this);
  }

  async fetchVoiceRegions() {
    const regions = await this.api.get(`${this.root}/voice/regions`);
    return new RaidenCol(regions?.map((o) => [o.id, new VoiceRegion(o, this)]));
  }

  async generateTemplate(code, options = {}) {
    if (!code)
      throw new RangeError(
        `Se requiere el código de la plantilla del servidor!`
      );
    if (/^(http(s)?)/gi.test(code))
      code = code.slice(code.lastIndexOf("/") + 1);
    code = typeof code === "string" ? code : code.code;
    const parse = await Client.generateTemplateGuild(options);
    const guild = await this.api.post(`${this.root}/guilds/templates/${code}`, {
      body: parse,
    });

    return this.guilds._add(guild);
  }

  generateInvite(options = {}) {
    if (!this.readyAt) throw new RangeError(`El cliente debe estar preparado`);
    const url = new URLSearchParams({
      client_id: this.user.id,
    });
    if (options.scopes) {
      url.set("scope", options.scopes?.join(20));
    }

    if (options.permissions) {
      url.set(
        "permissions",
        Permissions.resolve(options.permissions).toString()
      );
    }

    if (options.guildSelect) {
      if (options.guild) {
        const guildId =
          typeof options.guild === "string" ? options.guild : options.guild?.id;
        url.set("disabled_guild_select", options.guildSelect);
        url.set("guild_id", guildId);
      }
    }

    if (options.responseType) {
      url.set("response_type", options.responseType);
    }

    if ([...url.values()]?.length > 0) return `${this.oauth2}/authorize?${url}`;
  }

  async fetchSticker(sticker) {
    const stickerId = typeof sticker === "string" ? sticker : sticker?.id;
    sticker = await this.api.get(`${this.root}/stickers/${stickerId}`);
    return new Sticker(sticker, sticker.guild_id, this);
  }

  async fetchNitroPacks() {
    const stickerPacks = await this.api.get(`${this.root}/sticker-packs`);
    return new RaidenCol(
      stickerPacks.sticker_packs?.map((o) => [o.id, new StickerPack(o, this)])
    );
  }

  async fetchGuildTemplate(code) {
    if (!code) throw new RangeError(`Guild Template code is required!`);
    if (/^(http(s)?)/gi.test(code))
      code = code.slice(code.lastIndexOf("/") + 1);
    code = typeof code === "string" ? code : code.code;
    const template = await this.api.get(
      `${this.root}/guilds/templates/${code}`
    );
    return new GuildTemplate(template, this);
  }

  static async generateTemplateGuild(o = {}) {
    if (o.icon)
      o.icon = `data:image/png;base64,${(await Util.getBuffer(o.icon)).toString(
        "base64"
      )}`;
    return {
      name: o.name ?? undefined,
      icon: o.icon ?? undefined,
    };
  }

  static transformInviteOptions(o = {}) {
    return {
      with_counts: o.withCounts ?? undefined,
      with_expiration: o.withExpiration ?? undefined,
      guild_scheduled_event_id:
        typeof o.guildScheduledEvent === "string"
          ? o.guildScheduledEvent
          : o.guildScheduledEvent?.id ?? undefined,
    };
  }

  static transformPresence(presence = {}) {
    return {
      status: presence.status ?? "online",
      activities:
        presence.activities?.map((o) => this.transformActivities(o)) ?? [],
      since: Date.now() * 1000,
      afk: presence.afk ?? false,
    };
  }

  static transformActivities(activities = {}) {
    return {
      name: activities.name ?? undefined,
      type:
        (typeof activities.type === "string"
          ? ActivityType[activities.type]
          : activities.type) ?? 0,
      url: activities.url ?? undefined,
    };
  }
}

module.exports = Client;
