const PresenceManager = require("../Managers/PresenceManager");
const ScheduledEventManager = require("../Managers/ScheduledEventManager");
const StageInstanceManager = require("../Managers/StageInstanceManager");
const StickerManager = require("../Managers/StickerManager");
const BaseThreadManager = require("../Managers/BaseThreadManager");
const VoiceStateManager = require("../Managers/VoiceStateManager");
class BaseAction {
  constructor(client) {
    Object.defineProperties(this, {
      client: {
        value: client,
      },
    });
  }

  cacheUsers(users) {
    for (const member of users.members) {
      this.client.users._add(member.user, {force: true, cache: true});
    }

    return;
  }

  cacheVoices(guild) {
    const guildId = guild.id;
    const manager = new VoiceStateManager(this.client);
    for (let voiceStates of guild.voice_states) {
      manager._add(voiceStates, guildId);
    }
  }

  cacheStickers(guild) {
    const guildId = guild.id;
    const Stickers = new StickerManager(this.client);
    for (let stickers of guild.stickers) {
      Stickers._add(stickers, guildId);
    }
  }

  cacheMembers(guild) {
    const guildId = guild.id;
    for (let members of guild.members) {
      this.client.guilds._add(guildId)?.members._add(members, guildId);
    }
  }

  cachePresences(guild) {
    const presence = new PresenceManager(this.client);
    for (let presences of guild.presences) {
      presence._add(presences);
    }
  }

  cacheEvents(guild) {
    const guildId = guild.id;
    const event = new ScheduledEventManager(this.client);
    for (let events of guild.guild_scheduled_events) {
      event._add(events, guildId);
    }
  }

  cacheStageInstances(guild) {
    const guildId = guild.id;
    const stageInstances = new StageInstanceManager(this.client);
    for (let stages of guild.stage_instances) {
      stageInstances._add(stages, guildId);
    }
  }

  cacheRoles(guild) {
    const guildId = guild.id;
    for (let roles of guild.roles) {
      this.client.roles._add(roles, guildId);
    }
  }

  cacheEmojis(guild) {
    const guildId = guild.id;
    const emojiManager = this.client.emojis;
    for (let emojis of guild.emojis) {
      emojiManager._add(emojis, guildId);
    }
  }

  cacheGuilds(guilds) {
    return this.client.guilds._add(guilds);
  }

  cacheChannels(guild) {
    const guildId = guild.id;
    for (let channel of guild.channels) {
      this.client.channels._add(channel, guildId);
    }
  }

  cacheThreads(guild) {
    const guildId = guild.id;
    const thread = new BaseThreadManager(this.client);
    for (let threads of guild.threads) {
      this.client.channels._add(threads, guildId);
      thread._add(threads, guildId);
    }
  }

  async cacheDm(channel, guildId) {
    channel = await this.client.api.get(`${this.client.root}/channels/${channel}`);
    return this.client.channels._add(channel, guildId);
  }
}

module.exports = BaseAction;
