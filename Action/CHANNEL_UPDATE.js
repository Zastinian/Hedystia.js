"use strict";

const TextChannel = require("../Structure/TextChannel");

module.exports.handle = (client, data) => {
  switch (data.type) {
    case 0: {
      const oldChannel = client.channels.cache.get(data.id);
      let channel = null;
      if (oldChannel) {
        channel = oldChannel._update(data, oldChannel.guild);
      } else {
        channel = new TextChannel(
          client,
          data,
          client.guilds.caches.get(data.guild_id)
        );
      }
      client.emit("CanalActualizado", oldChannel, channel);
      break;
    }
  }
};
