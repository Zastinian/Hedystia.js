/* The Row class is a class that creates a row object with a type of 1 and a components property that
is an array of component objects. */
class Row {
  /**
   * It takes an object with a property called components, and returns an object with a property called
   * components.
   * @param [data] - The data that is passed to the constructor.
   * @returns The row object.
   */
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
