const CategoryChannel = require("../Structures/CategoryChannel");
const Channel = require("../Structures/Channel");
const DMChannel = require("../Structures/DMChannel");
const NewsChannel = require("../Structures/NewsChannel");
const StageChannel = require("../Structures/StageChannel");
const TextChannel = require("../Structures/TextChannel");
const VoiceChannel = require("../Structures/VoiceChannel");
const {ChannelType, OverwriteType, VideoQualityMode} = require("../Util/Constants");
const Base = require("../Base/base");
const Collection = new (require("../Util/@Collections/RaidenCol").RaidenCol)();
const Permissions = require("../Util/Permissions");
const ForumChannel = require("../Structures/ForumChannel");
const InvitePayload = require("../Util/InvitePayload");
const Invite = require("../Structures/Invite");
const ThreadChannel = require("../Structures/ThreadChannel");
const ChannelFlags = require("../Util/ChannelFlags");
const DirectoryChannel = require("../Structures/DirectoryChannel");
/**
 * Represents a Channel Manager that handles operations related to channels.
 * @class
 * @extends Base
 */
class ChannelManager extends Base {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {Client} client - The client object used for communication with the server.
   */
  constructor(client) {
    super(client);
  }

  /**
   * Adds a channel to the cache and returns the channel object.
   * @param {string | Channel} channels - The channel ID or channel object to add.
   * @param {string} [guildId=this.guildId] - The ID of the guild the channel belongs to.
   * @param {object} [options={cache: true, force: false}] - Additional options for adding the channel.
   * @param {boolean} [options.cache=true] - Whether to cache the channel object.
   * @param {boolean} [options.force=false] - Whether to force fetching the channel from the cache.
   * @returns {Channel} The added channel object.
   */
  _add(channels, guildId = this.guildId, options = {cache: true, force: false}) {
    if (!channels) return;
    const channelId = typeof channels === "string" ? channels : channels.id;
    let channel;
    if (this.cache.has(channelId) && !options.force) {
      channel = this.cache.get(channelId);
    } else {
      let newChannel;
      switch (channels.type) {
        case 0:
          newChannel = new TextChannel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            guildId,
            this.client
          );
          break;
        case 1:
          newChannel = new DMChannel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            null,
            this.client
          );
          break;
        case 2:
          newChannel = new VoiceChannel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            guildId,
            this.client
          );
          break;
        case 4:
          newChannel = new CategoryChannel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            guildId,
            this.client
          );
          break;
        case 13:
          newChannel = new StageChannel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            guildId,
            this.client
          );
          break;
        case 5:
          newChannel = new NewsChannel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            guildId,
            this.client
          );
          break;
        case 14:
          newChannel = new DirectoryChannel(
            typeof channels === "string"
              ? {
                  partial: true,
                  id: channelId,
                }
              : channels,
            this.client
          );
        case 15:
          newChannel = new ForumChannel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            guildId,
            this.client
          );
          break;
        default:
          newChannel = new Channel(
            typeof channels === "string"
              ? {
                  id: channelId,
                  partial: true,
                }
              : channels,
            guildId,
            this.client
          );
      }
      if ([10, 11, 12].includes(channels.type)) newChannel = new ThreadChannel(channels, guildId, this.client);
      if (options.cache) this.cache.set(channelId, newChannel);
      channel = newChannel;
    }

    return channel;
  }

  /**
   * Fetches a channel from the server based on the provided channel ID or channel object.
   * @param {string | object} channel - The channel ID or channel object to fetch.
   * @param {object} [options] - Additional options for the fetch operation.
   * @param {boolean} [options.cache] - Whether to use the cache for the fetch operation.
   * @param {boolean} [options.force] - Whether to force a fresh fetch from the server.
   * @returns {Promise<object>} - A promise that resolves to the fetched channel object.
   */
  async fetch(channel, options) {
    if (typeof channel?.id !== "undefined" || typeof channel === "string") return await this._fetchId(channel, options?.cache, options?.force);
    if (typeof channel === "object" && !options) options = channel;
    const {cache, force} = options ?? {};
    channel = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/channels`);
    return new this.cache.constructor(channel?.map((o) => [o.id, this._add(o, o.guild_id, {cache, force})]));
  }

  /**
   * Fetches the ID of a channel from the API.
   * @param {string | Channel} channel - The channel or channel ID to fetch.
   * @param {boolean} [cache=true] - Whether to cache the fetched channel.
   * @param {boolean} [force=false] - Whether to force fetching the channel even if it is already cached.
   * @returns {Promise<Channel>} - A promise that resolves to the fetched channel.
   * @throws {RangeError} - If the fetched channel is not a part of the guild.
   */
  async _fetchId(channel, cache = true, force = false) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    if (this.cache.has(channelId) && !force) return this.cache.get(channelId);
    channel = await this.client.api.get(`${this.client.root}/channels/${channelId}`);
    if (channel.guild_id !== this.guildId && this.guildId) throw new RangeError(`Channel is not a part of this Guild`);
    return this._add(channel, channel.guild_id, {cache, force: true});
  }

  /**
   * Edits a channel with the given options.
   * @param {string | Channel} channel - The channel to edit. Can be either a channel ID or a Channel object.
   * @param {Object} [options] - The options for editing the channel.
   * @param {string} [options.reason] - The reason for the channel edit.
   * @returns {Promise<Channel>} A promise that resolves with the edited channel.
   */
  async edit(channel, options = {}) {
    const {reason} = options;
    const channelId = typeof channel === "string" ? channel : channel.id;
    const body = ChannelManager.transformPayload(options);
    channel = await this.client.api.patch(`${this.client.root}/channels/${channelId}`, {body, reason});
    return this._add(channel, channel.guild_id);
  }

  /**
   * Deletes a channel.
   * @param {string | Channel} channel - The channel to delete. Can be either a channel ID or a Channel object.
   * @param {string} reason - The reason for deleting the channel.
   * @returns {Promise<Channel>} - A promise that resolves with the deleted channel.
   */
  async delete(channel, reason) {
    const channelId = typeof channel === "string" ? channel : channel.id;
    const deletedChannel = this._add(channelId);
    channel = await this.client.api.delete(`${this.client.root}/channels/${channelId}`, {reason});
    return deletedChannel;
  }

  /**
   * Creates an invite for a given channel with optional options.
   * @param {string | Channel} channel - The channel or channel ID to create the invite for.
   * @param {Object} [options] - Optional parameters for creating the invite.
   * @param {string} [options.reason] - The reason for creating the invite.
   * @returns {Promise<Invite>} - A promise that resolves with the created invite.
   */
  async createInvite(channel, options = {}) {
    const {reason} = options;
    const channelId = typeof channel === "string" ? channel : channel?.id;
    const body = InvitePayload.create(options);
    const invite = await this.client.api.post(`${this.client.root}/channels/${channelId}/invites`, {
      body,
      reason,
    });
    return new Invite(invite, invite.guild, this.client);
  }

  /**
   * Follows a news channel and adds it to the list of followed channels.
   * @param {string | NewsChannel} news - The news channel to follow. Can be either a string representing the channel ID or a NewsChannel object.
   * @param {Object} [options] - Additional options for following the channel.
   * @param {string} [options.reason] - The reason for following the channel.
   * @param {string | NewsChannel} [options.channel] - The channel to receive webhook notifications. Can be either a string representing the channel ID or a NewsChannel object.
   * @returns {Promise<string>} - A promise that resolves with the ID of the followed channel.
   */
  async follow(news, options = {}) {
    const {reason} = options;
    const newsChannelId = typeof news === "string" ? news : news?.id;
    const body = {
      webhook_channel_id: typeof options.channel === "string" ? options.channel : options.channel?.id ?? undefined,
    };
    const followedChannel = await this.client.api.post(`${this.client.root}/channels/${newsChannelId}/followers`, {reason, body});

    return this._add(followedChannel.channel_id);
  }

  /**
   * Triggers the typing indicator in a given channel.
   * @param {string | Channel} channel - The channel ID or the channel object.
   * @returns {Promise<void>} - A promise that resolves when the typing indicator is triggered.
   */
  async triggerTyping(channel) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    await this.client.api.post(`${this.client.root}/channels/${channelId}/typing`);
    return;
  }

  /**
   * Clones a channel by creating a new channel with the same properties and permission overwrites.
   * @param {string | Channel} channel - The channel ID or the channel object to clone.
   * @returns {Promise<Channel>} - A promise that resolves with the cloned channel.
   * @throws {RangeError} - If the channel is not found in the cache.
   */
  async clone(channel) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    if (this.cache.has(channelId)) {
      const channel = this.cache.get(channelId);
      return await this.create(
        Object.assign(channel, {
          permissionOverwrites: channel.permissionOverwrites?.overwrites,
        })
      );
    }

    throw new RangeError(`Channel not found in cache`);
  }

  /**
   * Getter method for the cache property.
   * @returns The Collection object representing the cache.
   */
  get cache() {
    return Collection;
  }

  /**
   * Transforms the payload object into the desired format based on the given parameters.
   * @param {object} o - The payload object to transform.
   * @param {boolean} [position=false] - Indicates whether to include position-related properties in the transformed object.
   * @returns {object} - The transformed payload object.
   */
  static transformPayload(o = {}, position = false) {
    if (position) {
      return {
        id: typeof o.channel === "string" ? o.channel : o.channel?.id ?? undefined,
        position: o.position ?? undefined,
        lock_permissions: o.lockPermissions ?? undefined,
      };
    }
    return {
      name: o.name ?? undefined,
      type: (typeof o.type === "string" ? ChannelType[o.type] : o.type) ?? undefined,
      topic: o.topic ?? undefined,
      bitrate: o.bitrate ?? undefined,
      user_limit: o.userLimit ?? undefined,
      rate_limit_per_user: o.ratelimit ?? undefined,
      position: o.position ?? undefined,
      permission_overwrites: o.permissionOverwrites?.map((o) => this.transformOverwrites(o)),
      parent_id: typeof o.parent === "string" ? o.parent : o.parent?.id ?? undefined,
      nsfw: o.nsfw ?? undefined,
      archived: o.archived ?? undefined,
      auto_archive_duration: o.autoArchiveDuration ?? undefined,
      locked: o.locked ?? undefined,
      invitable: o.invitable ?? undefined,
      default_auto_archive_duration: o.defaultAutoArchiveDuration ?? undefined,
      video_quality_mode: typeof o.videoQualityMode === "string" ? VideoQualityMode[o.videoQualityMode] : o.videoQualityMode ?? undefined,
      rtc_region: o.rtcRegion === null ? null : o.rtcRegion ?? undefined,
      flags: o.flags ? parseInt(ChannelFlags.resolve(o.flags)) : undefined,
    };
  }

  /**
   * Transforms an object of overwrite properties into a standardized format.
   * @param {Object} p - The overwrite properties object.
   * @param {string} p.id - The ID of the overwrite.
   * @param {string} p.type - The type of the overwrite.
   * @param {string[]} p.allow - The permissions to allow for the overwrite.
   * @param {string[]} p.deny - The permissions to deny for the overwrite.
   * @returns {Object} - The transformed overwrite object.
   */
  static transformOverwrites(p = {}) {
    return {
      id: typeof p.id === "string" ? p.id : p.id?.id ?? undefined,
      type: (typeof p.type === "string" ? OverwriteType[p.type] : p.type) ?? 1,
      allow: p.allow ? new Permissions(p.allow).bitfield.toString() : undefined,
      deny: p.deny ? new Permissions(p.deny).bitfield.toString() : undefined,
    };
  }
}

module.exports = ChannelManager;
