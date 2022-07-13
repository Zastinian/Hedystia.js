const MessageAttachment = require("../Builders/MessageAttachment");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const path = require("path");
const fs = require("fs");
class DataManager {
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
        filename:
          file.filename ??
          resource.url.slice(resource.url.lastIndexOf("/") + 1),
        file: await resource.buffer(),
      };
    }

    return file ?? null;
  }
}

module.exports = DataManager;
