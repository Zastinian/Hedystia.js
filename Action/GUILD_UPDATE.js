"use strict";

const Guild = require("../Structure/Guild");

module.exports.handle = (client, data) => {
  const oldGuild = client.guilds.cache.get(data.id);
  let newGuild = null;
  if (oldGuild) {
    newGuild = oldGuild._update(data);
  } else {
    newGuild = new Guild(client, data);
  }
  client.guilds.cache.set(data.id, newGuild);
  client.emit("ServidorActualizado", oldGuild, newGuild);
};
