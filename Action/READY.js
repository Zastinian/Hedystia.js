"use strict";

const ClientUser = require("../Structure/ClientUser");

module.exports.handle = (client, { session_id, user }) => {
  client.user = new ClientUser(client, user);
  client.users.cache.set(client.user.id, client.user);
  client.api.sessionId = session_id;

  setTimeout(() => {
    client.emit("listo", client.user);
    client.ready = true;
  }, 5000).unref();
};
