"use strict";

const Message = require("../Structure/Message");

module.exports.handle = (client, data) => {
  const message = new Message(client, data);
  client.emit("MensajeCreado", message);
};
