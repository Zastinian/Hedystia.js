const BaseAction = require("./BaseAction");
class GuildEmojisUpdate extends BaseAction {
  constructor(data = {}, client) {
    super(client);

    this._patch(data);
  }

  _patch(data) {
    const packet = data.d;
    const deletedEmojis = new Map(this.client.emojis.cache);
    for (const emojis of packet.emojis) {
      const cachedEmoji = this.client.emojis.cache.get(emojis.id);
      if (cachedEmoji) {
        deletedEmojis.delete(emojis.id);
        if (!cachedEmoji.equals(emojis))
          this.client.emit(
            "emojiUpdate",
            this.client.emojis._add(emojis),
            this.client.emojis._add(emojis, packet.guild_id, {cache: true, force: true})
          );
      } else {
        if (!newEmojis.cache.has(emojis.id)) this.client.emit("emojiCreate", this.client.emojis._add(emojis, packet.guild_id));
      }
    }

    for (let emojis of deletedEmojis.values()) {
      this.client.emit("emojiDelete", this.client.emojis._add(emojis));
      this.client.emojis.cache.delete(emojis.id);
    }
  }
}

module.exports = GuildEmojisUpdate;
