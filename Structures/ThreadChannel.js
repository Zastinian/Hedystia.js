const ThreadMemberManager = require("../Managers/ThreadMemberManager");
const TextBasedChannels = require("./Interface/TextBasedChannels");
/**
 * It's a class that represents a Discord Thread Channel
 * @class
 * @extends TextBasedChannels
 */
class ThreadChannel extends TextBasedChannels {
  /**
   * "This function is used to create a new instance of the Thread class."
   * @param [data] - The data that is passed to the constructor.
   * @param guildId - The ID of the guild the channel is in.
   * @param client - Discord.Client
   */
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

  /**
   * It returns a promise that resolves to the current object
   * @returns The members array.
   */
  async join() {
    await this.members.join();
    return this;
  }

  /**
   * It adds a member to the members collection.
   * @param member - The member to add to the set.
   * @returns The return value is a Promise that resolves to the result of the add() method.
   */
  async add(member) {
    return await this.members.add(member);
  }

  /**
   * It removes a user from the members array.
   * @param user - The user to remove from the guild.
   * @returns The return value is the result of the remove method.
   */
  async remove(user) {
    return await this.members.remove(user);
  }

  /**
   * It fetches the owner of the guild
   * @param options - An object with the following properties:
   * @returns The owner of the guild.
   */
  async fetchOwner(options) {
    if (!this.ownerId) return null;
    return await this.members.fetch(this.ownerId, options);
  }

  /**
   * It edits the channel's archived property to the value of the archived parameter, and the reason
   * property to the value of the reason parameter
   * @param archived - Boolean - Whether the channel should be archived or not.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit function.
   */
  async setArchived(archived, reason) {
    return await this.edit({archived, reason});
  }

  /**
   * It sets the locked property of a channel to true or false
   * @param locked - Boolean - Whether the channel should be locked or not
   * @param reason - The reason for the lock.
   * @returns The return value of the edit method.
   */
  async setLocked(locked, reason) {
    return await this.edit({locked, reason});
  }

  /**
   * It sets the autoArchiveDuration of a channel
   * @param autoArchiveDuration - The duration in seconds after which the channel will be automatically
   * archived.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setAutoArchiveDuration(autoArchiveDuration, reason) {
    return await this.edit({autoArchiveDuration, reason});
  }

  /**
   * It sets the invitable property of the guild.
   * @param invitable - Boolean - Whether the role should be invitable or not.
   * @param reason - The reason for the change (0-1024 characters)
   * @returns The return value of the edit method.
   */
  async setInvitable(invitable, reason) {
    return await this.edit({invitable, reason});
  }

  /**
   * It sets the flags of a message
   * @param flags - The flags to set.
   * @param reason - The reason for the edit.
   * @returns The return value of the edit method.
   */
  async setFlags(flags, reason) {
    return await this.edit({flags, reason});
  }
}

module.exports = ThreadChannel;
