const Base = require("../Base/base")
const ThreadMemberFlags = require("../Util/ThreadMemberFlags")
const Snowflake = require("../Util/Snowflake")
class ThreadMember extends Base {
  constructor(data = {}, guildId, threadId, client) {
    super(client)
    this.partial = data.partial ?? false
    this.guildId = guildId
    this.threadId = threadId
    this.userId = data.user_id ?? data.userId ?? null
    this.createdAt = this.userId ? Snowflake.deconstruct(this.userId).createdAt : null
    this.createdTimestamp = this.createdAt?.getTime() ?? null
    this.joinedAt = data.join_timestamp ? new Date(data.join_timestamp) : null
    this.joinedTimestamp = this.joinedAt?.getTime() ?? null
    this.flags = new ThreadMemberFlags(data.flags ? BigInt(data.flags) : 0n)
  }

  async remove() {
    await this.client.api.delete(
      `${this.client.root}/channels/${this.threadId}/thread-members/${this.userId}`
    )
    return this
  }

  get guild() {
    return this.client.guilds._add(this.guildId)
  }

  get thread() {
    return this.client.channels._add(this.threadId)
  }

  get user() {
    return this.client.users._add(this.userId) ?? null
  }
}

module.exports = ThreadMember
