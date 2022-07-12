"use strict";

const Guild = require("../Structure/Guild");

module.exports.handle = (client, data) => {
  const guild = new Guild(client, data);
  client.guilds.cache.set(guild.id, guild);
  if (client.ready) client.emit("ServidorCreado", guild);
};
