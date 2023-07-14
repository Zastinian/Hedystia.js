const MessageAttachment = require("../Builders/MessageAttachment");
const {Colors} = require("./Constants");
const fs = require("fs");

/**
 * Utility class with various helper functions.
 * @class
 */
class Util {
  /**
   * Generates a Discord timestamp string based on the given time and style.
   * @param {number} time - The Unix timestamp to format.
   * @param {string} style - The style of the timestamp. Valid values are "t" (short time), "T" (long time), "d" (short date), "D" (long date), "f" (short date/time), "F" (long date/time), "R" (relative time), "r" (relative time with seconds), "c" (calendar time), "C" (calendar time with seconds).
   * @returns {string} - The formatted Discord timestamp string.
   */
  static generateDiscordTimestamp(time, style) {
    return `<t:${time}:${style}>`;
  }

  /**
   * Resolves a color value to its corresponding integer representation.
   * @param {string | number} color - The color value to resolve. Can be a string representing a color name or a hexadecimal color code, or a number representing a color value.
   * @returns {number} - The resolved color value as an integer.
   */
  static resolveColor(color) {
    if (typeof color === "string") {
      color = Colors[color] ?? color.replace("#", "");
      return parseInt(color, 16);
    }

    return color;
  }

  /**
   * Retrieves the buffer data from the given file.
   * @param {Buffer | MessageAttachment | string} file - The file to retrieve the buffer data from.
   * @returns {Promise<Buffer>} - The buffer data of the file.
   */
  static async getBuffer(file) {
    if (file instanceof Buffer) return file;
    if (file instanceof MessageAttachment) return this.getBuffer(file.buffer ?? file.url ?? file.proxyURL);
    if (/^(\.(\.)?)/gi.test(file)) return fs.readFileSync(file);
    if (typeof file === "string") return await (await fetch(file)).buffer();
  }

  /**
   * Generates a data URI from a base64 string or a Buffer object.
   * @param {string | Buffer} base64 - The base64 string or Buffer object.
   * @returns {string | undefined} - The data URI string or undefined if base64 is falsy.
   */
  static async generateDataURI(base64) {
    if (!base64) return;
    if (typeof base64 === "string") {
      if (base64.startsWith("data")) return base64;
    }
    if (!(base64 instanceof Buffer)) base64 = await this.getBuffer(base64);
    return `data:image/png;base64,${base64.toString("base64")}`;
  }

  /**
   * Generates a file with the given buffer and filename.
   * @param {Buffer | string} buffer - The buffer or path to the file content.
   * @param {string} [filename] - The name of the file to be generated. If not provided, "file.txt" will be used as the default filename.
   * @returns None
   */
  static async generateFile(buffer, filename) {
    if (!(buffer instanceof Buffer)) buffer = await this.getBuffer(buffer);
    return fs.writeFileSync(filename ?? "file.txt", buffer);
  }

  /**
   * Converts a base64 encoded string to a buffer.
   * @param {string} base64 - The base64 encoded string.
   * @returns {Buffer} - The buffer representation of the base64 string.
   */
  static base64ToBuffer(base64) {
    base64 = Buffer.from(base64, "base64");
    return base64;
  }

  /**
   * Generates an ISO string representation of the given date.
   * @param {number | Date} [date=Date.now()] - The date to convert to an ISO string. If not provided, the current date and time will be used.
   * @returns {string | null} - The ISO string representation of the date, or null if the input is null.
   */
  static generateISOString(date = Date.now()) {
    if (date === null) return null;
    if (date instanceof Date) return date.toISOString();
    return new Date(date).toISOString();
  }
}

module.exports = Util;
