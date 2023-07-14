const MessageAttachment = require("../Builders/MessageAttachment");
const path = require("path");
const fs = require("fs");

/**
 * A utility class for managing data.
 * @class
 */
class DataManager {
  /**
   * Resolves a file to be used in a function or operation.
   * @param {Buffer | MessageAttachment | { filename: string, file: string }} file - The file to resolve.
   * @returns {Promise<Buffer | null>} - A promise that resolves to the resolved file as a Buffer, or null if the file cannot be resolved.
   */
  static async resolveFile(file) {
    if (file instanceof Buffer) return file;
    if (file instanceof MessageAttachment)
      return await this.resolveFile({
        filename: file.filename,
        file: file.file ?? file.url,
      });
    const theFile = file.file;
    if (/^(\.(\.)?)/g.test(theFile)) {
      file = {
        filename: file.filename ?? path.basename(theFile),
        file: fs.readFileSync(theFile),
      };
    }
    if (/^(http(s)?)/gi.test(theFile)) {
      const resource = await fetch(theFile);
      file = {
        filename: file.filename ?? resource.url.slice(resource.url.lastIndexOf("/") + 1),
        file: await resource.buffer(),
      };
    }

    return file ?? null;
  }
}

module.exports = DataManager;
