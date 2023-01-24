const ReactionUserManager = require("../Managers/ReactionUserManager")
const EmojiResolver = require("../Util/EmojiResolver")
const Base = require("../Base/base")
const Emoji = require("./Emoji")
class MessageReaction extends Base {
  constructor(data = {}, guildId, channelId, messageId, client) {
    super(client)
    this.partial = data.partial ?? false
    this.guildId = guildId
    this.channelId = channelId
    this.count = data.count ?? null
    this.me = data.me ?? null
    this.emoji = new Emoji(data.emoji, this.guildId, this.client)
    this.message = this.channel.messages._add(data.message_id ?? messageId)
    this.users = new ReactionUserManager(this, this.channelId, this.message?.id, this.emoji, this.client)
  }

  async fetch() {
    const message = await this.channel.messages.fetch(this.message)
    const reaction = message.reactions.cache.get(this.emoji?.id ?? this.emoji?.name)
    return reaction ?? null
  }

  async remove() {
    const emoji = EmojiResolver.transformEmoji(this.emoji, this.client)
    await this.client.api.delete(
      `${this.client.root}/channels/${this.channelId}/messages/${
        this.message?.id
      }/reactions/${encodeURIComponent(emoji)}`
    )
    return this
  }

  get channel() {
    return this.client.channels._add(this.channelId)
  }

  get guild() {
    return this.client.guilds._add(this.channelId)
  }

  _addUsers(user) {
    if (this.partial) return
    if (this.client.user.id === user.id) this.me = true
    this.count++
  }

  _removeUsers(user) {
    if (this.partial) return
    if (this.client.user.id === user.id) this.me = true
    this.count--
  }
}

module.exports = MessageReaction
