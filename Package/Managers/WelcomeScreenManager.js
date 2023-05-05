const WelcomeScreen = require("../Structures/WelcomeScreen");
const Base = require("../Base/base");
/* It's a class that manages a guild's welcome screen */
class WelcomeScreenManager extends Base {
  /**
   * This function is a constructor for the class Guild. It takes in a guildId and a client, and sets
   * the guildId to the guildId passed in, and sets the client to the client passed in.
   * @param guildId - The ID of the guild you want to get the member count of.
   * @param client - The client that the command is being run from.
   */
  constructor(guildId, client) {
    super(client);

    this.guildId = guildId;
  }

  /**
   * It fetches the welcome screen of a guild
   * @returns A new instance of the WelcomeScreen class.
   */
  async fetch() {
    const welcomeScreen = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/welcome-screen`);
    return new WelcomeScreen(welcomeScreen, this.guildId, this.client);
  }

  /**
   * It edits the welcome screen of a guild.
   * @param [options] - Object
   * @returns A new WelcomeScreen object.
   */
  async edit(options = {}) {
    const {reason} = options;
    const body = WelcomeScreenManager.transformOptions(options);
    const welcomeScreen = await this.client.api.patch(`${this.client.root}/guilds/${this.guildId}/welcome-screen`, {reason, body});
    return new WelcomeScreen(welcomeScreen, this.guildId, this.client);
  }

  /**
   * It takes an object with a property called `id` that can be either a string or an object with a
   * property called `id` that is a string
   * @param [channels] - The channel object that you want to transform.
   * @returns An object with the following properties:
   * - channel_id
   * - description
   * - emoji_id
   * - emoji_name
   */
  static transformChannels(channels = {}) {
    return {
      channel_id: typeof channels.id === "string" ? channels.id : channels.id?.id ?? undefined,
      description: channels.description ?? undefined,
      emoji_id: channels.emojiId ?? undefined,
      emoji_name: channels.emojiName ?? undefined,
    };
  }

  /**
   * It takes an object with a property called "channels" which is an array of objects, and returns an
   * object with a property called "welcome_channels" which is an array of objects.
   * @param [o] - The object that is passed in.
   * @returns an object with the properties enabled, welcome_channels, and description.
   */
  static transformOptions(o = {}) {
    return {
      enabled: o.enabled ?? undefined,
      welcome_channels: o.channels?.map((o) => this.transformChannels(o)),
      description: o.description ?? undefined,
    };
  }
}

module.exports = WelcomeScreenManager;
