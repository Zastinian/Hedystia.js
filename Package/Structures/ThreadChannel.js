const ThreadMemberManager = require("../Managers/ThreadMemberManager");
const TextBasedChannels = require("./Interface/TextBasedChannels");
/**
 * Represents a thread channel in Discord.
 * @class
 * @extends TextBasedChannels
 */
class ThreadChannel extends TextBasedChannels {
  /**
   * Constructs a new instance of the ThreadChannel class.
   * @constructor
   * @param {Object} [data] - The data object containing information about the thread channel.
   * @param {string} guildId - The ID of the guild that the thread channel belongs to.
   * @param {Client} client - The client instance.
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
   * Asynchronously joins all members of a group.
   * @returns {Promise<Group>} A promise that resolves to the joined group.
   */
  async join() {
    await this.members.join();
    return this;
  }

  /**
   * Adds a member to the collection asynchronously.
   * @param {GuildMember} member - The member to add.
   * @returns {Promise} A promise that resolves when the member is added.
   */
  async add(member) {
    return await this.members.add(member);
  }

  /**
   * Removes a user from the members list.
   * @param {User} user - The user to remove.
   * @returns {Promise<void>} - A promise that resolves when the user is successfully removed.
   */
  async remove(user) {
    return await this.members.remove(user);
  }

  /**
   * Fetches the owner of the object.
   * @param {Object} options - Additional options for the fetch operation.
   * @returns {Promise<Object|null>} - A promise that resolves to the owner object if found, or null if the ownerId is not set.
   */
  async fetchOwner(options) {
    if (!this.ownerId) return null;
    return await this.members.fetch(this.ownerId, options);
  }

  /**
   * Sets the archived status and reason for an item.
   * @param {boolean} archived - The archived status to set.
   * @param {string} reason - The reason for archiving the item.
   * @returns {Promise} - A promise that resolves when the item is successfully edited.
   */
  async setArchived(archived, reason) {
    return await this.edit({archived, reason});
  }

  /**
   * Sets the locked status and reason for an item.
   * @param {boolean} locked - The locked status to set.
   * @param {string} reason - The reason for locking the item.
   * @returns {Promise} - A promise that resolves when the edit is complete.
   */
  async setLocked(locked, reason) {
    return await this.edit({locked, reason});
  }

  /**
   * Sets the auto archive duration for a specific item and provides a reason for the change.
   * @param {number} autoArchiveDuration - The new auto archive duration in seconds.
   * @param {string} reason - The reason for changing the auto archive duration.
   * @returns {Promise} - A promise that resolves when the operation is complete.
   */
  async setAutoArchiveDuration(autoArchiveDuration, reason) {
    return await this.edit({autoArchiveDuration, reason});
  }

  /**
   * Sets the invitable property and reason for the object.
   * @param {boolean} invitable - The new value for the invitable property.
   * @param {string} reason - The reason for the change.
   * @returns {Promise<void>} - A promise that resolves when the edit is complete.
   */
  async setInvitable(invitable, reason) {
    return await this.edit({invitable, reason});
  }

  /**
   * Sets the flags and reason for an object.
   * @param {any} flags - The flags to set.
   * @param {string} reason - The reason for setting the flags.
   * @returns {Promise<void>} - A promise that resolves when the flags are set.
   */
  async setFlags(flags, reason) {
    return await this.edit({flags, reason});
  }
}

module.exports = ThreadChannel;
