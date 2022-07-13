const Channel = require("./Channel");
class CategoryChannel extends Channel {
  constructor(data = {}, guildId, client) {
    super(data, guildId, client);
  }

  get childrens() {
    return this.client.channels.cache.filter(
      (o) => (o.parent_id ?? o.parentId) === this.id
    );
  }

  get highest() {
    const channel = this.childrens.sort((a, b) => a.position - b.position);
    return channel.first();
  }
}

module.exports = CategoryChannel;
