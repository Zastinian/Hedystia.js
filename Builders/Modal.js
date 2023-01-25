class Modal {
  constructor({title, custom_id}) {
    this.title = title ?? undefined;
    this.custom_id = custom_id ?? undefined;
  }

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

  toJSON() {
    return {
      title: this.title,
      custom_id: this.custom_id,
      components: this.components,
    };
  }
}

module.exports = Modal;
