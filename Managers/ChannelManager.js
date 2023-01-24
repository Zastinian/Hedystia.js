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
/* It's a class that manages channels */
class ChannelManager extends Base {
  /**
   * It's a constructor function that takes a client parameter and passes it to the super function.
   * @param client - The client object.
   */
  constructor(client) {
    super(client);
  }

  /**
   * It takes a channel object, and returns a channel object
   * @param channels - The channel object or channel ID.
   * @param [guildId] - The ID of the guild the channel is in.
   * @param [options] - {cache: true, force: false}
   * @returns A channel object.
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
   * It fetches all the channels in a guild.
   * @param channel - The channel ID or object.
   * @param options - {
   * @returns An array of objects.
   */
  async fetch(channel, options) {
    if (typeof channel?.id !== "undefined" || typeof channel === "string") return await this._fetchId(channel, options?.cache, options?.force);
    if (typeof channel === "object" && !options) options = channel;
    const {cache, force} = options ?? {};
    channel = await this.client.api.get(`${this.client.root}/guilds/${this.guildId}/channels`);
    return new this.cache.constructor(channel?.map((o) => [o.id, this._add(o, o.guild_id, {cache, force})]));
  }

  /**
   * It fetches the channel ID from the API and adds it to the cache
   * @param channel - The channel to fetch.
   * @param [cache=true] - Whether or not to cache the channel.
   * @param [force=false] - If true, it will force the cache to be updated.
   * @returns The channel object.
   */
  async _fetchId(channel, cache = true, force = false) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    if (this.cache.has(channelId) && !force) return this.cache.get(channelId);
    channel = await this.client.api.get(`${this.client.root}/channels/${channelId}`);
    if (channel.guild_id !== this.guildId && this.guildId) throw new RangeError(`Channel is not a part of this Guild`);
    return this._add(channel, channel.guild_id, {cache, force: true});
  }

  /**
   * It edits a channel
   * @param channel - The channel to edit.
   * @param [options] - {
   * @returns The channel object.
   */
  async edit(channel, options = {}) {
    const {reason} = options;
    const channelId = typeof channel === "string" ? channel : channel.id;
    const body = ChannelManager.transformPayload(options);
    channel = await this.client.api.patch(`${this.client.root}/channels/${channelId}`, {body, reason});
    return this._add(channel, channel.guild_id);
  }

  /**
   * It deletes a channel
   * @param channel - The channel to delete.
   * @param reason - The reason for the deletion.
   * @returns The deleted channel.
   */
  async delete(channel, reason) {
    const channelId = typeof channel === "string" ? channel : channel.id;
    const deletedChannel = this._add(channelId);
    channel = await this.client.api.delete(`${this.client.root}/channels/${channelId}`, {reason});
    return deletedChannel;
  }

  /**
   * It creates an invite for a channel
   * @param channel - The channel to create the invite for.
   * @param [options] - {
   * @returns An invite object.
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
   * It follows a channel
   * @param news - The channel you want to follow.
   * @param [options] - {
   * @returns The channel that was followed.
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
   * It triggers typing in a channel
   * @param channel - The channel to send the typing indicator to.
   * @returns Nothing.
   */
  async triggerTyping(channel) {
    const channelId = typeof channel === "string" ? channel : channel?.id;
    await this.client.api.post(`${this.client.root}/channels/${channelId}/typing`);
    return;
  }

  /**
   * @param channel - The channel to clone.
   * @returns The channel object.
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
   * It returns the Collection object.
   * @returns The Collection object.
   */
  get cache() {
    return Collection;
  }

  /**
   * It transforms an object into another object
   * @param [o] - The object that is being transformed.
   * @param [position=false] - boolean
   * @returns an object with the properties of name, type, topic, bitrate, user_limit,
   * rate_limit_per_user, position, permission_overwrites, parent_id, nsfw, archived,
   * auto_archive_duration, locked, invitable, default_auto_archive_duration, video_quality_mode,
   * rtc_region, and
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
   * It takes an object with properties id, type, allow, and deny, and returns an object with the same
   * properties, but with the id property being a string, the type property being a number, and the
   * allow and deny properties being strings
   * @param [p] - The overwrites object.
   * @returns The return is an object with the properties id, type, allow, and deny.
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
