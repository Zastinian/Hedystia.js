"use strict";

const MessageEmbed = require("../Structure/MessageEmbed");

class APIMessage extends null {
  static transform(data) {
    if (!data) throw new Error("Los datos no deben estar vacíos.");
    data.embeds?.map((embed) =>
      embed instanceof MessageEmbed ? embed.toJSON() : embed
    );
    data.content ??= "";
    data.tts ??= false;

    return data;
  }
}

module.exports = APIMessage;
