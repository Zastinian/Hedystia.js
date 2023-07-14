const Base = require("../Base/base");
const ThreadMemberFlags = require("../Util/ThreadMemberFlags");
const Snowflake = require("../Util/Snowflake");

class ThreadMember extends Base {
  /**
   * "This function is used to create a new ThreadMember object, which is used to represent a member of
   * a thread."
   * @param [data] - The data that was received from the API.
   * @param guildId - The ID of the guild the thread is in.
   * @param threadId - The ID of the thread
   * @param client - Discord.Client
   */
  constructor(data = {}, guildId, threadId, client) {
    super(client);
    this.partial = data.partial ?? false;
    this.guildId = guildId;
    this.threadId = threadId;
    this.userId = data.user_id ?? data.userId ?? null;
    this.createdAt = this.userId ? Snowflake.deconstruct(this.userId).createdAt : null;
    this.createdTimestamp = this.createdAt?.getTime() ?? null;
    this.joinedAt = data.join_timestamp ? new Date(data.join_timestamp) : null;
    this.joinedTimestamp = this.joinedAt?.getTime() ?? null;
    this.flags = new ThreadMemberFlags(data.flags ? BigInt(data.flags) : 0n);
  }

  /**
   * It removes a user from a thread
   * @returns The thread member object.
   */
  async remove() {
    await this.client.api.delete(`${this.client.root}/channels/${this.threadId}/thread-members/${this.userId}`);
    return this;
  }

  /**
   * It returns the guild object of the guild ID that is stored in the database
   * @returns The guild object.
   */
  get guild() {
    return this.client.guilds._add(this.guildId);
  }

  /**
   * It returns the channel object of the thread.
   * @returns The thread channel.
   */
  get thread() {
    return this.client.channels._add(this.threadId);
  }

  /**
   * It returns the user object of the user who sent the message
   * @returns The user object.
   */
  get user() {
    return this.client.users._add(this.userId) ?? null;
  }
}

module.exports = ThreadMember;
