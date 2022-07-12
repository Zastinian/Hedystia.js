"use strict";

module.exports.handle = (client, data) => {
  const guild = client.guilds.cache.get(data.id);

  if (client.ready) client.emit("BaneoAñadido", guild);
};
