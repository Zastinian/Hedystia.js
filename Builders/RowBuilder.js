class Row {
  constructor(data = {}) {
    this.components = data.components;
    let row = {
      type: 1,
      components: this.components,
    };
    return row;
  }
}

module.exports = Row;
