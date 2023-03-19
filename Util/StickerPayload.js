const DataManager = require("./DataManager");

/**
 * It's a class that creates a payload for the VK API.
 * @module StickerPayload
 */
class StickerPayload {
  static async create(payload = {}) {
    const data = this.resolveData(payload);
    if (payload.file) {
      const file = await DataManager.resolveFile(payload.file);
      const formData = {};

      for (let [key, val] of Object.entries(data)) {
        formData[key] = JSON.stringify(val);
      }

      formData.file = {
        value: file.file || file,
        options: {
          filename: file.filename || "index.png",
        },
      };

      return formData;
    }

    return data;
  }

  static resolveData(data = {}) {
    if (data.name?.length > 30 || data.name?.length < 2) throw new RangeError(`The name on the sticker should be between 2 and 30`);
    if (data.description?.length > 100 || data.description?.length < 2)
      throw new RangeError(`The description of the sticker must be between 2 and 100`);
    if (data.tags?.length > 200) throw new RangeError(`The length of sticker labels must be less than or equal to 200`);
    return {
      name: data.name ?? undefined,
      description: data.description ?? undefined,
      tags: data.tags ?? undefined,
    };
  }
}

module.exports = StickerPayload;
