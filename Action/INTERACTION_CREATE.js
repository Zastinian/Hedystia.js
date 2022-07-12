"use strict";

const CommandInteraction = require("../Structure/CommandInteraction");

module.exports.handle = (client, data) => {
  let interaction = null;
  switch (data.data.type) {
    case 1: {
      interaction = new CommandInteraction(client, data);
      break;
    }
  }

  if (interaction) client.emit("InteraccionCreada", interaction);
};
