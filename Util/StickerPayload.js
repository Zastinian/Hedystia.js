const FormData = require("form-data");
const DataManager = require("./DataManager");
class StickerPayload {
  static async create(payload = {}) {
    const data = this.resolveData(payload);
    if (payload.file) {
      const file = await DataManager.resolveFile(payload.file);
      const form = new FormData();
      for (let [key, val] of Object.entries(data)) {
        form.append(key, val, {
          contentType: "application/json",
        });
      }

      form.append("file", file.file ?? file, {
        filename: file.filename ?? "index.png",
      });

      return form;
    }

    return data;
  }

  static resolveData(data = {}) {
    if (data.name?.length > 30 || data.name?.length < 2)
      throw new RangeError(
        `El nombre de la pegatina debe tener una longitud de entre 2 y 30`
      );
    if (data.description?.length > 100 || data.description?.length < 2)
      throw new RangeError(
        `La descripción de la pegatina debe tener una longitud de entre 2 y 100`
      );
    if (data.tags?.length > 200)
      throw new RangeError(
        `La longitud de las etiquetas de las pegatinas debe ser igual o inferior a 200`
      );
    return {
      name: data.name ?? undefined,
      description: data.description ?? undefined,
      tags: data.tags ?? undefined,
    };
  }
}

module.exports = StickerPayload;
