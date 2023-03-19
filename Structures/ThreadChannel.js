const ThreadMemberManager = require("../Managers/ThreadMemberManager");
const TextBasedChannels = require("./Interface/TextBasedChannels");
class ThreadChannel extends TextBasedChannels {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
    this.threadMetadata = data.thread_metadata
      ? {
          archived: data.thread_metadata.archived ?? null,
          autoArchiveDuration: data.thread_metadata.auto_archive_duration ?? null,
          archiveAt: new Date(data.thread_metadata.archive_timestamp),
          locked: data.thread_metadata.locked ?? null,
          invitable: data.thread_metadata.invitable ?? null,
          createdAt: new Date(data.thread_metadata.create_timestamp),
        }
      : null;
    this.memberCount = data.member_count ?? null;
    this.messageCount = data.message_count ?? null;
    this.ownerId = data.owner_id ?? null;
    this.members = new ThreadMemberManager(this.guildId, this.id, this.client);
    this.member = this.members._add(data.member, this.guildId, this.id, {
      cache: false,
    });
    this.new = data.newly_created ?? null;
  }

  async join() {
    await this.members.join();
    return this;
  }

  async add(member) {
    return await this.members.add(member);
  }

  async remove(user) {
    return await this.members.remove(user);
  }

  async fetchOwner(options) {
    if (!this.ownerId) return null;
    return await this.members.fetch(this.ownerId, options);
  }

  async setArchived(archived, reason) {
    return await this.edit({archived, reason});
  }

  async setLocked(locked, reason) {
    return await this.edit({locked, reason});
  }

  async setAutoArchiveDuration(autoArchiveDuration, reason) {
    return await this.edit({autoArchiveDuration, reason});
  }

  async setInvitable(invitable, reason) {
    return await this.edit({invitable, reason});
  }

  async setFlags(flags, reason) {
    return await this.edit({flags, reason});
  }
}

module.exports = ThreadChannel;
