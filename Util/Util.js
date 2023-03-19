const MessageAttachment = require("../Builders/MessageAttachment");
const {Colors} = require("./Constants");
const fs = require("fs");

/**
 * It's a class that contains static methods that are used to generate Discord timestamps, resolve
colors, get buffers, generate data URIs, generate files, convert base64 to buffers, and generate ISO
strings.
 * @module Util
 */
class Util {
  static generateDiscordTimestamp(time, style) {
    return `<t:${time}:${style}>`;
  }

  static resolveColor(color) {
    if (typeof color === "string") {
      color = Colors[color] ?? color.replace("#", "");
      return parseInt(color, 16);
    }

    return color;
  }

  static async getBuffer(file) {
    if (file instanceof Buffer) return file;
    if (file instanceof MessageAttachment) return this.getBuffer(file.buffer ?? file.url ?? file.proxyURL);
    if (/^(\.(\.)?)/gi.test(file)) return fs.readFileSync(file);
    if (typeof file === "string") return await (await fetch(file)).buffer();
  }

  static async generateDataURI(base64) {
    if (!base64) return;
    if (typeof base64 === "string") {
      if (base64.startsWith("data")) return base64;
    }
    if (!(base64 instanceof Buffer)) base64 = await this.getBuffer(base64);
    return `data:image/png;base64,${base64.toString("base64")}`;
  }

  static async generateFile(buffer, filename) {
    if (!(buffer instanceof Buffer)) buffer = await this.getBuffer(buffer);
    return fs.writeFileSync(filename ?? "file.txt", buffer);
  }

  static base64ToBuffer(base64) {
    base64 = Buffer.from(base64, "base64");
    return base64;
  }

  static generateISOString(date = Date.now()) {
    if (date === null) return null;
    if (date instanceof Date) return date.toISOString();
    return new Date(date).toISOString();
  }
}

module.exports = Util;
