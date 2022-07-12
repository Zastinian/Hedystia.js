"use strict";

const TextChannel = require("../Structure/TextChannel");

module.exports.handle = (client, data) => {
  switch (data.type) {
    case 0: {
      const channel = new TextChannel(
        client,
        data,
        client.guilds.cache.get(data.guild_id)
      );
      client.channels.cache.set(data.id, channel);
      client.emit("canalCreado", channel);
      break;
    }
  }
};
