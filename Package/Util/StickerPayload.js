const DataManager = require("./DataManager");

/**
 * Represents a sticker payload.
 * @class
 */
class StickerPayload {
  /**
   * Creates a payload for an API request.
   * @param {Object} payload - The payload object.
   * @returns {Promise<Object>} - The created payload.
   */
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

  /**
   * Resolves the data object by validating and formatting its properties.
   * @param {Object} [data] - The data object to resolve.
   * @returns {Object} - The resolved data object with validated and formatted properties.
   * @throws {RangeError} - If the name property is not between 2 and 30 characters.
   * @throws {RangeError} - If the description property is not between 2 and 100 characters.
   * @throws {RangeError} - If the tags property is longer than 200 characters.
   */
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
