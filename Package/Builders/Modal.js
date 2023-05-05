/**
 * A modal message with components.
 * @class
 */
class Modal {
  /**
   * @param {Object} data - The data for the modal message.
   * @param {string} data.title - The title of the modal.
   * @param {string} data.custom_id - The custom ID of the modal.
   */
  constructor({title, custom_id}) {
    this.title = title ?? undefined;
    this.custom_id = custom_id ?? undefined;
  }

  /**
   * Adds one or more components to the modal.
   * @param {...Object[]} components - The components to add.
   * @returns {Modal} This modal instance.
   */
  async addComponents(...components) {
    this.components = [];
    components.map((data) => {
      data.map((component) => {
        const com = JSON.stringify(component);
        const dat = `${com}`.replaceAll("Action_Row", 1);
        const fin = JSON.parse(dat);
        this.components.push(fin);
      });
    });
    return this;
  }

  /**
   * Returns a JSON representation of the modal.
   * @returns {Object} The JSON representation of the modal.
   */
  toJSON() {
    return {
      title: this.title,
      custom_id: this.custom_id,
      components: this.components,
    };
  }
}

module.exports = Modal;
